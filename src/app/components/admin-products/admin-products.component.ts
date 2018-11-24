import { Router } from '@angular/router';
import { switchMap, map } from 'rxjs/operators';
import { AngularFireDatabase } from '@angular/fire/database';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';


@Component({
  selector: 'admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit {
  displayedColumns: string[] = ['title','price','edit'];
  dataSource: MatTableDataSource<ProductElement> = new MatTableDataSource<ProductElement>(ELEMENT_DATA);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private db: AngularFireDatabase, private router: Router) { }

  ngOnInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  addNewProduct() {
    this.router.navigate(['/admin/products/new']);
  }

}

export interface ProductElement {
  title: string;
  price: number;
  category: string;
}

// const ELEMENT_DATA: ProductElement[] = getElementsFromDB();
const ELEMENT_DATA: ProductElement[] = [
  {title: 'TV 42 inch', price: 900, category: 'TV'},
  {title: 'TV 50 inch', price: 1250, category: 'TV'},
  {title: 'Hyundai i20', price: 40000, category: 'Cars'},
  {title: 'Hyundai i10', price: 30570, category: 'Cars'},
  {title: 'Toyota Yaris', price: 50000, category: 'Cars'},
  {title: 'Toyota Auris', price: 60000, category: 'Cars'},
  {title: 'Toyota Auris Hybrid', price: 65000, category: 'Cars'},
  {title: 'Seat Ibiza', price: 45000, category: 'Cars'}
];