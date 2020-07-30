import { Component, OnInit } from '@angular/core';
import {HttpService} from './http.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'public';
  tasksClicked=false;
  showClicked=false;
  editClicked=false;
  tasks:any=[];
  show:any= [];
  newTask: any;
  updateTask: any;
  tasktoShow:any;
  constructor(private _httpService: HttpService){}
  ngOnInit(){
    this.getTasksFromService();
    this.newTask = { title: "", description: "" }
    this.updateTask = { title: "Hello", description: "" }
    // this.showTaskFromService(id);
  }
  getTasksFromService(){
    let observable = this._httpService.getTasks();
    observable.subscribe(data => {console.log("Got our tasks!", data)
    this.tasks = data;
  });
  }
  showTaskFromService(id:string){
    let observable = this._httpService.showTask(id);
    observable.subscribe(data => {console.log("Got one task!", data)
    this.show= data;
    this.tasktoShow=data;
    console.log("working-",this.tasktoShow)
  });
  }
  editTaskFromService() {
    let observable = this._httpService.editTask(this.updateTask._id, this.updateTask);
    observable.subscribe(data =>{
      console.log("Got data from the post back", data);
      this.updateTask = { title: "", description: "" }
    })
  }
  onSubmit() {
    let observable = this._httpService.addTask(this.newTask);
    observable.subscribe(data =>{
      console.log("Got data from the post back", data);
      this.newTask = { title: "", description: "" }
    })
  }
  deleteTaskFromService(id:string) {
    let observable = this._httpService.deleteTask(id);
    observable.subscribe(data =>{
      console.log("Got data from the post back", data);
    })
  }
  allTasks(): void { 
    this.tasksClicked=true;
    this.getTasksFromService();
  }
  showTask(id:string):void {
    this.showClicked=true;
    this.showTaskFromService(id);
  }
  editTask(task):void{
    this.editClicked=true;
    this.updateTask=task;
  }
}
