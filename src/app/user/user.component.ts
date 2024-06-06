import { Component, signal, computed ,Input, input, Output, EventEmitter ,output} from '@angular/core';
import { DUMMY_USERS } from "../dummy-users";
import { type user} from "./user.model";

const randomIndex=Math.floor(Math.random()*DUMMY_USERS.length)

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  // @Input() avatar!:string;
  // @Input() name!:string;

  // avatar=input<string>();

  avatar=input.required<string>();
  name=input.required<string>();
  // id=input<string>();
  // @Output() select=new EventEmitter();
  @Input() id!:string;

  @Output() select=new EventEmitter<user>();

  @Input({required:true}) selected!:boolean;

  // If access specifier private is specified then it can accessed only within the class not outside
  // selectedUser=DUMMY_USERS[randomIndex]

  // selectedUser=signal(DUMMY_USERS[randomIndex])

  // imagePath=computed(()=>
  //   "assets/users/"+this.selectedUser().avatar);

  // get imagePath(){
  //   return "assets/users/"+this.avatar();
  // }

  imagePath=computed(()=>{
    return "assets/users/"+this.avatar();
  });


  onSelectedUser(){
    console.log("Clicked!!");
    // const randomIdx=Math.floor(Math.random()*DUMMY_USERS.length)
    // this.selectedUser.set(DUMMY_USERS[randomIdx])

     const out:user= {
      id:this.id,
      name:this.name(),
      avatar:this.avatar()
    };

    this.select.emit(out);
    // this.select.emit(this.name());
  }



}
