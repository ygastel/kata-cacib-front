import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterOutlet} from '@angular/router';
import {AgGridAngular} from 'ag-grid-angular'; // AG Grid Component
import {ColDef} from 'ag-grid-community';
import {SendToQueueComponent} from "./components/send-to-queue/send-to-queue.component"; // Column Definition Type Interface

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, AgGridAngular, SendToQueueComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'kata-front';

  // Row Data: The data to be displayed.
  rowData = [
    {make: "Tesla", model: "Model Y", price: 64950, electric: true},
    {make: "Ford", model: "F-Series", price: 33850, electric: false},
    {make: "Toyota", model: "Corolla", price: 29600, electric: false},
  ];

  // Column Definitions: Defines the columns to be displayed.
  colDefs: ColDef[] = [
    {field: "make"},
    {field: "model"},
    {field: "price"},
    {field: "electric"}
  ];
}
