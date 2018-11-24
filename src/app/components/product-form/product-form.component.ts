import { FormControl, Validators } from '@angular/forms';
import { CategoryService } from './../../services/category.service';
import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { InputErrorStateMatcher } from 'src/app/services/input-error-state-matcher';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  categories$;

  titleFormControl = new FormControl('', [Validators.required]);
  priceFormControl = new FormControl('', [Validators.required, Validators.min(0)]);
  categoryFormControl = new FormControl('', [Validators.required]);
  imageUrlFormControl = new FormControl('', [Validators.required]);
  matcher = new InputErrorStateMatcher();

  constructor(
    private categoryService: CategoryService, 
    private productService: ProductService,
    private router: Router) { 
    this.categories$ = categoryService.getCategories();

  }


  ngOnInit() {
  }

  save(product) {
    this.productService.create(product);
    this.router.navigate(['admin/products']);
  }
}