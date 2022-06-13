import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from '../Models/Product';
import { ResponseApi } from '../Models/ResponseAPI';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private authService:AuthService,private http:HttpClient) { }

  getProduct(){
    const headers = new HttpHeaders({'authorization':'Bearer '+ this.authService.jwtToken});
    return this.http.get<ResponseApi>(this.authService.host+'products',{headers:headers});
  }

  addProduct(product: Product) {
    const headers = new HttpHeaders({'authorization':'Bearer '+ this.authService.jwtToken});
    return this.http.post<ResponseApi>(this.authService.host+'products', product,{headers:headers});
  }


  editProduct(productid: number, products: Product) {
    const headers = new HttpHeaders({'authorization':'Bearer '+ this.authService.jwtToken});
    return this.http.put<ResponseApi>(`${this.authService.host}products/${productid}`, products,{headers:headers});
  }
}
