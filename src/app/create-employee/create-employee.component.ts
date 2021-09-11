import { Component, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { FormGroup,FormBuilder , Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
form:any
  constructor(private dialogRef:MatDialogRef<CreateEmployeeComponent>,
    private fb:FormBuilder,
    public user:UserService) { }

    employeeForm = this.fb.group({
      employeeName : ['' ,Validators.required],
      employeeEmail : ['',Validators.required],
      employeePhone : ['' , Validators.required, ]
    })


  onSubmit(){
    console.log(this.employeeForm.value)
  }

  ngOnInit(): void {
  }

}
