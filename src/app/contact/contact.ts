import { CommonModule } from '@angular/common';
import { Component, NgZone } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import emailjs from 'emailjs-com';
import { ToastrModule, ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule, CommonModule, ToastrModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class Contact {
  contactForm: FormGroup;
  constructor(private fb: FormBuilder, private toastr: ToastrService,private ngZone:NgZone) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
      title: ['Message from My Portfolio']
    });
  }
  get formControls() {
    return this.contactForm.controls;
  }
  sendEmail() {
    if (this.contactForm.invalid) {
      return this.contactForm.markAllAsTouched();
    }
    emailjs.send(
      'service_9d4dcck',
      'template_na8jqhh',
      this.contactForm.value,
      'Q_gsdK-7AhO_UuQ-z'
    ).then(
      () => {
        // alert('Message sent successfully!');
        this.ngZone.run(() => {
          this.toastr.success('Message sent successfully!', 'Success');
        });

        this.contactForm.reset();
      },
      (error) => {
        // alert('Failed to send message: ' + error.text);
        this.ngZone.run(()=>{
          this.toastr.error('Failed to send message!', 'Error');
        })
      }
    );
  }
}
