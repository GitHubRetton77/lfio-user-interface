import {
  AfterContentChecked,
  AfterViewChecked, AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild
} from '@angular/core';
import {TicketService} from './service/ticket.service';
import {Ticket} from './model/ticket.model';


@Component({
  selector: 'app-ticket-card',
  templateUrl: './ticket-card.component.html',
  styleUrls: ['./ticket-card.component.css']
})
export class TicketCardComponent implements OnInit, AfterViewInit {

  @Input()
  public ticket: Ticket;

  @Input()
  public cardIndex: number;

  @Input()
  public readOnlyMode: boolean;

  @Output()
  public onCreation = new EventEmitter<boolean>();

  @ViewChild('descriptionInput', {static: false})
  public descriptionInput: ElementRef;

  public cardId: string;

  public selected: boolean;

  constructor(private cdr: ChangeDetectorRef,
              private ticketService: TicketService) {
  }

  public ngOnInit(): void {
  }

  public ngAfterViewInit(): void {
    if (this.readOnlyMode) {
      this.cardId = 'ticket-' + this.ticket.status + this.cardIndex;
    } else {
      this.ticket = new Ticket('John Doe', '', 'Backlog');
      this.descriptionInput.nativeElement.scrollIntoView(true);
      this.descriptionInput.nativeElement.focus();
    }
    this.cdr.detectChanges();
  }

  public isBacklog(): boolean {
    return this.ticket.status === 'Backlog';
  }

  public isComplete(): boolean {
    return this.ticket.status === 'Complete';
  }

  public moveStatusToTheLeft(): void {
    switch (this.ticket.status) {
      case 'In Progress':
        this.ticket.status = 'Backlog';
        break;
      case 'Complete':
        this.ticket.status = 'In Progress';
    }
    this.updateTicket();
  }

  public moveStatusToTheRight(): void {
    switch (this.ticket.status) {
      case 'Backlog':
        this.ticket.status = 'In Progress';
        break;
      case 'In Progress':
        this.ticket.status = 'Complete';
    }
    this.updateTicket();
  }

  private createTicket(): void {
    this.ticket.description = this.descriptionInput.nativeElement.value;
    this.ticketService.createTicket(this.ticket).subscribe( (response) => {
      this.ticketService.refreshAllTickets();
      this.onCreation.emit(true);
    });
  }

  public updateTicket(): void {
    this.ticketService.updateTicket(this.ticket).subscribe((response) => {
      this.ticketService.refreshAllTickets();
    });
  }

  public highlightCardBorderIfSelected(event): void {
    const target = event.target || event.srcElement || event.currentTarget;
    const idAttr = target.attributes.id;
    const elementClickedId: string = idAttr.nodeValue;
    if (elementClickedId.includes('ticket') &&  elementClickedId === this.cardId) {
      this.selected = true;
    } else {
      this.selected = false;
    }
  }

  public isSelected(): boolean {
    return this.selected;
  }

}
