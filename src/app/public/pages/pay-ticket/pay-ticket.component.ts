import { Component, OnInit } from '@angular/core';
import {MatFormField} from "@angular/material/form-field";
import {MatOption, MatSelect, MatLabel} from "@angular/material/select";
import {MatButton} from "@angular/material/button";
import {NgForOf} from "@angular/common";
import {BusService} from "../../../tracking/services/bus.service";

@Component({
  selector: 'app-pay-ticket',
  standalone: true,
  imports: [
    MatFormField,
    MatSelect,
    MatOption,
    MatLabel,
    MatButton,
    NgForOf
  ],
  templateUrl: './pay-ticket.component.html',
  styleUrl: './pay-ticket.component.css'
})


export class PayTicketComponent implements OnInit {
  buses: any;
  selectedBus: any;
  selectedBusStopOrigin: any;
  selectedBusStopDestination: any;
  constructor(private busService: BusService) {}

  ngOnInit() {
    this.busService.getAll().subscribe(
        (data: any) => {
          this.buses = data;
        }
    );
  }
}
