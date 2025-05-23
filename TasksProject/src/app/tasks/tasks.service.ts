import { Injectable } from '@angular/core';
import { NewTask } from './new-task/new-task.model';

// Register as Injectable to use with dependancy injection.
@Injectable({ providedIn: 'root' })
export class TasksService {
  // Swap for more persistent storage. We will learn to connect to backend service.
  private tasks = [
    {
      id: 't1',
      userId: 'u1',
      title: 'MasterAngular',
      summary: 'Learn it all?',
      dueDate: '2025-12-31',
    },
    {
      id: 't2',
      userId: 'u2',
      title: 'MasterAngular',
      summary: 'Learn it all?',
      dueDate: '2025-12-31',
    },
  ];

  constructor() {
    const tasks = localStorage.getItem('tasks');

    if (tasks) {
      // Local Storage only stores strings. Need to convert to JSON.
      this.tasks = JSON.parse(tasks);
    }
  }

  getUserTasks(userId: string) {
    return this.tasks.filter((task) => task.userId === userId);
  }

  addTask(newTask: NewTask, userId: string) {
    this.tasks.push({
      id: new Date().getTime().toString(),
      userId: userId,
      title: newTask.title,
      summary: newTask.summary,
      dueDate: newTask.date,
    });
    this.saveTasks();
  }

  removeTask(taskId: string) {
    this.tasks = this.tasks.filter((task) => task.id !== taskId);
    this.saveTasks();
  }

  private saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
}
