import { Component, OnInit, inject, PLATFORM_ID, Inject } from '@angular/core';
import { CommonModule, isPlatformBrowser, DOCUMENT } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';
import { TransferState, makeStateKey } from '@angular/platform-browser';
import * as Aos from 'aos';

// Define TransferState keys
const PRODUCT_SCHEMA_KEY = makeStateKey<string>('CORRUGATED_SHEETS_PRODUCT_SCHEMA');
const BUSINESS_SCHEMA_KEY = makeStateKey<string>('CORRUGATED_SHEETS_BUSINESS_SCHEMA');

interface Feature {
  icon: string;
  title: string;
  description: string;
}

interface Specification {
  name: string;
  value: string;
}

interface FAQ {
  question: string;
  answer: string;
}

@Component({
  selector: 'app-corrugated-roofing-sheets',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './corrugated-roofing-sheets.component.html',
  styleUrl: './corrugated-roofing-sheets.component.scss'
})
export class CorrugatedRoofingSheetsComponent implements OnInit {
  private platformId = inject(PLATFORM_ID);
  private baseUrl = 'https://captainsteelroofsolution.com';
  
  features: Feature[] = [
    {
      icon: 'fas fa-shield-alt',
      title: 'Superior Durability',
      description: 'Engineered with high-tensile steel to withstand extreme weather conditions and provide long-lasting protection.'
    },
    {
      icon: 'fas fa-bolt',
      title: 'Corrosion Resistant',
      description: 'Advanced galvanized coating technology offers exceptional protection against rust and corrosion.'
    },
    {
      icon: 'fas fa-tint-slash',
      title: 'Weather Proof',
      description: 'Designed to resist heavy rainfall, high winds, snow loads, and extreme temperatures year-round.'
    },
    {
      icon: 'fas fa-sun',
      title: 'UV Resistant',
      description: 'Special coating prevents color fading and material degradation from prolonged sun exposure.'
    },
    {
      icon: 'fas fa-feather',
      title: 'Lightweight',
      description: 'High strength-to-weight ratio reduces structural load requirements and makes installation easier.'
    },
    {
      icon: 'fas fa-palette',
      title: 'Aesthetic Appeal',
      description: 'Available in multiple colors and finishes to complement any architectural style and design vision.'
    }
  ];

  specifications: Specification[] = [
    { name: 'Material', value: 'High-tensile galvanized steel' },
    { name: 'Thickness', value: '0.35mm to 0.80mm' },
    { name: 'Width Coverage', value: '1050mm (standard)' },
    { name: 'Length', value: 'Customizable up to 12m' },
    { name: 'Surface Treatment', value: 'Galvanized/Aluzinc/Color Coated' },
    { name: 'Coating', value: 'PE/PVDF/SMP/HDP' },
    { name: 'Profile Height', value: '17mm to 32mm' },
    { name: 'Rib Spacing', value: '76mm (standard)' },
    { name: 'Color Options', value: 'Multiple premium colors available' },
    { name: 'Wind Uplift Resistance', value: 'Up to 180 km/h' },
    { name: 'Warranty', value: 'Up to 20 years (material dependent)' }
  ];

  faqs: FAQ[] = [
    {
      question: 'What is the minimum order quantity for corrugated roofing sheets?',
      answer: 'Our minimum order quantity is typically 100 square meters. However, we can accommodate smaller orders for specific projects. Please contact our sales team for customized solutions.'
    },
    {
      question: 'Do you offer installation services along with the product?',
      answer: 'Yes, we provide professional installation services through our certified installation partners across the country. Our installation comes with a workmanship warranty and ensures optimal performance of the roofing system.'
    },
    {
      question: 'How do corrugated sheets compare to other roofing materials?',
      answer: 'Corrugated sheets offer superior durability, weather resistance, and cost-effectiveness compared to traditional roofing materials. They are lighter, easier to install, require minimal maintenance, and have a longer lifespan, making them an excellent investment for various applications.'
    },
    {
      question: 'What colors are available for corrugated roofing sheets?',
      answer: 'We offer a wide range of premium colors including but not limited to Classic Red, Forest Green, Royal Blue, Charcoal Grey, Terracotta, Bright White, and Metallic Silver. Custom colors are also available for large orders.'
    },
    {
      question: 'How long do corrugated roofing sheets last?',
      answer: 'With proper installation and maintenance, our corrugated roofing sheets can last 25-30 years or more. The exact lifespan depends on the coating type, environmental conditions, and maintenance practices.'
    },
    {
      question: 'Are your corrugated sheets environmentally friendly?',
      answer: 'Yes, our steel corrugated sheets are 100% recyclable. We also use eco-friendly manufacturing processes that minimize waste and energy consumption, contributing to sustainable building practices.'
    },
    {
      question: 'What makes Captain Steel\'s corrugated roofing sheets in Rajkot superior?',
      answer: 'Captain Steel\'s corrugated roofing sheets in Rajkot are manufactured with premium-grade high-tensile steel and feature advanced coating technology that exceeds industry standards. Our local manufacturing facility allows us to maintain strict quality control while offering customized solutions, competitive pricing, and prompt delivery throughout Gujarat. We also provide professional installation services by certified experts, ensuring optimal performance and longevity of your roofing system.'
    },
  ];

  galleryImages = [
    {
      src: 'assets/products/corrugated-roofing-sheets-4.jpg',
      alt: 'Premium Corrugated Roofing Sheets in Rajkot - High Quality Steel Roofing',
      title: 'Corrugated Steel Sheets'
    },
    {
      src: 'assets/products/corrugated-roofing-sheets-2.jpg',
      alt: 'Color Coated Corrugated Sheets in Rajkot - Durable Commercial Roofing',
      title: 'Color Coated Sheets'
    },
    {
      src: 'assets/products/corrugated-roofing-sheets-3.jpg',
      alt: 'Galvanized Corrugated Roofing Installation in Rajkot - Professional Roofing',
      title: 'Professional Installation'
    },
    {
      src: 'assets/products/corrugated-sheets-accessories.jpg',
      alt: 'Corrugated Roofing Accessories in Rajkot - Complete Roofing Solutions',
      title: 'Roofing Accessories'
    }
  ];

  constructor(
    private meta: Meta,
    private titleService: Title,
    @Inject(DOCUMENT) private document: Document,
    private transferState: TransferState
  ) {}

  ngOnInit() {
    // Set SEO meta tags - Title tags influence search rankings and are the first impression for users
    this.titleService.setTitle('Premium Corrugated Roofing Sheets in Rajkot | Captain Steel');
    
    // Meta descriptions impact click-through rates by providing concise page summaries under 155 characters
    this.meta.addTags([
      { name: 'description', content: 'Buy premium corrugated roofing sheets in Rajkot at Captain Steel. High-tensile galvanized steel with superior durability and weather resistance. Best prices in Rajkot with same-day delivery across Gujarat.' },
      { name: 'keywords', content: 'corrugated roofing sheets, corrugated roofing sheets in Rajkot, steel roofing Rajkot, metal roofing Rajkot, industrial roofing Gujarat, commercial roofing Rajkot, galvanized roofing sheets, color coated roofing, roof sheets price, Rajkot, Gujarat' },
      { name: 'robots', content: 'index, follow' },
      { name: 'author', content: 'Captain Steel Roof Solutions' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'canonical', content: 'https://captainsteelroofsolution.com/products/corrugated-roofing-sheets' },
      // Location-specific meta tags
      { name: 'geo.region', content: 'IN-GJ' },
      { name: 'geo.placename', content: 'Rajkot, Gujarat' },
      { name: 'geo.position', content: '22.089547;70.783704' },
      { name: 'ICBM', content: '22.089547, 70.783704' },
      // Open Graph tags for social sharing - Extends SEO impact to social platforms
      { property: 'og:title', content: 'Premium Corrugated Roofing Sheets in Rajkot | Captain Steel' },
      { property: 'og:description', content: 'Buy premium corrugated roofing sheets in Rajkot. High-tensile galvanized steel with superior durability and lowest prices guaranteed. Free delivery across Rajkot.' },
      { property: 'og:image', content: 'https://captainsteelroofsolution.com/assets/products/corrugated-roofing-sheets-4.jpg' },
      { property: 'og:url', content: 'https://captainsteelroofsolution.com/products/corrugated-roofing-sheets' },
      { property: 'og:type', content: 'product' },
      { property: 'og:locality', content: 'Rajkot' },
      { property: 'og:region', content: 'Gujarat' },
      { property: 'og:postal-code', content: '360311' },
      { property: 'og:country-name', content: 'India' },
      // Twitter Card tags - Enhances visibility on Twitter platform
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'Premium Corrugated Roofing Sheets in Rajkot | Captain Steel' },
      { name: 'twitter:description', content: 'Buy premium corrugated sheets in Rajkot. Durable, weather-resistant steel roofing with best prices and free delivery across Gujarat.' },
      { name: 'twitter:image', content: 'https://captainsteelroofsolution.com/assets/products/corrugated-roofing-sheets-4.jpg' }
    ]);
    
    // Add structured data
    this.setProductStructuredData();
    this.setBusinessStructuredData();
    
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

        // Add click event listeners to gallery thumbnails
        const thumbnails = document.querySelectorAll('.thumbnail');
        const mainImage = document.querySelector('.main-image img') as HTMLImageElement;
        
        if (thumbnails.length > 0 && mainImage) {
          thumbnails.forEach(thumb => {
            thumb.addEventListener('click', () => {
              // Remove active class from all thumbnails
              thumbnails.forEach(t => t.classList.remove('active'));
              
              // Add active class to clicked thumbnail
              thumb.classList.add('active');
              
              // Update main image
              const thumbImg = thumb.querySelector('img') as HTMLImageElement;
              if (thumbImg) {
                mainImage.src = thumbImg.src;
                mainImage.alt = thumbImg.alt;
              }
            });
          });
        }
      }, 500);
    }
  }

  private setProductStructuredData(): void {
    const structuredData = {
      "@context": "https://schema.org/",
      "@type": "Product",
      "name": "Premium Corrugated Roofing Sheets",
      "alternateName": ["Corrugated Sheets", "Steel Roofing Sheets", "Galvanized Corrugated Sheets"],
      "image": [
        `${this.baseUrl}/assets/products/corrugated-roofing-sheets-4.jpg`,
        `${this.baseUrl}/assets/products/corrugated-roofing-sheets-2.jpg`,
        `${this.baseUrl}/assets/products/corrugated-roofing-sheets-3.jpg`
      ],
      "description": "Premium corrugated roofing sheets available in Rajkot, Gujarat. Our high-tensile galvanized steel sheets offer superior durability, weather resistance, and aesthetic appeal. Ideal for industrial, commercial, and residential buildings with local delivery and installation services throughout Rajkot and Gujarat.",
      "sku": "CORR-SHEET-01",
      "mpn": "CSRS-CG-2023",
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
        "ratingCount": "186",
        "reviewCount": "112"
      },
      "material": ["High-tensile Steel", "Galvanized Coating", "Aluzinc Coating", "Color Coating"],
      "width": {
        "@type": "QuantitativeValue",
        "value": "1050",
        "unitCode": "MMT"
      },
      "height": {
        "@type": "QuantitativeValue",
        "value": "17-32",
        "unitCode": "MMT"
      },
      "weight": {
        "@type": "QuantitativeValue",
        "value": "4.5-9.2",
        "unitCode": "KGM"
      },
      "additionalProperty": [
        {
          "@type": "PropertyValue",
          "name": "Wind Resistance",
          "value": "Up to 180 km/h"
        },
        {
          "@type": "PropertyValue",
          "name": "Warranty",
          "value": "Up to 20 years"
        },
        {
          "@type": "PropertyValue",
          "name": "Local Availability",
          "value": "Available in Rajkot with same-day delivery"
        },
        {
          "@type": "PropertyValue",
          "name": "Installation Service",
          "value": "Professional installation available across Gujarat"
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
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday"
          ],
          "opens": "09:00",
          "closes": "19:00"
        }
      ],
      "department": [
        {
          "@type": "LocalBusiness",
          "name": "Corrugated Roofing Sheets Department",
          "description": "Specializing in premium corrugated roofing sheets for industrial, commercial and residential buildings in Rajkot and across Gujarat",
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
