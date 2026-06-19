import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-joueur',
  imports: [],
  templateUrl: './joueur.html',
  styleUrl: './joueur.css',
})
export class Joueur {
  @Input() joueur: any;
}
