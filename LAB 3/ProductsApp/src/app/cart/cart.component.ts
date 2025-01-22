import { Component, inject } from '@angular/core';
import { AddToCartService } from '../add-to-cart.service';
import { CommonModule } from '@angular/common';
import { isNgTemplate } from '@angular/compiler';

@Component({
  selector: 'app-cart',
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  addToCartService = inject(AddToCartService);
  counter : number = 0;
  id : number = 0;

  ngOnInit(){ // to display the items in the array
    this.addToCartService.getCartItems();
    this.addToCartService.getCounter().subscribe(res => this.counter = res)
  }

  increaseItemCounter(product : any){
    this.addToCartService.increaseCounter(product);
    // this.counter = this.counter+1;
    this.addToCartService.setCounter(this.counter+1);
  }

  decreaseItemCounter(product : any){
    this.addToCartService.decreaseCounter(product);
    // this.counter = this.counter-1;
    this.addToCartService.setCounter(this.counter-1);
  }

  addPricess(itemPrice : number){
    this.addToCartService.addPrices(itemPrice);
  }

  DecrementPricess(itemPrice : number){
    this.addToCartService.DecrementPrices(itemPrice);
  }

  removeProduct(product:any){
    this.addToCartService.removeCartProduct(product);
    this.addToCartService.setCounter(this.counter-product.QuantityInCart);
  }

  // getItemID(id:number){
  //   this.addToCartService.addIDs(id);
  // }






}
