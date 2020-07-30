import { Component, OnInit } from '@angular/core';
import {HttpService} from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'public';
  cakes = [];
  newCake: any;
  rateComment: any;
  cakeClicked= false;
  cakeDeet: any;

  constructor(private _httpService: HttpService){}
  ngOnInit(){
    this.getCakesFromService();
    this.newCake = { name: "", image: "" }
  }
  getCakesFromService(){
    let observable = this._httpService.getCakes();
    observable.subscribe(data => {console.log("Got our Cakes!", data)
    this.cakes = data['cakes'];
  });
  }
  createCakesFromService() {
    let observable = this._httpService.createCakes(this.newCake);
    observable.subscribe(data =>{
      console.log("Got data from the create post back", data);
      this.newCake = { name: "", image: "" }
    })
    this.getCakesFromService();
  }
  showCakeFromService(id){
    this.cakeClicked=true;
    let observable = this._httpService.showCakes(id);
    observable.subscribe(data => {console.log("Got a cake!", data)
    this.cakeDeet= data;
    });
  }
  createCommentsFromService(event, id){
    this.rateComment ={
      rating: event.target.rating.value, 
      comment: event.target.comment.value
    }
    let observable = this._httpService.createRateComments(this.rateComment, id);
    observable.subscribe(data =>{
      console.log("Created a comment, yay!", data);
    })
    this.showCakeFromService(id);
  }
}
