import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovetocService {
  
  ar=[
    { name :'n21', price :'520', img :"assets/image/pp1.jpg"},
    { name :'n2', price :'420', img :"assets/image/pp2.jpg"},
    { name :'n3', price :'320', img :'assets/image/pp3.jpg'},
    { name :'n4', price :'220', img :'assets/image/pp4.jpg'},
    ];

    cartItems=[]; 
    // this.mov

  constructor() { }
}
