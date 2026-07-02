import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProduitService {
  http = inject(HttpClient);
  baseUrl = 'http://localhost:8080/ventes/';
  getProduits() {
    return this.http.get(this.baseUrl+'produits?page=0&size=20');
  }

  addProduit(produit: any) {
    const categorie=produit.categorie
    delete produit.categorie
    console.log(produit)
    return this.http.post(this.baseUrl+'categories/'+categorie+'/produits', produit).subscribe();
  }
}
