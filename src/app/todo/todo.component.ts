import { Component } from '@angular/core';
import { Task } from '../task';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent {
  tasks: Task[] = [];

  addTask(taskText: string) {
    const newTask: Task = {
      id: this.tasks.length + 1,
      text: taskText,
      completed: false,
    };
    this.tasks.push(newTask);
  }

  deleteTask(id: number) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }
}
