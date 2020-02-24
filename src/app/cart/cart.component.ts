import { Component, Input, EventEmitter, Output } from '@angular/core';
import { MovetocService } from '../movetoc.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent  {
  @Input() productId: number;
  @Input() productName: number;
  @Input() price: number;
  cart1: {name: string, price: string,img: string}[] = [];


  constructor(private movetocService:MovetocService){}


  ngOnInit() {
    this.cart1 = this.movetocService.cartItems;

  
  }
}
