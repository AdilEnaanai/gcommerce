import { Component, signal } from '@angular/core';
import { Joueur } from './joueur/joueur';
@Component({
  selector: 'app-root',
  imports: [Joueur],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('gcommerce');
}
