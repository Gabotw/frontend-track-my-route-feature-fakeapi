import { Injectable } from '@angular/core';
import { BaseService } from "../../shared/services/base.service";
import { HttpClient } from "@angular/common/http";
import { Notification }  from "../models/notification.entity"

@Injectable({
  providedIn: 'root'
})
export class NotificationService extends BaseService<Notification>{

  constructor(http: HttpClient) {
    super(http);
    this.resourceEndpoint = '/notifications'
  }
}
