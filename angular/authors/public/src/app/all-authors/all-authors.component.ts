import { Component, OnInit } from '@angular/core';
import {HttpService} from '../http.service'

@Component({
  selector: 'app-all-authors',
  templateUrl: './all-authors.component.html',
  styleUrls: ['./all-authors.component.scss']
})
export class AllAuthorsComponent implements OnInit {
  authors=[];

  constructor(private _httpService: HttpService){}

  ngOnInit(){
    this.authorsFromService();
    // this.newCake = { title: "", description: "" }
  }
  
  authorsFromService(){
    let observable = this._httpService.getAuthors();
    observable.subscribe(data => {console.log("Got all Authors!", data)
    this.authors = data['authors'];
  });
}
deleteAuthorFromService(id) {
  let observable = this._httpService.deleteAuthors(id);
  observable.subscribe(data =>{console.log("data from delete", data);
  this.authorsFromService();
  })
}
}
