import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-all-businesses',
  templateUrl: './all-businesses.component.html',
  styleUrls: ['./all-businesses.component.scss']
})
export class AllBusinessesComponent  implements OnInit {
  businesses=[];

  constructor(private _httpService: HttpService){}

  ngOnInit(){
    this.businessesFromService();
  }
  
  businessesFromService(){
    console.log("**************************component")
    let observable = this._httpService.getBusinesses();
    observable.subscribe(data => {console.log("All businesses from component!", data)
    this.businesses = data['businesses'];
  });
}
deleteBusinessesFromService(id) {
  let observable = this._httpService.deleteBusinesses(id);
  observable.subscribe(data =>{console.log("data from delete", data);
  this.businessesFromService();
  })
}
}
