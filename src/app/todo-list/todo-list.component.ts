import {Component, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {ModalComponent} from "../shared/modal/modal.component";
import {ITodoItem} from "../shared/interfaces/interface";
import {TodoDataService} from "../shared/services/todo-data.service";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  public data: ITodoItem[] = [];

  constructor(public dialog: MatDialog,
              private todoDataService: TodoDataService) {
  }

  ngOnInit(): void {
    this.todoDataService.todoItems.subscribe((res: ITodoItem[]) => {
      this.data = res;
    });
  }

  public scanSuccessHandler(event: any): void {
    this.openDialog('show', JSON.parse(event));
    console.log(JSON.parse(event));
  }

  openDialog(method: 'add' | 'show', dataToShow?: any): void {
    const dialogRef = this.dialog.open(ModalComponent, {
      data: {
        method: method,
        value: dataToShow
      }
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }

  formatObj(obj: any): string {
    return JSON.stringify(obj);
  }

  public deleteItem(item: ITodoItem): void {
    this.todoDataService.deleteItem(item);
  }
}
