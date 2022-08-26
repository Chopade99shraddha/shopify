import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.scss']
})
export class StarComponent implements OnInit,OnChanges {

  constructor() { }

  ngOnInit(): void {
  }
starWidth=0
widthFoeOneStar=16
@Input() rating=0
@Output() toParent =new EventEmitter<number>()

ngOnChanges(): void {
  this.starWidth=this.widthFoeOneStar*this.rating  // for dispaly rating
}
  sendValueToParent()
  {
    this.toParent.emit(12)
  }



}

