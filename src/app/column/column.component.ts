import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {Ticket} from '../ticket-card/model/ticket.model';
import {TicketService} from '../ticket-card/service/ticket.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.css']
})
export class ColumnComponent implements OnInit {

  @Input()
  public columnName: string;

  @Input()
  public tickets: Ticket[];

  @ViewChild('ticketForm', {static: false})
  public ticketForm: NgForm;

  public createMode: boolean;

  constructor(private ticketService: TicketService) {
  }

  ngOnInit() {
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

  public createTicket(): void {
    this.createMode = true;
  }

  public isCreateMode(): boolean {
    return this.createMode;
  }

  public onCreation(): void {
    this.createMode = false;
  }

}
