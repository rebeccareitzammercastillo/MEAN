import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-dc',
  templateUrl: './dc.component.html',
  styleUrls: ['./dc.component.scss']
})
export class DcComponent implements OnInit {

  constructor(private _httpService: HttpService) { }
  dc: any;

  ngOnInit() {
    this.dcFromService();
  }
  
  dcFromService(){
    let observable = this._httpService.getDC();
    observable.subscribe(data=> {console.log("san jose from service works!", data)
    this.dc=data
  })
}
}
