import { Injectable } from '@angular/core';
import { BaseService } from "../../shared/services/base.service";
import { HttpClient } from "@angular/common/http";
import { Promo } from "../model/promo.entity";

@Injectable({
  providedIn: 'root'
})
export class PromoService extends BaseService<Promo>{

  constructor(http: HttpClient) {
    super(http);
    this.resourceEndpoint = '/promos'
  }
}
