export class Product {
  id: number
  name: string
  image: string
  price: number
  quantity: number
  manufacturer: string
  description: string


  constructor(id: number, name: string, image: string, price: number, quantity: number, manufacturer: string, description: string) {
    this.id = id;
    this.name = name;
    this.image = image;
    this.price = price;
    this.quantity = quantity;
    this.manufacturer = manufacturer;
    this.description = description;
  }
}
