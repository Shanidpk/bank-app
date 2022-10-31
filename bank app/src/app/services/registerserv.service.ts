import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegisterservService {
  databse: any = {}




  constructor(private http: HttpClient) { }
  //  storedata(){
  //     localStorage.setItem("newdbstore",JSON.stringify(this.databse))
  //   }
  Regser(fname: any, acnt: any, amount: any, psw: any) {

    const data = {
      fname,
      acnt,
      amount,
      psw
    }

    return this.http.post('http://localhost:3002/register', data)

  }



  login(account_no: any, password: any) {

    const data = {
      account_no,
      password

    }

    return this.http.post("http://localhost:3002/login", data)

  }

  delete(acnt: any) {
    return this.http.delete('http://localhost:3002/delete/' + acnt)
  }
}




