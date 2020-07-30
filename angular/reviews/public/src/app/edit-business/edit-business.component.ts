import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-edit-business',
  templateUrl: './edit-business.component.html',
  styleUrls: ['./edit-business.component.scss']
})
export class EditBusinessComponent implements OnInit {
  id: String;
  oneBusiness: any;

  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
    ) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
    console.log(params['id'])
    this.id=params['id']
    this.showBusinessesFromService();
  });
}
  editBusinessesFromService() {
    console.log("************************component")
    let observable = this._httpService.editBusinesses(this.id, this.oneBusiness);
    observable.subscribe(data =>{
      console.log("data from edit author", data);
      this.oneBusiness = { name:"", address:"", description:""}
      this._router.navigate(['/']);
    })
  }
  showBusinessesFromService(){
    let observable = this._httpService.showBusinesses(this.id);
    observable.subscribe(data => {console.log("Show Author!", data)
    this.oneBusiness= data;
  });
  }
}