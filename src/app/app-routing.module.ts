import { LeaveComponent } from './leave/leave.component';
import { CompaniesComponent } from './companies/companies.component';
import { DialogQuestionsComponent } from './dialog-questions/dialog-questions.component';
import { ProfileComponent } from './profile/profile.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import{HomeComponent } from './home/home.component';
import { AdminComponentComponent } from './admin-component/admin-component.component';
import { EmployeeComponent } from './employee/employee.component';
import { AdminByCompanyIdComponent } from './admin-by-company-id/admin-by-company-id.component';
const routes: Routes = [

  {path : 'login' , component:LoginComponent},
  {path :'home' ,  component:HomeComponent},
  {path :'profile' , component:ProfileComponent},
  {path :'companies' , component:CompaniesComponent},
  {path :'leave' , component:LeaveComponent},
   {path:'admincomponent' ,component:AdminComponentComponent},
   {path :'employee' , component:EmployeeComponent},
   {path :'adminByCompanyid' , component:AdminByCompanyIdComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
