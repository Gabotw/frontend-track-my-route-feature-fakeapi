import {Component} from '@angular/core';
import {MatTableModule} from '@angular/material/table';

export interface TravelHistory {
  destino: string;
  origen: string;
  hora: string;
  pasaje: string;
}

const ELEMENT_DATA: TravelHistory[] = [
  {origen: "Monterrico", destino: 'Aviacion', hora: '13:00', pasaje: 'S/1.50'},
  {origen: "Angamos", destino: 'Salaverry', hora: '8:00', pasaje: 'S/1.00'},
  {origen: "Av. Arequipa", destino: 'Angamos', hora: '16:00', pasaje: 'S/2.00'},
  {origen: "Av. Larco", destino: 'Benavides', hora: '1:00', pasaje: 'S/1.00'},
  {origen: "Javier Prado", destino: 'Av. San Luis', hora: '18:00', pasaje: 'S/1.50'},
];


@Component({
  selector: 'app-history',
  styleUrl: './history.component.css',
  templateUrl: './history.component.html',
  standalone: true,
  imports: [MatTableModule],
})
export class HistoryComponent {
  displayedColumns: string[] = ['origen', 'destino', 'hora', 'pasaje'];
  dataSource = ELEMENT_DATA;
  clickedRows: { [key: string]: boolean } = {};

  rowClicked(row: TravelHistory) {
    if (this.clickedRows[row.origen]) {
      this.clickedRows[row.origen] = false;
    } else {
      this.clickedRows[row.origen] = true;
    }
  }

  isRowClicked(row: TravelHistory): boolean {
    return this.clickedRows[row.origen];
  }
}
