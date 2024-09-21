import { Component } from '@angular/core';
import { map, Observable } from 'rxjs';
import {
  GoogleMap,
  MapDirectionsRenderer,
  MapDirectionsService,
  MapHeatmapLayer,
  MapTrafficLayer
} from '@angular/google-maps';
import { MatFormField } from '@angular/material/form-field';
import { MatButtonToggle } from '@angular/material/button-toggle';
import { AsyncPipe } from '@angular/common';
import { MatLabel } from '@angular/material/form-field';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatInput } from '@angular/material/input';
import {MatRadioButton, MatRadioChange, MatRadioGroup} from "@angular/material/radio";

@Component({
  selector: 'app-search-routes',
  standalone: true,
  imports: [
    GoogleMap,
    MapDirectionsRenderer,
    MapHeatmapLayer,
    MapTrafficLayer,
    MatFormField,
    MatButtonToggle,
    AsyncPipe,
    MatLabel,
    ReactiveFormsModule,
    MatInput,
    MatRadioGroup,
    FormsModule,
    MatRadioButton
  ],
  templateUrl: './search-routes.component.html',
  styleUrls: ['./search-routes.component.css']
})
export class SearchRoutesComponent {
  textOrigen = 'Ingrese Origen';
  textDestino = 'Ingrese Destino';

  params: any = {
    componentRestrictions: { country: 'IN' }
  };

  options: google.maps.MapOptions = {
    mapId: 'DEMO_MAP_ID',
    center: { lat: -12.0768506, lng: -77.0960512 },
    zoom: 15
  };

  directionsResults$: Observable<google.maps.DirectionsResult | undefined>;
  selectedCoordinates: any;

  constructor(private mapDirectionsService: MapDirectionsService) {

    const bus01Request: google.maps.DirectionsRequest = {
      origin: { lat: -12.081, lng: -77.036 },
      destination: { lat: -12.077, lng: -77.095 },
      waypoints: [
        { location: { lat: -12.080, lng: -77.040 } },
        { location: { lat: -12.078, lng: -77.055 } }
      ],
      travelMode: google.maps.TravelMode.DRIVING
    };

    this.directionsResults$ = this.mapDirectionsService.route(bus01Request).pipe(map(response => response.result));
  }

  ngOnInit(): void {}

  onChangeCoordinates(event: MatRadioChange) {
    let request: google.maps.DirectionsRequest;

    switch (event.value) {
      case "ruta01":
        request = {
          origin: { lat: -12.081, lng: -77.036 },
          destination: { lat: -12.077, lng: -77.095 },
          waypoints: [
            { location: { lat: -12.080, lng: -77.040 } },
            { location: { lat: -12.078, lng: -77.055 } }
          ],
          travelMode: google.maps.TravelMode.DRIVING
        };
        this.directionsResults$ = this.mapDirectionsService.route(request).pipe(map(response => response.result));
        break;
      case "ruta02":
        request = {
          origin: { lat: -12.070, lng: -77.030 },
          destination: { lat: -12.075, lng: -77.090 },
          waypoints: [
            { location: { lat: -12.073, lng: -77.035 } },
            { location: { lat: -12.072, lng: -77.050 } }
          ],
          travelMode: google.maps.TravelMode.DRIVING
        };
        this.directionsResults$ = this.mapDirectionsService.route(request).pipe(map(response => response.result));
        break;
      case "ruta03":
        request = {
          origin: { lat: -12.065, lng: -77.025 },
          destination: { lat: -12.080, lng: -77.100 },
          waypoints: [
            { location: { lat: -12.068, lng: -77.030 } },
            { location: { lat: -12.072, lng: -77.060 } }
          ],
          travelMode: google.maps.TravelMode.DRIVING
        };
        this.directionsResults$ = this.mapDirectionsService.route(request).pipe(map(response => response.result));
        break;
      default:
        request = {
          origin: { lat: -12.081, lng: -77.036 },
          destination: { lat: -12.077, lng: -77.095 },
          waypoints: [
            { location: { lat: -12.080, lng: -77.040 } },
            { location: { lat: -12.078, lng: -77.055 } }
          ],
          travelMode: google.maps.TravelMode.DRIVING
        };
        this.directionsResults$ = this.mapDirectionsService.route(request).pipe(map(response => response.result));
        break;
    }
  }
}