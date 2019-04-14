import { Component, OnInit,ViewChild, Inject } from '@angular/core';
import { ProductdataserviceService } from '../productdataservice.service';
import { MatTable, MatPaginator, MatTableDataSource, MatDialog } from '@angular/material';
import { RouterModule, Route, Router } from '@angular/router';
import { ConfirmationDialogComponent } from '../../../servicearea/confirmation-dialog/confirmation-dialog.component';
import { MatSnackBar } from '@angular/material';
import { productmodelsform, productmodels } from '../../../models/productmodels';
@Component({
  selector: 'app-productdata-list',
  templateUrl: './productdata-list.component.html',
  styleUrls: ['./productdata-list.component.css']
})
export class ProductdataListComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  AllElement: MatTableDataSource<productmodels>;

  displayedColumns: string[] = ['productName', 'productTitle', 'productGroup', 'price', 'buttons'];
  displayedColumnsName: string[] = ['Product Name', 'Product Title', 'Product Group', 'Price'];

  constructor(private snackBar: MatSnackBar, private productService: ProductdataserviceService, public dialog: MatDialog, public _router: Router) { }
  ngAfterViewInit(): void {
    this.productService.getAll().subscribe((posts) => {
      this.AllElement = new MatTableDataSource(posts as any);
      this.AllElement.paginator = this.paginator;
      //setTimeout(() => this.AllElement.paginator = this.paginator);
      console.log(posts);
    });
  }
  ngOnInit() {
  }
  public doFilter = (value: string) => {
    this.AllElement.filter = value.trim().toLocaleLowerCase();
  }
  onDelete(id) {
    console.log("Inside Delete--" + id);
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '450px',
      hasBackdrop: true,
      data: "Are you sure you want to delete this data?"
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log('Yes clicked');
        this.productService.delete(id).subscribe((posts) => {
          this.AllElement = new MatTableDataSource(posts as any);
          this.AllElement.paginator = this.paginator;
          console.log(posts);

          this.snackBar.open('Data Deleted Successfully', "Remove", {
            duration: 6000,
            verticalPosition: 'top',
            panelClass: ['blue-snackbar']
          });
        },
          error => {
            this.snackBar.open('Unsuccessfull', "Remove", {
              duration: 6000,
              verticalPosition: 'top',
              panelClass: ['red-snackbar']
            });
          }
        )
      }//if end
    })//dialog ref
  }//Delete end
  

  onUpdate(id) {
    this._router.navigate(['/product/update', id]);
  }
}


