import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductServiceService } from '../services/product-service.service';
import { Product } from '../core/model/product';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  id!:number;
  product!:Product

  constructor(private route:ActivatedRoute,
    private products:ProductServiceService) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.product=this.products.listProduct[this.id]
  }

}
