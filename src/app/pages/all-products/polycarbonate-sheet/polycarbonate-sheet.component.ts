import { Component, OnInit, inject, PLATFORM_ID, Inject } from '@angular/core';
import { CommonModule, isPlatformBrowser, DOCUMENT } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';
import { TransferState, makeStateKey } from '@angular/platform-browser';
import * as Aos from 'aos';

// Define TransferState keys
const PRODUCT_SCHEMA_KEY = makeStateKey<string>('POLYCARBONATE_SHEET_PRODUCT_SCHEMA');
const BUSINESS_SCHEMA_KEY = makeStateKey<string>('POLYCARBONATE_SHEET_BUSINESS_SCHEMA');

interface Feature {
  icon: string;
  title: string;
  description: string;
}

interface Specification {
  thickness: string;
  thicknessOptions: string;
  width: string;
  widthOptions: string;
  length: string;
  lengthOptions: string;
  lightTransmission: string;
  impactResistance: string;
  uvProtection: string;
  colors: string;
  colorOptions: string;
  temperatureResistance: string;
  fireRating: string;
  warranty: string;
}

interface Application {
  icon: string;
  title: string;
  description: string;
  benefits: string[];
}

interface Benefit {
  icon: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-polycarbonate-sheet',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './polycarbonate-sheet.component.html',
  styleUrl: './polycarbonate-sheet.component.scss'
})
export class PolycarbonateSheetComponent implements OnInit {
  private platformId = inject(PLATFORM_ID);
  private baseUrl = 'https://captainsteelroofsolution.com';
  
  features: Feature[] = [
    {
      icon: 'fas fa-shield-alt',
      title: 'Superior Impact Resistance',
      description: 'Virtually unbreakable sheets with 200 times the impact strength of glass, ideal for areas prone to hail or other impacts.'
    },
    {
      icon: 'fas fa-sun',
      title: 'UV Protection',
      description: 'Co-extruded UV protective layer blocks harmful radiation while allowing light transmission, preventing yellowing and degradation.'
    },
    {
      icon: 'fas fa-temperature-high',
      title: 'Weather Resistance',
      description: 'Excellent durability in extreme temperatures from -40°C to 120°C, withstanding harsh weather conditions year-round.'
    },
    {
      icon: 'fas fa-fire-alt',
      title: 'Fire Resistance',
      description: 'Self-extinguishing material with high fire resistance ratings meeting international safety standards.'
    },
    {
      icon: 'fas fa-lightbulb',
      title: 'Optical Clarity',
      description: 'Exceptional light transmission up to 90% with options for diffused or tinted sheets for specific lighting requirements.'
    },
    {
      icon: 'fas fa-feather-alt',
      title: 'Lightweight',
      description: 'Half the weight of glass with superior strength, reducing structural support requirements and installation costs.'
    }
  ];

  specifications: Specification[] = [
    {
      thickness: '0.8mm - 12mm',
      thicknessOptions: 'Standard and custom options available',
      width: '1000mm - 2100mm',
      widthOptions: 'Custom widths available on request',
      length: 'Up to 12 meters',
      lengthOptions: 'Cut-to-size service available',
      lightTransmission: '90% for clear sheets',
      impactResistance: 'High (200x stronger than glass)',
      uvProtection: 'Yes, on one or both sides',
      colors: 'Clear, Bronze, Blue, Green, Grey, Opal',
      colorOptions: 'Custom colors available for bulk orders',
      temperatureResistance: '-40°C to 120°C',
      fireRating: 'Class B1 according to DIN 4102',
      warranty: '10-year limited warranty'
    }
  ];

  applications: Application[] = [
    {
      icon: 'fas fa-home',
      title: 'Residential Applications',
      description: 'Perfect for skylights, patio covers, carports, and greenhouse glazing in residential settings.',
      benefits: [
        'Natural daylight with UV protection',
        'Exceptional durability against weather elements',
        'Attractive, modern aesthetic appeal'
      ]
    },
    {
      icon: 'fas fa-building',
      title: 'Commercial Architecture',
      description: 'Ideal for shopping malls, office buildings, and exhibition centers requiring transparent roofing and glazing solutions.',
      benefits: [
        'Energy-efficient natural lighting',
        'Excellent acoustic properties',
        'Design flexibility with various colors and finishes'
      ]
    },
    {
      icon: 'fas fa-industry',
      title: 'Industrial Facilities',
      description: 'Used in factories, warehouses, and processing plants as rooflights, partitions, and safety barriers.',
      benefits: [
        'Impact resistance for safety',
        'High light transmission for reduced energy costs',
        'Low maintenance requirements'
      ]
    },
    {
      icon: 'fas fa-leaf',
      title: 'Agricultural Structures',
      description: 'Perfect for greenhouses, nurseries, and livestock shelters providing controlled environments for growth.',
      benefits: [
        'Optimal light diffusion for plant growth',
        'Excellent thermal insulation',
        'Resistant to agricultural chemicals'
      ]
    },
    {
      icon: 'fas fa-subway',
      title: 'Infrastructure Projects',
      description: 'Used in bus shelters, railway stations, airports, and pedestrian walkways for durable transparent covering.',
      benefits: [
        'Vandal resistance and durability',
        'Weather protection with visibility',
        'Long-term cost-effectiveness'
      ]
    },
    {
      icon: 'fas fa-swimming-pool',
      title: 'Recreational Facilities',
      description: 'Implemented in swimming pool enclosures, sports arenas, and stadiums for durable transparent covering.',
      benefits: [
        'Safety with impact resistance',
        'UV protection for users',
        'Sound dampening properties'
      ]
    }
  ];

  benefits: Benefit[] = [
    {
      icon: 'fas fa-wallet',
      title: 'Cost-Effective',
      description: 'Lower installation costs due to lightweight nature and reduced structural support requirements compared to glass.'
    },
    {
      icon: 'fas fa-tools',
      title: 'Easy Installation',
      description: 'Can be cold-formed on site, cut with standard tools, and requires no specialized equipment for installation.'
    },
    {
      icon: 'fas fa-thermometer-half',
      title: 'Energy Efficiency',
      description: 'Excellent thermal insulation properties help reduce heating and cooling costs throughout the seasons.'
    },
    {
      icon: 'fas fa-shield-alt',
      title: 'Safety & Security',
      description: 'Virtually unbreakable material enhances building security and significantly reduces injury risks from breakage.'
    },
    {
      icon: 'fas fa-recycle',
      title: 'Environmentally Friendly',
      description: '100% recyclable material that contributes to sustainable building practices and reduced environmental impact.'
    },
    {
      icon: 'fas fa-wrench',
      title: 'Low Maintenance',
      description: 'Requires minimal cleaning and maintenance throughout its long service life with no degradation in performance.'
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
    this.titleService.setTitle('Premium Polycarbonate Sheets | Transparent Roofing Solutions | Captain Steel');
    
    this.meta.addTags([
      { name: 'description', content: 'Premium polycarbonate sheets with exceptional transparency, impact resistance & UV protection. Ideal for skylights, canopies, greenhouses & architectural applications. 200x stronger than glass at half the weight.' },
      { name: 'keywords', content: 'polycarbonate sheets, polycarbonate sheets rajkot, transparent roofing, polycarbonate roofing, impact resistant glazing, UV protected sheets, skylight material, greenhouse glazing, polycarbonate panels, clear roofing sheets, lightweight glazing solution, rajkot, gujarat' },
      { name: 'robots', content: 'index, follow' },
      { name: 'author', content: 'Captain Steel Roof Solutions' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'canonical', content: 'https://captainsteelroofsolution.com/products/polycarbonate-sheet' },
      // Open Graph tags for social sharing
      { property: 'og:title', content: 'Premium Polycarbonate Sheets | Transparent Roofing Solutions' },
      { property: 'og:description', content: 'Premium polycarbonate sheets with exceptional transparency, impact resistance & UV protection. Ideal for skylights, canopies, greenhouses & architectural applications.' },
      { property: 'og:image', content: 'https://captainsteelroofsolution.com/assets/products/polycarbonate-sheets-2.jpg' },
      { property: 'og:url', content: 'https://captainsteelroofsolution.com/products/polycarbonate-sheet' },
      { property: 'og:type', content: 'product' },
      // Twitter Card tags
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'Premium Polycarbonate Sheets | Transparent Roofing Solutions' },
      { name: 'twitter:description', content: 'Premium polycarbonate sheets with exceptional transparency, impact resistance & UV protection for all architectural applications.' },
      { name: 'twitter:image', content: 'https://captainsteelroofsolution.com/assets/products/polycarbonate-sheets-2.jpg' }
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
    }
  }

  private setProductStructuredData(): void {
    const structuredData = {
      "@context": "https://schema.org/",
      "@type": "Product",
      "name": "Premium Polycarbonate Sheets",
      "alternateName": ["Transparent Roofing Sheets", "UV Protected Polycarbonate", "Impact Resistant Glazing"],
      "image": [
        `${this.baseUrl}/assets/products/polycarbonate-sheets-2.jpg`
      ],
      "description": "Premium polycarbonate sheets offering exceptional transparency, impact resistance, and UV protection. Ideal for skylights, canopies, greenhouses, and architectural applications with 200x the strength of glass at half the weight.",
      "sku": "POLYCARB-SHEET-01",
      "mpn": "CSRS-PS-2023",
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
        "priceCurrency": "INR",
        "lowPrice": "350",
        "highPrice": "1500",
        "offerCount": "12",
        "availability": "https://schema.org/InStock"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "bestRating": "5",
        "ratingCount": "158",
        "reviewCount": "105"
      },
      "review": {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5",
        },
        "author": {
          "@type": "Person",
          "name": "Architectural Innovations Ltd."
        },
        "reviewBody": "We've used Captain Steel's polycarbonate sheets for multiple architectural projects and have been consistently impressed with their clarity, strength, and durability. The sheets allow excellent natural light while providing UV protection and impact resistance. Installation is straightforward, and the finished appearance is excellent."
      },
      "material": ["Polycarbonate Resin", "UV-Resistant Coating"],
      "width": {
        "@type": "QuantitativeValue",
        "value": "1220",
        "unitCode": "MMT"
      },
      "additionalProperty": [
        {
          "@type": "PropertyValue",
          "name": "thickness",
          "value": "2-12",
          "unitCode": "MMT"
        },
        {
          "@type": "PropertyValue",
          "name": "Light Transmission",
          "value": "80-90% (Clear Sheets)"
        },
        {
          "@type": "PropertyValue",
          "name": "Impact Resistance",
          "value": "200x stronger than glass"
        },
        {
          "@type": "PropertyValue",
          "name": "Temperature Range",
          "value": "-40°C to +120°C"
        },
        {
          "@type": "PropertyValue",
          "name": "Local Availability",
          "value": "Available in Rajkot with same-day delivery"
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
          "name": "Polycarbonate Sheets Department",
          "description": "Specializing in premium polycarbonate sheets for transparent roofing in Rajkot and across Gujarat",
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
