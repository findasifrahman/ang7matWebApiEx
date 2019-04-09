import { Component } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, OnDestroy } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  currentRate: any = 8;
  title = 'app';
  public isCollapsed = false;
  images = [1, 2, 3].map(() => `https://picsum.photos/1400/300?random&t=${Math.random()}`);
}
