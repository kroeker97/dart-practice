import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { IonApp, IonContent, IonIcon, IonItem, IonLabel, IonList, IonListHeader, IonMenu, IonMenuToggle, IonRouterOutlet, IonSplitPane } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { barChartOutline, barChartSharp, homeOutline, homeSharp, listOutline, listSharp } from 'ionicons/icons';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, IonApp, IonSplitPane, IonMenu, IonContent, IonList, IonListHeader, IonMenuToggle, IonItem, IonIcon, IonLabel, IonRouterOutlet],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/home', icon: 'home' },
    { title: 'Practice', url: '/practice', icon: 'list' },
    { title: 'History', url: '/history', icon: 'list' },
    { title: 'Charts', url: '/charts', icon: 'bar-chart' },
  ];

  constructor() {
    addIcons({ homeOutline, homeSharp, listOutline, listSharp, barChartOutline, barChartSharp });
  }
}