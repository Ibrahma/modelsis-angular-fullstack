import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { ProductService } from '../services/product.service';
import Swal from 'sweetalert2';
import { ProducttypeService } from '../services/producttype.service';
import { TypeProduct } from '../Models/TypeProduct';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {
  productFromGroup!:FormGroup;
  alltypeproduct!:TypeProduct[];
  selectedValue:any;
  constructor(private producttypeService:ProducttypeService ,private productService:ProductService ,private _formbuilder:FormBuilder, private authService: AuthService,private router:Router) { }

  ngOnInit(): void {
    this.authService.loadToken();
    this.productFromGroup=this._formbuilder.group({
      name: ['',Validators.required],
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
    this.authService.loadToken();
      this.productService.addProduct(this.productFromGroup.value).subscribe(
      (data:any) => {
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
