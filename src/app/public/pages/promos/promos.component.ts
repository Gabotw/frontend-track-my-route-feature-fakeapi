import {Component, OnInit} from '@angular/core';
import {MatCard, MatCardActions, MatCardContent, MatCardImage} from "@angular/material/card";
import {MatButton} from "@angular/material/button";
import {NgForOf, NgIf} from "@angular/common";
import {PromoService} from "../../../tracking/services/promo.service";
import {Promo} from "../../../tracking/models/promo.entity";

@Component({
  selector: 'app-promos',
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
  templateUrl: './promos.component.html',
  styleUrl: './promos.component.css'
})
export class PromosComponent implements OnInit{
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
