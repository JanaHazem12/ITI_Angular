import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Product } from '../types/product';
import { AddToCartService } from '../add-to-cart.service';

@Component({
  selector: 'app-product-card',
  imports: [CommonModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
@Input() productInfo : any;

counter : number = 0;
addToCartService = inject(AddToCartService);

  ngOnInit(){
    this.addToCartService.getCounter().subscribe(res => this.counter = res);
  }

  // increase the quantity of ONLY the selected item (check on item ID, increase the quantity of this product)
  // pass the product as an object to the function
  increaseCounter(){
    this.addToCartService.setCounter(this.counter+1);
  }

  increaseCounterInCart(product : any){
    this.addToCartService.increaseCounter(product);
  }

  addToCartt(product: any){
    this.addToCartService.addToCart(product);
    // if() ???????????
    // add an array of IDs of items in the cart, if the item I want to add in the cart 
    // is already there, then don't add it
  }

  addPricess(itemPrice : number){
    this.addToCartService.addPrices(itemPrice);
  }

 

  // getItemID(id:number){
  //   this.addToCartService.addIDs(id);
  // }

// created an instance of Router
// to redirect to the product detail's page
constructor(private router: Router){

}

//  2 steps :
// add the dynamic part in the PATH
// add the added dynamic part in the navigate()
viewProduct(item : Product){
  // as if it's concatenating
  this.router.navigate(['/product-details',item.id]);
}

}
