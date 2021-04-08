import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, Subject} from 'rxjs';
import {Ticket} from '../model/ticket.model';
import {environment} from '../../../environments/environment';

@Injectable()
export class TicketService {

  public ticketsSubject: Subject<Ticket[]> = new Subject<Ticket[]>();

  constructor(private http: HttpClient) {
  }

  public createTicket(ticket: Ticket): Observable<Ticket> {
    return this.http.put<Ticket>(environment.service_url, ticket);
  }

  public getInitialAllTickets(): Observable<Ticket[]> {
    return this.http.get<Ticket[]>(environment.service_url);
  }

  public refreshAllTickets(): void {
    this.http.get<Ticket[]>(environment.service_url).subscribe((updatedListOfTickets) => {
      this.ticketsSubject.next(updatedListOfTickets);
    });
  }

  public updateTicket(ticket: Ticket): Observable<Ticket> {
    return this.http.post<Ticket>(environment.service_url, ticket);
  }

}
