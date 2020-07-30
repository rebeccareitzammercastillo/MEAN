import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Anonymous Notes';
  notes= [];
  newNote: any;
  note: any;

constructor(private _httpService: HttpService){}

ngOnInit(){
  this.getNotesFromService();
  this.newNote = { note: ""}
}

getNotesFromService(){
  let observable = this._httpService.getNotes();
  observable.subscribe(data => {console.log("All notes from component!", data)
  this.notes = data['notes'];
});
}

createNotesFromService() {
  let observable = this._httpService.createNotes(this.newNote);
  observable.subscribe(data =>{
    console.log("create Note from component", data);
    this.note= data;
    this.newNote = { note: ""}
    this.getNotesFromService();
  })
}

}
