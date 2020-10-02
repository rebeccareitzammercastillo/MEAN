import { Component } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Moodify';

  constructor(private _httpService: HttpService){}
  mood: any;

  ngOnInit() {
    this.categoryFromService();
  }
  categoryFromService(){
    let observable = this._httpService.getMoodCategory();
    observable.subscribe(data=> {console.log("category from service works!", data)
    this.mood=data
  })
  }
}
