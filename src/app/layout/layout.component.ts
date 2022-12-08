import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart-service.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  cartCount: number = 0;
  constructor(protected cartService: CartService) { }

  ngOnInit(): void {
    // this.cartCount = this.cartService.cartCount;
  }

}
