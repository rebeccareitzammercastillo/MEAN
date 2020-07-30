import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-dallas',
  templateUrl: './dallas.component.html',
  styleUrls: ['./dallas.component.scss']
})
export class DallasComponent implements OnInit {

  constructor(private _httpService: HttpService) { }
  dallas: any;

  ngOnInit() {
    this.dallasFromService();
  }
  
  dallasFromService(){
    let observable = this._httpService.getDallas();
    observable.subscribe(data=> {console.log("dallas from service works!", data)
    this.dallas=data
  })
}
}
