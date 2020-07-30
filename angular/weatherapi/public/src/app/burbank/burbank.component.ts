import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-burbank',
  templateUrl: './burbank.component.html',
  styleUrls: ['./burbank.component.scss']
})
export class BurbankComponent implements OnInit {

  constructor(private _httpService: HttpService) { }
  burbank: any;

  ngOnInit() {
    this.burbankFromService();
  }
  
  burbankFromService(){
    let observable = this._httpService.getBurbank();
    observable.subscribe(data=> {console.log("san jose from service works!", data)
    this.burbank=data
  })
}
}
