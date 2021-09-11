import { DialogAdminComponent } from './../dialog-admin/dialog-admin.component';
import { DialogQuestionsComponent } from './../dialog-questions/dialog-questions.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig ,MatDialogRef} from '@angular/material/dialog';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public dialog:MatDialog) { }

openDialog(){
  const dialogConfig = new MatDialogConfig();
  dialogConfig.width = "50%";
  const dialogRef = this.dialog.open(DialogQuestionsComponent,dialogConfig);
}

openAdminDialog(){
  const dialogConfig = new MatDialogConfig();
  dialogConfig.width = "50%";
  const dialogRef = this.dialog.open(DialogAdminComponent,dialogConfig);

}  




  ngOnInit(): void {
  }

}
