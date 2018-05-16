export class CheckoutModel {
    id: number;
    productId: number;
    shippingPrice: number;
    totalPrice: number;
    availableCoupons: Array<any>;
}