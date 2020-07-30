import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }
  getCakes(){
    return this._http.get('/cakes');
  }
  createCakes(newCake){
    return this._http.post('/cakes', newCake)
  }
  showCakes(id:String){
    return this._http.get(`/cakes/${id}`)
  }
  createRateComments (rateComment, id){
    return this._http.post(`/cakes/${id}/comments`, rateComment)
  }
}
