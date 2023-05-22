import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { Service } from 'src/app/Classes/service';
import { HttpService } from 'src/app/Services/http.service';

@Component({
  selector: 'app-my-services',
  templateUrl: './my-services.component.html',
  styleUrls: ['./my-services.component.scss']
})
export class MyServicesComponent implements OnInit {
myServices:Observable< Array<Service>>=new Observable;

  constructor(public route:Router, public httpService:HttpService) {
    this.myServices=httpService.getAllServices();
   }
  
  ngOnInit(): void {
  }

  moreDetails(ser:Service){
    this.route.navigate(['/MyServices/Details/'+ser.title]);
    ser.showDetails=!ser.showDetails;
    
  }
}
