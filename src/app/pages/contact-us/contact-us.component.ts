import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Title, Meta } from '@angular/platform-browser';
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

  constructor(
    private formBuilder: FormBuilder,
    private titleService: Title,
    private metaService: Meta
  ) {
    this.contactForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phone: [''],
      subject: ['', [Validators.required]],
      message: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
    // Set SEO metadata
    this.titleService.setTitle('Contact Captain Steel | Premium Roofing Solutions');
    this.metaService.updateTag({ name: 'description', content: 'Contact Captain Steel for premium steel roofing solutions, sheets, and accessories. Visit our factory in pipaliya or office in Rajkot, Gujarat. Get a free quote today!' });
    this.metaService.updateTag({ name: 'keywords', content: 'Captain Steel contact, roofing solutions, steel sheets, steel roofing, Rajkot, Gujarat, industrial roofing' });
    this.metaService.updateTag({ property: 'og:title', content: 'Contact Captain Steel | Premium Roofing Solutions' });
    this.metaService.updateTag({ property: 'og:description', content: 'Contact Captain Steel for premium steel roofing solutions, sheets, and accessories. Visit our factory in pipaliya or office in Rajkot, Gujarat.' });
    this.metaService.updateTag({ property: 'og:url', content: 'https://captainsteelroofsolution.com/contact-us' });
    this.metaService.updateTag({ property: 'og:type', content: 'website' });
    this.metaService.updateTag({ name: 'twitter:card', content: 'summary_large_image' });

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
