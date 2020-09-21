import { Component, OnInit } from '@angular/core';
import { Todo } from './../interfaces/todo';
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  todos: Todo[] = [
    {
      task: 'Todo lab part 1',
      completed: false,
    },
    {
      task: 'sweep',
      completed: false,
    },
    {
      task: 'make coffee',
      completed: true,
    },
    {
      task: 'Add another element',
      completed: true,
    },
  ];
  constructor() {}

  ngOnInit(): void {}
  handleComplete(i: number): void {
    this.todos[i].completed = !this.todos[i].completed;
  }
}
