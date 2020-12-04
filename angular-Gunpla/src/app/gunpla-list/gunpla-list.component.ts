import { Component, OnInit } from '@angular/core';
import { GunplaCartService } from '../gunpla-cart.service';
import { Gunpla } from './Gunpla';

@Component({
  selector: 'app-gunpla-list',
  templateUrl: './gunpla-list.component.html',
  styleUrls: ['./gunpla-list.component.scss']
})
export class GunplaListComponent implements OnInit {
  gunplas:Gunpla[] = [
    {
      "nombre": "Barbatos (ASW-G-08 Gundam Barbatos Lupus)",
      "categoria": "Gunpla Escala 1/40",
      "precio": 5000,
      "stock": 5,
      "image": "assets/img/Barbatos.jpg",
      "oferta": false,
      quantity:0,
    },
    {
      "nombre": "Turn-A Gundam (SYSTEM ∀-99 ∀ Gundam)",
      "categoria": "Gunpla Escala 1/100",
      "precio": 2200,
      "stock": 47,
      "image": "assets/img/TurnA.jpg",
      "oferta": true,
      quantity:0,
    },
    {
      "nombre": "Turn-X (CONCEPT-X 6-1-2 Turn X)",
      "categoria": "Gunpla Escala 1/50",
      "precio": 1000,
      "stock": 0,
      "image": "assets/img/TurnX.jpg",
      "oferta": false,
      quantity:0,
    },
    {
      "nombre": "Lijas",
      "categoria": "Herramienta",
      "precio": 375,
      "stock": 200,
      "image": "assets/img/lijas.jpg",
      "oferta": false,
      quantity:0,
    },
  ]
  cart: GunplaCartService;
    
  constructor(private Gunpla: GunplaCartService) { 
  }

  ngOnInit(): void {
  }

  addToCart(Gunpla):void {
    this.Gunpla.addToCart(Gunpla);
    Gunpla.stock -= Gunpla.quantity;
    Gunpla.quantity = 0;
  }

  maxReached(m: string){
    alert(m);
  }

}
