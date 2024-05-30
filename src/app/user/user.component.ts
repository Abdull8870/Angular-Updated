import { Component } from '@angular/core';
import { DUMMY_USERS } from "../dummy-users";

const randomIndex=Math.floor(Math.random()*DUMMY_USERS.length)

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  // If access specifier private is specified then it can accessed only within the class not outside
  selectedUser=DUMMY_USERS[randomIndex]

}
