import { Component, OnInit } from '@angular/core';

interface Leave {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-apply-leave',
  templateUrl: './apply-leave.component.html',
  styleUrls: ['./apply-leave.component.css']
})
export class ApplyLeaveComponent implements OnInit {
  leaves: Leave[] = [
    {value: 'sick leave-0', viewValue: 'Sick Leave'},
    {value: 'earned leave-1', viewValue: 'Earned Leave'},
    {value: 'casual leave-3', viewValue: 'Causual Leave'},

  ];
  constructor() { }

  ngOnInit(): void {
  }

}
