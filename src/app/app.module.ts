import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import {MatDialogModule} from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import {TextFieldModule} from '@angular/cdk/text-field';
import { LoginComponent } from './login/login.component';
import {MatTableModule} from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { DialogQuestionsComponent } from './dialog-questions/dialog-questions.component';
import { DialogAdminComponent } from './dialog-admin/dialog-admin.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { ProfileComponent } from './profile/profile.component';
import { CompaniesComponent } from './companies/companies.component';
import { LeaveComponent } from './leave/leave.component';
import { CreateCompanyDialogComponent } from './create-company-dialog/create-company-dialog.component';
import { AppHomeComponent } from './app-home/app-home.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatStepperModule} from '@angular/material/stepper';
import { UserService } from './services/user.service';
import { GlobalContactService } from './golbalUrl/global-contact.service';
import { DeleteCompanyComponent } from './delete-company/delete-company.component';
import { AdminComponentComponent } from './admin-component/admin-component.component';
import { CreateAdminComponent } from './create-admin/create-admin.component';
import { ApplyLeaveComponent } from './apply-leave/apply-leave.component';
import { MatNativeDateModule } from '@angular/material/core';
import { EmployeeComponent } from './employee/employee.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { MatSortModule } from '@angular/material/sort';
import { DeleteAdminComponent } from './delete-admin/delete-admin.component';
import { DeleteEmployeeComponent } from './delete-employee/delete-employee.component';
import { AdminByCompanyIdComponent } from './admin-by-company-id/admin-by-company-id.component';
import { EditCompanyDialogComponent } from './edit-company-dialog/edit-company-dialog.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NavbarComponent,
    HeaderComponent,
    DialogQuestionsComponent,
    DialogAdminComponent,
    ProfileComponent,
    CompaniesComponent,
    LeaveComponent,
    CreateCompanyDialogComponent,
    AppHomeComponent,
    DeleteCompanyComponent,
    AdminComponentComponent,
    CreateAdminComponent,
    ApplyLeaveComponent,
    EmployeeComponent,
    CreateEmployeeComponent,
    DeleteAdminComponent,
    DeleteEmployeeComponent,
    AdminByCompanyIdComponent,
    EditCompanyDialogComponent,
    
  ],
entryComponents:[DialogQuestionsComponent, 
  DialogAdminComponent,
  CreateCompanyDialogComponent,
  DeleteCompanyComponent,
  CreateAdminComponent,
  ApplyLeaveComponent,
  DeleteAdminComponent
],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    ReactiveFormsModule,
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule,
    MatMenuModule,
    MatDividerModule,
    MatListModule,
    MatDialogModule,
    MatFormFieldModule,
    HttpClientModule,
    TextFieldModule,
    MatGridListModule,
    MatStepperModule,
    MatTableModule,
    MatDatepickerModule,
    MatSelectModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatSortModule

  ],


  providers: [UserService,GlobalContactService ],
  bootstrap: [AppComponent]
})
export class AppModule { }















