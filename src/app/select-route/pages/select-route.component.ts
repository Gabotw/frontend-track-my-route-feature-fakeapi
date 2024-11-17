import {Component, OnInit} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {environment} from "../../../environments/enviroment";
import {NgForOf, NgIf} from "@angular/common";


@Component({
  selector: 'app-select-route',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgIf,
    NgForOf,
    FormsModule
  ],
  templateUrl: './select-route.component.html',
  styleUrls: ['./select-route.component.css'],
})
export class SelectRouteComponent implements OnInit{
  routeForm: FormGroup;
  waypointForm: FormGroup;
  wayId?: number;
  submittedRoute = false;
  submittedWaypoint = false;
  routeDetails: any;
  enteredWayId: number | null = null;
  isEditingRoute = false;
  isRouteFormEnabled: boolean = false;
  editingWaypointId: number | null = null;
  map: google.maps.Map | undefined;
  directionsService: google.maps.DirectionsService;
  directionsRenderer: google.maps.DirectionsRenderer;


  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.directionsService = new google.maps.DirectionsService();
    this.directionsRenderer = new google.maps.DirectionsRenderer()

    this.routeForm = this.fb.group({
      startLatitude: ['', [Validators.required]],
      startLongitude: ['', [Validators.required]],
      endLatitude: ['', [Validators.required]],
      endLongitude: ['', [Validators.required]],
    });

    this.waypointForm = this.fb.group({
      wayId: [{ value: '', disabled: true }],
      latitude: ['', [Validators.required]],
      longitude: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
    // Inicializar el mapa cuando el componente se carga
    this.initializeMap();
  }

  // Método para inicializar el mapa
  initializeMap(): void {
    const mapElement = document.getElementById('map'); // Obtener el contenedor del mapa

    if (mapElement) {
      // Crear el mapa con coordenadas iniciales (puedes usar las coordenadas de tu elección)
      this.map = new google.maps.Map(mapElement, {
        center: { lat: -12.081, lng: -77.036 }, // Coordenadas de origen
        zoom: 13,
      });

      // Crear el servicio de direcciones
      this.directionsService = new google.maps.DirectionsService();
      this.directionsRenderer = new google.maps.DirectionsRenderer();
      this.directionsRenderer.setMap(this.map); // Asociar el renderizador al mapa

      // Definir la ruta con waypoints
      const route = {
        origin: { lat: -12.081, lng: -77.036 }, // Punto de origen
        destination: { lat: -12.077, lng: -77.095 }, // Punto de destino
        waypoints: [
          { location: { lat: -12.080, lng: -77.040 } }, // Primer waypoint
          { location: { lat: -12.078, lng: -77.055 } }  // Segundo waypoint
        ],
        travelMode: google.maps.TravelMode.DRIVING // Modo de transporte (puede ser DRIVING, WALKING, BICYCLING, TRANSIT)
      };

      // Solicitar la ruta y mostrarla en el mapa
      this.directionsService.route(route, (result: any, status: any) => {
        if (status === google.maps.DirectionsStatus.OK) {
          this.directionsRenderer.setDirections(result); // Mostrar la ruta en el mapa
        } else {
          alert('No se pudo obtener la ruta: ' + status);
        }
      });
    } else {
      console.error("No se pudo encontrar el contenedor del mapa");
    }
  }

  // Método para actualizar el mapa con la nueva ruta
  updateMapWithRoute(): void {
    if (this.routeDetails) {
      const origin = { lat: parseFloat(this.routeDetails.startLatitude), lng: parseFloat(this.routeDetails.startLongitude) };
      const destination = { lat: parseFloat(this.routeDetails.endLatitude), lng: parseFloat(this.routeDetails.endLongitude) };

      const waypoints = this.routeDetails.whereabout.map((wp: any) => ({
        location: { lat: parseFloat(wp.latitude), lng: parseFloat(wp.longitude) }
      }));

      const route = {
        origin,
        destination,
        waypoints,
        travelMode: google.maps.TravelMode.DRIVING,  // Modo de transporte (puede cambiar a WALKING, etc.)
      };

      // Solicitar la ruta y mostrarla en el mapa
      this.directionsService.route(route, (result: any, status: any) => {
        if (status === google.maps.DirectionsStatus.OK) {
          this.directionsRenderer.setDirections(result);  // Dibujar la ruta en el mapa
        } else {
          alert('No se pudo obtener la ruta: ' + status);
        }
      });
    }
  }

  // Método para habilitar los campos de edición
  toggleEditRoute() {
    this.isEditingRoute = !this.isEditingRoute;
    if (this.isEditingRoute) {
      this.routeForm.enable();  // Habilita todos los campos del formulario de ruta
    } else {
      this.routeForm.disable(); // Deshabilita todos los campos del formulario de ruta
    }
  }

  enableEditForm(waypointId: number) {
    this.editingWaypointId = waypointId;

    const waypoint = this.routeDetails?.whereabout.find((wp: { id: number }) => wp.id === waypointId);
    if (waypoint) {
      // Usamos setValue para asignar los valores a los controles del formulario
      this.waypointForm.setValue({
        wayId: waypoint.id,  // Esto debería ser un control en el formulario, si lo estás usando
        latitude: waypoint.latitude,
        longitude: waypoint.longitude
      });
    }
  }

  toggleRouteForm() {
    this.isRouteFormEnabled = !this.isRouteFormEnabled;  // Alterna el estado del formulario
  }

  reloadPage() {
    window.location.reload();  // Esto recarga la página
  }

  // Enviar datos de la ruta
  submitRoute() {
    const token = localStorage.getItem('token');
    if (this.routeForm.valid && token) {
      const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
      const url = `${environment.serverBasePath}/ways`; // Usando serverBasePath del entorno
      this.http.post(url, this.routeForm.value, { headers }).subscribe({
        next: (response: any) => {
          this.wayId = response.id; // Guardar ID de la ruta creada
          this.waypointForm.patchValue({ wayId: this.wayId }); // Llenar automáticamente el formulario de paraderos
          alert('Ruta creada con éxito.');
          this.submittedRoute = true; // Permitir enviar paraderos
        },
        error: (err) => alert('Error al crear la ruta: ' + err.message),
      });
    } else {
      alert('Formulario inválido o token no disponible.');
    }
  }

  // Enviar datos del paradero
  submitWaypoint() {
    const token = localStorage.getItem('token');
    if (this.waypointForm.valid && token) {
      const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
      const url = `${environment.serverBasePath}/whereabouts`; // Usando serverBasePath del entorno
      const waypointData = {
        ...this.waypointForm.getRawValue(), // Obtener valores, incluyendo el campo deshabilitado
        wayId: this.wayId, // Asegurar que se use el ID de la ruta creada
      };
      this.http.post(url, waypointData, { headers }).subscribe({
        next: () => {
          alert('Paradero agregado con éxito.');
          this.submittedWaypoint = true;
          this.waypointForm.reset({ wayId: this.wayId }); // Limpiar formulario excepto el wayId
        },
        error: (err) => alert('Error al agregar el paradero: ' + err.message),
      });
    } else {
      alert('Formulario inválido o token no disponible.');
    }
  }

  // Obtener detalles de una ruta por su ID (usando ID ingresado por el usuario)
  getRouteDetails() {
    const token = localStorage.getItem('token');
    if (this.enteredWayId !== null && token) {
      const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
      const url = `${environment.serverBasePath}/ways/${this.enteredWayId}`;
      this.http.get(url, { headers }).subscribe({
        next: (response: any) => {
          this.routeDetails = response; // Guardar los detalles de la ruta
          alert('Detalles de la ruta obtenidos con éxito.');
          // Llamar a displayRouteOnMap con los detalles obtenidos
          this.updateMapWithRoute();
        },
        error: (err) => alert('Error al obtener detalles de la ruta: ' + err.message),
      });
    } else {
      alert('Por favor, ingresa un ID válido o asegúrate de que el token esté disponible.');
    }
  }


  // Eliminar una ruta por su ID (y sus paraderos asociados)
  deleteRoute() {
    const token = localStorage.getItem('token');
    if (this.routeDetails && this.routeDetails.id && token) {
      const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
      const url = `${environment.serverBasePath}/ways/${this.routeDetails.id}`;
      this.http.delete(url, { headers }).subscribe({
        next: () => {
          alert('Ruta eliminada con éxito.');
          this.routeDetails = null; // Limpiar los detalles de la ruta
        },
        error: (err) => {
          // Si hay un error, puede ser porque existen paraderos asociados
          if (err.status === 400 && err.error.message === 'Ruta tiene paraderos asociados') {
            alert('No se puede eliminar la ruta. Elimine primero los paraderos.');
          } else {
            alert('Error al eliminar la ruta: ' + err.message);
          }
        },
      });
    } else {
      alert('Por favor, asegúrate de que la ruta esté cargada y el token esté disponible.');
    }
  }

  // Eliminar un paradero específico por su ID
  deleteWaypoint(waypointId: number) {
    const token = localStorage.getItem('token');
    if (waypointId && token) {
      const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
      const url = `${environment.serverBasePath}/whereabouts/${waypointId}`;
      this.http.delete(url, { headers }).subscribe({
        next: () => {
          alert('Paradero eliminado con éxito.');
          // Actualizar los detalles de la ruta después de eliminar el paradero
          this.getRouteDetails();
        },
        error: (err) => alert('Error al eliminar el paradero: ' + err.message),
      });
    } else {
      alert('No se pudo eliminar el paradero. Asegúrate de que el token esté disponible.');
    }
  }

  editRoute() {
    if (this.routeDetails) {
      // Enviar la solicitud PUT para editar la ruta
      const token = localStorage.getItem('token');
      if (this.routeForm.valid && token) {
        const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
        const url = `${environment.serverBasePath}/ways/${this.routeDetails.id}`; // Usamos el ID de la ruta para actualizarla
        const updatedRoute = this.routeForm.value; // Obtener los valores del formulario de ruta

        this.http.put(url, updatedRoute, { headers }).subscribe({
          next: () => {
            alert('Ruta actualizada con éxito');
            this.getRouteDetails(); // Obtener los detalles actualizados de la ruta
            this.toggleEditRoute();
          },
          error: (err) => {
            alert('Error al actualizar la ruta: ' + err.message);
          }
        });
      } else {
        alert('Formulario inválido o token no disponible.');
      }
    }
  }

  editWaypoint(waypointId: number) {
    const waypoint = this.routeDetails?.whereabout.find((wp: { id: number; }) => wp.id === waypointId);

    if (waypoint) {
      // Enviar la solicitud PUT para editar el paradero
      const token = localStorage.getItem('token');
      if (this.waypointForm.valid && token) {
        const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
        const url = `${environment.serverBasePath}/whereabouts/${waypointId}`; // Usamos el ID del paradero para actualizarlo

        // Crear el objeto con las claves correctas que espera el backend
        const updatedWaypoint = {
          Latitude: this.waypointForm.value.latitude,
          Longitude: this.waypointForm.value.longitude
        };

        this.http.put(url, updatedWaypoint, { headers }).subscribe({
          next: () => {
            alert('Paradero actualizado con éxito');
            this.getRouteDetails(); // Obtener los detalles actualizados de la ruta
          },
          error: (err) => {
            alert('Error al actualizar el paradero: ' + err.message);
          }
        });
      } else {
        alert('Formulario inválido o token no disponible.');
      }
    }
  }
}