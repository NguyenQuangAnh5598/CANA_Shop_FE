export class OrderDetail{
  id :number;
  orderQuantity: number;
  productId: number;



  constructor(id: number, orderQuantity: number, productId: number) {
    this.id = id;
    this.orderQuantity = orderQuantity;
    this.productId = productId;
  }
}
