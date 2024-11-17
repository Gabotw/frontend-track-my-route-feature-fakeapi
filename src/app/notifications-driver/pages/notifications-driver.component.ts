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
import {MatIconModule} from "@angular/material/icon";
import {MatDialog} from "@angular/material/dialog";
import {
  AddNotificationDialogComponent
} from "../../promos-driver/components/add-notification-dialog/add-notification-dialog.component";

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
    MatIconModule,
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
  constructor(private notificationService: NotificationService,
              private dialog: MatDialog) {}
  ngOnInit() {
    this.notificationService.getAll().subscribe(
        (data: any) => {
          this.notifications = data;
          this.notifications = this.notifications.reverse();
        }
    )
  }

  deleteNotification(id: number) {
    this.notificationService.delete(id).subscribe(
        () => {
          this.notifications = this.notifications.filter((notification: any) => notification.id !== id);
        },
        (error) => {
            console.error("Error deleting notification", error);
        }
    )
  }

  addNotification() {
    const dialogRef = this.dialog.open(AddNotificationDialogComponent, {
      width: '400px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.notificationService.create(result).subscribe((newNotification) => {
          this.notifications = [newNotification, ...this.notifications];
        });
      }
    });
  }
}
