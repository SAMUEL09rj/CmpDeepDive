import { Component, input, output, signal } from '@angular/core';
import { Ticket } from './ticket.model';

@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css'
})
export class TicketComponent {
data=input.required<Ticket>();
detailsvisible=signal(false);
close=output();

onToggle(){
  this.detailsvisible.update((wasvisible)=>!wasvisible);
}
onMarkAsCompleted(){
  this.close.emit();
}
}
