import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductRequestServiceService {

  constructor(private http: HttpClient) {}

  getProductsList(sortOrder:string) : Observable<any>{
    return this.http.get('https://dummyjson.com/products', {
      params:{
        sortBy : 'name',
        order : sortOrder
      }

    });
  }

  getProductDetails(id: string): Observable<any>{
    return this.http.get(`https://dummyjson.com/products/${id}`);
  }

}
