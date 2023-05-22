import { Component } from '@angular/core';
import { GiftService } from './Services/gift.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'basicProject';
  entitlement:Boolean=false;
  
  constructor(public giftSer:GiftService){
    this.giftSer.getEntitlement().subscribe((data)=>{
      this.entitlement=data;
    })
  }
}
