import { ProductStock } from './../model/product-stock';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  baseUrl:string;
  exDate:string;

  constructor(private http:HttpClient) { 
    this.baseUrl=`${environment.baseMwUrl}`;
    this.exDate=`updateProduct/updateExitDate`;
  }

  addExitDate(productStock:ProductStock):Observable<ProductStock> {
    return this.http.put<ProductStock>(`${this.baseUrl}/${this.exDate}`,productStock);
  }

  findById(orderId:number):Observable<ProductStock>{
    return this.http.get<ProductStock>(`${this.baseUrl}/updateProduct/${orderId}`);
  }

  updateProductDetails(productStock:ProductStock):Observable<ProductStock> {
    return this.http.put<ProductStock>(`${this.baseUrl}/updateProduct`,productStock);
  }

  trackProduct(orderId:number):Observable<ProductStock>{
    return this.http.get<ProductStock>(`${this.baseUrl}/trackproduct/${orderId}`); 
  }

}
