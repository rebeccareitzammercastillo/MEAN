import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }
  getAuthors(){
    return this._http.get('/authors');
  }
  newAuthors(newAuthor){
    console.log("This is the service")
    return this._http.post('/authors', newAuthor);
  }
  editAuthors(id, oneAuthor){
    return this._http.post(`/authors/${id}`, oneAuthor);
  }
  showAuthors(id){
    return this._http.get(`/authors/${id}`)
  }
  createQuotes(id, oneQuote){
    return this._http.post(`/authors/${id}/quotes`, oneQuote)
  }
  deleteAuthors(id){
  return this._http.delete(`/authors/${id}/delete`)
  }
  deleteQuotes(authorid, quoteid){
    console.log("***************************service")
    return this._http.delete(`/authors/${authorid}/quotes/${quoteid}`)
  }
}
