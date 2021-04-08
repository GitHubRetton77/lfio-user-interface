import {AfterViewChecked, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {Ticket} from '../ticket-card/model/ticket.model';
import {TicketService} from '../ticket-card/service/ticket.service';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit, AfterViewChecked {

  private listOfTickets: Ticket[];

  public listOfBacklogTickets: Ticket[] = [];
  public listOfInProgressTickets: Ticket[] = [];
  public listOfCompleteTickets: Ticket[] = [];

  public createMode: boolean;

  constructor(private cdr: ChangeDetectorRef,
              private ticketService: TicketService) {
  }

  ngOnInit() {
    this.ticketService.ticketsSubject.subscribe((updateListOfTickets) => {
      this.listOfTickets = updateListOfTickets;
      this.listOfBacklogTickets = [];
      this.listOfInProgressTickets = [];
      this.listOfCompleteTickets = [];
      this.sortTicketsByStatus(updateListOfTickets);
    });
    this.getInitialAllTickets();
  }

  ngAfterViewChecked() {
    this.cdr.detectChanges();
  }

  private getInitialAllTickets(): void {
    this.ticketService.getInitialAllTickets().subscribe((listOfTickets) => {
      this.listOfTickets = listOfTickets;
      this.sortTicketsByStatus(listOfTickets);
    });
  }

  private sortTicketsByStatus(listOfTickets: Ticket[]): void {
    listOfTickets.forEach((ticket) => {
      switch (ticket.status) {
        case 'Backlog':
          this.listOfBacklogTickets.push(ticket);
          break;
        case 'In Progress':
          this.listOfInProgressTickets.push(ticket);
          break;
        case 'Complete':
          this.listOfCompleteTickets.push(ticket);
          break;
      }
    });
  }

  public onDrop(event: CdkDragDrop<string[]>): void {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
    }
  }

  //  ----
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
