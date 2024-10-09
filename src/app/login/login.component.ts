import { Component,OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validator, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  loginForm!:FormGroup;

  constructor(private fb:FormBuilder, private router: Router){

    

  }

  ngOnInit(): void {
      this.loginForm=this.fb.group ({
        username: ['',Validators.required],
        password: ['',Validators.required,]

      });
  }
  onSubmit():void {
    if(this.loginForm.valid){
      console.log('Form submitted', this.loginForm.value);
     this.router.navigate(['/simulation']);
    }
    else {
      console.log("Form is invalid");
    }

    

  }

}
