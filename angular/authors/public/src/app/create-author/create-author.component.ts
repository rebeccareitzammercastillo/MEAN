import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-author',
  templateUrl: './create-author.component.html',
  styleUrls: ['./create-author.component.scss']
})
export class CreateAuthorComponent implements OnInit {
  newAuthor: any;

  constructor(private _httpService: HttpService, private _router: Router) { }

  ngOnInit() {
    this.newAuthor = {name: ""}
  }

  createAuthorFromService(){
    console.log(this.newAuthor)
    let observable = this._httpService.newAuthors(this.newAuthor);
    observable.subscribe(data=>{
      console.log("This the component")
      console.log("Created a new Author!", data);
      this.newAuthor = {name: ""}
      this._router.navigate(['/']);
  })
  }

}
