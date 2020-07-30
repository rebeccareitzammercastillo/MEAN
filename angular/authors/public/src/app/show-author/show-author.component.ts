import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-show-author',
  templateUrl: './show-author.component.html',
  styleUrls: ['./show-author.component.scss']
})
export class ShowAuthorComponent implements OnInit {
  id: String;
  oneAuthor: any;

  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
    ) { }

    ngOnInit() {
      this._route.params.subscribe((params: Params) => {
        this.id=params['id']
        this.showAuthorFromService();
      });
    }
    showAuthorFromService(){
      let observable = this._httpService.showAuthors(this.id);
      observable.subscribe(data => {console.log("Show Author!", data)
      this.oneAuthor= data;
    });
    }
    deleteQuoteFromService(authorid, quoteid){
      console.log("***************************authorid")
      console.log(authorid)
      console.log("***************************quoteid")
      console.log(quoteid)
      let observable = this._httpService.deleteQuotes(authorid, quoteid);
      observable.subscribe(data =>{console.log("data from delete", data)
    });
    this.showAuthorFromService();
  }
  }