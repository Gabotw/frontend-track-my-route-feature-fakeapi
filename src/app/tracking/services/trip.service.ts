import { Injectable } from '@angular/core';
import { BaseService } from "../../shared/services/base.service";
import { HttpClient } from "@angular/common/http";
import {Trip} from "../models/trip.entity";

@Injectable({
  providedIn: 'root'
})
export class TripService extends BaseService<Trip>{

  constructor(http: HttpClient) {
    super(http);
    this.resourceEndpoint = '/trips'
  }
}
