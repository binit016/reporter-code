import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { GlobalContactService } from '../golbalUrl/global-contact.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { companyModule } from '../companies/companies.module';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient,
    private globalConst:GlobalContactService) { }

  
  /*company Module*/
  postCompany(data: any):Observable<companyModule[]> {
    return this.http.post(this.globalConst.saveCompany, data)
      .pipe(map((res: any) => {
        return res;
      }))
  }

  getCompany() :Observable<any>{
    return this.http.get(this.globalConst.addCompany )
      .pipe(map((res: any) => {
        return res;
      }))
  }

  getCompanyById(id:string) :Observable<any>{
    return this.http.get(this.globalConst.companyById +id,{}
      );
  }

 
  updateCompany(data: any):Observable<any> {
    return this.http.put(this.globalConst.updateCompany ,data)
      .pipe(map((res: any) => {
        return res;
      }))
  }

  deleteCompany(id: number) :Observable<any>{
    return this.http.delete(this.globalConst.DeleteDetails + id)
      .pipe(map((res: any) => {
        return res;
      }))
  }

/*Admin Module*/
  postAdmin(data: any):Observable<any> {
    return this.http.post(this.globalConst.saveAdmin, data)
      .pipe(map((res: any) => {
        return res;
      }))
  }

  getAdmin():Observable<any> {
    return this.http.get(this.globalConst.addAdmin)
      .pipe(map((res: any) => {
        return res;
      }))
  }

  updateAdmin(data: any, id: number):Observable<any> {
    return this.http.put(this.globalConst.updateAdmin + data, id)
      .pipe(map((res: any) => {
        return res;
      }))
  }

  deleteAdmin(id: number):Observable<any> {
    return this.http.delete(this.globalConst.DeleteAdmin + id)
      .pipe(map((res: any) => {
        return res;
      }))
  }


  /*Employee Module*/
  postEmployee(data: any):Observable<any> {
    return this.http.post(this.globalConst.saveEmployee, data)
      .pipe(map((res: any) => {
        return res;
      }))
  }

  getEmployee():Observable<any> {
    return this.http.get(this.globalConst.addEmployee)
      .pipe(map((res: any) => {
        return res;
      }))
  }

  updateEmployee(data: any, id: number) :Observable<any>{
    return this.http.put(this.globalConst.updateEmployee + data, id)
      .pipe(map((res: any) => {
        return res;
      }))
  }

  deleteEmployee(id: number):Observable<any> {
    return this.http.delete(this.globalConst.DeleteEmployee + id)
      .pipe(map((res: any) => {
        return res;
      }))
  }







}
