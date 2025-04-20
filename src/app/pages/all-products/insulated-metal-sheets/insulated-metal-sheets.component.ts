import { Component, OnInit, inject, PLATFORM_ID, Inject } from '@angular/core';
import { CommonModule, isPlatformBrowser, DOCUMENT } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';
import { TransferState, makeStateKey } from '@angular/platform-browser';
import Aos from 'aos';

interface Feature {
  icon: string;
  title: string;
  description: string;
}

interface Specification {
  thickness: string;
  insulation: string;
  width: string;
  length: string;
  material: string;
  rValue: string;
  colors: string;
}

interface Product {
  title: string;
  description: string;
  image: string;
  price?: string;
  category: string;
}

// Create a state key for product schema
const PRODUCT_SCHEMA_KEY = makeStateKey<string>('insulatedMetalSheetsSchema');

@Component({
  selector: 'app-insulated-metal-sheets',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './insulated-metal-sheets.component.html',
  styleUrl: './insulated-metal-sheets.component.scss'
})
export class InsulatedMetalSheetsComponent implements OnInit {
  private platformId = inject(PLATFORM_ID);
  private baseUrl = 'https://captainsteelroofsolution.com';
  
  features: Feature[] = [
    {
      icon: 'fas fa-snowflake',
      title: 'Superior Thermal Insulation',
      description: 'High-performance insulation core provides exceptional temperature control and energy efficiency.'
    },
    {
      icon: 'fas fa-volume-mute',
      title: 'Acoustic Performance',
      description: 'Enhanced noise reduction properties create quieter and more comfortable interior environments.'
    },
    {
      icon: 'fas fa-fire-alt',
      title: 'Fire Resistance',
      description: 'Fire-resistant insulation materials improve building safety and meet stringent building code requirements.'
    },
    {
      icon: 'fas fa-bolt',
      title: 'Energy Efficient',
      description: 'Reduces HVAC costs by maintaining consistent interior temperatures regardless of external conditions.'
    },
    {
      icon: 'fas fa-tint-slash',
      title: 'Moisture Resistant',
      description: 'Sealed construction prevents condensation and moisture intrusion, protecting building integrity.'
    },
    {
      icon: 'fas fa-tools',
      title: 'Simple Installation',
      description: 'Integrated panel design allows for faster installation with fewer components than traditional built-up systems.'
    }
  ];

  specifications: Specification[] = [
    {
      thickness: '50mm - 150mm',
      insulation: 'Polyurethane/PIR/Mineral Wool',
      width: '1000mm - 1200mm',
      length: 'Custom (up to 12m)',
      material: 'Galvanized/Prepainted Steel',
      rValue: 'R-15 to R-40 (varies by thickness)',
      colors: 'Multiple Options Available'
    }
  ];
  
  allProducts: Product[] = [
    {
      title: 'Standard Insulated Metal Sheet',
      description: 'General purpose insulation sheet for commercial buildings with 50mm thickness.',
      image: 'https://captainsteelroofsolution.com/assets/products/insulated-metal-roofing-sheets.jpg',
      price: 'Contact for Price',
      category: 'Insulation Sheet'
    },
    {
      title: 'Premium Insulated Metal Sheet',
      description: 'High-performance insulation sheet with 100mm thickness for superior thermal regulation.',
      image: 'https://captainsteelroofsolution.com/assets/products/insulated-metal-roofing-sheets.jpg',
      price: 'Contact for Price',
      category: 'Insulation Sheet'
    },
    {
      title: 'Industrial Insulated Sheet',
      description: 'Heavy-duty insulation sheet with 150mm thickness for industrial facilities and cold storage.',
      image: 'https://captainsteelroofsolution.com/assets/products/insulated-metal-roofing-sheets.jpg',
      price: 'Contact for Price',
      category: 'Insulation Sheet'
    }
  ];

  constructor(
    private meta: Meta,
    private titleService: Title,
    private transferState: TransferState,
    @Inject(DOCUMENT) private document: Document
  ) {}

  ngOnInit() {
    // Set SEO meta tags
    this.titleService.setTitle('Insulation Sheet Manufacturer & Supplier in Rajkot | Captain Steel');
    
    this.meta.addTags([
      { name: 'description', content: 'Captain Steel - Leading insulation sheet manufacturer and wholesale supplier in Rajkot. Our premium insulation sheets offer superior thermal efficiency, energy savings, and climate control for commercial and industrial buildings across India.' },
      { name: 'keywords', content: 'insulation sheet, insulation sheet manufacturer, wholesale insulation sheet, insulation sheet supplier, insulation sheet by captain steel, insulation sheet manufacturer rajkot, wholesale insulation sheet supplier, insulation sheet manufacturing company india, insulated metal sheets, insulated metal sheets in rajkot' },
      { name: 'robots', content: 'index, follow' },
      { name: 'author', content: 'Captain Steel Roof Solutions' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'canonical', content: 'https://captainsteelroofsolution.com/products/insulated-metal-sheets' },
      // Open Graph tags for social sharing
      { property: 'og:title', content: 'Insulation Sheet Manufacturer & Supplier in Rajkot | Captain Steel' },
      { property: 'og:description', content: 'Leading insulation sheet manufacturer and wholesale supplier in Rajkot. Captain Steel offers premium insulation sheets with superior thermal efficiency for commercial and industrial buildings across India.' },
      { property: 'og:image', content: 'https://captainsteelroofsolution.com/assets/products/insulated-metal-roofing-sheets.jpg' },
      { property: 'og:url', content: 'https://captainsteelroofsolution.com/products/insulated-metal-sheets' },
      { property: 'og:type', content: 'product' },
      // Twitter Card tags
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'Insulation Sheet Manufacturer & Supplier in Rajkot | Captain Steel' },
      { name: 'twitter:description', content: 'Premium insulation sheets from Captain Steel, a leading insulation sheet manufacturing company in India based in Rajkot. Superior thermal efficiency, energy savings, and climate control for all building applications.' },
      { name: 'twitter:image', content: 'https://captainsteelroofsolution.com/assets/products/insulated-metal-roofing-sheets.jpg' }
    ]);
    
    // Add JSON-LD schema markup with required properties
    this.setProductStructuredData();
    
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
      "name": "Insulated Metal Sheets",
      "alternateName": ["Insulation Sheets", "Thermal Insulated Roofing", "Energy Efficient Insulation Sheets"],
      "image": [
        `${this.baseUrl}/assets/products/insulated-metal-roofing-sheets.jpg`,
        `${this.baseUrl}/assets/products/insulated-metal-sheet-close.jpg`,
        `${this.baseUrl}/assets/products/insulated-metal-sheet-installation.jpg`
      ],
      "description": "Premium insulation sheets manufactured by Captain Steel in Rajkot, offering superior thermal efficiency, energy savings, and climate control for commercial and industrial buildings across India.",
      "sku": "INSULATED-MS-01",
      "mpn": "CSRS-IMS-2023",
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
          "postalCode": "360110",
          "addressCountry": "IN"
        }
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "ratingCount": "124",
        "reviewCount": "124"
      },
      "material": ["Galvanized Steel", "Prepainted Steel", "Polyurethane", "PIR", "Mineral Wool"],
      "width": {
        "@type": "QuantitativeValue",
        "value": "1000-1200",
        "unitCode": "MMT"
      },
      "height": {
        "@type": "QuantitativeValue",
        "value": "50-150",
        "unitCode": "MMT"
      },
      "weight": {
        "@type": "QuantitativeValue",
        "value": "8-15",
        "unitCode": "KGM"
      },
      "additionalProperty": [
        {
          "@type": "PropertyValue",
          "name": "R-Value",
          "value": "R-15 to R-40"
        },
        {
          "@type": "PropertyValue",
          "name": "Fire Resistance",
          "value": "Class B fire rating"
        },
        {
          "@type": "PropertyValue",
          "name": "Sound Reduction",
          "value": "25-30 dB"
        },
        {
          "@type": "PropertyValue",
          "name": "Local Availability",
          "value": "Available in Rajkot with delivery across Gujarat"
        }
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Insulation Sheet Products",
        "itemListElement": this.allProducts.map(product => ({
          "@type": "Offer",
          "name": product.title,
          "description": product.description,
          "image": product.image,
          "price": "Contact for Quote",
          "priceCurrency": "INR",
          "itemCondition": "https://schema.org/NewCondition",
          "availability": "https://schema.org/InStock"
        }))
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
}
