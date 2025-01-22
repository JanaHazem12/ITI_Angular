import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from './types/product';
import { ProductRequestServiceService } from './product-request-service.service';

@Injectable({
  providedIn: 'root'
})
export class AddToCartService {
  //  an empty array to push products into //
  private itemsInCart : any[] = []
  private cartCounter = new BehaviorSubject<number>(0);
  priceInCart : number[] = []
  idsInCart : number[] = []
  sum : number = 0;
  // product.quantity = 0;
  // counter : number = 1;

  constructor() { }

  getCounter(){
    console.log(this.cartCounter.asObservable());
    return this.cartCounter.asObservable();
  }

  setCounter(newCounterVal : number){
    this.cartCounter.next(newCounterVal);
  }

  addToCart(product:any){ // pushing a product into itemsInCart array
    var flag : boolean = false;
    this.itemsInCart.forEach(element => {
      if(element.id === product.id){ // product.id (in the array) = element.id (id passed as a param.)
          flag = true;
      }
    })
    if(!flag){
      this.itemsInCart.push(product);
    };
  }

  getCartItems(){ // returning the itemsInCart array
    return this.itemsInCart;
  }

  addPrices(price : number){
    this.priceInCart.push(price);
    this.sum = Number(this.sum.toFixed(2));
    this.sum = this.sum + price; 
    console.log(this.sum);
  }

  getTotalPrice(){
    return this.sum;
  }

  DecrementPrices(price : number){
    if(this.sum-price <= 0){
        // console.log("subtraction = "+(this.sum-price));
        // console.log("price = "+price);
        // console.log("Total = "+this.sum);
        this.sum = 0;
    }
    else{
    // this.priceInCart.push(price);
    this.sum = Number((this.sum - price).toFixed(2)); 
    }
    // console.log(this.sum);
    // HANDLE THE ZERO CASE
  }

  increaseCounter(product : any){
    // check if the ID of the product is included in the itemsInCart & increment its quantity
    // if(product){
      // console.log("quantity below");
      // console.log(product.QuantityInCart);
      if(product.QuantityInCart == undefined){
          product.QuantityInCart = 0;
      }
      product.QuantityInCart = product.QuantityInCart + 1;
      // console.log(product.QuantityInCart);
  }

  decreaseCounter(product : any){
    // check if the ID of the product is included in the itemsInCart & increment its quantity
    // if(product){
      // console.log("quantity below");
      // console.log(product.QuantityInCart);
      // console.log(this.itemsInCart);
      if(product.QuantityInCart != 1){
        product.QuantityInCart = product.QuantityInCart - 1;
      }
      else{ // deleting the item from the array if we decrease & the quantity is = 0
        this.itemsInCart = this.itemsInCart.filter(i => i.id != product.id);
      }
      // console.log(this.itemsInCart);
  }

  removeCartProduct(product : any){
      this.itemsInCart = this.itemsInCart.filter(i => i.id != product.id);
      this.sum =  Number((this.sum - ((product.QuantityInCart)*product.price)).toFixed(2)); 
      // if (this.itemsInCart.length == 0){
      //     this.sum = 0;
      // }
    }

}

  // addIDs(id : number){
  //   this.idsInCart.push(id);
  //   console.log(this.idsInCart);
  // }
  // // add an array consisting of the item IDs

  // getId(){
  //   // console.log(this.idsInCart);
  //   return this.idsInCart;
  // }

