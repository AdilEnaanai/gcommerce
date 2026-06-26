import { Component, signal } from '@angular/core';
import { Produit } from './produit/produit';
@Component({
  selector: 'app-root',
  imports: [Produit],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('gcommerce');
}
