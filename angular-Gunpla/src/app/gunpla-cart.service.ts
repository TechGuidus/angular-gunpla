import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Gunpla } from './gunpla-list/Gunpla';

@Injectable({
  providedIn: 'root'
})
export class GunplaCartService {

  constructor() {}

  private _shopList: Gunpla [] = [];
  
  shopList: BehaviorSubject<Gunpla[]> = new BehaviorSubject([]);


  

  addToCart(gunpla: Gunpla) {
    let item:Gunpla = this._shopList.find((v1)=> v1.nombre = gunpla.nombre);
    if (!item){
      this._shopList.push({...gunpla}); 
    }
    else {
      item.quantity += gunpla.quantity;
    }
    console.log(this._shopList);
    this.shopList.next(this._shopList);
  }


  
}
