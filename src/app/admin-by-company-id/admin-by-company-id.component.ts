import { Component, OnInit,ViewChild } from '@angular/core';
import { MatDialog,MatDialogRef, MatDialogConfig } from '@angular/material/dialog';
import { CreateAdminComponent } from '../create-admin/create-admin.component';
import { UserService } from '../services/user.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { adminModule } from '../admin-component/admin.module';
@Component({
  selector: 'app-admin-by-company-id',
  templateUrl: './admin-by-company-id.component.html',
  styleUrls: ['./admin-by-company-id.component.css']
})
export class AdminByCompanyIdComponent implements OnInit {
  ELEMENT_DATA!: adminModule[];
  displayedColumns:string[]=['adminName','adminEmail','companyId'];
  dataSource =new MatTableDataSource<adminModule>(this.ELEMENT_DATA) ;
  
  
  constructor(public dialog:MatDialog,
    public user :UserService) { }

@ViewChild(MatPaginator) paginator! :MatPaginator
@ViewChild(MatSort)sort: MatSort = new MatSort;

  ngOnInit(): void {
    this.getCompanybyId(id);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort
  }

  getCompanybyId(id:any){
   this.user.getCompanyById(id).subscribe((res:any)=>{
     console.log(res);
     this.dataSource = new MatTableDataSource<adminModule>(res.data)
   })
  }

  createAdmin(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width ="45%" ;
    const dialogRef = this.dialog.open(CreateAdminComponent,dialogConfig);

  }

  
  }

  // deleteAdmin(element:any){
  //   const dialogConfig = new MatDialogConfig();
  //   dialogConfig.width ="25%" ;
  //   const dialogRef = this.dialog.open(DeleteAdminComponent,dialogConfig);
  //   this.user.deleteAdmin(element)
  //   .subscribe(res=>{
  //     console.log(res)
  //   })

  // }




function id(id: any) {
  throw new Error('Function not implemented.');
}

