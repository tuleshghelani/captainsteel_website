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
    // Set enhanced SEO metadata
    this.titleService.setTitle('Contact Captain Steel | Premium Roofing Solutions in Rajkot, Gujarat');
    
    this.metaService.updateTag({ 
      name: 'description', 
      content: 'Contact Captain Steel - Rajkot\'s leading steel roofing manufacturer. Visit our factory in Sadak Pipliya or office in Rajkot, Gujarat. Get quotes for corrugated sheets, trapezoidal sheets, air ventilators, and more. Call +91 98791 09091 today!' 
    });
    
    this.metaService.updateTag({ 
      name: 'keywords', 
      content: 'Captain Steel contact, steel roofing Rajkot, roofing manufacturer Gujarat, corrugated sheets Rajkot, trapezoidal sheets Gujarat, air ventilators Rajkot, industrial roofing Rajkot, contact roofing company Rajkot, steel roofing quotes Rajkot, best roofing solutions Gujarat' 
    });
    
    // Open Graph tags for better social sharing
    this.metaService.updateTag({ 
      property: 'og:title', 
      content: 'Contact Captain Steel | Premium Roofing Solutions in Rajkot, Gujarat' 
    });
    
    this.metaService.updateTag({ 
      property: 'og:description', 
      content: 'Contact Rajkot\'s premier steel roofing manufacturer for industrial and commercial roofing solutions. Visit our factory or get a free quote today!' 
    });
    
    this.metaService.updateTag({ 
      property: 'og:url', 
      content: 'https://captainsteelroofsolution.com/contact-us' 
    });
    
    this.metaService.updateTag({ 
      property: 'og:type', 
      content: 'website' 
    });
    
    this.metaService.updateTag({ 
      property: 'og:image', 
      content: 'https://captainsteelroofsolution.com/assets/logo/logo.png' 
    });
    
    // Twitter Card tags
    this.metaService.updateTag({ 
      name: 'twitter:card', 
      content: 'summary_large_image' 
    });
    
    this.metaService.updateTag({ 
      name: 'twitter:title', 
      content: 'Contact Captain Steel | Premium Roofing Solutions in Rajkot' 
    });
    
    this.metaService.updateTag({ 
      name: 'twitter:description', 
      content: 'Contact Rajkot\'s premier steel roofing manufacturer. Get quotes for corrugated sheets, trapezoidal sheets, and more!' 
    });
    
    // Geo tags for local SEO
    this.metaService.updateTag({ name: 'geo.region', content: 'IN-GJ' });
    this.metaService.updateTag({ name: 'geo.placename', content: 'Rajkot' });
    this.metaService.updateTag({ name: 'geo.position', content: '22.089419;70.782472' });
    this.metaService.updateTag({ name: 'ICBM', content: '22.089419, 70.782472' });

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
