import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Product } from '../Models/Product';
import { AuthService } from '../services/auth.service';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  products!: Product[];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  displayedColumns: string[] = ['Id', 'Name','DateCreated', 'Type', 'Action'];
  dataSource: any;
  constructor(private productService:ProductService, private dialog: MatDialog, private authService: AuthService,private router:Router) { }
  ngOnInit(): void {
    this.authService.loadToken();

    this.productService.getProduct().subscribe(
      (data: any) => {
          this.products = data;
          this.dataSource = new MatTableDataSource<Product>(this.products);
          this.dataSource.sort = this.sort;
          this.dataSource.paginator = this.paginator;

      }
    )

  }

  editProduct(element:any){
    this.router.navigateByUrl('product/'+element.id, {'state': {'product': element}});
  }

}
