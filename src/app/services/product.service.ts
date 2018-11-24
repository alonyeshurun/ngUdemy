import { AngularFireDatabase } from '@angular/fire/database';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private db: AngularFireDatabase) { }

  create(product) {
    return this.db.list('/products').push(product);
  }

  getProducts() {
    // return this.db.list('/products').snapshotChanges().pipe(
    //   map(actions => 
    //     actions.map(a => ({ key: a.key, ...a.payload.val() }))
    //   )
    // )
  }
}
