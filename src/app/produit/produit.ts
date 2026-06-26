import { Component, inject } from '@angular/core';
import { NgbModal, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { ProduitService } from './produit-service';
import { FormProduit } from './form-produit/form-produit';

@Component({
  selector: 'app-produit',
  imports: [NgbModalModule],
  templateUrl: './produit.html',
  styleUrls: ['./produit.css'],
})
export class Produit {
  produitService = inject(ProduitService);
  modal = inject(NgbModal);
  produits = this.produitService.getProduits();

  openModal() {
    const modalRef = this.modal.open(FormProduit);
  }
}
