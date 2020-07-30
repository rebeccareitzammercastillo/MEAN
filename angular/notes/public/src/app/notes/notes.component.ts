import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {
  @Input() allNote= [];

  constructor() { }

  ngOnInit() {
  }

  strftime(date): any {
    let currentDate = new Date(date);
    let Month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    // let aDay = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
    let thisDate = `${Month[currentDate.getMonth()]} ${currentDate.getDate()}, ${currentDate.getFullYear()} at ${currentDate.getHours()}:${currentDate.getMinutes()}`;
    return thisDate;
  }

}
