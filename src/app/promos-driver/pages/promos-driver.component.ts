import {Component, OnInit} from '@angular/core';
import {MatCard, MatCardActions, MatCardContent, MatCardImage} from "@angular/material/card";
import {MatButton} from "@angular/material/button";
import {NgForOf, NgIf} from "@angular/common";
import {PromoService} from "../../promos/services/promo.service";
import {MatDialog} from "@angular/material/dialog";
import {AddPromoDialogComponent} from "../components/add-promo-dialog/add-promo-dialog.component";
import {MatIcon} from "@angular/material/icon";

@Component({
  selector: 'app-promos-driver',
  standalone: true,
  imports: [
    MatCard,
    MatCardImage,
    MatCardContent,
    MatCardActions,
    MatButton,
    NgForOf,
    NgIf,
    MatIcon
  ],
  templateUrl: './promos-driver.component.html',
  styleUrl: './promos-driver.component.css'
})
export class PromosDriverComponent implements OnInit{
  promos: any;
  newPromo: any;
  constructor(private promoService: PromoService,
              private dialog: MatDialog) {}
  ngOnInit() {
    this.promoService.getAll().subscribe(
        (data: any) => {
          this.promos = data;
          this.promos = this.promos.reverse();
        }
    )
  }

  deletePromo(id: number) {
    this.promoService.delete(id).subscribe(
        () => {
          this.promos = this.promos.filter((promo: any) => promo.id !== id);
        },
        (error) => {
          console.error("Error deleting promotion", error);
        }
    )
  }

  addPromo() {
    const dialogRef = this.dialog.open(AddPromoDialogComponent, {
      width: '400px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.promoService.create(result).subscribe((newPromo) => {

          this.promos = [newPromo, ...this.promos];
        });
      }
    });
  }
}
