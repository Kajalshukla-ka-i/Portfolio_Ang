import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmailService } from '../services/email.service';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  formData = {
    name: '',
    email: '',
    message: ''
  };
  responseMessage: string = '';
  isError: boolean = false;
  constructor(private router: Router, private emailService: EmailService) {
    router.navigate(['/contact']);

  }

  setFormState(): void {
    this.formData = {
      name: '',
      email: '',
      message: ''
    };
  }
  // submitForm() {
  //   // Handle form submission here
  //   this.email_send.sendEmail(this.formData).subscribe(()=>{
  //     console.log('Email sent successfully');
  //   },
  //   error =>{
  //     console.error('Error Sending email : ',error);
  //   }

  // )
  //   // console.log('Form submitted:', this.formData);

  //   // this.router.navigate(['/contact']);



  // }
  submitForm() {
    this.emailService.sendEmail(this.formData).subscribe(
      response => {
        console.log('Email sent successfully', response);
        this.responseMessage = response.message;
        this.isError = !response.success;
        if (!response.success) {
          this.router.navigate(['']);        }
      },
      error => {
        console.error('Error sending email:', error);
        this.responseMessage = 'Error sending email';
        this.isError = true;
      }
    );
  }
}





