import { Component,Input } from '@angular/core';
import  {TaskService} from "./task.service"

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {

  @Input({required:true}) name?:string;

  @Input({required:true}) userId?:string;

  isAddingTask=false;

  constructor(private taskService:TaskService) {
  }


  get selectedUser(){
    return this.taskService.getSelectedUser(this.userId!);
  }

  onCompleteTask(id:string){
    this.taskService.markComplete(id);
  }

  onStartAddTask(){
     this.isAddingTask=true;
  }

  cancelClick(cancel: boolean) {
    if(cancel){
      this.isAddingTask=false;
    }
  }

  onTaskAdded() {
    this.isAddingTask=false;
  }
}
