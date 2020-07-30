import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-seattle',
  templateUrl: './seattle.component.html',
  styleUrls: ['./seattle.component.scss']
})
export class SeattleComponent implements OnInit {

  constructor(private _httpService: HttpService) { }
  seattle: any;

  ngOnInit() {
    this.seattleFromService();
  }
  seattleFromService(){
    let observable = this._httpService.getSeattle();
    observable.subscribe(data=> {console.log("seattle from service works!", data)
    this.seattle=data
  })
  }
}
