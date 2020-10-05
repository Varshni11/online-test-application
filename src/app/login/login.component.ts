import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  login=new FormGroup(
    {
      email_id:new FormControl(''),
      password:new FormControl('')
    }
  );

  credentials:{email,password}=
    {email:"varshin3@gmail.com",
    password:"Varshni"};
  


  onSubmit(){
    if(this.login.value.email==this.credentials.email && this.login.value.password==this.credentials.password)
    {
      alert("Valid Credentials");
    }
  }

}