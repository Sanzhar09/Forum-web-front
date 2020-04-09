import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  constructor(private userService: UserService) { }

  public adminInfo = {
    email: '',
    password: ''
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.log(this.adminInfo)
  }

}
