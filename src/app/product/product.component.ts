import { Component, OnInit } from '@angular/core';
import { Product } from '../core/model/product';
import { ProductServiceService } from '../services/product-service.service';
import { CalculService } from '../services/calcul.service';
import { ConsumerproductService } from '../services/consumerproduct.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  title: string ='E-Commerce';
  listProduct!:Product[];
  priceMax!:number;
  alert!: number;

  constructor(private sproduct: ProductServiceService,
    private scalcul: CalculService,
    private sconsumer:ConsumerproductService) { }

  ngOnInit(): void {
    //this.listProduct=this.sproduct.listProduct
    
    this.sconsumer.getProduct().subscribe({
      next: (data) => this.listProduct=data,
      error: (error) => console.log('error'),
      complete: ()=>console.log("done")
    })
  }
  increment(i:number){
    this.listProduct[i].like++;
  }
  decrement(i:number){
    this.listProduct[i].quantity--;
  }

  getAlert() {
    this.alert=this.scalcul.getNumberOf(this.listProduct,"quantity",0);
  }

}
