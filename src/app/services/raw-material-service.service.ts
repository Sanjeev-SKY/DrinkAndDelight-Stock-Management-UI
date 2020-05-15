import { RawMaterialStock } from './../model/raw-material-stock';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RawMaterialServiceService {

  baseUrl:String;

  constructor(private http:HttpClient) {
      this.baseUrl=`${environment.baseMwUrl}`;
   }

   addProcessDate(rawMaterialStock:RawMaterialStock):Observable<RawMaterialStock> {
      return this.http.post<RawMaterialStock>(`${this.baseUrl}/updateRawMaterial`,rawMaterialStock);
   }

  //  addProcessDate(rawMaterialStock:RawMaterialStock):Observable<string> {
  //   return this.http.post<string>(`${this.baseUrl}/updateRawMaterial`,rawMaterialStock);
  //  }


   findById(orderId:number):Observable<RawMaterialStock>{
    return this.http.get<RawMaterialStock>(`${this.baseUrl}/updateRawMaterial/${orderId}`);
  }

   updateRawMaterialDetails(rawMaterialStock:RawMaterialStock):Observable<RawMaterialStock> {
     return this.http.put<RawMaterialStock>(`${this.baseUrl}/updateRawMaterial`,rawMaterialStock);
   }

   trackRawMaterial(orderId:number):Observable<RawMaterialStock>{
    return this.http.get<RawMaterialStock>(`${this.baseUrl}/trackrawmaterial/${orderId}`); 
  }

}
