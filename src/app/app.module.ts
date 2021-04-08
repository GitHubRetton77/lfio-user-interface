import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BoardComponent } from './board/board.component';
import { BoardHeaderComponent } from './board-header/board-header.component';
import { ColumnHeaderComponent } from './column-header/column-header.component';
import { ColumnComponent } from './column/column.component';
import { TicketCardComponent } from './ticket-card/ticket-card.component';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {TicketService} from './ticket-card/service/ticket.service';
import {DragDropModule} from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    BoardHeaderComponent,
    ColumnHeaderComponent,
    ColumnComponent,
    TicketCardComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    DragDropModule
  ],
  providers: [TicketService],
  bootstrap: [AppComponent]
})
export class AppModule { }
