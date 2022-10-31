import { EOF } from '@angular/compiler';
import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appDirecitve]'
})
export class DirecitveDirective {

  constructor(private ff:ElementRef) {
    console.log("module",ff)
    ff.nativeElement.style.backgroundColor='white'
   }
  }
