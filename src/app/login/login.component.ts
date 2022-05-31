import { User } from './../interface/user/user';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  users: User[] = [];
  username!: string;
  password!: string;
  email!: string;
  customStylesValidated = false;
  constructor(private router: Router) {}

  ngOnInit(): void {}

  onSubmitLogin() {
    this.customStylesValidated = true;
    if (!this.username || !this.password) return;

    this.router.navigate(['dashboard']);
    this.customStylesValidated = false;
  }
}
