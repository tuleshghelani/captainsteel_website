import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import Aos from 'aos';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.scss'
})
export class ContactUsComponent implements OnInit {
  contactForm: FormGroup;
  submitted = false;
  formSubmitted = false;

  constructor(private formBuilder: FormBuilder) {
    this.contactForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phone: [''],
      subject: ['', [Validators.required]],
      message: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
    // Initialize AOS animation library if needed
    if (typeof Aos !== 'undefined') {
      Aos.init({
        duration: 800,
        once: true
      });
    }
  }

  // Getter for easy access to form fields
  get f() {
    return this.contactForm.controls;
  }

  submitForm(): void {
    this.submitted = true;

    // Stop here if form is invalid
    if (this.contactForm.invalid) {
      return;
    }

    // TODO: Implement actual form submission logic
    // This would typically involve an API call to your backend

    // For demo purposes, we'll simulate a successful submission
    setTimeout(() => {
      this.formSubmitted = true;
      this.contactForm.reset();
      this.submitted = false;
    }, 1500);
  }
}
