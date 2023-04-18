import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SVService } from '../sv.service';

@Component({
  selector: 'app-login1',
  templateUrl: './login1.component.html',
  styleUrls: ['./login1.component.css']
})
export class Login1Component {

  // email form
  email = new FormControl('', [Validators.required, Validators.email]);
  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }
    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

// password form
hide = true;

// for email and password
passemail = new FormGroup({
  Enteryouremail : new FormControl('',Validators.email),
  Enteryourpassword : new FormControl('',Validators.required),
  Number : new FormControl ('',Validators.required),
  
})

password(){
  console.log(this.passemail);
  console.log(this.passemail.get('Number')?.setValue('9494995388'));
  this.apiservice.getdata();
}

constructor( private apiservice: SVService){}


 



}
