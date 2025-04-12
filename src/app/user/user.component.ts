import { Component } from '@angular/core';
import { User } from '../dto/user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user',
  standalone: false,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  user: User = new User();
  showMemberForm = false;

  members: User[] = [];
  currentIndex = 0;

  constructor(private userService: UserService) {}

  fetchAllUsers() {
    this.userService.getAllUsers().subscribe(data => {
      this.members = data;
      this.currentIndex = 0;
      if (this.members.length > 0) {
        this.user = this.members[0];
      }
    });
  }

  nextMember() {
    if (this.currentIndex < this.members.length - 1) {
      this.currentIndex++;
      this.user = this.members[this.currentIndex];
    }
  }

  prevMember() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.user = this.members[this.currentIndex];
    }
  }
  
}
