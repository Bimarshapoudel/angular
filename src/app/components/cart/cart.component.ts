import { Component, OnInit } from '@angular/core';
import { CartapiService } from 'src/app/services/cartapi.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  products:any=[];
  allProducts:any=0;
  constructor(private cartAPi:CartapiService){}
  ngOnInit(): void {
    this.cartAPi.getProductData().subscribe(
      res=>{
        this.products=res;
        this.allProducts=this.cartAPi.getTotalAmount();
      }
    )
  }
  removeProduct(items:any){
    this.cartAPi.removeCartData(items);
  }
  removeAllProduct(){
    this.cartAPi.removeAllCart();
  }

}
