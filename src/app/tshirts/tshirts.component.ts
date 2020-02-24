import { Component, OnInit,Input} from '@angular/core';
import { MovetocService } from '../movetoc.service';


@Component({
  selector: 'app-tshirts',
  templateUrl: './tshirts.component.html',
  styleUrls: ['./tshirts.component.css']
})
export class TshirtsComponent {
  cart: {name: string, price: string,img: string}[] = [];

  @Input() ar: {name: string, price: number,img:ImageData};
  constructor(private movetocService:MovetocService){}

  ngOnInit() {
    this.cart = this.movetocService.ar;
  }
  onAddToCart(t){
    console.log(t);
    this.movetocService.cartItems.push(t);
    console.log(this.movetocService.cartItems);
  }

}
