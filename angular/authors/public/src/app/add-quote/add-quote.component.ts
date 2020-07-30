import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-add-quote',
  templateUrl: './add-quote.component.html',
  styleUrls: ['./add-quote.component.scss']
})
export class AddQuoteComponent implements OnInit {
  id: String;
  oneAuthor:any;
  newQuote:any;
  oneQuote: any;

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
    console.log("AFTER other show author console log!")
  });
  }

  addQuoteFromService(){
    this.oneQuote ={
      text: this.newQuote,
      votes: 0
    }
    let observable = this._httpService.createQuotes(this.id, this.oneQuote);
    observable.subscribe(data=>{
      console.log("You got a new quote!", data)
    });
    this._router.navigate([`/show/${this.id}`]);
    this.showAuthorFromService();
  }
}

// createCommentsFromService(event, id){
//   this.rateComment ={
//     rating: event.target.rating.value, 
//     comment: event.target.comment.value
//   }
//   let observable = this._httpService.createRateComments(this.rateComment, id);
//   observable.subscribe(data =>{
//     console.log("Created a comment, yay!", data);
//   })
//   this.showCakeFromService(id);
// }