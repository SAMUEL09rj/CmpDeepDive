import { Component, ElementRef, output, ViewChild } from '@angular/core';
import { ControlsComponent } from "../../../shared/controls/controls.component";
import { ButtonComponent } from '../../../shared/button/button.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ControlsComponent,ButtonComponent,FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css'
})
export class NewTicketComponent {
@ViewChild('form') form?:ElementRef<HTMLFormElement>;
add=output<{title:string;text:string}>();
  onSubmit(title:string,tickettext:string){
    this.add.emit({title:title,text:tickettext});
    this.form?.nativeElement.reset();
  }
}
