import { Component, OnInit } from '@angular/core';
import { Todo } from './../interfaces/todo';
import { NgForm } from '@angular/forms';
import { Z_FILTERED } from 'zlib';
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
      date: '1-1-20',
    },
    {
      task: 'sweep',
      completed: false,
      date: '12-25-20',
    },
    {
      task: 'make coffee',
      completed: false,
      date: '8/15/21',
    },
    {
      task: 'Add another element',
      completed: false,
      date: '9/24/20',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
  handleComplete(i: number): void {
    this.todos[i].completed = !this.todos[i].completed;
  }
  removeItem(i: number) {
    this.todos.splice(i, 1);
  }
  addItem(todos: NgForm) {
    this.todos.push({
      task: todos.value.addInput,
      completed: false,
      date: '2/15/21',
    });
  }
  original = this.todos;
  handleFilter(todos) {
    console.log(todos);
    if (todos.form.value.filterTodo === '') {
      this.todos = this.original;
      return this.todos;
    } else {
      const newFilter = this.todos.filter((x) =>
        x.task.includes(todos.form.value.filterTodo)
      );
      this.todos = newFilter;
      console.log(newFilter);
    }
  }
}
