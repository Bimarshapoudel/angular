import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { CartapiService } from 'src/app/services/cartapi.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  productList:any;
  constructor(private api:ApiService,
    private cartApi:CartapiService){}
  ngOnInit(): void {
    this.api.getProduct().subscribe(res=>{
      this.productList=res;
      this.productList.aaray.forEach((a:any)=>{
        Object.assign(a,{quantity:1,total:a.price})
      });
    })
  }
  addtoCart(items:any){
  this.cartApi.addToCart(items);
  }
}
