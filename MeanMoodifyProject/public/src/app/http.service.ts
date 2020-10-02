import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  getMoodCategory(){
    return this._http.get('https://api.spotify.com/v1/browse/categories/mood?country=US" -H "Accept: application/json" -H "Content-Type: application/json" -H "Authorization: Bearer BQDWWC5QuFHgRcaWcRJDm8whdFuReDIFL9FjVvLmh69Ed0JF-yTGIQBKNlpRFJn3JhG8LbqnTrmNGAStJCw9IqY3hI2DhnQ0LeLgQVeIYuWSMgVYCCAg_aXezh1eN0j_F-ygk8ELG2CVQD0');
  }

}
