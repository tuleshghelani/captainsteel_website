import { Component, inject, makeStateKey, OnInit, PLATFORM_ID, TransferState } from '@angular/core';
import { RouterModule } from '@angular/router'; 
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Title, Meta } from '@angular/platform-browser';
import Aos from 'aos';
import { DOCUMENT } from '@angular/common';
import { Inject } from '@angular/core';


const BUSINESS_SCHEMA_KEY = makeStateKey<string>('BUSINESS_SCHEMA');

interface Product {
  title: string;
  description: string;
  image: string;
  link: string;
  aosDelay: number;
  price?: number;
  review?: {
    author: string;
    reviewRating: number;
    reviewBody: string;
    datePublished: string;
  };
  aggregateRating?: {
    ratingValue: number;
    reviewCount: number;
  };
}

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  private platformId = inject(PLATFORM_ID);
  products: Product[] = [];
  private baseUrl = 'https://captainsteelroofsolution.com';

  constructor(
    private titleService: Title,
    private meta: Meta,
    @Inject(DOCUMENT) private document: Document,
    private transferState: TransferState
  ) {}

  ngOnInit() {
    // Check if running in the browser
    if (typeof window !== 'undefined') {
      Aos.init({
        duration: 1000,
        once: true
      });
    }
    this.products = [
      {
        title: 'Corrugated Roofing Sheets',
        description: 'High-quality corrugated sheets for durable and weather-resistant roofing solutions.',
        image: 'assets/products/corrugated-roofing-sheets-4.jpg',
        link: '/products/corrugated-roofing-sheets',
        aosDelay: 100,
        price: 250,
        review: {
          author: 'Rajesh Industries',
          reviewRating: 5,
          reviewBody: 'Excellent quality corrugated sheets that have withstood harsh weather conditions for years. Highly recommended for industrial roofing.',
          datePublished: '2023-08-15'
        },
        aggregateRating: {
          ratingValue: 4.8,
          reviewCount: 124
        }
      },
      {
        title: 'Trapezoidal Profile Sheets',
        description: 'Premium trapezoidal sheets offering superior strength and modern aesthetics.',
        image: 'assets/products/trapezoidal-profile-sheets.jpg',
        link: '/products/trapezoidal-profile-sheets',
        aosDelay: 200,
        price: 300,
        review: {
          author: 'Patel Construction',
          reviewRating: 5,
          reviewBody: 'The trapezoidal sheets from Captain Steel have transformed our commercial building. Great strength and modern look.',
          datePublished: '2023-09-22'
        },
        aggregateRating: {
          ratingValue: 4.7,
          reviewCount: 98
        }
      },
      {
        title: 'Air Ventilators',
        description: 'Efficient air ventilators for improved airflow and ventilation.',
        image: 'assets/products/air-ventilator.jpeg',
        link: '/products/air-ventilator',
        aosDelay: 300,
        price: 450,
        review: {
          author: 'Mehta Manufacturing',
          reviewRating: 4,
          reviewBody: 'These ventilators have significantly improved air circulation in our factory. Energy-efficient and durable.',
          datePublished: '2023-07-10'
        },
        aggregateRating: {
          ratingValue: 4.5,
          reviewCount: 76
        }
      },
      {
        title: 'Insulated Metal Sheets',
        description: 'Insulated sheets providing excellent thermal performance.',
        image: 'assets/products/insulated-metal-roofing-sheets.jpg',
        link: '/products/insulated-metal-sheets',
        aosDelay: 400,
        price: 500,
        review: {
          author: 'Sharma Cold Storage',
          reviewRating: 5,
          reviewBody: 'The insulated metal sheets have drastically reduced our cooling costs. Perfect thermal insulation for our cold storage facility.',
          datePublished: '2023-10-05'
        },
        aggregateRating: {
          ratingValue: 4.9,
          reviewCount: 87
        }
      },
      {
        title: 'Crimping Metal Sheet',
        description: 'High-quality crimping solutions for various applications.',
        image: 'assets/products/crimping-and-accessories.jpg',
        link: '/products/crimping',
        aosDelay: 5000,
        price: 350,
        review: {
          author: 'Joshi Fabricators',
          reviewRating: 4,
          reviewBody: 'The crimping metal sheets have excellent finish and durability. Very satisfied with the quality and service.',
          datePublished: '2023-06-18'
        },
        aggregateRating: {
          ratingValue: 4.6,
          reviewCount: 65
        }
      },
      {
        title: 'Polycarbonate Sheet',
        description: 'Durable polycarbonate sheets for versatile applications.',
        image: 'assets/products/polycarbonate-sheets-2.jpg',
        link: '/products/polycarbonate-sheet',
        aosDelay: 6000,
        price: 600,
        review: {
          author: 'Verma Architects',
          reviewRating: 5,
          reviewBody: 'The polycarbonate sheets are perfect for our skylight projects. Excellent light transmission and UV protection.',
          datePublished: '2023-11-12'
        },
        aggregateRating: {
          ratingValue: 4.7,
          reviewCount: 92
        }
      },
      {
        title: 'Polycarbonate Multiwall',
        description: 'Multiwall polycarbonate sheets for enhanced insulation.',
        image: 'assets/products/polycarbonate-sheets.jpg',
        link: '/products/polycarbonate-sheet',
        aosDelay: 7000,
        price: 700,
        review: {
          author: 'Shah Greenhouses',
          reviewRating: 5,
          reviewBody: 'The multiwall polycarbonate sheets provide excellent insulation for our greenhouse projects. Energy-efficient and durable.',
          datePublished: '2023-08-30'
        },
        aggregateRating: {
          ratingValue: 4.8,
          reviewCount: 78
        }
      },
      {
        title: 'Roofing Accessories',
        description: 'A range of accessories to complement our roofing solutions.',
        image: 'assets/products/crimping-and-accessories-2.jpg',
        link: '/products/roofing-accessories',
        aosDelay: 8000,
        review: {
          author: 'Kumar Builders',
          reviewRating: 4,
          reviewBody: 'The roofing accessories are of excellent quality and perfectly complement the main roofing products. Great attention to detail.',
          datePublished: '2023-09-08'
        },
        aggregateRating: {
          ratingValue: 4.6,
          reviewCount: 54
        }
      },
      {
        title: 'Bamboo Profile',
        description: 'Bamboo profile sheets for sustainable and eco-friendly roofing solutions.',
        image: 'assets/products/BAMBOO_PROFILE/UPVC BAMBOO TILE SHEET.png',
        link: '/products/bamboo-profile',
        aosDelay: 9000,
        review: {
          author: 'Green Earth Resorts',
          reviewRating: 5,
          reviewBody: 'The bamboo profile sheets are perfect for our eco-resort. Sustainable, beautiful, and durable even in monsoon conditions.',
          datePublished: '2023-10-25'
        },
        aggregateRating: {
          ratingValue: 4.9,
          reviewCount: 67
        }
      },
      {
        title: 'Roofing Gutter',
        description: 'Bamboo profile sheets for sustainable and eco-friendly roofing solutions.',
        image: 'assets/products/HYBRIDE_GUTTER/GUTEER 1.jpeg',
        link: '/products/gutter',
        aosDelay: 10000,
        review: {
          author: 'Desai Properties',
          reviewRating: 5,
          reviewBody: 'The roofing gutters are of excellent quality and have been performing flawlessly during heavy rains. Great water management solution.',
          datePublished: '2023-07-22'
        },
        aggregateRating: {
          ratingValue: 4.7,
          reviewCount: 83
        }
      }
    ];

    // Set SEO meta tags
    this.titleService.setTitle('Colour Coated Roofing Sheet in Rajkot | Roofing Sheet Manufacturer | Captain Steel');
    this.meta.addTags([
      { name: 'description', content: 'Looking for premium roofing sheet or colour coated roofing sheet in Rajkot? Captain Steel offers the best quality roofing sheets, colour coated roofing sheets, and installation services in Rajkot, Gujarat.' },
      { name: 'keywords', content: 'roofing sheet, colour coated roofing sheet, roofing sheet in rajkot, colour coated roofing sheet in rajkot, steel roofing Rajkot, roofing sheets Rajkot, best roofing sheet manufacturer Rajkot, industrial roofing Rajkot, insulated metal sheets Rajkot, polycarbonate sheets Gujarat, crimping solutions Rajkot, roofing accessories Gujarat, bamboo profile sheets Rajkot, gutter systems Rajkot, steel roof manufacturers Gujarat, Captain Steel Rajkot, best roofing company Rajkot, commercial roofing Gujarat, industrial ventilation Rajkot, factory roofing solutions Gujarat' },
      { name: 'robots', content: 'index, follow' },
      { name: 'author', content: 'Captain Steel Roof Solutions' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'canonical', content: 'https://captainsteelroofsolution.com/products' },
      // Open Graph tags for social sharing
      { property: 'og:title', content: 'Colour Coated Roofing Sheet in Rajkot | Roofing Sheet Manufacturer | Captain Steel' },
      { property: 'og:description', content: 'Get the best roofing sheet and colour coated roofing sheet in Rajkot from Captain Steel. Premium quality, durable, and attractive roofing solutions for all needs.' },
      { property: 'og:url', content: 'https://captainsteelroofsolution.com/products' },
      { property: 'og:type', content: 'website' },
      // Twitter Card tags
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'Colour Coated Roofing Sheet in Rajkot | Roofing Sheet Manufacturer | Captain Steel' },
      { name: 'twitter:description', content: 'Get the best roofing sheet and colour coated roofing sheet in Rajkot from Captain Steel. Premium quality, durable, and attractive roofing solutions for all needs.' }
    ]);

    this.injectLocalBusinessSchema();
  }

  private injectLocalBusinessSchema() {
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
          "name": "Bamboo Profile Sheets Department",
          "description": "Specializing in premium bamboo profile sheets for sustainable roofing in Rajkot and across Gujarat",
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
}
