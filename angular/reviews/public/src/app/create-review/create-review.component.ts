import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-create-review',
  templateUrl: './create-review.component.html',
  styleUrls: ['./create-review.component.scss']
})
export class CreateReviewComponent implements OnInit {
  @Input() business:any;
  // id: String;
  // oneAuthor:any;
  newReview: any;
  // oneReview: any;

  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    // this._route.params.subscribe((params: Params) => {
    //   this.id=params['id']
    // });
  }
  
  createReviewFromService(event){
    console.log("**********************component")
    console.log(event)
    console.log(this.business._id)
    this.newReview ={
      rating: event.target.rating.value, 
      review: event.target.review.value
    }
    let observable = this._httpService.createReview(this.business._id, this.newReview);
    observable.subscribe(data =>{
      console.log("Create from component!", data);
    })
    //   this._router.navigate([`/show/${this.id}`]);
  }
}
