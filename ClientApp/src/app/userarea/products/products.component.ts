import { Component, OnInit } from '@angular/core';
import { ProductdataserviceService } from '../../adminarea/productmodule/productdataservice.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  AllElement: any;
  constructor(private productService: ProductdataserviceService) { }

  ngOnInit() {
    this.productService.getAll().subscribe((posts) => {
      this.AllElement = posts;
      console.log(posts);
    });
  }

}
