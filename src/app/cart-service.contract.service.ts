export abstract class CartServiceContract {
    abstract cartCount: number;
    abstract cart: any[];
    abstract addToCart(product: any): void;
}