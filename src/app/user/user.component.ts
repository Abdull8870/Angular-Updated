import { Component, signal, computed ,Input, input, Output, EventEmitter ,output} from '@angular/core';
import { DUMMY_USERS } from "../dummy-users";
import { type user} from "./user.model";
import {CardComponent} from "../shared/card/card.component";

const randomIndex=Math.floor(Math.random()*DUMMY_USERS.length)

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [
    CardComponent
  ],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  avatar=input.required<string>();
  name=input.required<string>();
  @Input() id!:string;

  @Output() select=new EventEmitter<user>();

  @Input({required:true}) selected!:boolean;


  imagePath=computed(()=>{
    return "assets/users/"+this.avatar();
  });


  onSelectedUser(){
     const out:user= {
      id:this.id,
      name:this.name(),
      avatar:this.avatar()
    };
    this.select.emit(out);
  }



}
