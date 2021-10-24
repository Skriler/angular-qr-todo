import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {ITodoItem} from "../interfaces/interface";


@Injectable({
  providedIn: 'root'
})
export class TodoDataService {
  public todoItems: BehaviorSubject<ITodoItem[]> = new BehaviorSubject<ITodoItem[]>([]);

  constructor() {
    this.getItemsFromLocalStorage();

    this.todoItems.subscribe((data) => {
      TodoDataService.setItemsToLocalStorage(data);
    });
  }

  public addItem(item: ITodoItem): void {
    const currentItems = this.todoItems.getValue();
    const updatedItems = [...currentItems, item];
    this.todoItems.next(updatedItems);
  }

  public deleteItem(item: ITodoItem): void {
    const currentItems: ITodoItem[] = this.todoItems.getValue();

    currentItems.forEach((item, index) => {
      if (item === item)
        currentItems.splice(index, 1);
    });

    this.todoItems.next(currentItems);
  }

  private getItemsFromLocalStorage(): void {
    if (localStorage.getItem('todoItems') == null)
      return;

    this.todoItems.next(JSON.parse(<string>localStorage.getItem('todoItems')));
  }

  private static setItemsToLocalStorage(data: ITodoItem[]): void {
    if (data == undefined)
      return;

    const todoItems = JSON.stringify(data);
    localStorage.setItem('todoItems', todoItems);
  }
}
