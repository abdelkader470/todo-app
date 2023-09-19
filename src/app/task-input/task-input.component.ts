import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-task-input',
  templateUrl: './task-input.component.html',
  styleUrls: ['./task-input.component.css'],
})
export class TaskInputComponent {
  @Output() addTask = new EventEmitter<string>();
  taskText = '';

  onAddTask() {
    if (this.taskText.trim() !== '') {
      this.addTask.emit(this.taskText);
      this.taskText = '';
    }
  }
}
