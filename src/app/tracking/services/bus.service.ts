import { Injectable } from '@angular/core';
import { BaseService } from "../../shared/services/base.service";
import { HttpClient } from "@angular/common/http";
import { Bus } from "../models/bus.entity"

@Injectable({
  providedIn: 'root'
})
export class BusService extends BaseService<Bus>{

  constructor(http: HttpClient) {
    super(http);
    this.resourceEndpoint = '/buses';
  }
}
