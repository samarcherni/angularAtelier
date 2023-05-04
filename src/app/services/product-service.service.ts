import { Injectable } from '@angular/core';
import { Product } from '../core/model/product';

//un décorateur qui fournit les metadonnées pour injecter ce service 
@Injectable({
  providedIn: 'root'
  //on peut creer une instance lors de la creation de l'application et il va etre reutilisable dans tous les composants

})
export class ProductServiceService {
  listProduct = [
    {id:1,
      title:'p1',
      price:500,
      quantity:0,
      like:0
    },
    {id:2,
      title:'p2',
      price:150,
      quantity:0,
      like:0
    },
    {id:3,
      title:'p3',
      price:60,
      quantity:7,
      like:0
    }
  ]

  constructor() { }

  addProduct(product:Product){
      
    this.listProduct.push(product);
  }


}
