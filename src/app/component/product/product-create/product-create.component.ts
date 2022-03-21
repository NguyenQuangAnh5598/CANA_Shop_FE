import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../../service/product.service";
import {Router} from "@angular/router";
import {Product} from "../../../model/Product";

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.scss']
})
export class ProductCreateComponent implements OnInit {
  // @ts-ignore
  product: Product = {
    name:'',
    image: '',
    price:0,
    quantity:0,
    manufacturer:'',
    description:''
}

form: any = {};
  constructor(private productService: ProductService,
              private router :Router) { }

  ngOnInit(): void {
  }

  createNewProduct(): void {

    // @ts-ignore
    this.product = {
      name: this.form.name,
      image: this.form.image,
      price: this.form.price,
      quantity: this.form.quantity,
      manufacturer: this.form.manufacturer,
      description: this.form.description
    };
    this.productService.createNewProduct(this.product).subscribe(() => {
      this.router.navigate(['/list-product']);
    });
  }
  // @ts-ignore
  uploadFile(event): void {
    this.form.image = event;
  }

}
