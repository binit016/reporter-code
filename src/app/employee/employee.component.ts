import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { CreateEmployeeComponent } from '../create-employee/create-employee.component';
import { MatPaginator } from '@angular/material/paginator';
import { UserService } from '../services/user.service';
import { employeeModule } from './employee.module';
import { MatTableDataSource } from '@angular/material/table';
import { DeleteEmployeeComponent } from '../delete-employee/delete-employee.component';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {


  employeeModule: Array<any> = [];
  dataSource = new MatTableDataSource(this.employeeModule);
  displayedColumns = ['employeeName', 'employeeEmail', 'employeePhone', 'action'];
  

  constructor(public dialog: MatDialog,
  public user : UserService) { }


  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngOnInit(): void {
    this.getAllEmployee();
    this.dataSource.paginator = this.paginator;
    
  }

  getAllEmployee(){
    this.user.getEmployee().subscribe(res=>{
      this.dataSource = new MatTableDataSource<employeeModule>(res.data);
      console.log(res);
    })
  }

  createEmployee() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = "45%";
    const dialogRef = this.dialog.open(CreateEmployeeComponent, dialogConfig);
  }

  onEdit() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = "45%";
    const dialogRef = this.dialog.open(CreateEmployeeComponent, dialogConfig);
  }

  deleteEmployee(element:any) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = "25%";
    const dialogRef = this.dialog.open(DeleteEmployeeComponent, dialogConfig);
    this.user.deleteEmployee(element).subscribe(res=>{
      console.log(res);
    })

  }


}

