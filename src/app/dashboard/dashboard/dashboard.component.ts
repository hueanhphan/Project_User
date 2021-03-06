import { Router } from '@angular/router';
import { User } from './../../interface/user/user';
import { UserService } from 'src/app/service/user/user.service';
import { Component, OnInit } from '@angular/core';
import { freeSet } from '@coreui/icons/js/free';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  users: User[] = [];
  icons = freeSet;
  searchText!: string;
  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    this.fetchDataUserList();
  }
  fetchDataUserList() {
    this.userService.getUsersList().subscribe((users) => {
      this.users = users.filter((u) => u.password === '145236');
    });
  }
  handleChangePage(user: User) {
    // console.log(user.id);
    this.router.navigate(['/detail'], {
      queryParams: { id: user.id },
    });
  }
  handleDeleteUser(user: User) {
    this.userService.deleteUser(user).subscribe(() => this.fetchDataUserList());
  }
}
