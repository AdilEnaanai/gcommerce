import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap/modal';

@Component({
  selector: 'app-form-produit',
  imports: [ReactiveFormsModule],
  templateUrl: './form-produit.html',
  styleUrl: './form-produit.css',
})
export class FormProduit {
  activeModal = inject(NgbActiveModal);
  formbuilder = inject(FormBuilder);

  produitForm = this.formbuilder.group({
    nom: ['', { validators: [Validators.required] }],
    prix: ['', { validators: [Validators.required, Validators.min(0)] }],
    categorie: ['', { validators: [Validators.required] }],
  });
  closeModal() {
    this.activeModal.close();
  }

  addProduit() {
    const produit = this.produitForm.value;
    console.log('Produit ajouté:', produit);
    this.activeModal.close(produit);
  }
}
