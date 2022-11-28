import { Component, EventEmitter ,OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {

  @Input() title = "";
  @Input() data = [];
  @Output() selectedValue = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  detectSelect(event:any){
    this.selectedValue.emit(event);
  }

}
