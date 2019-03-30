import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from './../api-service.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

// import { from } from 'rxjs';
declare var $: any;
@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})

export class LoginFormComponent implements OnInit {

  username: any;
  password: any;
  c_password: any;
  auth_token: any;
  email: any;
  constructor(
    private apiService: ApiServiceService,
    private route: ActivatedRoute,
    private router: Router
  ) { }
    
  ngOnInit() {
    $(function() {
 
      $('#login-form-link').click(function(e) {
      $("#login-form").delay(100).fadeIn(100);
       $("#register-form").fadeOut(100);
      $('#register-form-link').removeClass('active');
      $(this).addClass('active');
      e.preventDefault();
    });
    $('#register-form-link').click(function(e) {
      $("#register-form").delay(100).fadeIn(100);
       $("#login-form").fadeOut(100);
      $('#login-form-link').removeClass('active');
      $(this).addClass('active');
      e.preventDefault();
    });
  
  });
  }

  login() {
    let data = {
      "password" : this.password,
      "email" : this.email
    }
    this.apiService.postData("login", data)
    .subscribe(
        result => {
          this.auth_token = result['success']['token'];
          localStorage.setItem("auth_token", this.auth_token);
          this.apiService.getToken(this.auth_token); 
        },
        error => {
          console.error("error creating");
        }
    );
  }

}
