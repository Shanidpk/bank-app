import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { min } from 'rxjs';
import { RegisterservService } from '../services/registerserv.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm = this.fb.group({
    fname: ['', [Validators.pattern('[a-zA-z ]*')]],
    RAcntNo: ['', [Validators.maxLength(7), Validators.minLength(5), Validators.pattern('[0-9]*')]],
    sDep: ['', [Validators.maxLength(6)]],
    pass: [''],
  })

  constructor(private reg: RegisterservService, private router: Router, private fb: FormBuilder) { }



  ngOnInit(): void {
    console.log(this.registerForm); 
  }

  Reg() {

    var name = this.registerForm.value.fname
    var anct = this.registerForm.value.RAcntNo
    var dep = this.registerForm.value.sDep
    var npass = this.registerForm.value.pass

    console.log(name, anct, dep, npass);

    if (this.registerForm.valid) {
      this.reg.Regser(name, anct, dep, npass).subscribe((result: any) => {
        if (result) {
          alert(result.message)
          this.router.navigateByUrl('login')
        }
      } , (result) => {
        alert(result.error.message)
      })
    }

  }


}
