import {Component, OnInit} from '@angular/core';
import {
  MatCard, MatCardActions,
  MatCardContent,
  MatCardHeader, MatCardImage, MatCardLgImage, MatCardMdImage,
  MatCardSubtitle,
  MatCardTitle,
  MatCardTitleGroup
} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {NgForOf, NgIf} from "@angular/common";
import {NotificationService} from "../services/notification.service";

@Component({
  selector: 'app-notifications',
  standalone: true,
  imports: [
    MatCard,
    MatCardHeader,
    MatCardTitleGroup,
    MatCardContent,
    MatCardSubtitle,
    MatCardTitle,
    MatCardMdImage,
    MatCardLgImage,
    MatButtonModule,
    NgForOf,
    MatCardActions,
    MatCardImage,
    NgIf
  ],
  templateUrl: './notifications.component.html',
  styleUrl: './notifications.component.css'
})
export class NotificationsComponent implements OnInit{
  notifications: any;
  constructor(private notificationService: NotificationService) {}
  ngOnInit() {
    this.notificationService.getAll().subscribe(
        (data: any) => {
          this.notifications = data;
        }
    )
  }
}
