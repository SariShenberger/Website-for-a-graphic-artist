import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  name:string="";
  Email:string="";
  phone:string="";
  description="";
  constructor() { }

  ngOnInit(): void {
  }


  save(){
    debugger

  }
}
