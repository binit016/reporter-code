import { Component, OnInit, Inject ,Output,EventEmitter} from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from "@angular/material/dialog";
import { companyModel } from './company.model';
import { UserService } from '../services/user.service';
import { CompaniesComponent } from '../companies/companies.component';
@Component({
  selector: 'app-edit-company-dialog',
  templateUrl: './edit-company-dialog.component.html',
  styleUrls: ['./edit-company-dialog.component.css']
})
export class EditCompanyDialogComponent implements OnInit {

  companyData !: any;
  companyModule: Array<any> = [];
  displayedColumns = ['companyName', 'companyAddress', 'companyPhone', 'about', 'companyWebsite', 'action'];
  // dataSource = new MatTableDataSource(this.companyModule);
  res: any;
  // userprofileForm: any;

  constructor(private dialogRef: MatDialogRef<EditCompanyDialogComponent>,
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
