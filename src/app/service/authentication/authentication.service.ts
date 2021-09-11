import { LogInData } from './../../model/loginData';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private readonly User = new LogInData('sahana@gmail.com','123456');
  // private readonly User: LogInData = new LogInData('user', 'test');

  isAuthenticated = false;



  constructor(private router:Router,
    ) { }


  authenticate(logInData:LogInData){
    if(this.checkCredentials(logInData)){
      this.isAuthenticated=true;
      this.router.navigate(['home']);
      return true;
    }
    this.isAuthenticated = false;
    return false;

  }
  private checkCredentials(LogInData:LogInData):any{
return this.checkEmail(LogInData.getEmail()) && this.checkPassword(LogInData.getPassword());
  }

  private checkEmail(email:string):any{
return email === this.User.getEmail();
  }

  private checkPassword(password:string):any{
    return password=== this.User.getPassword();
  }
}
