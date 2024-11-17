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
import {NotificationService} from "../../notifications/services/notification.service";

@Component({
  selector: 'app-notifications-driver',
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
  templateUrl: './notifications-driver.component.html',
  styleUrl: './notifications-driver.component.css'
})
export class NotificationsDriverComponent implements OnInit{
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
