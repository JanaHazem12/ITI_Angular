import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RouterLinkActive } from '@angular/router';
import { AddToCartService } from '../add-to-cart.service';

@Component({
  selector: 'app-nav-bar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
  counter : number = 0;
  addToCartService = inject(AddToCartService);

  constructor(){}

  ngOnInit(){
    this.addToCartService.getCounter().subscribe(res => this.counter = res);
  }

}
