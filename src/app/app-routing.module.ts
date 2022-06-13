import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTypeproductComponent } from './add-typeproduct/add-typeproduct.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EditproductComponent } from './editproduct/editproduct.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path :'',component: LoginComponent },
  { path :'register',component: RegisterComponent },
  { path :'dashboard',component: DashboardComponent },
  { path :'product',component: AddproductComponent },
  { path :'product/:id',component: EditproductComponent },
  { path :'productType',component: AddTypeproductComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
