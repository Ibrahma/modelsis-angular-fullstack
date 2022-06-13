import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from "@angular/common/http";
import { MatSliderModule } from '@angular/material/slider';
import { ToastrModule } from 'ngx-toastr';
import { DashboardComponent } from './dashboard/dashboard.component';

import {MatExpansionModule} from '@angular/material/expansion';
import {MatStepperModule} from "@angular/material/stepper";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatListModule} from "@angular/material/list";
import {MatIconModule} from '@angular/material/icon';
import {MatTableModule} from "@angular/material/table";
import {MatRadioModule} from "@angular/material/radio";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatDialogModule} from "@angular/material/dialog";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {MatCardModule} from "@angular/material/card";
import {MatMenuModule} from "@angular/material/menu";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatSortModule} from "@angular/material/sort";
import {MatSelectModule} from "@angular/material/select";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatTabsModule} from '@angular/material/tabs';
import { HeadComponent } from './layouts/head/head.component';
import { SidemenuComponent } from './layouts/sidemenu/sidemenu.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { HeaderComponent } from './layouts/header/header.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { EditproductComponent } from './editproduct/editproduct.component';
import { AddTypeproductComponent } from './add-typeproduct/add-typeproduct.component';
import {  CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    HeadComponent,
    SidemenuComponent,
    NavbarComponent,
    HeaderComponent,
    AddproductComponent,
    EditproductComponent,
    AddTypeproductComponent
  ],
  imports: [
    MatSliderModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatStepperModule,
    MatInputModule,
    MatListModule,
    MatIconModule,
    MatTableModule,
    MatRadioModule,
    MatToolbarModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSnackBarModule,
    MatCardModule,
    MatMenuModule,
    MatPaginatorModule,
    MatSelectModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatExpansionModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatTabsModule,
    MatSortModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule { }
