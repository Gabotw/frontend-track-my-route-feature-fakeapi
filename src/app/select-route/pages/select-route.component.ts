import {Component, OnInit} from '@angular/core';
import {PayTicketService} from '../../pay-ticket/services/pay-ticket.service';

@Component({
  selector: 'app-select-route',
  templateUrl: './select-route.component.html',
  styleUrl: './select-route.component.css'
})
export class SelectRouteComponent implements OnInit {
  buses: any;
  selectedBus: any;
  selectedBusStopOrigin: any;
  selectedBusStopDestination: any;
  constructor(private busService: PayTicketService) {}

  ngOnInit() {
    this.busService.getAll().subscribe(
        (data: any) => {
          this.buses = data;
        }
    );
  }
}
