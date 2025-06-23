import { Component, OnInit, inject, PLATFORM_ID, Inject } from '@angular/core';
import { CommonModule, isPlatformBrowser, DOCUMENT } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';
import { TransferState, makeStateKey } from '@angular/platform-browser';
import Aos from 'aos';

// Create a key for the business schema
const BUSINESS_SCHEMA_KEY = makeStateKey<string>('businessSchema');

interface TeamMember {
  name: string;
  position: string;
  image: string;
  description: string;
}

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.scss'
})
export class AboutUsComponent implements OnInit {
  private platformId = inject(PLATFORM_ID);
  yearsOfExperience: number = new Date().getFullYear() - 2020;
  experienceText: string = this.yearsOfExperience + '+';
  private baseUrl = 'https://captainsteelroofsolution.com';

  constructor(
    private meta: Meta,
    private title: Title,
    private transferState: TransferState,
    @Inject(DOCUMENT) private document: Document
  ) {
    this.setupSEO();
    this.setBusinessStructuredData();
  }

  private setupSEO() {
    const description = `Captain Steel - Leading steel roofing manufacturer in Rajkot with ${this.yearsOfExperience}+ years of excellence. We provide premium corrugated sheets, trapezoidal sheets, and air ventilators with expert installation services across Gujarat.`;

    this.title.setTitle('Best Colour Coated Roofing Sheet Manufacturer in Rajkot, Gujarat | Captain Steel');
    
    // Enhanced meta tags for better SEO
    this.meta.updateTag({ name: 'description', content: description });
    this.meta.updateTag({ name: 'keywords', content: 'roofing sheet, colour coated roofing sheet, roofing sheet in rajkot, colour coated roofing sheet in rajkot, steel roofing manufacturer gujarat, corrugated sheets manufacturer, trapezoidal sheets Rajkot, industrial roofing Gujarat, commercial roofing Rajkot, best roofing manufacturer Rajkot' });
    this.meta.updateTag({ name: 'robots', content: 'index, follow' });
    this.meta.updateTag({ name: 'author', content: 'Captain Steel Roof Solutions' });
    
    // Open Graph tags for better social sharing
    this.meta.updateTag({ property: 'og:title', content: 'Best Roofing Sheet & Colour Coated Roofing Sheet Manufacturer in Rajkot | Captain Steel' });
    this.meta.updateTag({ property: 'og:description', content: description });
    this.meta.updateTag({ property: 'og:image', content: 'https://captainsteelroofsolution.com/assets/home/company.jpg' });
    this.meta.updateTag({ property: 'og:url', content: 'https://captainsteelroofsolution.com/about-us' });
    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({ property: 'og:locale', content: 'en_IN' });

    // Twitter Card tags
    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.meta.updateTag({ name: 'twitter:title', content: 'Premium Roofing Sheet Manufacturer in Rajkot - Captain Steel' });
    this.meta.updateTag({ name: 'twitter:description', content: description });
    this.meta.updateTag({ name: 'twitter:image', content: 'https://captainsteelroofsolution.com/assets/home/company.jpg' });
    
    // Geo tags for local SEO
    this.meta.updateTag({ name: 'geo.region', content: 'IN-GJ' });
    this.meta.updateTag({ name: 'geo.placename', content: 'Rajkot' });
    this.meta.updateTag({ name: 'geo.position', content: '22.089547;70.783704' });
    this.meta.updateTag({ name: 'ICBM', content: '22.089547, 70.783704' });
  }

  private setBusinessStructuredData(): void {
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Captain Steel Roof Solutions",
      "image": `${this.baseUrl}/assets/logo/logo.png`,
      "url": this.baseUrl,
      "telephone": "+91 9879109091",
      "priceRange": "₹₹",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Sadak Pipliya, National Highway, Ta. Gondal",
        "addressLocality": "Rajkot",
        "addressRegion": "Gujarat",
        "postalCode": "360311",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "22.089547",
        "longitude": "70.783704"
      },
      "department": [
        {
          "@type": "LocalBusiness",
          "name": "Colour Coated Roofing Sheet Department",
          "description": "Manufacturer of premium colour coated roofing sheets in Rajkot for industrial and commercial applications",
          "telephone": "+91 9879109091"
        },
        {
          "@type": "LocalBusiness",
          "name": "Roofing Solutions Department",
          "description": "Providing high-quality roofing sheets in Rajkot with expert installation services across Gujarat",
          "telephone": "+91 9879109091"
        }
      ],
      "areaServed": [
        {
          "@type": "City",
          "name": "Rajkot"
        },
        {
          "@type": "State",
          "name": "Gujarat"
        }
      ],
      "sameAs": [
        "https://www.facebook.com/captainroof/",
        "https://www.linkedin.com/company/captain-steel/",
        "https://twitter.com/captainsteel"
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

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      Aos.init({
        duration: 1000,
        once: true
      });
    }
  }
}
