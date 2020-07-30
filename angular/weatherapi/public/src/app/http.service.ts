import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http:HttpClient) { }
  getSeattle(){
    return this._http.get('http://api.openweathermap.org/data/2.5/weather?q=Seattle&units=imperial&appid=9e653eaca739501ed4aad1ee8c4388d3');
  }
  getSanJose(){
    return this._http.get('http://api.openweathermap.org/data/2.5/weather?q=San%20Jose&units=imperial&appid=9e653eaca739501ed4aad1ee8c4388d3');
  }
  getBurbank(){
    return this._http.get('http://api.openweathermap.org/data/2.5/weather?q=Burbank&units=imperial&appid=9e653eaca739501ed4aad1ee8c4388d3');
  }
  getDallas(){
    return this._http.get('http://api.openweathermap.org/data/2.5/weather?q=Dallas&units=imperial&appid=9e653eaca739501ed4aad1ee8c4388d3');
  }
  getDC(){
    return this._http.get('http://api.openweathermap.org/data/2.5/weather?q=Washington&units=imperial&appid=9e653eaca739501ed4aad1ee8c4388d3');
  }
  getChicago(){
    return this._http.get('http://api.openweathermap.org/data/2.5/weather?q=Chicago&units=imperial&appid=9e653eaca739501ed4aad1ee8c4388d3');
  }
}
