import { Component, Input, OnInit } from '@angular/core';
import { Service } from 'src/app/Classes/service';

@Component({
  selector: 'app-service-details',
  templateUrl: './service-details.component.html',
  styleUrls: ['./service-details.component.scss']
})
export class ServiceDetailsComponent implements OnInit {
  @Input()
  ser: Service={};
  constructor() { }

  ngOnInit(): void {
  }

}
