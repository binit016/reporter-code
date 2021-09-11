import { Component, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";

@Component({
  selector: 'app-dialog-questions',
  templateUrl: './dialog-questions.component.html',
  styleUrls: ['./dialog-questions.component.css']
})
export class DialogQuestionsComponent implements OnInit {

  form: any;
  constructor(  private dialogRef:MatDialogRef<DialogQuestionsComponent> ,
    ) { }


  
  ngOnInit(): void {
  }

  onSubmit():void{
    
 
  }

}
