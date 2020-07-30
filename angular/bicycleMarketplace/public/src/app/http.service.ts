import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  getBikes(){
    return this._http.get('/bikes');
  }

  createBikes(newBike){
    return this._http.post('/bikes', newBike)
  }

}
