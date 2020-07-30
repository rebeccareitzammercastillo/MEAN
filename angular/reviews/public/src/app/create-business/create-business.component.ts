import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-business',
  templateUrl: './create-business.component.html',
  styleUrls: ['./create-business.component.scss']
})
export class CreateBusinessComponent implements OnInit {
  newBusiness: any;
  errors=[];

  constructor(private _httpService: HttpService, private _router: Router) { }

  ngOnInit() {
    this.newBusiness = {name:"", address:"", description:""}
  }

  createBusinessesFromService(){
    console.log("**************************component")
    // console.log(this.newBusiness)
    let observable = this._httpService.createBusinesses(this.newBusiness);
    observable.subscribe(data=>{
      //@ts-ignore
      if (data.errors){
        //@ts-ignore
        for(var i in data.errors){
          //@ts-ignore
          console.log(data.errors[i])
          //@ts-ignore
          this.errors.push(data.errors[i].properties.message)
        }
      }else{
      console.log("Create Business from the component", data);
      this.newBusiness = {name:"", address:"", description:"" }
      this._router.navigate(['/']);
      }
  })
  }

}
