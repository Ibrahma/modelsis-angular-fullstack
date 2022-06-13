import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TypeProduct } from '../Models/TypeProduct';
import { AuthService } from '../services/auth.service';
import { ProductService } from '../services/product.service';
import { ProducttypeService } from '../services/producttype.service';
import { Observable } from 'rxjs';
import { Location } from '@angular/common';
import { Product } from '../Models/Product';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editproduct',
  templateUrl: './editproduct.component.html',
  styleUrls: ['./editproduct.component.css']
})
export class EditproductComponent implements OnInit {
  producteditFromGroup!:FormGroup;
  alltypeproduct!:TypeProduct[];
  state$!: Observable<Object>;
  product!:Product;
  constructor( private location: Location, private route:ActivatedRoute,private producttypeService:ProducttypeService ,private productService:ProductService ,private _formbuilder:FormBuilder, private authService: AuthService,private router:Router) { }

  ngOnInit(): void {
    const el: any = this.location.getState();
    this.product = el.product;
    this.authService.loadToken();
    this.producteditFromGroup=this._formbuilder.group({
      name: [this.product.name,Validators.required],
      type: ['',Validators.required]
    });
    //loadTypeProduct

    this.producttypeService.getTypeProduct().subscribe(
      (data: any) => {
          this.alltypeproduct = data;
      }, (error) => {
        console.log(error);
      }
    )

  }



  onSubmit(){
    let id=this.route.snapshot.params['id'];
    this.authService.loadToken();
      this.productService.editProduct(id,this.producteditFromGroup.value).subscribe(
      (data) => {
         if(data.statut==200){
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: data.description,
            showConfirmButton: false,
            timer: 2000
          })
          this.router.navigate(['/dashboard']);
        }

      },(error:any)=>{
        console.log(error);
      }
      )
  }


}
