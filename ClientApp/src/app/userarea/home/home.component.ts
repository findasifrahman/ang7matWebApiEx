import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  title = 'app';
  public isCollapsed = false;
  images = [1, 2, 3].map(() => `https://picsum.photos/1400/300?random&t=${Math.random()}`);
}
