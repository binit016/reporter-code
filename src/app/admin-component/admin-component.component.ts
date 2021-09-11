import { Component, OnInit,ViewChild } from '@angular/core';
import { MatDialog,MatDialogConfig,MatDialogRef } from '@angular/material/dialog';
import { CreateAdminComponent } from '../create-admin/create-admin.component';
import { DeleteAdminComponent } from '../delete-admin/delete-admin.component';
import { MatPaginator } from '@angular/material/paginator';
import { adminModule } from './admin.module';
import { MatTableDataSource } from '@angular/material/table';
import { UserService } from '../services/user.service';
import { MatSort } from '@angular/material/sort';


@Component({
  selector: 'app-admin-component',
  templateUrl: './admin-component.component.html',
  styleUrls: ['./admin-component.component.css']
})
export class AdminComponentComponent implements OnInit {
  ELEMENT_DATA!: adminModule[];
  displayedColumns:string[]=['adminName','adminEmail','companyId','action'];
  dataSource =new MatTableDataSource<adminModule>(this.ELEMENT_DATA) ;

  constructor(public dialog:MatDialog,
    public user :UserService) { }

@ViewChild(MatPaginator) paginator! :MatPaginator
@ViewChild(MatSort)sort: MatSort = new MatSort;

  ngOnInit(): void {
    this.getAllAdmin();
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort
  }

  getAllAdmin(){
   this.user.getAdmin().subscribe((res:any)=>{
     console.log(res);
     this.dataSource = new MatTableDataSource<adminModule>(res.data)
   })
  }

  createAdmin(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width ="45%" ;
    const dialogRef = this.dialog.open(CreateAdminComponent,dialogConfig);
  }

  onEdit(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width ="45%" ;
    const dialogRef = this.dialog.open(CreateAdminComponent,dialogConfig);

    
  }

  deleteAdmin(element:any){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width ="25%" ;
    const dialogRef = this.dialog.open(DeleteAdminComponent,dialogConfig);
    this.user.deleteAdmin(element)
    .subscribe(res=>{
      console.log(res)
    })

  }

 

  



}
