import { Component, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { FormGroup, FormBuilder,Validators} from '@angular/forms';
import { UserService } from '../services/user.service';
@Component({
  selector: 'app-create-admin',
  templateUrl: './create-admin.component.html',
  styleUrls: ['./create-admin.component.css']
})
export class CreateAdminComponent implements OnInit {
form:any
  constructor(private dialogRef:MatDialogRef<CreateAdminComponent> ,
    private fb: FormBuilder,
    private user: UserService,) { }

    Form = this.fb.group({
      adminName :['', Validators.required],
      adminPassword :['' , Validators.required],
      adminEmail :['' , Validators.required],
      companyId :['', Validators.required]
    })

  onSubmit(){
    console.log(this.Form.value);
    if(this.Form.invalid){
      alert("Something went Wrong")
    }
    this.user.postAdmin(this.Form.value).subscribe(res=>{
      console.log(res)
      alert("Added successfully");
      let ref = document.getElementById('cancel');
        ref?.click();
      this.Form.reset();
      this.dialogRef.close();
      
    })

  }

 
  ngOnInit(): void {
  }

}
