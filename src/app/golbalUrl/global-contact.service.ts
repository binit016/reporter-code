import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalContactService {
  // baseUrl

  baseUrl = "http://143.244.130.4:8080/api/";

  saveCompany: string = this.baseUrl + "company/create";

  addCompany: string = this.baseUrl + "getAll/companies";

  companyById : string = this.baseUrl + "companies/getById?companyId=87e31081-da69-49b8-992f-017a66403731";

  updateCompany: string = this.baseUrl + "company/update";

  DeleteDetails: string = this.baseUrl + "company/delete?companyId=583197f2-a01a-40c7-8024-9a3399f43fd4";

  saveAdmin: string = this.baseUrl + "admin/create";

  addAdmin: string = this.baseUrl + "admin/getAll";

  updateAdmin: string = this.baseUrl + "admin/update";

  DeleteAdmin: string = this.baseUrl + "admin/delete?adminId=d1d8f248-905c-4bd6-9120-19a3c1b34540";

  saveEmployee: string = this.baseUrl + "create/employee";

  addEmployee: string = this.baseUrl + "employee/getAll";

  updateEmployee : string = this.baseUrl + "employee/update";

  DeleteEmployee : string = this.baseUrl + "employee/delete?employeeId=23480762-64d9-419a-8ef8-9fd544008997";

}
