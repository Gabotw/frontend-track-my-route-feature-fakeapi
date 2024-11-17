import {Component, OnInit} from '@angular/core';
import {MatCard, MatCardActions, MatCardContent, MatCardImage} from "@angular/material/card";
import {MatButton} from "@angular/material/button";
import {NgForOf, NgIf} from "@angular/common";
import {PromoService} from "../../promos/services/promo.service";

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
    NgIf
  ],
  templateUrl: './promos-driver.component.html',
  styleUrl: './promos-driver.component.css'
})
export class PromosDriverComponent implements OnInit{
  promos: any;
  constructor(private promoService: PromoService) {}
  ngOnInit() {
    this.promoService.getAll().subscribe(
        (data: any) => {
          this.promos = data;
        }
    )
  }

}