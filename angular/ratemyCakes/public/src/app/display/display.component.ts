import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit {
  @Input() unoCake:any;
  avgRank: Number;
  constructor() { }
  
  ngOnInit() {
  
  }

  rank():Number{
    var sum=0;
    for(var i=0; i<this.unoCake.comments.length; i++){
      sum+=this.unoCake.comments[i].rating
    }
    return sum/this.unoCake.comments.length
  }
}
