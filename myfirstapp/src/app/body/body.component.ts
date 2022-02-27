import { Component, OnInit ,Input,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

@Output() newv=new EventEmitter<string>();
  @Input() item:any;
  parent="";
  add(data:any){
this.newv.emit(data);
  }
}
