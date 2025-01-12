import { Component } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import {HistoryService} from "../../history/services/history.service";
import {MatDialog} from "@angular/material/dialog";
import {AddTripDialogComponent} from "../components/add-trip-dialog/add-trip-dialog.component";
import {MatButton} from "@angular/material/button";

export interface TravelHistory {
  destino: string;
  origen: string;
  hora: string;
  pasaje: string;
}

@Component({
  selector: 'app-history-driver',
  templateUrl: './history-driver.component.html',
  styleUrl: './history-driver.component.css',
  standalone: true,
  imports: [MatTableModule, MatButton],
})
export class HistoryDriverComponent {
  displayedColumns: string[] = ['origen', 'destino', 'hora', 'pasaje'];
  dataSource: any;
  clickedRow: number | null = null;

  constructor(private tripService: HistoryService, private dialog: MatDialog) {}

  rowClicked(index: number) {
    this.clickedRow = index === this.clickedRow ? null : index;
  }

  isRowClicked(index: number): boolean {
    return index === this.clickedRow;
  }

  ngOnInit() :void {
    this.tripService.getAll().subscribe(
        (data: any) => {
          this.dataSource = data;
        }
    );
  }

  openAddTripDialog(): void {
    const dialogRef = this.dialog.open(AddTripDialogComponent, {
      width: '400px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        // Llamar al servicio para añadir el viaje
        this.tripService.create(result).subscribe(
            (newTrip: any) => {
              // Si se añade correctamente, actualizar la tabla
              this.dataSource = [...this.dataSource, newTrip];
              alert('Viaje añadido exitosamente.');
            },
            (error) => {
              console.error('Error añadiendo el viaje:', error);
              alert('Ocurrió un error al añadir el viaje.');
            }
        );
      }
    });
  }
}
