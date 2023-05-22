import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddResponseComponent } from 'src/app/Components/add-response/add-response.component';
import { ContactComponent } from 'src/app/Components/contact/contact.component';
import { CustomerResponseComponent } from 'src/app/Components/customer-response/customer-response.component';
import { HomeComponent } from 'src/app/Components/home/home.component';
import { MyServicesComponent } from 'src/app/Components/my-services/my-services.component';
import { NotFoundComponent } from 'src/app/Components/not-found/not-found.component';
// import { AddFeedbackComponent } from './Components/add-feedback/add-feedback.component';
import { ServiceDetailsComponent } from './Components/service-details/service-details.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"Home",component:HomeComponent},
  {path:"Responses",component:CustomerResponseComponent},
  {path:"addResponse",component:AddResponseComponent},
// {path:"addResponse",component:AddFeedbackComponent},
  {path:"MyServices",component:MyServicesComponent, children:[
    {path:"Details/:title", component:ServiceDetailsComponent}
  ]},
  {path:"Contact",component:ContactComponent},
  {path:"**",component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
