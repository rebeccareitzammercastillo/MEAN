import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  getBusinesses(){
    console.log("***************************service")
    return this._http.get('/businesses')
  }

  createBusinesses(newBusiness){
    console.log("Create from Service")
    return this._http.post('/businesses', newBusiness)
    
  }

  editBusinesses(id, oneBusiness){
    console.log("***********************service")
    return this._http.post(`/businesses/${id}/edit`, oneBusiness)
  }

  showBusinesses(id){
    return this._http.get(`/businesses/${id}`)
  }

  deleteBusinesses(id){
    return this._http.delete(`/businesses/${id}`)
  }

  createReview(id, newReview){
    console.log("************************service")
    return this._http.post(`/businesses/${id}/reviews`, newReview)
  }
  // deleteQuotes(authorid, quoteid){
  //   console.log("***************************service")
  //   return this._http.delete(`/authors/${authorid}/quotes/${quoteid}`)
  // }
}


