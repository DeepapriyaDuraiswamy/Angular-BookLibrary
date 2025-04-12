import { Component } from '@angular/core';
import { Add } from '../dto/adduser';
import { AdduserService } from '../adduser.service';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-user',
  standalone: false,
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.css'
})
export class AddUserComponent {

   add : Add = new Add();
    
   addUserForm = false;
    
      constructor(private adduserService: AdduserService) {   
    
        
      }
    
      addUser() {
        this.adduserService.addUser(this.add).subscribe(
          (data) => {
            console.log('User added saved successfully:', data);
            
            this.resetForm();
            this.addUserForm = false;
          },
          (error) => {
            console.error('Error adding user:', error);
          }
        );
      }
      
    
      
      resetForm() {
        this.add = new Add();
      }
    
      cancel() {
        
        this.resetForm();
        this.addUserForm = false;
      }
    
  

}
