import { Component, OnInit } from '@angular/core';
import { Product } from '../core/model/product';
import { ProductServiceService } from '../services/product-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  product!: Product


  constructor(private sproduct:ProductServiceService,
    private route:Router) { }

  ngOnInit(): void {
    this.product= new Product();
  }

  ajouterProduct(){
    this.sproduct.addProduct(this.product);
    this.route.navigateByUrl("/products")
  }

}
