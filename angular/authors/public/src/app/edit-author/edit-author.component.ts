import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-edit-author',
  templateUrl: './edit-author.component.html',
  styleUrls: ['./edit-author.component.scss']
})
export class EditAuthorComponent implements OnInit {
  id: String;
  oneAuthor: any;

  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
    ) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
    console.log(params['id'])
    this.id=params['id']
  });
  this.showAuthorFromService();
}
  editAuthorFromService() {
    console.log("***********************component")
    let observable = this._httpService.editAuthors(this.id, this.oneAuthor);
    observable.subscribe(data =>{
      console.log("data from edit author", data);
      this.oneAuthor = { name: ""}
      this._router.navigate(['/']);
    })
  }
  showAuthorFromService(){
    let observable = this._httpService.showAuthors(this.id);
    observable.subscribe(data => {console.log("Show Author!", data)
    this.oneAuthor= data;
  });
  }
}