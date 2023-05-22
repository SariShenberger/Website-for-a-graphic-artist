import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GiftService {

  entitlement$:BehaviorSubject<any>=new BehaviorSubject(false);
  constructor() { }

  updateEntitlement(){
    this.entitlement$.next(true);
    console.log(this.entitlement$.closed);
  }
  getEntitlement(){
    return this.entitlement$;
  }
}
