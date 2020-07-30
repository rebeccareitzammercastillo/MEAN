import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Bicycle Marketplace';
  bikes= [];
  newBike: any;
  // note: any;

constructor(private _httpService: HttpService){}

ngOnInit(){
  this.getBikesFromService();
  this.newBike = { title: "", description:"", price:"", location:"", image:""}
}

getBikesFromService(){
  let observable = this._httpService.getBikes();
  observable.subscribe(data => {console.log("All bikes from component!", data)
  this.bikes = data['bikes'];
});
}

createBikesFromService() {
  let observable = this._httpService.createBikes(this.newBike);
  observable.subscribe(data =>{
    console.log("create Bike from component", data);
    // this.note= data;
    this.newBike = { title: "", description:"", price:"", location:"", image:""}
    this.getBikesFromService();
  })
}

}
