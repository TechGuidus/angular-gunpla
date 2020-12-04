import { Component, OnInit } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { GunplaCartService } from '../gunpla-cart.service';
import { Gunpla } from '../gunpla-list/Gunpla';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  shopList$: Observable<Gunpla[]>;

  constructor(private Gunpla: GunplaCartService) {
    this.shopList$ = Gunpla.shopList.asObservable();
   }

  ngOnInit(): void {

  }

}
