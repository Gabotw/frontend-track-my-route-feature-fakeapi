import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {environment} from "../../../environments/enviroment";
import {FormsModule} from "@angular/forms";
import {NgIf} from "@angular/common";


@Component({
  selector: 'app-search-routes',
  standalone: true,
  imports: [
    FormsModule,
    NgIf
  ],
  templateUrl: './search-routes.component.html',
  styleUrls: ['./search-routes.component.css']
})
export class SearchRoutesComponent implements OnInit {
  options: google.maps.MapOptions = {
    center: { lat: -12.0768506, lng: -77.0960512 },
    zoom: 15
  };

  map: google.maps.Map;
  directionsService: google.maps.DirectionsService;
  directionsRenderer: google.maps.DirectionsRenderer;

  routeId: number;  // Variable para almacenar el ID de la ruta ingresado
  loading: boolean = false;  // Indicador para mostrar que la carga está en proceso

  constructor(private http: HttpClient) {
    // Inicializar las propiedades aquí
    this.map = {} as google.maps.Map;
    this.directionsService = {} as google.maps.DirectionsService;
    this.directionsRenderer = {} as google.maps.DirectionsRenderer;
    this.routeId = 0;
  }

  ngOnInit() {
    this.initializeMap();
  }

  // Inicializa el mapa de Google
  initializeMap() {
    this.map = new google.maps.Map(document.getElementById('map') as HTMLElement, this.options);
    this.directionsService = new google.maps.DirectionsService();
    this.directionsRenderer = new google.maps.DirectionsRenderer();
    this.directionsRenderer.setMap(this.map);
  }

  // Método para calcular la ruta usando los datos obtenidos
  calculateRoute(routeData: any) {
    const waypoints = routeData.whereabout.map((wp: any) => ({
      location: new google.maps.LatLng(wp.latitude, wp.longitude),
      stopover: true
    }));

    const request: google.maps.DirectionsRequest = {
      origin: new google.maps.LatLng(routeData.startLatitude, routeData.startLongitude),
      destination: new google.maps.LatLng(routeData.endLatitude, routeData.endLongitude),
      waypoints: waypoints,
      travelMode: google.maps.TravelMode.DRIVING
    };

    this.directionsService.route(request, (response, status) => {
      if (status === google.maps.DirectionsStatus.OK) {
        this.directionsRenderer.setDirections(response);
      } else {
        console.error('Error al calcular la ruta:', status);
      }
    });
  }

  // Método que se llama cuando el usuario envía el formulario con el ID
  loadRoute() {
    this.getRouteById(this.routeId);  // Llama al método con el ID dinámico
  }

  // Método para obtener la ruta por ID dinámico
  getRouteById(id: number) {
    if (!id) {
      console.error('ID de ruta no válido');
      return;
    }

    const token = localStorage.getItem('token');  // Obtén el token del localStorage
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);  // Añadir token al encabezado

    this.loading = true;  // Activa el indicador de carga

    this.http.get(`${environment.serverBasePath}/ways/${id}`, { headers }).subscribe(
        (response: any) => {
          console.log('Ruta obtenida:', response);
          this.calculateRoute(response);  // Calcula y muestra la ruta
          this.loading = false;  // Desactiva el indicador de carga
        },
        (error) => {
          console.error('Error al obtener la ruta:', error);
          this.loading = false;  // Desactiva el indicador de carga
        }
    );
  }
}