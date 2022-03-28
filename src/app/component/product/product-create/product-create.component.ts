import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../../service/product.service";
import {Router} from "@angular/router";
import {Product} from "../../../model/Product";
import {Category} from "../../../model/Category";
import {CategoryService} from "../../../service/category.service";

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
    description:'',
    // @ts-ignore
    category: Category
}
demo = new Date()

form: any = {};
  categoryList: Category[] = []
  constructor(private productService: ProductService,
              private router :Router,
              private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.categoryService.findAll().subscribe(data => {
      // @ts-ignore
      this.categoryList = data
        console.log(this.categoryList)
    })
  }

  createNewProduct(): void {

    // @ts-ignore
    this.product = {
      name: this.form.name,
      image: this.form.image,
      price: this.form.price,
      quantity: this.form.quantity,
      manufacturer: this.form.manufacturer,
      description: this.form.description,
      category : {
        id: this.form.category
      }
    };
    console.log(this.form.category)
    this.productService.createNewProduct(this.product).subscribe(() => {
      this.router.navigate(['/list-product']);
    });
  }
  // @ts-ignore
  uploadFile(event): void {
    this.form.image = event;
  }

}
