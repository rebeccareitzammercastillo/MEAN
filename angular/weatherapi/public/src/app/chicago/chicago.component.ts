import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-chicago',
  templateUrl: './chicago.component.html',
  styleUrls: ['./chicago.component.scss']
})
export class ChicagoComponent implements OnInit {

  constructor(private _httpService: HttpService) { }
  chicago: any;

  ngOnInit() {
    this.chicagoFromService();
  }
  
  chicagoFromService(){
    let observable = this._httpService.getChicago();
    observable.subscribe(data=> {console.log("chicago from service works!", data)
    this.chicago=data
  })
}
}
