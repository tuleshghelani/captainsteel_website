import { Component, OnInit, inject, PLATFORM_ID, Inject } from '@angular/core';
import { CommonModule, isPlatformBrowser, DOCUMENT } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';
import { TransferState, makeStateKey } from '@angular/platform-browser';
import Aos from 'aos';

// Define TransferState keys
const PRODUCT_SCHEMA_KEY = makeStateKey<string>('TRAPEZOIDAL_PROFILE_PRODUCT_SCHEMA');
const BUSINESS_SCHEMA_KEY = makeStateKey<string>('TRAPEZOIDAL_PROFILE_BUSINESS_SCHEMA');
const FAQ_SCHEMA_KEY = makeStateKey<string>('TRAPEZOIDAL_PROFILE_FAQ_SCHEMA');

interface Feature {
  icon: string;
  title: string;
  description: string;
}

interface Specification {
  thickness: string;
  width: string;
  length: string;
  material: string;
  coating: string;
  colors: string;
}

@Component({
  selector: 'app-trapezoidal-profile-sheets',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './trapezoidal-profile-sheets.component.html',
  styleUrl: './trapezoidal-profile-sheets.component.scss'
})
export class TrapezoidalProfileSheetsComponent implements OnInit {
  private platformId = inject(PLATFORM_ID);
  private baseUrl = 'https://captainsteelroofsolution.com';
  
  features: Feature[] = [
    {
      icon: 'fas fa-vector-square',
      title: 'Optimized Profile Design',
      description: 'Precision-engineered trapezoidal geometry for maximum structural integrity and water flow efficiency.'
    },
    {
      icon: 'fas fa-tint',
      title: 'Superior Water Drainage',
      description: 'Enhanced water channeling capability that prevents water pooling and leakage even during heavy rainfall.'
    },
    {
      icon: 'fas fa-weight-hanging',
      title: 'High Load Bearing Capacity',
      description: 'Exceptional structural strength to support heavy loads and withstand extreme weather conditions.'
    },
    {
      icon: 'fas fa-bolt',
      title: 'Quick Installation',
      description: 'Designed for easy and efficient installation, reducing project time and labor costs.'
    },
    {
      icon: 'fas fa-paint-brush',
      title: 'Customizable Finish',
      description: 'Available in a wide range of colors and finishes to match your architectural vision.'
    },
    {
      icon: 'fas fa-shield-alt',
      title: 'Corrosion Resistant',
      description: 'Advanced coating technology provides superior protection against rust and corrosion.'
    }
  ];

  specifications: Specification[] = [
    {
      thickness: '0.40mm - 0.80mm',
      width: '1000mm - 1250mm',
      length: 'Custom (up to 12m)',
      material: 'Galvanized Steel',
      coating: 'Zinc / Galvalume / Color Coated',
      colors: 'Multiple Options Available'
    }
  ];

  constructor(
    private meta: Meta,
    private titleService: Title,
    @Inject(DOCUMENT) private document: Document,
    private transferState: TransferState
  ) {}

  ngOnInit() {
    // Set SEO meta tags
    this.titleService.setTitle('Premium Trapezoidal Profile Sheets | Modern Steel Roofing | Captain Steel');
    
    this.meta.addTags([
      { name: 'description', content: 'Premium trapezoidal profile sheets with superior strength, durability, and modern aesthetics. Ideal for industrial, commercial & architectural roofing with excellent water drainage and customizable finishes. Captain Steel is a leading manufacturer of trapezoidal profile sheets in Rajkot, Gujarat.' },
      { name: 'keywords', content: 'trapezoidal profile sheets, trapezoidal profile sheets in rajkot, trapezoidal sheets, trapezoidal roofing, trapezoidal sheets in rajkot, metal roofing, steel roofing, industrial roofing, commercial roofing, architectural roofing, roof cladding, wall cladding, color coated roofing, modern roofing, galvanized roofing, galvalume roofing, color coated roofing, polyester coating, pvdf coating, smp coating' },
      { name: 'robots', content: 'index, follow' },
      { name: 'author', content: 'Captain Steel Roof Solutions' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'canonical', content: 'https://captainsteelroofsolution.com/products/trapezoidal-profile-sheets' },
      // Open Graph tags for social sharing
      { property: 'og:title', content: 'Premium Trapezoidal Profile Sheets | Modern Steel Roofing' },
      { property: 'og:description', content: 'Premium trapezoidal profile sheets with superior strength, durability, and modern aesthetics. Ideal for industrial, commercial & architectural applications.' },
      { property: 'og:image', content: 'https://captainsteelroofsolution.com/assets/products/trapezoidal-profile-sheets.jpg' },
      { property: 'og:url', content: 'https://captainsteelroofsolution.com/products/trapezoidal-profile-sheets' },
      { property: 'og:type', content: 'product' },
      // Twitter Card tags
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'Premium Trapezoidal Profile Sheets | Modern Steel Roofing' },
      { name: 'twitter:description', content: 'Premium trapezoidal profile sheets with superior strength, durability, and modern aesthetics for all roofing applications.' },
      { name: 'twitter:image', content: 'https://captainsteelroofsolution.com/assets/products/trapezoidal-profile-sheets.jpg' }
    ]);

    // Add structured data
    this.setProductStructuredData();
    this.setBusinessStructuredData();
    this.setFAQStructuredData();
    
    // Only run browser-specific code if we are in a browser environment
    if (isPlatformBrowser(this.platformId)) {
      // Initialize AOS animations
      Aos.init({
        duration: 1000,
        once: true,
        offset: 100
      });
      
      // Add click event listeners to FAQ items after view is initialized
      setTimeout(() => {
        const faqItems = document.querySelectorAll('.faq-question');
        faqItems.forEach(item => {
          item.addEventListener('click', () => {
            const parent = item.parentElement;
            if (parent) {
              parent.classList.toggle('active');
            }
          });
        });
      }, 500);
    }
  }

  private setProductStructuredData(): void {
    const structuredData = {
      "@context": "https://schema.org/",
      "@type": "Product",
      "name": "Trapezoidal Profile Sheets",
      "alternateName": ["Trapezoidal Sheets", "Steel Trapezoidal Roofing", "Architectural Trapezoidal Panels"],
      "image": [
        `${this.baseUrl}/assets/products/trapezoidal-profile-sheets.jpg`
      ],
      "description": "Premium trapezoidal profile sheets with superior strength, durability, and modern aesthetics. Our trapezoidal sheets provide excellent water drainage capability and enhanced load-bearing capacity for industrial and architectural applications.",
      "sku": "TRAP-PROFILE-01",
      "mpn": "CSRS-TP-2023",
      "brand": {
        "@type": "Brand",
        "name": "Captain Steel"
      },
      "manufacturer": {
        "@type": "Organization",
        "name": "Captain Steel Roof Solutions",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Rajkot",
          "addressRegion": "Gujarat",
          "postalCode": "360311",
          "addressCountry": "IN"
        }
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "bestRating": "5",
        "worstRating": "1",
        "ratingCount": "182",
        "reviewCount": "182"
      },
      "material": ["Galvanized Steel", "Color Coated Steel", "Galvalume"],
      "width": {
        "@type": "QuantitativeValue",
        "value": "1000-1250",
        "unitCode": "MMT"
      },
      "height": {
        "@type": "QuantitativeValue",
        "value": "0.40-0.80",
        "unitCode": "MMT"
      },
      "additionalProperty": [
        {
          "@type": "PropertyValue",
          "name": "Coating",
          "value": "Zinc / Galvalume / Color Coated"
        },
        {
          "@type": "PropertyValue",
          "name": "Length",
          "value": "Custom (up to 12m)"
        },
        {
          "@type": "PropertyValue",
          "name": "Load Bearing",
          "value": "Excellent for industrial applications"
        },
        {
          "@type": "PropertyValue",
          "name": "Water Drainage",
          "value": "Superior flow efficiency"
        }
      ]
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
      "url": this.baseUrl,
      "telephone": "+91 9879109091",
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
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday"
        ],
        "opens": "09:00",
        "closes": "18:00"
      },
      "department": [
        {
          "@type": "LocalBusiness",
          "name": "Trapezoidal Profile Sheets Department",
          "description": "Specializing in premium trapezoidal profile sheets for industrial and architectural applications",
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

  private setFAQStructuredData(): void {
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What makes trapezoidal profile sheets different from corrugated sheets?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Trapezoidal profile sheets feature a distinct geometric design with flat trapezoidal ribs that provide greater structural strength compared to the rounded waves of corrugated sheets. This design allows for higher load-bearing capacity, better water drainage, and a more modern aesthetic appearance, making them ideal for contemporary architectural applications and industrial buildings requiring enhanced structural performance."
          }
        },
        {
          "@type": "Question",
          "name": "What coating options are available for trapezoidal sheets?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our trapezoidal sheets are available with multiple coating options to suit various environmental conditions and project requirements. These include galvanized coating (zinc), Galvalume coating (zinc-aluminum alloy), and color-coated options with polyester, PVDF, or SMP paint systems. Each coating option offers different levels of corrosion protection, UV resistance, and aesthetic finishes, allowing you to choose the ideal solution for your specific application and location."
          }
        },
        {
          "@type": "Question",
          "name": "What is the typical lifespan of your trapezoidal profile sheets?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The lifespan of our trapezoidal profile sheets depends on several factors including the coating type, material thickness, environmental conditions, and maintenance. With proper installation and regular maintenance, our premium trapezoidal sheets typically last 25-40 years. Products with advanced coatings like Galvalume or high-performance paint systems can extend this lifespan even further, offering excellent long-term value and performance for your building envelope."
          }
        },
        {
          "@type": "Question",
          "name": "Can trapezoidal sheets be used for both roofing and wall cladding?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, our trapezoidal profile sheets are versatile solutions suitable for both roofing and wall cladding applications. Their excellent structural properties make them perfect for roofs, while their clean, linear aesthetic makes them popular for contemporary wall cladding designs. We offer different profile depths and configurations optimized for either roofing or cladding applications, and our technical team can help you select the most appropriate profile for your specific project requirements."
          }
        }
      ]
    };
    
    // Store the structured data in transfer state
    this.transferState.set(FAQ_SCHEMA_KEY, JSON.stringify(structuredData));
    
    // Only add script tag in browser environment
    if (isPlatformBrowser(this.platformId)) {
      const script = this.document.createElement('script');
      script.type = 'application/ld+json';
      script.text = JSON.stringify(structuredData);
      this.document.head.appendChild(script);
    }
  }
}
