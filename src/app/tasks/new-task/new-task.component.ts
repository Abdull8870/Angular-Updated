import {Component, Output, EventEmitter, Input, inject} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {TaskService} from "../task.service";

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

    @Input() userId!:string;
    @Output() cancelClicked=new EventEmitter<boolean>();
    @Output() taskSubmitted=new EventEmitter<void>();
    enteredTitle="";
    enteredSummary:string="";
    enteredDate:string="";
    private taskService=inject(TaskService);


  onCancelClick() {
    this.cancelClicked.emit(true);
  }


  onSubmit() {
    this.taskService.addTask({
      title:this.enteredTitle,
      summary:this.enteredSummary,
      date:this.enteredDate
    },this.userId);

    this.taskSubmitted.emit();

  }
}
