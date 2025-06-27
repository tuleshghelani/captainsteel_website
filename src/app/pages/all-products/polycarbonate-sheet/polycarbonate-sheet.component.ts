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

interface SpecificationProperty {
  parameter: string;
  specification: string;
  options?: string;
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
      description: 'Our polycarbonate roofing sheets are virtually unbreakable with 200 times the impact strength of glass, making them the safest roofing sheet choice for areas prone to hail or other impacts in Rajkot.'
    },
    {
      icon: 'fas fa-sun',
      title: 'Advanced UV Protection',
      description: 'Co-extruded UV protective layer blocks harmful radiation while allowing optimal light transmission, preventing yellowing and degradation of your polycarbonate sheet roofing solution.'
    },
    {
      icon: 'fas fa-temperature-high',
      title: 'Extreme Weather Resistance',
      description: 'Excellent durability in extreme temperatures from -40°C to 120°C, making our polycarbonate roofing sheets perfect for Rajkot\'s climate conditions year-round.'
    },
    {
      icon: 'fas fa-fire-alt',
      title: 'Fire Resistant Properties',
      description: 'Self-extinguishing material with high fire resistance ratings meeting international safety standards, ensuring your roofing sheet provides maximum protection.'
    },
    {
      icon: 'fas fa-lightbulb',
      title: 'Exceptional Optical Clarity',
      description: 'Up to 90% light transmission with options for diffused or tinted polycarbonate sheets for specific lighting requirements in your roofing project.'
    },
    {
      icon: 'fas fa-feather-alt',
      title: 'Lightweight & Strong',
      description: 'Half the weight of glass with superior strength, reducing structural support requirements and installation costs for your polycarbonate roofing sheet.'
    }
  ];

  specifications: SpecificationProperty[] = [
    {
      parameter: 'Thickness',
      specification: '0.8mm - 12mm',
      options: 'Standard and custom polycarbonate sheet thickness available'
    },
    {
      parameter: 'Width',
      specification: '1000mm - 2100mm',
      options: 'Custom polycarbonate roofing sheet widths available on request'
    },
    {
      parameter: 'Length',
      specification: 'Up to 12 meters',
      options: 'Cut-to-size polycarbonate sheet service available in Rajkot'
    },
    {
      parameter: 'Light Transmission',
      specification: 'Up to 90% for clear polycarbonate sheets',
      options: 'Varies by color and thickness of roofing sheet'
    },
    {
      parameter: 'Impact Resistance',
      specification: 'High (200x stronger than glass)',
      options: 'Virtually unbreakable polycarbonate roofing sheet'
    },
    {
      parameter: 'UV Protection',
      specification: 'Yes, on one or both sides',
      options: 'Co-extruded UV protection for polycarbonate sheets'
    },
    {
      parameter: 'Colors',
      specification: 'Clear, Bronze, Blue, Green, Grey, Opal',
      options: 'Custom polycarbonate sheet colors available for bulk orders'
    },
    {
      parameter: 'Temperature Resistance',
      specification: '-40°C to 120°C',
      options: 'Perfect for Rajkot\'s extreme weather conditions'
    },
    {
      parameter: 'Fire Rating',
      specification: 'Class B1 (self-extinguishing)',
      options: 'Meets international safety standards for roofing sheets'
    },
    {
      parameter: 'Warranty',
      specification: '10-year limited warranty',
      options: 'Against yellowing and breakage of polycarbonate sheets'
    }
  ];

  applications: Application[] = [
    {
      icon: 'fas fa-home',
      title: 'Residential Polycarbonate Sheet Applications',
      description: 'Perfect polycarbonate roofing sheets for skylights, patio covers, carports, and greenhouse glazing in residential settings across Rajkot.',
      benefits: [
        'Natural daylight with UV protection for your home',
        'Exceptional durability against weather elements',
        'Attractive, modern aesthetic appeal for residential roofing'
      ]
    },
    {
      icon: 'fas fa-building',
      title: 'Commercial Polycarbonate Roofing Solutions',
      description: 'Ideal polycarbonate sheets for shopping malls, office buildings, and exhibition centers requiring transparent roofing and glazing solutions.',
      benefits: [
        'Energy-efficient natural lighting with polycarbonate roofing',
        'Excellent acoustic properties for commercial spaces',
        'Design flexibility with various polycarbonate sheet colors and finishes'
      ]
    },
    {
      icon: 'fas fa-industry',
      title: 'Industrial Polycarbonate Sheet Uses',
      description: 'Used in factories, warehouses, and processing plants as rooflights, partitions, and safety barriers with premium polycarbonate roofing sheets.',
      benefits: [
        'Impact resistance for industrial safety requirements',
        'High light transmission for reduced energy costs',
        'Low maintenance polycarbonate sheet requirements'
      ]
    },
    {
      icon: 'fas fa-leaf',
      title: 'Agricultural Polycarbonate Roofing',
      description: 'Perfect polycarbonate sheets for greenhouses, nurseries, and livestock shelters providing controlled environments for growth in Rajkot.',
      benefits: [
        'Optimal light diffusion for plant growth with polycarbonate roofing',
        'Excellent thermal insulation properties',
        'Resistant to agricultural chemicals and polycarbonate sheet durability'
      ]
    },
    {
      icon: 'fas fa-subway',
      title: 'Infrastructure Polycarbonate Sheet Projects',
      description: 'Used in bus shelters, railway stations, airports, and pedestrian walkways for durable transparent polycarbonate roofing covering.',
      benefits: [
        'Vandal resistance and durability of polycarbonate sheets',
        'Weather protection with visibility for infrastructure',
        'Long-term cost-effectiveness of polycarbonate roofing'
      ]
    },
    {
      icon: 'fas fa-swimming-pool',
      title: 'Recreational Polycarbonate Roofing',
      description: 'Implemented in swimming pool enclosures, sports arenas, and stadiums for durable transparent polycarbonate sheet covering.',
      benefits: [
        'Safety with impact resistance for recreational facilities',
        'UV protection for users with polycarbonate roofing',
        'Sound dampening properties of polycarbonate sheets'
      ]
    }
  ];

  benefits: Benefit[] = [
    {
      icon: 'fas fa-wallet',
      title: 'Cost-Effective Polycarbonate Sheet Solution',
      description: 'Lower installation costs due to lightweight nature and reduced structural support requirements compared to glass roofing sheets.'
    },
    {
      icon: 'fas fa-tools',
      title: 'Easy Polycarbonate Sheet Installation',
      description: 'Can be cold-formed on site, cut with standard tools, and requires no specialized equipment for polycarbonate roofing installation.'
    },
    {
      icon: 'fas fa-thermometer-half',
      title: 'Energy Efficient Polycarbonate Roofing',
      description: 'Excellent thermal insulation properties help reduce heating and cooling costs throughout the seasons with polycarbonate sheets.'
    },
    {
      icon: 'fas fa-shield-alt',
      title: 'Safety & Security with Polycarbonate Sheets',
      description: 'Virtually unbreakable polycarbonate roofing material enhances building security and significantly reduces injury risks from breakage.'
    },
    {
      icon: 'fas fa-recycle',
      title: 'Environmentally Friendly Polycarbonate Sheet',
      description: '100% recyclable polycarbonate material that contributes to sustainable building practices and reduced environmental impact.'
    },
    {
      icon: 'fas fa-wrench',
      title: 'Low Maintenance Polycarbonate Roofing',
      description: 'Requires minimal cleaning and maintenance throughout its long service life with no degradation in polycarbonate sheet performance.'
    }
  ];

  faqs: FAQ[] = [
    {
      question: 'What makes polycarbonate sheets better than glass for roofing in Rajkot?',
      answer: 'Polycarbonate roofing sheets offer significant advantages over glass, including being 200 times stronger while weighing only half as much. They provide excellent impact resistance, superior thermal insulation, UV protection, and are much easier to install and transport. Unlike glass, polycarbonate sheets won\'t shatter, making them safer for overhead applications in Rajkot\'s climate.'
    },
    {
      question: 'How long do polycarbonate roofing sheets last in Rajkot\'s weather?',
      answer: 'With proper installation and maintenance, our premium polycarbonate sheets typically last 15-20 years in Rajkot\'s climate. All our polycarbonate roofing sheets come with a 10-year limited warranty against yellowing and breakage under normal weather conditions. The UV-protective layer prevents degradation from sun exposure, ensuring long-term clarity and performance.'
    },
    {
      question: 'Are polycarbonate sheets suitable for Rajkot\'s climate conditions?',
      answer: 'Absolutely. Our polycarbonate roofing sheets are specifically designed to withstand Rajkot\'s climate conditions, including intense summer heat and monsoon rains. They feature excellent temperature resistance (-40°C to 120°C), UV protection to prevent degradation from sun exposure, and superior impact resistance for protection against hailstorms. Their thermal insulation properties also help maintain comfortable indoor temperatures year-round.'
    },
    {
      question: 'Can polycarbonate sheets be cut to custom sizes in Rajkot?',
      answer: 'Yes, we offer custom cutting services for polycarbonate roofing sheets to meet your exact project specifications in Rajkot. Polycarbonate sheets can be easily cut on-site using standard woodworking tools like circular saws with fine-toothed blades. We recommend leaving the protective film in place during cutting to prevent scratches on your polycarbonate sheet.'
    },
    {
      question: 'What are the primary uses for polycarbonate roofing sheets in Rajkot?',
      answer: 'Polycarbonate roofing sheets are incredibly versatile in Rajkot. They\'re an ideal roofing solution for greenhouses, skylights, carports, canopies, and covered walkways. Their durability and transparency also make them perfect for industrial rooflights, architectural features, and even as protective barriers where visibility is important.'
    },
    {
      question: 'Are polycarbonate roofing sheets waterproof in Rajkot\'s monsoon season?',
      answer: 'Yes, our polycarbonate roofing sheets are completely waterproof when installed correctly, perfect for Rajkot\'s monsoon season. A proper installation includes using the recommended sealants and profiles to ensure a weather-tight seal, protecting your space from rain and moisture effectively throughout the year.'
    },
    {
      question: 'What is the price range for polycarbonate sheets in Rajkot?',
      answer: 'Our polycarbonate roofing sheets in Rajkot are competitively priced, typically ranging from ₹350 to ₹1500 per square meter depending on thickness, color, and quantity. We offer bulk discounts and custom pricing for large projects. Contact us for a detailed quote tailored to your specific polycarbonate sheet requirements.'
    },
    {
      question: 'Do you provide installation services for polycarbonate roofing sheets in Rajkot?',
      answer: 'Yes, we provide professional installation services for polycarbonate roofing sheets throughout Rajkot and Gujarat. Our experienced team ensures proper installation techniques, including correct sealing, fastening, and weatherproofing to maximize the performance and longevity of your polycarbonate sheet investment.'
    }
  ];

  constructor(
    private meta: Meta,
    private titleService: Title,
    @Inject(DOCUMENT) private document: Document,
    private transferState: TransferState
  ) {}

  ngOnInit() {
    // Enhanced SEO meta tags with better keyword targeting
    this.titleService.setTitle('Polycarbonate Sheet & Roofing Sheet in Rajkot | Captain Steel - Premium Quality');
    
    this.meta.addTags([
      { name: 'description', content: 'Get premium polycarbonate sheets and roofing sheets in Rajkot from Captain Steel. High-quality polycarbonate roofing sheets with UV protection, impact resistance, and 200x strength of glass. Best prices and installation services in Gujarat.' },
      { name: 'keywords', content: 'polycarbonate sheet, polycarbonate sheets, roofing sheet, polycarbonate roofing sheet, transparent roofing sheet, polycarbonate sheets rajkot, roofing sheet in rajkot, polycarbonate sheet rajkot, transparent roofing, impact resistant glazing, UV protected sheets, skylight material, greenhouse glazing, polycarbonate panels, clear roofing sheets, lightweight glazing solution, rajkot, gujarat, captain steel' },
      { name: 'robots', content: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1' },
      { name: 'author', content: 'Captain Steel Roof Solutions' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'canonical', content: 'https://captainsteelroofsolution.com/products/polycarbonate-sheet' },
      // Enhanced location tags
      { name: 'geo.region', content: 'IN-GJ' },
      { name: 'geo.placename', content: 'Rajkot' },
      { name: 'geo.position', content: '22.089547;70.783704' },
      { name: 'ICBM', content: '22.089547, 70.783704' },
      // Enhanced Open Graph tags
      { property: 'og:title', content: 'Premium Polycarbonate Sheet & Roofing Sheet in Rajkot | Captain Steel' },
      { property: 'og:description', content: 'High-quality polycarbonate sheets and roofing sheets in Rajkot. Experience exceptional transparency, impact resistance & UV protection with our transparent roofing solutions. 200x stronger than glass.' },
      { property: 'og:image', content: 'https://captainsteelroofsolution.com/assets/products/polycarbonate-sheets-2.jpg' },
      { property: 'og:url', content: 'https://captainsteelroofsolution.com/products/polycarbonate-sheet' },
      { property: 'og:type', content: 'product' },
      { property: 'og:site_name', content: 'Captain Steel Roof Solutions' },
      { property: 'og:locale', content: 'en_IN' },
      // Enhanced Twitter Card tags
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'Premium Polycarbonate Sheet & Roofing Sheet in Rajkot | Captain Steel' },
      { name: 'twitter:description', content: 'Discover top-tier polycarbonate sheets and roofing sheets in Rajkot. Offering superior durability, UV protection, and clarity for all your roofing needs.' },
      { name: 'twitter:image', content: 'https://captainsteelroofsolution.com/assets/products/polycarbonate-sheets-2.jpg' },
      // Additional SEO tags
      { name: 'language', content: 'English' },
      { name: 'distribution', content: 'Global' },
      { name: 'rating', content: 'General' },
      { name: 'revisit-after', content: '7 days' }
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
      "name": "Premium Polycarbonate Sheet & Roofing Sheet",
      "alternateName": ["Polycarbonate Sheet", "Polycarbonate Sheets", "Roofing Sheet", "Polycarbonate Roofing Sheet", "Transparent Roofing Sheet", "UV Protected Polycarbonate", "Impact Resistant Glazing", "Transparent Roofing Solution", "Polycarbonate Sheet Rajkot", "Roofing Sheet in Rajkot"],
      "image": [
        `${this.baseUrl}/assets/products/polycarbonate-sheets-2.jpg`,
        `${this.baseUrl}/assets/products/polycarbonate-sheets.jpg`
      ],
      "description": "Captain Steel offers premium polycarbonate sheets and roofing sheets in Rajkot, Gujarat. These transparent polycarbonate roofing sheets are an ideal roofing solution, providing exceptional durability, high impact resistance (200x stronger than glass), and full UV protection. Perfect for skylights, greenhouses, canopies, and various architectural applications.",
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
          "reviewBody": "We've used Captain Steel's polycarbonate sheets for multiple architectural projects and have been consistently impressed with their clarity, strength, and durability. The polycarbonate roofing sheets allow excellent natural light while providing UV protection and impact resistance. Installation is straightforward, and the finished appearance is excellent."
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
          "reviewBody": "The transparent polycarbonate roofing sheets from Captain Steel have transformed our greenhouse projects. The light transmission is excellent while the UV protection prevents plant damage. Highly recommended for any agricultural or horticultural application in Rajkot."
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
          "value": "80-90% (Clear Polycarbonate Sheets)"
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
      "keywords": "polycarbonate sheet, polycarbonate sheets, roofing sheet, polycarbonate roofing sheet, transparent roofing sheet, polycarbonate sheets rajkot, roofing sheet in rajkot, polycarbonate sheet rajkot, transparent roofing solution"
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
      "description": "Leading manufacturer and supplier of premium polycarbonate sheets and roofing sheets in Rajkot, Gujarat. Offering high-quality polycarbonate roofing sheets with exceptional durability and UV protection.",
      "slogan": "Premium Polycarbonate Sheets & Roofing Sheets in Rajkot",
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
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday"
          ],
          "opens": "09:00",
          "closes": "19:00"
        }
      ],
      "department": [
        {
          "@type": "LocalBusiness",
          "name": "Polycarbonate Sheets Department",
          "description": "Specializing in premium polycarbonate sheets and roofing sheets in Rajkot and across Gujarat. Offering polycarbonate roofing sheets for skylights, canopies, greenhouses, and architectural applications.",
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
      ],
      "keywords": "polycarbonate sheet, polycarbonate roofing sheet, roofing sheet, polycarbonate sheets rajkot, roofing sheet in rajkot, transparent roofing solution"
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
