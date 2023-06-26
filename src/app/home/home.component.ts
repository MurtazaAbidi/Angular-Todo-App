import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Task } from '../task';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent {
  todoForm = new FormGroup({
    task: new FormControl ('')
  });
  listTask: Task[] = [
    { name:'Dr. Nice'},
    { name:'Bombasto'},
    { name:'Celeritas'},
    { name:'Magneta'},
    { name:'RubberMan'},
    { name:'Dynama'},
    { name:'Dr. IQ'},
    { name:'Magma'},
    { name:'Tornado'}
  ];

  onSubmitTask():void {
    this.listTask.unshift({name: <string>this.todoForm.value.task})
    console.log(this.todoForm.value.task);
  }


}
