import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProducttypeService } from '../services/producttype.service';
import Swal from 'sweetalert2';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-add-typeproduct',
  templateUrl: './add-typeproduct.component.html',
  styleUrls: ['./add-typeproduct.component.css']
})
export class AddTypeproductComponent implements OnInit {
  typeFromGroup!:FormGroup;
  file!:File;
  constructor(private producttypeService:ProducttypeService ,private _formbuilder:FormBuilder, private authService: AuthService,private router:Router) { }

  ngOnInit(): void {
    this.typeFromGroup=this._formbuilder.group({
      name: ['',Validators.required]
    });
  }



  onSubmit(){
    this.authService.loadToken();
    this.producttypeService.addTypeProduct(this.typeFromGroup.value).subscribe(
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
