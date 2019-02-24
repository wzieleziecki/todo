import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {

  message ='An error occurred, please contact support at 876-763-232'
  
  constructor() { }

  ngOnInit() {
  }

}
