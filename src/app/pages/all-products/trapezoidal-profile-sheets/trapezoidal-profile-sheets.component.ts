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
const ARTICLE_SCHEMA_KEY = makeStateKey<string>('TRAPEZOIDAL_PROFILE_ARTICLE_SCHEMA');

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

interface ApplicationType {
  icon: string;
  title: string;
  description: string;
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
      title: 'Optimized Trapezoidal Design',
      description: 'Precision-engineered trapezoidal profile geometry for maximum structural integrity and superior water flow efficiency.'
    },
    {
      icon: 'fas fa-tint',
      title: 'Superior Water Drainage',
      description: 'Enhanced water channeling capability that prevents water pooling and leakage even during heavy rainfall on your trapezoidal roof sheets.'
    },
    {
      icon: 'fas fa-weight-hanging',
      title: 'High Load Bearing Capacity',
      description: 'Exceptional structural strength to support heavy loads and withstand extreme weather conditions with our premium trapezoidal sheets.'
    },
    {
      icon: 'fas fa-bolt',
      title: 'Quick Installation',
      description: 'Trapezoidal roofing sheets designed for easy and efficient installation, reducing project time and labor costs significantly.'
    },
    {
      icon: 'fas fa-paint-brush',
      title: 'Customizable Finish',
      description: 'Trapezoidal profile sheets available in a wide range of colors and finishes to match your architectural vision and design requirements.'
    },
    {
      icon: 'fas fa-shield-alt',
      title: 'Corrosion Resistant',
      description: 'Advanced coating technology provides superior protection against rust and corrosion for long-lasting trapezoidal roof sheets.'
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
  
  applications: ApplicationType[] = [
    {
      icon: 'fas fa-industry',
      title: 'Industrial Roofing',
      description: 'Trapezoidal profile sheets provide excellent coverage and durability for factories, warehouses, and manufacturing facilities.'
    },
    {
      icon: 'fas fa-store',
      title: 'Commercial Buildings',
      description: 'Enhance commercial structures with aesthetically pleasing and functional trapezoidal roofing solutions.'
    },
    {
      icon: 'fas fa-home',
      title: 'Residential Roofing',
      description: 'Modern trapezoidal sheets bring durability, energy efficiency, and curb appeal to residential properties.'
    },
    {
      icon: 'fas fa-warehouse',
      title: 'Storage Facilities',
      description: 'Protect valuable inventory with weather-resistant trapezoidal profile sheets designed for longevity.'
    },
    {
      icon: 'fas fa-tractor',
      title: 'Agricultural Buildings',
      description: 'Trapezoidal roof sheets provide reliable coverage for barns, sheds, and other agricultural structures.'
    },
    {
      icon: 'fas fa-solar-panel',
      title: 'Solar Panel Mounting',
      description: 'Trapezoidal sheets offer an ideal base for solar panel installations, maximizing renewable energy potential.'
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
    this.titleService.setTitle('Trapezoidal Profile Sheets | Roof Sheets Manufacturer | Captain Steel');
    
    this.meta.addTags([
      { name: 'description', content: 'Premium trapezoidal profile sheets & trapezoidal roofing solutions with superior strength, durability & modern aesthetics. Leading roof sheet manufacturer in Rajkot offering best quality trapezoidal sheets for industrial, commercial & residential buildings.' },
      { name: 'keywords', content: 'trapezoidal profile sheets, trapezoidal sheets, roof sheet, trapezoidal roofing, metal roofing, steel roofing, trapezoidal sheets in rajkot, industrial roofing, commercial roofing, residential roofing, roof cladding, wall cladding, color coated roofing, modern roofing, galvanized roofing, galvalume roofing, roof sheet manufacturer, roof sheet supplier, captain steel, rajkot, gujarat' },
      { name: 'robots', content: 'index, follow' },
      { name: 'author', content: 'Captain Steel Roof Solutions' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'canonical', content: 'https://captainsteelroofsolution.com/products/trapezoidal-profile-sheets' },
      // Open Graph tags for social sharing
      { property: 'og:title', content: 'Trapezoidal Profile Sheets | Roof Sheets Manufacturer | Captain Steel' },
      { property: 'og:description', content: 'Premium trapezoidal sheets & trapezoidal roofing with superior strength. Leading roof sheet manufacturer in Rajkot offering best quality trapezoidal profile sheets.' },
      { property: 'og:image', content: 'https://captainsteelroofsolution.com/assets/products/trapezoidal-profile-sheets.jpg' },
      { property: 'og:url', content: 'https://captainsteelroofsolution.com/products/trapezoidal-profile-sheets' },
      { property: 'og:type', content: 'product' },
      // Twitter Card tags
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'Trapezoidal Profile Sheets | Roof Sheets Manufacturer | Captain Steel' },
      { name: 'twitter:description', content: 'Premium trapezoidal profile sheets & roof sheets with superior strength. Leader in trapezoidal roofing solutions for all applications.' },
      { name: 'twitter:image', content: 'https://captainsteelroofsolution.com/assets/products/trapezoidal-profile-sheets.jpg' }
    ]);

    // Add structured data
    this.setProductStructuredData();
    this.setBusinessStructuredData();
    this.setFAQStructuredData();
    this.setArticleStructuredData();
    
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
      "alternateName": ["Trapezoidal Sheets", "Roof Sheets", "Trapezoidal Roofing", "Steel Roof Sheets"],
      "image": [
        `${this.baseUrl}/assets/products/trapezoidal-profile-sheets.jpg`,
        `${this.baseUrl}/assets/products/trapezoidal-sheets-application.jpg`,
        `${this.baseUrl}/assets/products/metal-roofing-installation.jpg`
      ],
      "description": "Premium trapezoidal profile sheets with superior strength, durability, and modern aesthetics. Our trapezoidal sheets provide excellent water drainage capability and enhanced load-bearing capacity for industrial, commercial, and residential roofing applications.",
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
      "offers": {
        "@type": "AggregateOffer",
        "highPrice": "950",
        "lowPrice": "450",
        "priceCurrency": "INR",
        "offerCount": "5",
        "offers": [
          {
            "@type": "Offer",
            "name": "Standard Trapezoidal Profile Sheet",
            "price": "450",
            "priceCurrency": "INR",
            "priceValidUntil": "2025-12-31",
            "availability": "https://schema.org/InStock"
          },
          {
            "@type": "Offer",
            "name": "Premium Color-Coated Trapezoidal Sheet",
            "price": "750",
            "priceCurrency": "INR",
            "priceValidUntil": "2025-12-31",
            "availability": "https://schema.org/InStock"
          }
        ]
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "bestRating": "5",
        "worstRating": "1",
        "ratingCount": "182",
        "reviewCount": "182"
      },
      "review": [
        {
          "@type": "Review",
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5",
            "bestRating": "5"
          },
          "author": {
            "@type": "Person",
            "name": "Rajesh Patel"
          },
          "datePublished": "2023-06-15",
          "reviewBody": "The trapezoidal sheets from Captain Steel have excellent quality and durability. Our factory roof has been perfectly waterproof even during monsoon season."
        },
        {
          "@type": "Review",
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5",
            "bestRating": "5"
          },
          "author": {
            "@type": "Person",
            "name": "Amit Shah"
          },
          "datePublished": "2023-08-22",
          "reviewBody": "Great trapezoidal roofing product with superior finish and color quality. Installation was quick and the after-sales service was excellent."
        }
      ],
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
          "Friday",
          "Saturday"
        ],
        "opens": "09:00",
        "closes": "18:00"
      },
      "sameAs": [
        "https://www.facebook.com/captainroof/",
        "https://www.linkedin.com/company/captain-steel/",
        "https://twitter.com/captainsteel"
      ],
      "priceRange": "₹₹",
      "department": [
        {
          "@type": "LocalBusiness",
          "name": "Trapezoidal Profile Sheets Department",
          "description": "Manufacturing and supplying high-quality trapezoidal profile sheets, roof sheets, and trapezoidal roofing solutions for industrial, commercial, and residential applications."
        }
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
          "name": "What are trapezoidal profile sheets?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Trapezoidal profile sheets are metal roofing and cladding panels characterized by their distinctive trapezoidal-shaped ribs or corrugations. These profiles provide superior structural strength, excellent water drainage, and modern aesthetic appeal. Captain Steel's trapezoidal sheets are manufactured using high-quality galvanized or color-coated steel with precision engineering to ensure optimal performance for industrial, commercial, and residential applications."
          }
        },
        {
          "@type": "Question",
          "name": "What are the advantages of trapezoidal roofing over other roofing types?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Trapezoidal roofing offers several advantages: 1) Superior water drainage due to its optimized profile design, preventing leakage and water pooling; 2) Excellent load-bearing capacity, ideal for industrial and commercial buildings; 3) Quick and easy installation with fewer fasteners required; 4) Versatile application for both roofing and wall cladding; 5) Long lifespan with minimal maintenance; 6) Cost-effective solution for large roof areas; 7) Modern, clean aesthetic appearance; 8) Available in various colors and finishes to match architectural requirements; 9) Weather and corrosion resistance with specialized coatings; 10) Environmentally friendly and recyclable material."
          }
        },
        {
          "@type": "Question",
          "name": "What thicknesses and coatings are available for your trapezoidal roof sheets?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Captain Steel offers trapezoidal profile sheets in thicknesses ranging from 0.35mm to 1.0mm to suit different load requirements and applications. Our coating options include: 1) Galvanized coating (Z275/Z120) providing excellent corrosion resistance; 2) Galvalume coating (AZ150/AZ100) offering superior corrosion protection and heat reflection; 3) Color-coated finishes with polyester (25 microns), SMP (Silicon Modified Polyester, 30 microns), or PVDF (Polyvinylidene Fluoride, 35 microns) for enhanced aesthetics and durability. We can customize both thickness and coating specifications according to your specific project requirements and environment conditions."
          }
        },
        {
          "@type": "Question",
          "name": "How do I maintain trapezoidal profile sheets for maximum lifespan?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "To maintain your trapezoidal sheets and ensure maximum lifespan: 1) Conduct regular inspections at least twice a year and after major storms; 2) Keep the roof free from debris, leaves, and dirt by gentle washing with mild detergent and water; 3) Check and clean gutters and drainage systems to prevent water backup; 4) Inspect and tighten any loose fasteners or fixings; 5) Touch up any minor scratches with matching paint to prevent corrosion; 6) Avoid walking on the sheets unnecessarily, and when required, step only on the purlin-supported areas; 7) Trim overhanging tree branches to prevent abrasion and debris accumulation; 8) Immediately address any signs of corrosion, leaks, or damage; 9) Apply appropriate roof coatings or treatments as recommended by the manufacturer for your specific environment; 10) Ensure proper ventilation in the building to prevent condensation buildup under the roof."
          }
        },
        {
          "@type": "Question",
          "name": "Can trapezoidal profile sheets be used for residential buildings?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, trapezoidal profile sheets are increasingly popular for residential buildings due to their modern aesthetic appeal, durability, and practical benefits. In residential applications, these roof sheets offer excellent weather protection, superior energy efficiency, and long-term cost savings. Captain Steel provides residential-grade trapezoidal sheets with premium color coatings and finishes that enhance curb appeal while maintaining functional performance. For residential projects, we typically recommend slightly thinner profiles (0.35-0.47mm) with high-quality color coatings to achieve the perfect balance of performance and visual appeal. Our trapezoidal sheets can be perfectly integrated with skylights, solar panels, and other residential roofing requirements."
          }
        },
        {
          "@type": "Question",
          "name": "What makes Captain Steel's trapezoidal roofing superior to competitors?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Captain Steel's trapezoidal roofing stands out through our commitment to superior quality and precision manufacturing. We use only prime-grade steel with optimal coating thickness, ensuring longer life and better performance. Our advanced manufacturing facility in Rajkot utilizes state-of-the-art roll-forming technology that maintains precise profile dimensions for consistent quality. We offer customization options including custom lengths, special coatings, and tailored solutions not widely available. Our comprehensive technical support includes design assistance, installation guidance, and after-sales service. Additionally, our stringent quality control process with multiple inspection points and material certifications ensures every sheet meets international standards. We're also competitive on price while maintaining higher quality benchmarks than most market alternatives."
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
  
  private setArticleStructuredData(): void {
    const articleStructuredData = {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Ultimate Guide to Trapezoidal Profile Sheets and Roof Sheets",
      "description": "Comprehensive information about trapezoidal profile sheets, trapezoidal roofing, and roof sheets including benefits, applications, installation, and maintenance best practices.",
      "image": `${this.baseUrl}/assets/products/trapezoidal-profile-sheets.jpg`,
      "datePublished": "2023-08-15T08:00:00+05:30",
      "dateModified": new Date().toISOString(),
      "author": {
        "@type": "Organization",
        "name": "Captain Steel Roof Solutions"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Captain Steel Roof Solutions",
        "logo": {
          "@type": "ImageObject",
          "url": `${this.baseUrl}/assets/logo/logo.png`
        }
      },
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://captainsteelroofsolution.com/products/trapezoidal-profile-sheets"
      },
      "keywords": "trapezoidal profile sheets, trapezoidal sheets, roof sheet, trapezoidal roofing, metal roofing, steel roofing"
    };
    
    // Store the structured data in transfer state
    this.transferState.set(ARTICLE_SCHEMA_KEY, JSON.stringify(articleStructuredData));
    
    // Only add script tag in browser environment
    if (isPlatformBrowser(this.platformId)) {
      const script = this.document.createElement('script');
      script.type = 'application/ld+json';
      script.text = JSON.stringify(articleStructuredData);
      this.document.head.appendChild(script);
    }
  }
}
