import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute,Params, Router } from '@angular/router';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss']
})
export class ReviewsComponent implements OnInit {
  id: String;
  oneBusiness: any;
  reviewClicked=false;
  businessDeet:any;

  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
    ) { }

    ngOnInit() {
      this._route.params.subscribe((params: Params) => {
        this.id=params['id']
        this.showBusinessFromService();
      });
    }
    showBusinessFromService(){
      let observable = this._httpService.showBusinesses(this.id);
      observable.subscribe(data => {console.log("Show business form review component!", data)
      this.oneBusiness= data;
      this.businessDeet=data;
    });
    }
    avg():Number{
      var sum=0;
      for(var i=0; i<this.oneBusiness.reviews.length; i++){
        sum+=this.oneBusiness.reviews[i].rating
      }
      return sum/this.oneBusiness.reviews.length
    }
    
//     deleteQuoteFromService(authorid, quoteid){
//       console.log("***************************authorid")
//       console.log(authorid)
//       console.log("***************************quoteid")
//       console.log(quoteid)
//       let observable = this._httpService.deleteQuotes(authorid, quoteid);
//       observable.subscribe(data =>{console.log("data from delete", data)
//     });
//     this.showAuthorFromService();
//   }

clicked(){
  this.reviewClicked=true;
  // this.showBusinessFromService();
}

}
