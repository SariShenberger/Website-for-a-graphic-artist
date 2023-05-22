import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Response } from 'src/app/Classes/response';
import { HttpService } from 'src/app/Services/http.service';

@Component({
  selector: 'app-customer-response',
  templateUrl: './customer-response.component.html',
  styleUrls: ['./customer-response.component.scss']
})
export class CustomerResponseComponent implements OnInit,OnDestroy {
responses:Array<Response>=[];
subscription:Subscription=new Subscription;
putSubscription:Subscription=new Subscription;
  constructor(public httpService:HttpService, public rout:Router) { }

  ngOnDestroy(): void {
    this.subscription.unsubscribe;
    this.putSubscription.unsubscribe;
  }

  ngOnInit(): void {
    this.subscription=this.httpService.getAllResponses().subscribe((data)=>{
      this.responses=data;
      console.log('data',this.responses);
    },(err)=>{
      console.log(err);
    })
  }
  addLike(response:Response){
    if(response.likes!=null)
    response.likes=response.likes+1;
    this.subscription=this.httpService.updateResponse(response).subscribe((data)=>{
      console.log('data1',this.responses);
      this.responses=data;
      console.log('data',this.responses);
    },(err)=>{
      console.log(err);
    })
  }
  addResponse(){
    this.rout.navigate(["/addResponse"]);
  }
}
