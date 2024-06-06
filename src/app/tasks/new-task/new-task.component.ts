import {Component, Output, EventEmitter} from '@angular/core';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {

    @Output() cancelClicked=new EventEmitter<boolean>();
    @Output() add=new EventEmitter<{
      title:string;
      summary:string;
      date:string;
    }>();
    enteredTitle="";
    enteredSummary:string="";
    enteredDate:string="";

  onCancelClick() {
    this.cancelClicked.emit(true);
  }


  onSubmit() {
    this.add.emit({
      title:this.enteredTitle,
      summary:this.enteredSummary,
      date:this.enteredDate
    })
  }
}
