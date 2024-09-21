import {Component} from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import { HistoryService } from '../services/history.service';

export interface TravelHistory {
  destino: string;
  origen: string;
  hora: string;
  pasaje: string;
}

@Component({
  selector: 'app-history',
  styleUrl: './history.component.css',
  templateUrl: './history.component.html',
  standalone: true,
  imports: [MatTableModule],
})
export class HistoryComponent {
  displayedColumns: string[] = ['origen', 'destino', 'hora', 'pasaje'];
  dataSource: any;
  clickedRow: number | null = null;

  constructor(private tripService: HistoryService) {}

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
}
