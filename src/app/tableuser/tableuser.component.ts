import { Component } from '@angular/core';
import { UsersService } from './users.service';

@Component({
  selector: 'app-tableuser',
  styleUrls: ['./tableuser.component.css'],
  templateUrl: './tableuser.component.html',
})

export class TableuserComponent {
  users = [{ id: '1', email: 'maria@gmail.com' , password: "user.password", created_at: "user.year", company: "user.company" }];
  selectedUser;

  constructor(private api: UsersService) {
    this.getUsers();
    this.selectedUser = { id:-1 , email: 'maria@gmail.com' , password: "user.password", created_at: "user.year", company: "user.company" };
  }
  getUsers = () => {
    this.api.getAllUsers().subscribe(
      (data) => {
        this.users = data;
      },
      (error) => {
        console.log(error);
      }
    );
  };
  usersClicked = (user: any) => {
    this.api.getOneUser(user.id).subscribe(
      (data) => {
        this.selectedUser = data;
      },
      (error) => {
        console.log(error);
      }
    );
  };
  updateUser = () => {
    this.api.updateUser(this.selectedUser).subscribe(
      (data) => {
        this.getUsers();
      },
      (error) => {
        console.log(error);
      }
    );
  };
  createUser = () => {
    this.api.createUser(this.selectedUser).subscribe(
      (data) => {
        this.users.push(data);
      },
      (error) => {
        console.log(error);
      }
    );
  };
  deleteUser = () => {
    this.api.deleteUser(this.selectedUser.id).subscribe(
      (data) => {
        this.getUsers();
      },
      (error) => {
        console.log(error);
      }
    );
  };
}
