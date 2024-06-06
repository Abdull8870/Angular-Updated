import { Component } from '@angular/core';
import {HeaderComponent} from "./header/header.component";
import {UserComponent} from "./user/user.component";
import {TasksComponent} from "./tasks/tasks.component";
import {DUMMY_USERS} from "./dummy-users";
import { user } from "./user/user.model"

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent,
  UserComponent,TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users=DUMMY_USERS;
  name?:string;
  avator:string="";
  id:string="";

  onSelectUser(id: any) {
    console.log("Selected user id= "+id.id);
    this.id=id.id;
    this.name=id.name;
    this.avator=id.avator;
  }

  get selectedUser():user|undefined{
    return this.users.find((user)=>
      user.id===this.id
    )
  }
}
