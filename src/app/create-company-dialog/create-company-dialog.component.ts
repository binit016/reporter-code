import { Component, OnInit, Inject ,Output,EventEmitter} from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from "@angular/material/dialog";
import { companyModel } from './company.model';
import { UserService } from '../services/user.service';
import { CompaniesComponent } from '../companies/companies.component';
@Component({
  selector: 'app-create-company-dialog',
  templateUrl: './create-company-dialog.component.html',
  styleUrls: ['./create-company-dialog.component.css']
})
export class CreateCompanyDialogComponent implements OnInit {

  companyData !: any;
  companyModelObj: companyModel = new companyModel();

  constructor(private dialogRef: MatDialogRef<CreateCompanyDialogComponent>,
    private fb: FormBuilder,
    private user: UserService,

    // private company :CompaniesComponent
  ) { }

  @Output() childEvent = new EventEmitter();


  userprofileForm = this.fb.group({
    companyName: ['', Validators.required],
    companyAddress: ['', Validators.required],
    companyPhone: ['', Validators.required],
    about: ['', Validators.required],
    companyWebsite: [''],
  })


  ngOnInit(): void {
    this.childEvent.emit(this.userprofileForm)
  }

  onSubmit() {
    console.log(this.userprofileForm.value)
    if (this.userprofileForm.invalid) {

      alert("Something went wrong")
    }

    this.user.postCompany(this.userprofileForm.value)
      .subscribe(res => {
        console.log(res);

        alert("employee added successfully");
        let ref = document.getElementById('cancel');
        ref?.click();
        this.userprofileForm.reset();
        this.dialogRef.close();
     
      },
      )
    }

}
