import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private _loginService : AuthService) {
    this.loginForm = new FormGroup({
      username: new FormControl(''),
      password: new FormControl('')
    });
  }

  ngOnInit(): void {
    console.log('LoginComponent');
    
  }

  login(){
    this._loginService.sendCredentials(this.loginForm.value.username, this.loginForm.value.password)
    .subscribe(
      response => {
        console.log(response);
        // Handle successful response
      },
      error => {
        console.error(error);
        // Handle error
      }
    );
  }
}
