import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser, DOCUMENT } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Title, Meta } from '@angular/platform-browser';
import { TransferState, makeStateKey } from '@angular/platform-browser';

// Define TransferState keys
const PRODUCT_SCHEMA_KEY = makeStateKey<string>('CONTACT_US_PRODUCT_SCHEMA');
const BUSINESS_SCHEMA_KEY = makeStateKey<string>('CONTACT_US_BUSINESS_SCHEMA');

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
  private baseUrl = 'https://captainsteelroofsolution.com';

  constructor(
    private formBuilder: FormBuilder,
    private titleService: Title,
    private metaService: Meta,
    @Inject(DOCUMENT) private document: Document,
    @Inject(PLATFORM_ID) private platformId: Object,
    private transferState: TransferState
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

    // Add structured data
    // this.setProductStructuredData();
    this.setBusinessStructuredData();

    // Initialize AOS animation library if needed
    if (isPlatformBrowser(this.platformId)) {
      // Only initialize AOS in browser environment
      import('aos').then(AosModule => {
        AosModule.default.init({
          duration: 800,
          once: true
        });
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

  private setProductStructuredData(): void {
    const structuredData = {
      "@context": "https://schema.org/",
      "@type": "Product",
      "name": "Captain Steel Roofing Solutions in Rajkot",
      "description": "Premium steel roofing sheets and accessories for industrial and commercial applications in Rajkot, Gujarat. Leading manufacturer of corrugated sheets, trapezoidal sheets, and air ventilators.",
      "image": `${this.baseUrl}/assets/logo/logo.png`,
      "brand": {
        "@type": "Brand",
        "name": "Captain Steel"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "ratingCount": "127",
        "reviewCount": "98",
        "bestRating": "5"
      }
    };
    
    // Store the structured data in transfer state
    this.transferState.set(PRODUCT_SCHEMA_KEY, JSON.stringify(structuredData));
    
    // Only add script tag in browser environment
    if (isPlatformBrowser(this.platformId)) {
      const script = this.document.createElement('script');
      script.type = 'application/ld+json';
      script.text = JSON.stringify(structuredData);
      this.document.head.appendChild(script);
    }
  }
  
  private setBusinessStructuredData(): void {
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Captain Steel Roof Solutions",
      "image": `${this.baseUrl}/assets/logo/logo.png`,
      "telephone": "+919879109091",
      "email": "captainsteel39@gmail.com",
      "url": this.baseUrl,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Survey No.39/2, Plot No.4, Nr.Markwell Spinning Mill, Sadak Pipliya, National Highway",
        "addressLocality": "Rajkot",
        "addressRegion": "Gujarat",
        "postalCode": "360110",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "22.089419",
        "longitude": "70.782472"
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Thursday", "Friday", "Saturday", "Sunday"],
          "opens": "09:00",
          "closes": "19:00"
        }
      ],
      "sameAs": [
        "https://www.facebook.com/captainroof/",
        "https://www.linkedin.com/company/captain-steel/"
      ]
    };
    
    // Store the structured data in transfer state
    this.transferState.set(BUSINESS_SCHEMA_KEY, JSON.stringify(structuredData));
    
    // Only add script tag in browser environment
    if (isPlatformBrowser(this.platformId)) {
      const script = this.document.createElement('script');
      script.type = 'application/ld+json';
      script.text = JSON.stringify(structuredData);
      this.document.head.appendChild(script);
    }
  }
}