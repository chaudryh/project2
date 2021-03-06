import { Component, OnInit } from '@angular/core';
import { UserRegistrationService } from "../services";


@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})


export class UserRegistrationComponent implements OnInit {
  
  constructor(private service: UserRegistrationService) {}

  submitted:boolean;

  userReg = {}

  onSubmit() {
      this.service.postUser(this.userReg)
      .subscribe(
        res => {
          console.log(res)
        }, err => console.log(err));
      //console.log(userReg.value);
      this.submitted = true;
      //this.userData = userReg.value;
  }

  ngOnInit() {
  }
}
