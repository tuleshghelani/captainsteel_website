import { Component, OnInit, inject, PLATFORM_ID, Inject } from '@angular/core';
import { CommonModule, isPlatformBrowser, DOCUMENT } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';
import { TransferState, makeStateKey } from '@angular/platform-browser';
import * as Aos from 'aos';

// Define TransferState keys
const PRODUCT_SCHEMA_KEY = makeStateKey<string>('POLYCARBONATE_SHEET_PRODUCT_SCHEMA');
const BUSINESS_SCHEMA_KEY = makeStateKey<string>('POLYCARBONATE_SHEET_BUSINESS_SCHEMA');
const FAQ_SCHEMA_KEY = makeStateKey<string>('POLYCARBONATE_SHEET_FAQ_SCHEMA');

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

interface FAQ {
  question: string;
  answer: string;
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

  faqs: FAQ[] = [
    {
      question: 'What makes polycarbonate sheets better than glass for roofing?',
      answer: 'Polycarbonate sheets offer significant advantages over glass, including being 200 times stronger while weighing only half as much. They provide excellent impact resistance, superior thermal insulation, UV protection, and are much easier to install and transport. Unlike glass, polycarbonate sheets won\'t shatter, making them safer for overhead applications.'
    },
    {
      question: 'How long do polycarbonate roofing sheets last?',
      answer: 'With proper installation and maintenance, our premium polycarbonate sheets typically last 15-20 years. All our sheets come with a 10-year limited warranty against yellowing and breakage under normal weather conditions. The UV-protective layer prevents degradation from sun exposure, ensuring long-term clarity and performance.'
    },
    {
      question: 'Are polycarbonate sheets suitable for Rajkot\'s climate?',
      answer: 'Absolutely. Our polycarbonate sheets are specifically designed to withstand Rajkot\'s climate conditions, including intense summer heat and monsoon rains. They feature excellent temperature resistance (-40°C to 120°C), UV protection to prevent degradation from sun exposure, and superior impact resistance for protection against hailstorms. Their thermal insulation properties also help maintain comfortable indoor temperatures year-round.'
    },
    {
      question: 'Can polycarbonate sheets be cut to custom sizes?',
      answer: 'Yes, we offer custom cutting services to meet your exact project specifications. Polycarbonate sheets can be easily cut on-site using standard woodworking tools like circular saws with fine-toothed blades. We recommend leaving the protective film in place during cutting to prevent scratches.'
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
    this.titleService.setTitle('Best Polycarbonate Sheets in Rajkot | Transparent Roofing Solutions | Captain Steel');
    
    this.meta.addTags([
      { name: 'description', content: 'Premium polycarbonate roofing sheets in Rajkot with exceptional transparency, impact resistance & UV protection. Best transparent roofing solution for skylights, canopies & greenhouses. 200x stronger than glass at half the weight.' },
      { name: 'keywords', content: 'polycarbonate sheet, polycarbonate sheets, polycarbonate roofing, polycarbonate roofing sheet, transparent roofing sheet, polycarbonate sheets rajkot, transparent roofing, impact resistant glazing, UV protected sheets, skylight material, greenhouse glazing, polycarbonate panels, clear roofing sheets, lightweight glazing solution, rajkot, gujarat' },
      { name: 'robots', content: 'index, follow' },
      { name: 'author', content: 'Captain Steel Roof Solutions' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'canonical', content: 'https://captainsteelroofsolution.com/products/polycarbonate-sheet' },
      // Location tags
      { name: 'geo.region', content: 'IN-GJ' },
      { name: 'geo.placename', content: 'Rajkot' },
      { name: 'geo.position', content: '22.089547;70.783704' },
      { name: 'ICBM', content: '22.089547, 70.783704' },
      // Open Graph tags for social sharing
      { property: 'og:title', content: 'Best Polycarbonate Sheets in Rajkot | Transparent Roofing Solutions' },
      { property: 'og:description', content: 'Premium polycarbonate roofing sheets with exceptional transparency, impact resistance & UV protection. Best transparent roofing solution for skylights, canopies & greenhouses in Rajkot.' },
      { property: 'og:image', content: 'https://captainsteelroofsolution.com/assets/products/polycarbonate-sheets-2.jpg' },
      { property: 'og:url', content: 'https://captainsteelroofsolution.com/products/polycarbonate-sheet' },
      { property: 'og:type', content: 'product' },
      { property: 'og:site_name', content: 'Captain Steel Roof Solutions' },
      { property: 'og:locale', content: 'en_IN' },
      // Twitter Card tags
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'Best Polycarbonate Sheets in Rajkot | Transparent Roofing Solutions' },
      { name: 'twitter:description', content: 'Premium polycarbonate roofing sheets with exceptional transparency, impact resistance & UV protection. Best transparent roofing solution in Rajkot.' },
      { name: 'twitter:image', content: 'https://captainsteelroofsolution.com/assets/products/polycarbonate-sheets-2.jpg' }
    ]);
    
    // Add structured data
    this.setProductStructuredData();
    this.setBusinessStructuredData();
    this.setFaqStructuredData();
    
    // Only run browser-specific code if we are in a browser environment
    if (isPlatformBrowser(this.platformId)) {
      // Initialize AOS animations
      Aos.init({
        duration: 1000,
        once: true,
        offset: 100
      });

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
      "name": "Premium Polycarbonate Roofing Sheets in Rajkot",
      "alternateName": ["Transparent Roofing Sheets", "Polycarbonate Roofing", "Polycarbonate Sheet", "UV Protected Polycarbonate", "Impact Resistant Glazing", "Transparent Roofing Solution"],
      "image": [
        `${this.baseUrl}/assets/products/polycarbonate-sheets-2.jpg`,
        `${this.baseUrl}/assets/products/polycarbonate-sheets.jpg`
      ],
      "description": "Premium polycarbonate roofing sheets offering exceptional transparency, impact resistance, and UV protection. Best transparent roofing solution for skylights, canopies, greenhouses, and architectural applications with 200x the strength of glass at half the weight. Available in Rajkot and throughout Gujarat.",
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
          "streetAddress": "Sadak Pipliya, National Highway, Ta. Gondal",
          "addressLocality": "Rajkot",
          "addressRegion": "Gujarat",
          "postalCode": "360311",
          "addressCountry": "IN"
        },
        "telephone": "+91 9879109091",
        "url": "https://captainsteelroofsolution.com"
      },
      "offers": {
        "@type": "AggregateOffer",
        "priceCurrency": "INR",
        "lowPrice": "350",
        "highPrice": "1500",
        "offerCount": "12",
        "availability": "https://schema.org/InStock",
        "areaServed": {
          "@type": "State",
          "name": "Gujarat"
        },
        "priceValidUntil": "2024-12-31"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "bestRating": "5",
        "ratingCount": "158",
        "reviewCount": "105"
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
            "name": "Architectural Innovations Ltd."
          },
          "reviewBody": "We've used Captain Steel's polycarbonate sheets for multiple architectural projects and have been consistently impressed with their clarity, strength, and durability. The sheets allow excellent natural light while providing UV protection and impact resistance. Installation is straightforward, and the finished appearance is excellent."
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
            "name": "Greenhouse Solutions"
          },
          "reviewBody": "The transparent roofing sheets from Captain Steel have transformed our greenhouse projects. The light transmission is excellent while the UV protection prevents plant damage. Highly recommended for any agricultural or horticultural application."
        }
      ],
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
        },
        {
          "@type": "PropertyValue",
          "name": "Applications",
          "value": "Skylights, Canopies, Greenhouses, Industrial Rooflights, Architectural Features"
        },
        {
          "@type": "PropertyValue",
          "name": "Colors Available",
          "value": "Clear, Bronze, Blue, Green, Grey, Opal"
        }
      ],
      "keywords": "polycarbonate sheet, polycarbonate roofing, transparent roofing sheet, polycarbonate sheets rajkot, transparent roofing solution"
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
      "description": "Leading manufacturer and supplier of premium polycarbonate sheets and transparent roofing solutions in Rajkot, Gujarat. Offering high-quality polycarbonate roofing sheets with exceptional durability and UV protection.",
      "slogan": "Premium Polycarbonate Sheets & Transparent Roofing Solutions in Rajkot",
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
          "description": "Specializing in premium polycarbonate sheets and transparent roofing solutions in Rajkot and across Gujarat. Offering polycarbonate roofing sheets for skylights, canopies, greenhouses, and architectural applications.",
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
      "makesOffer": {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Product",
          "name": "Polycarbonate Roofing Sheets",
          "description": "Premium transparent roofing sheets with exceptional durability, UV protection, and impact resistance. 200x stronger than glass at half the weight.",
          "url": `${this.baseUrl}/products/polycarbonate-sheet`
        }
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Polycarbonate Sheet Products",
        "itemListElement": [
          {
            "@type": "OfferCatalog",
            "name": "Solid Polycarbonate Sheets",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Product",
                  "name": "Clear Polycarbonate Sheets",
                  "description": "Transparent polycarbonate sheets with 90% light transmission"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Product",
                  "name": "Tinted Polycarbonate Sheets",
                  "description": "Colored polycarbonate sheets in Bronze, Blue, Green, and Grey options"
                }
              }
            ]
          },
          {
            "@type": "OfferCatalog",
            "name": "Multiwall Polycarbonate Sheets",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Product",
                  "name": "Twin-Wall Polycarbonate Sheets",
                  "description": "Double-layered polycarbonate sheets with excellent thermal insulation"
                }
              }
            ]
          }
        ]
      },
      "sameAs": [
        "https://www.facebook.com/captainroof/",
        "https://www.linkedin.com/company/captain-steel/",
        "https://twitter.com/captainsteel"
      ],
      "keywords": "polycarbonate sheet, polycarbonate roofing, transparent roofing sheet, polycarbonate sheets rajkot, transparent roofing solution"
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

  private setFaqStructuredData(): void {
    const faqStructuredData = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": this.faqs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    };
    
    // Store the structured data in transfer state
    this.transferState.set(FAQ_SCHEMA_KEY, JSON.stringify(faqStructuredData));
    
    // Only add script tag in browser environment
    if (isPlatformBrowser(this.platformId)) {
      const script = this.document.createElement('script');
      script.type = 'application/ld+json';
      script.text = JSON.stringify(faqStructuredData);
      this.document.head.appendChild(script);
    }
  }
}
