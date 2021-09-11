import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder  } from '@angular/forms';
import { ApplyLeaveComponent } from '../apply-leave/apply-leave.component';
import { MatDialog,MatDialogConfig,MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-leave',
  templateUrl: './leave.component.html',
  styleUrls: ['./leave.component.css']
})
export class LeaveComponent implements OnInit {
  isLinear = false;
  firstFormGroup: any;
  secondFormGroup: any;

  constructor(public dialog:MatDialog) {}

  ngOnInit() {
    
  }

  applyLeave(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width ="35%" ;
    const dialogRef = this.dialog.open(ApplyLeaveComponent,dialogConfig);
  
  }
}