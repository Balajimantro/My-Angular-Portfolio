import { CommonModule } from '@angular/common';
import {Component} from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import emailjs from '@emailjs/browser'
import { window } from 'rxjs';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  form!: FormGroup;
  alertVisible : boolean = false;
  alertIconPath: string = '';
  alertMessage: string = ''
  alertType: 'success' | 'error' | '' = '';

  constructor(private fb: FormBuilder) {
    this.form = fb.group({
      userName: new FormControl ('', [Validators.required]),
      email: new FormControl ('', [Validators.required, Validators.email]),
      message: new FormControl ('', [Validators.required]),
      to_name: 'Admin'
    })
  }

  goToLinkedin() {
    globalThis.window.open('https://www.linkedin.com/in/balajiseenivasan/', '_blank');
  }

  get email(): string {
    return 'balajimantro4123@gmail.com';
  }

  async sendEmail() {
    if (this.form.valid) {
      emailjs.init('1rwEgFznbZGz87X1x')
      await emailjs.send("service_uzxxfrl","template_imd51kb",{
        to_name: this.form.value.to_name,
        message: this.form.value.message,
        name: this.form.value.userName,
        email: this.form.value.email,
      });
      this.alertVisible = true;
      this.alertType = 'success'
      this.alertIconPath = '/assets/contact_us_alert_message_success_icon.svg'
      this.alertMessage = 'Mail sended Successfull'
      this.form.reset()
      setTimeout(() => {
        this.closeAlert()
      }, 5000)
    } else {
      this.alertVisible = true;
      this.alertType = 'error'
      this.alertIconPath = '/assets/contact_us_alert_message_error_icon.svg'
      this.alertMessage = 'Invalid Data or Error sending Mail'
      setTimeout(() => {
        this.closeAlert()
      }, 5000)
    }
  }

  closeAlert() 
  { 
    this.alertVisible = false;
    this.alertType = '';
    this.alertIconPath = '';
    this.alertMessage = '';
  }
}


