import { Component, inject, Input } from '@angular/core';
import { Product } from '../types/product';
import { ProductRequestServiceService } from '../product-request-service.service';
import { AddToCartService } from '../add-to-cart.service';

@Component({
  selector: 'app-product-details',
  imports: [],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {
  @Input() itemsDetails: any[] = [];
  @Input() idPassed : any;


  @Input() id : string = '';
  productDetails !: Product;
  counter : number = 0;

  constructor(private productRequestServiceService : ProductRequestServiceService ){}
  addToCartService = inject(AddToCartService);

  ngOnInit(){
    this.productRequestServiceService.getProductDetails(this.id).subscribe((res) => this.productDetails = res);
    this.addToCartService.getCounter().subscribe(res => this.counter=res);
  }

  addToCartt(product: any){
    this.addToCartService.addToCart(product);
  }

  increaseCounterIcon(){
    // to access the counter and increment on it, without it resets the counter value to 0 and increments on it
    this.addToCartService.setCounter(this.counter+1);
  }

  increaseCounterInCart(product : any){
    this.addToCartService.increaseCounter(product);
  }

  addPricess(itemPrice : number){
    this.addToCartService.addPrices(itemPrice);
  }

}

