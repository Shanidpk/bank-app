import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomepageComponent } from './homepage/homepage.component';

import { TransactionComponent } from './transaction/transaction.component';
import { DeleteComponent } from './delete/delete.component';

import { DirecitveDirective } from 'src/directives/direcitve.directive';

import {HttpClientModule} from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HomepageComponent,
    TransactionComponent,
    DeleteComponent,
    DirecitveDirective,

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,          //use in ngmomdel
    ReactiveFormsModule, //formbulider
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
