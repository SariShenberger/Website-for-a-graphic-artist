import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HighlightDirective } from './highlight.directive';
import { HomeComponent } from 'src/app/Components/home/home.component';
import { MyServicesComponent } from 'src/app/Components/my-services/my-services.component';
import { ContactComponent } from 'src/app/Components/contact/contact.component';
import { CustomerResponseComponent } from 'src/app/Components/customer-response/customer-response.component';
import { AddResponseComponent } from 'src/app/Components/add-response/add-response.component';
import { NotFoundComponent } from 'src/app/Components/not-found/not-found.component';
import { ServiceDetailsComponent } from './Components/service-details/service-details.component';
import {HttpClientModule} from '@angular/common/http';
import {  ReactiveFormsModule} from '@angular/forms';
import { ValidationDirective } from './validation.directive';
import {  FormsModule, FormGroup} from '@angular/forms';
import { QuotationMarksPipe } from './quotation-marks.pipe';



@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
    HomeComponent,
    MyServicesComponent,
    ContactComponent,
    CustomerResponseComponent,
    AddResponseComponent,
    NotFoundComponent,

    ServiceDetailsComponent,
    ValidationDirective,
    QuotationMarksPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,    
    ReactiveFormsModule,
    FormsModule,
   

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
