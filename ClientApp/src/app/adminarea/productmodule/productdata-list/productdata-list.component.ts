import { Component, OnInit,ViewChild, Inject } from '@angular/core';
import { ProductdataserviceService } from '../productdataservice.service';
import { MatTable, MatPaginator, MatTableDataSource, MatDialog } from '@angular/material';
import { RouterModule, Route, Router } from '@angular/router';
import { ConfirmationDialogComponent } from '../../../servicearea/confirmation-dialog/confirmation-dialog.component';
@Component({
  selector: 'app-productdata-list',
  templateUrl: './productdata-list.component.html',
  styleUrls: ['./productdata-list.component.css']
})
export class ProductdataListComponent implements OnInit {
  @ViewChild(MatPaginator, {  }) paginator: MatPaginator;
  AllElement: any;
  displayedColumns: string[] = ['productName', 'productTitle', 'productGroup', 'price', 'buttons'];
  displayedColumnsName: string[] = ['Product Name', 'Product Title', 'Product Group', 'Price'];

  registerText: any = "List Product";

  successalert: boolean = false;
  dangeralert: boolean = false;

  dangeralerttext: string = 'default';
  successalerttext: string = 'default';

  constructor(private productService: ProductdataserviceService, public dialog: MatDialog, public _router:Router) { }

  ngOnInit() {   
    this.productService.getAll().subscribe((posts) => {
      this.AllElement = posts;
      this.AllElement.paginator = this.paginator;
      console.log(posts);
    });
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
          this.AllElement = posts;
          this.AllElement.paginator = this.paginator;
          console.log(posts);
          this.successalert = true;
          this.successalerttext = "Data Deleted successfully";
        });
      }
    }); 
  }

  onUpdate(id) {
    this._router.navigate(['/productdataupdate', id]);
  }
}


