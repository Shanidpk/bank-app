import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterservService } from '../services/registerserv.service';


const option = {
  headers: new HttpHeaders
}

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})

export class HomepageComponent implements OnInit {

  depo = this.tran.group({
    Dano: ['', [Validators.pattern('[0-9]*'), Validators.maxLength(7),]],
    Dpass: [''],
    Damnt: ['', [Validators.pattern('[0-9]*')]],
  })

  name: any


  currentacnt: any  //for delete  the account


  constructor(private reg: RegisterservService, private router: Router, private tran: FormBuilder, private http: HttpClient, private data: RegisterservService) {

  }


  ngOnInit() {
     this.name = JSON.parse(localStorage.getItem('currentname') || '')
    }

  getOption() {
    const token = JSON.parse(localStorage.getItem("token") || '')
    let headers = new HttpHeaders()

    if (token) {
      headers = headers.append("token", token)
      option.headers = headers
    }
    return option
  }


  deposit() {

    var account_no: any = this.depo.value.Dano
    var password: any = this.depo.value.Dpass
    var amnt: any = this.depo.value.Damnt

    console.log("the values are", account_no, password)

    const data = {
      account_no,
      password,
      amnt
    }

    return this.http.post('http://localhost:3002/deposit', data, this.getOption()).subscribe((result: any) => {
      console.log("The result is", result);
      if (result) {
        console.log("result", result)
        alert(result.message)
      }
    }, (result) => {
      alert(result.error.message)
    })

  }

  Withdraw() {

    var account_no: any = this.depo.value.Dano
    var pswd: any = this.depo.value.Dpass
    var amnt: any = this.depo.value.Damnt

    const data = {
      account_no,
      pswd,
      amnt
    }

    return this.http.post("http://localhost:3002/withdraw", data, this.getOption()).subscribe((result: any) => {
      if (result) {
        alert(result.message)
      }
    }, (result) => {
      alert(result.error.message)
    })
  }

  delete() {
    this.currentacnt = JSON.parse(localStorage.getItem('currentacno') || "")
  }

  Del(event: any) {
    this.data.delete(event).subscribe((result: any) => {
      if (result) {
        console.log(result)
        alert(result.message)
        localStorage.removeItem('currentacno')
        this.router.navigateByUrl('/')
      }
    })
  }

  canc() {
    this.currentacnt = ''
  }
}



