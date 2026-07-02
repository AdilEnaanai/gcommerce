import { Component, inject } from '@angular/core';
import { NgbModal, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { ProduitService } from './produit-service';
import { FormProduit } from './form-produit/form-produit';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-produit',
  imports: [NgbModalModule, AsyncPipe],
  templateUrl: './produit.html',
  styleUrls: ['./produit.css'],
})
export class Produit {
  produitService = inject(ProduitService);
  modal = inject(NgbModal);
  produits = this.produitService.getProduits();

  openModal() {
    const modalRef = this.modal.open(FormProduit);
    modalRef.result.then((produit) => {
      if (produit) {
        this.produitService.addProduit(produit);
      }
    });
  }
}
