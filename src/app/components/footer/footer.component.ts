import { Component, inject, OnInit, PLATFORM_ID } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent implements OnInit {
  private platformId = inject(PLATFORM_ID);
  currentYear: number = new Date().getFullYear();
  
  constructor(private meta: Meta) {}
  
  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      // Add structured data for organization
      // this.addOrganizationSchema();
    }
  }
  
  private addOrganizationSchema() {
    const organizationSchema = {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      'name': 'Captain Steel Roof Solutions',
      'url': 'https://captainsteelroofsolution.com',
      'logo': 'https://captainsteelroofsolution.com/assets/logo/logo.png',
      'description': 'Leading manufacturer of premium steel roofing solutions in Rajkot, providing high-quality corrugated sheets, trapezoidal sheets, and accessories.',
      'telephone': '+919879109091',
      'email': 'captainsteel39@gmail.com',
      'address': {
        '@type': 'PostalAddress',
        'streetAddress': 'Survey No.39/2, Plot No.4, Nr.Markwell Spinning Mill, Sadak Pipliya, National Highway',
        'addressLocality': 'Rajkot',
        'addressRegion': 'Gujarat',
        'postalCode': '360110',
        'addressCountry': 'IN'
      }
    };
    
    // Add JSON-LD script to head
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(organizationSchema);
    document.head.appendChild(script);
  }
}
