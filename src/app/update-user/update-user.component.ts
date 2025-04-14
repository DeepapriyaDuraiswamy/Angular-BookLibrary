import { Component } from '@angular/core';
import { Update } from '../dto/updateuser';
import { UpdateserviceService } from '../updateservice.service';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-update-user',
  standalone: false,
  templateUrl: './update-user.component.html',
  styleUrl: './update-user.component.css'
})
export class UpdateUserComponent {

  update : Update = new Update();
      
  updateUserForm = false;
      
        constructor(private updateService: UpdateserviceService) {   
      
          
        }

  updateUser() {
    if (!this.update.id) {
      alert("Please enter the user ID to update.");
      return;
    }

    this.updateService.updateUser(this.update.id, this.update).subscribe(
      (data) => {
        console.log('User updated successfully:', data);
        this.resetForm();
        this.updateUserForm = false;
      },
      (error) => {
        console.error('Error updating user:', error);
      }
    );
  }

  resetForm() {
    this.update = new Update();
  }

  cancel() {
    this.resetForm();
    this.updateUserForm = false;
  }

}
