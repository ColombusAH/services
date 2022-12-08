import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart-service.service';
import { LoggerService } from '../logger.service';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.css']
})
export class ProductsPageComponent implements OnInit {

  constructor(private cartService: CartService, private logger: LoggerService) {
  }

  ngOnInit(): void {
  }


  addToCart(product: any) {
    this.cartService.addToCart(product);
    this.logger.log(`[ProductsPageComponent] addToCart() ${product.name}`);
  }

}
