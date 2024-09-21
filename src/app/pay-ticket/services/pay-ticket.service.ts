import { Injectable } from '@angular/core';
import { BaseService } from "../../shared/services/base.service";
import { HttpClient } from "@angular/common/http";
import { Bus } from "../model/bus.entity"

@Injectable({
  providedIn: 'root'
})
export class PayTicketService extends BaseService<Bus>{

  constructor(http: HttpClient) {
    super(http);
    this.resourceEndpoint = '/payment';
  }
}
