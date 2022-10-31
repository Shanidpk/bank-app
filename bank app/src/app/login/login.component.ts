import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { json } from 'express';

import { RegisterservService } from '../services/registerserv.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginfun = this.lg.group({
    LAcntNo: ['', [Validators.pattern('[0-9]*')]],
    LPass: ['']
  })




  constructor(private d: RegisterservService, private router: Router, private lg: FormBuilder) { }






  ngOnInit(): void {
  }

  login() {

    console.log(this.loginfun)
    var acntno = this.loginfun.value.LAcntNo
    var psw = this.loginfun.value.LPass

    var abc = this.d.login(acntno, psw)
      .subscribe((result: any) => {
        if (result) {
          console.log("login result", result)
          alert(result.message)
          localStorage.setItem('token', JSON.stringify(result.token))
          localStorage.setItem('currentacno', JSON.stringify(result.currentacno))
          localStorage.setItem('currentname', JSON.stringify(result.currentuser))
          localStorage.setItem('transaction', JSON.stringify(result.transaction))

          this.router.navigateByUrl('/homepage')
        }
      }, (result) => {
        alert(result.error.message)
      })
  }
}
