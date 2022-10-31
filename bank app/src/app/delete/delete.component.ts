import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

@Input() item:string | undefined

@Output() delete = new EventEmitter()
@Output() cancel = new EventEmitter()





  constructor() { }

  ngOnInit(): void { 
  }

  del(){
    this.delete.emit(this.item)
  }

  canc(){
    this.cancel.emit()
  }
}
