import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  tiles: Tile[] = [
    { text: '<button mat-fab color="warn">Warn</button>', cols: 1, rows: 3, color: 'lightblue' },
    { text: 'Two', cols: 2, rows: 1, color: 'lightgreen' },
    { text: 'Three', cols: 2, rows: 2, color: 'lightpink' },

  ];
  constructor() { }

  ngOnInit() {
  }

}
export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}
