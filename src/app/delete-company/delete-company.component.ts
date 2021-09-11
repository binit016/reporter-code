import { Component, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { UserService } from '../services/user.service';
@Component({
  selector: 'app-delete-company',
  templateUrl: './delete-company.component.html',
  styleUrls: ['./delete-company.component.css']
})
export class DeleteCompanyComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<DeleteCompanyComponent>,
    public user :UserService) { }



  ngOnInit(): void {
  }

  

}
