import { Component, signal } from '@angular/core';
import { UserService } from './users.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  users = signal <any>([]);
  displayedColumns: string[] = ['name', 'mail', 'disabled', 'actions'];

  constructor(private userService: UserService,private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    //get usersList
    this.userService.getUsers().subscribe(users => {
      this.users.set(users);
    });
  }

  //for change user status 
  enableDisabledStatus(user: any) {
    const newDisabledStatus = !user.disabled;
    this.userService.updateUserDisabledStatus(user.id, newDisabledStatus)
      .then(() => {
        user.disabled = newDisabledStatus;
        this.openSnackBar('User status updated successfully!', 'Dismiss');
      })
      .catch(error => {
        console.error('Error updating user status:', error);
      });
  }

  //for user status update
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
      verticalPosition:'top'
    });
  }
}



