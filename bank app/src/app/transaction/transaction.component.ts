import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomepageComponent } from '../homepage/homepage.component';
import { RegisterservService } from '../services/registerserv.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {


  dummyarray: any = []
  balance: any

  constructor(private router: Router, private det: RegisterservService, private http: HttpClient) { }

  ngOnInit(): void {
    const acntno = JSON.parse(localStorage.getItem("currentacno") || '')
    this.http.post('http://localhost:3002/transaction', { "acnt": acntno }).subscribe((data: any) => {
      console.log("data", data);
      this.dummyarray.push(data.transaction)
      console.log("The array is", this.dummyarray);
      this.balance = data.balance
      console.log("balnce", this.balance);

    })
  }
}