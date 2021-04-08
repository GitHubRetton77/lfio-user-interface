import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-column-header',
  templateUrl: './column-header.component.html',
  styleUrls: ['./column-header.component.css']
})
export class ColumnHeaderComponent implements OnInit {

  @Input()
  public columnName: string;

  constructor() {
  }

  ngOnInit() {
  }

  public getClassNameFromColumnName(): string {
    let className: string;
    switch (this.columnName) {
      case 'Backlog':
        className = 'bg-secondary';
        break;
      case 'In Progress':
        className = 'bg-primary';
        break;
      case 'Complete':
        className = 'bg-success';
        break;
    }
    return className;
  }

  public isBacklog(): boolean {
    return this.columnName === 'Backlog';
  }

  public isInProgress(): boolean {
    return this.columnName === 'In Progress';
  }

  public isCompleted(): boolean {
    return this.columnName === 'Complete';
  }
}
