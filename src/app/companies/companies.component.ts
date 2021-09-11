import { CreateCompanyDialogComponent } from './../create-company-dialog/create-company-dialog.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { UserService } from '../services/user.service';
import { DeleteCompanyComponent } from '../delete-company/delete-company.component';
import { MatTableDataSource } from '@angular/material/table';
import { companyModule } from './companies.module';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort'
import { Router } from '@angular/router';
import { EditCompanyDialogComponent } from '../edit-company-dialog/edit-company-dialog.component';


@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css']
})


export class CompaniesComponent implements OnInit {
  companyData !: any;
  companyModule: Array<any> = [];
  displayedColumns = ['companyName', 'companyAddress', 'companyPhone', 'about', 'companyWebsite', 'action'];
  dataSource = new MatTableDataSource(this.companyModule);
  res: any;
  userprofileForm: any;

  constructor(public dialog: MatDialog,
    private user: UserService,
    private router: Router
  ) { }

  @ViewChild(MatSort) sort: MatSort = new MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.getAllCompany();

  }

  getAllCompany() {
    this.user.getCompany().subscribe((res: any) => {
      this.dataSource = new MatTableDataSource<companyModule>(res.data);
      console.log(res);
    })
  }

  getCompanyById(id: any) {
    this.user.getCompanyById(id).subscribe((res: any) => {
      console.log(res);
    })
  }

  createCompany() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.width = "55%";
    const dialogRef = this.dialog.open(CreateCompanyDialogComponent, dialogConfig);

    // this.user.postCompany(data).subscribe((res:any)=>{

    // })
  };
  

  onEdit(element: any ) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "55%";
    const dialogRef = this.dialog.open(EditCompanyDialogComponent, dialogConfig);
    console.log(element);
    this.user.updateCompany(element).subscribe(res => {
      if (res != null && res !== undefined) {
        element.disabled = false;
        
      }
    })


    dialogRef.afterClosed().subscribe(data => {
      console.log(data);
      if (data !== "") {
        this.userprofileForm.setValue({
          companyName: data.companyName,
          companyAddress: data.companyAddress,
          companyPhone: data.companyPhone,
          about: data.about,
          companywebsite: data.companyWebsite

        })
      }
    })
  }

  deleteCompany(element: any) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = "25%";
    const dialogRef = this.dialog.open(DeleteCompanyComponent, dialogConfig);
    dialogRef.afterClosed().subscribe((confirmed: boolean) => {
      this.user.deleteCompany(element).subscribe(res => {
        console.log(res);
      })
    })
  }
  // removeCompany(id: any) {
  //   this.user.deleteCompany(id).subscribe(res => {
  //     console.log(res);

  //   })
  // }

  companyName() {
    this.router.navigate(['/adminByCompanyid'])
  }
}



