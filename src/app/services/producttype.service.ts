import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResponseApi } from '../Models/ResponseAPI';
import { TypeProduct } from '../Models/TypeProduct';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ProducttypeService {
  constructor(private authService:AuthService,private http:HttpClient) { }

  getTypeProduct(){
    const headers = new HttpHeaders({'authorization':'Bearer '+ this.authService.jwtToken});
    return this.http.get<ResponseApi>(this.authService.host+'productType',{headers:headers});
  }

  addTypeProduct(typeProduct: TypeProduct) {
    const headers = new HttpHeaders({'authorization':'Bearer '+ this.authService.jwtToken});
    return this.http.post<ResponseApi>(this.authService.host+'productType', typeProduct,{headers:headers});
  }
}
