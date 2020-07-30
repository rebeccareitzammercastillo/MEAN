import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-sanjose',
  templateUrl: './sanjose.component.html',
  styleUrls: ['./sanjose.component.scss']
})
export class SanjoseComponent implements OnInit {

  constructor(private _httpService: HttpService) { }
  sanjose: any;

  ngOnInit() {
    this.sanjoseFromService();
  }
  
  sanjoseFromService(){
    let observable = this._httpService.getSanJose();
    observable.subscribe(data=> {console.log("san jose from service works!", data)
    this.sanjose=data
  })
}
}