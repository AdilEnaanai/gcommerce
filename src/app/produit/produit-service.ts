import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProduitService {
  private produits = [
    { id: 1, nom: 'Ordinateur', prix: 8000, categorie: 'Électronique' },
    { id: 2, nom: 'Téléphone', prix: 5000, categorie: 'Électronique' },
    { id: 3, nom: 'Table', prix: 2000, categorie: 'Meubles' },
    { id: 4, nom: 'Chaise', prix: 1000, categorie: 'Meubles' },
    { id: 5, nom: 'Livre', prix: 500, categorie: 'Livres' },
  ];

  getProduits() {
    return this.produits;
  }
}
