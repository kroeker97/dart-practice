import { Component } from '@angular/core';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-practice',
  templateUrl: 'practice.page.html',
  styleUrls: ['practice.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent]
})
export class PracticePage {
  constructor() {}
}