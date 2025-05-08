import { Component, OnInit, inject, PLATFORM_ID, Inject } from '@angular/core';
import { CommonModule, isPlatformBrowser, DOCUMENT } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';
import { TransferState, makeStateKey } from '@angular/platform-browser';
import * as Aos from 'aos';

// Define TransferState keys
const PRODUCT_SCHEMA_KEY = makeStateKey<string>('CRIMPING_PRODUCT_SCHEMA');
const BUSINESS_SCHEMA_KEY = makeStateKey<string>('CRIMPING_BUSINESS_SCHEMA');

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
  finish: string;
  applications: string;
}

interface Application {
  icon: string;
  title: string;
  description: string;
  benefits: string[];
}

interface FAQ {
  question: string;
  answer: string;
}

@Component({
  selector: 'app-crimping',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './crimping.component.html',
  styleUrl: './crimping.component.scss'
})
export class CrimpingComponent implements OnInit {
  private platformId = inject(PLATFORM_ID);
  private baseUrl = 'https://captainsteelroofsolution.com';
  
  features: Feature[] = [
    {
      icon: 'fas fa-lock',
      title: 'Superior Joining Strength',
      description: 'Engineered for exceptional holding strength, ensuring secure connections in all applications.'
    },
    {
      icon: 'fas fa-shield-alt',
      title: 'Corrosion Resistant',
      description: 'Premium metal construction offers exceptional protection against rust and environmental damage.'
    },
    {
      icon: 'fas fa-wrench',
      title: 'Easy Installation',
      description: 'Designed for simple and quick installation, reducing labor time and costs.'
    },
    {
      icon: 'fas fa-compress-alt',
      title: 'Precision Engineering',
      description: 'Manufactured to exacting standards for consistent performance and reliable connections.'
    },
    {
      icon: 'fas fa-industry',
      title: 'Industrial Grade',
      description: 'Built to withstand demanding industrial environments and heavy-duty applications.'
    },
    {
      icon: 'fas fa-sync-alt',
      title: 'Versatile Applications',
      description: 'Suitable for a wide range of industries including construction, automotive, and manufacturing.'
    }
  ];

  specifications: Specification[] = [
    {
      thickness: '0.5mm - 2.0mm',
      width: '12mm - 25mm',
      length: 'Custom sizing available',
      material: 'Galvanized Steel/Stainless Steel',
      finish: 'Polished/Matte/Custom',
      applications: 'Roofing/HVAC/Plumbing/Industrial'
    }
  ];

  applications: Application[] = [
    {
      icon: 'fas fa-hard-hat',
      title: 'Construction Industry in Rajkot',
      description: 'Reliable fastening solutions for roofing, HVAC ducting, and general construction applications across Rajkot and Gujarat region.',
      benefits: [
        'Secure connections for roofing components',
        'Weather-resistant duct sealing',
        'Reliable pipe and conduit fastening'
      ]
    },
    {
      icon: 'fas fa-industry',
      title: 'Industrial Applications',
      description: 'Heavy-duty crimping solutions for manufacturing, processing, and industrial facilities in Rajkot industrial area.',
      benefits: [
        'High-pressure hose connections',
        'Vibration-resistant fastening',
        'Chemical-resistant connections'
      ]
    },
    {
      icon: 'fas fa-car',
      title: 'Automotive Sector in Gujarat',
      description: 'Precision crimping for automotive exhaust systems, hoses, and fluid lines for automotive manufacturers in Gujarat.',
      benefits: [
        'Heat-resistant exhaust connections',
        'Leak-proof fluid line sealing',
        'Vibration-dampening solutions'
      ]
    },
    {
      icon: 'fas fa-water',
      title: 'Marine Environment',
      description: 'Corrosion-resistant crimping solutions specifically designed for marine and coastal applications along Gujarat coastline.',
      benefits: [
        'Salt-water resistant materials',
        'UV and weather protection',
        'Long-lasting performance in harsh conditions'
      ]
    }
  ];

  faqs: FAQ[] = [
    {
      question: 'What types of crimping sheets are available in Rajkot?',
      answer: 'In Rajkot, we offer a comprehensive range of crimping metal sheets including galvanized steel, stainless steel, and aluminized options. Our crimping sheets come in various thicknesses (0.5mm to 2.0mm) and widths (12mm to 25mm) with custom lengths available per project requirements. We specialize in both standard and custom crimping solutions to meet specific industrial, construction, automotive, and marine applications throughout the Gujarat region.'
    },
    {
      question: 'How durable are Captain Steel\'s crimping metal sheets?',
      answer: 'Captain Steel\'s crimping metal sheets are engineered for exceptional durability with a service life of 15-20+ years depending on the environment and application. Our premium-grade materials featuring advanced corrosion-resistant coatings can withstand exposure to harsh weather conditions, industrial chemicals, salt spray in coastal areas, and extreme temperatures. The superior material quality and precision manufacturing ensure our crimping sheets maintain their structural integrity and fastening strength throughout their extended service life.'
    },
    {
      question: 'What makes Captain Steel\'s crimping sheets in Rajkot superior to competitors?',
      answer: 'Captain Steel\'s crimping sheets manufactured in Rajkot stand out for their premium-grade materials, superior corrosion resistance, and precision engineering. Our advanced manufacturing facility in Rajkot utilizes state-of-the-art equipment to ensure consistent quality with tight tolerances. Unlike competitors, we offer complete customization options, including material type, thickness, width, length, and specialized coatings. Our local production enables faster delivery times, competitive pricing, and personalized technical support from our Rajkot-based engineering team, providing comprehensive solutions tailored to Gujarat\'s specific environmental and industrial conditions.'
    },
    {
      question: 'Can you provide custom crimping solutions for specific projects in Gujarat?',
      answer: 'Yes, custom crimping solutions are our specialty at Captain Steel in Rajkot. We work closely with clients throughout Gujarat to develop tailored crimping sheets and systems for their specific applications. Our engineering team analyzes your project requirements including load specifications, environmental conditions, and installation constraints to create custom crimping solutions with the ideal material composition, dimensions, and fastening mechanism. We can accommodate special requests for unusual shapes, non-standard sizes, enhanced corrosion protection for coastal areas, and high-temperature applications. Our Rajkot manufacturing facility allows us to produce custom orders with short lead times while maintaining stringent quality control.'
    }
  ];

  constructor(
    private meta: Meta,
    private titleService: Title,
    @Inject(DOCUMENT) private document: Document,
    private transferState: TransferState
  ) {}

  ngOnInit() {
    // Initialize AOS animations if in browser
    if (isPlatformBrowser(this.platformId)) {
      Aos.init({
        duration: 1000,
        once: true,
        offset: 100
      });
    }

    // Set SEO meta tags
    this.titleService.setTitle('Premium Crimping Metal Sheets in Rajkot | Best Price | Captain Steel');
    
    this.meta.addTags([
      { name: 'description', content: 'Buy premium crimping metal sheets in Rajkot at best price. Superior strength galvanized steel crimping with excellent corrosion resistance. Ideal for construction, industrial & automotive applications with free delivery across Gujarat.' },
      { name: 'keywords', content: 'crimping sheet, crimping metal sheet, crimping sheet in Rajkot, metal crimping, roofing crimping Gujarat, industrial crimping sheets, steel crimping Rajkot, crimped sheets Gujarat, crimping solutions Rajkot, roofing accessories, Rajkot, Gujarat' },
      { name: 'robots', content: 'index, follow' },
      { name: 'author', content: 'Captain Steel Roof Solutions' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'canonical', content: 'https://captainsteelroofsolution.com/products/crimping' },
      // Location-specific meta tags
      { name: 'geo.region', content: 'IN-GJ' },
      { name: 'geo.placename', content: 'Rajkot, Gujarat' },
      { name: 'geo.position', content: '22.089547;70.783704' },
      { name: 'ICBM', content: '22.089547, 70.783704' },
      // Open Graph tags for social sharing
      { property: 'og:title', content: 'Premium Crimping Metal Sheets in Rajkot | Captain Steel' },
      { property: 'og:description', content: 'Buy premium crimping metal sheets in Rajkot. Superior strength, corrosion-resistant designs with best prices guaranteed. Free delivery across Gujarat.' },
      { property: 'og:image', content: 'https://captainsteelroofsolution.com/assets/products/crimping-and-accessories.jpg' },
      { property: 'og:url', content: 'https://captainsteelroofsolution.com/products/crimping' },
      { property: 'og:type', content: 'product' },
      { property: 'og:locality', content: 'Rajkot' },
      { property: 'og:region', content: 'Gujarat' },
      { property: 'og:postal-code', content: '360311' },
      { property: 'og:country-name', content: 'India' },
      // Twitter Card tags
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'Premium Crimping Metal Sheets in Rajkot | Captain Steel' },
      { name: 'twitter:description', content: 'Buy premium crimping metal sheets in Rajkot. Superior strength fastening solutions with best prices and free delivery across Gujarat.' },
      { name: 'twitter:image', content: 'https://captainsteelroofsolution.com/assets/products/crimping-and-accessories.jpg' }
    ]);

    // Add structured data
    this.setProductStructuredData();
    this.setBusinessStructuredData();
    this.setFaqStructuredData();
    
    // Only run browser-specific code if we are in a browser environment
    if (isPlatformBrowser(this.platformId)) {
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
        const mainImage = document.querySelector('.main-gallery-image img') as HTMLImageElement;
        
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
      "name": "Premium Crimping Metal Sheets",
      "alternateName": ["Crimping Sheets", "Metal Crimping Solutions", "Industrial Crimping Bands"],
      "image": [
        `${this.baseUrl}/assets/products/crimping-and-accessories.jpg`,
        `${this.baseUrl}/assets/products/crimping-and-accessories-2.jpg`,
        `${this.baseUrl}/assets/products/crimping-installation.jpg`
      ],
      "description": "Premium quality crimping metal sheets available in Rajkot, Gujarat. Our high-strength galvanized and stainless steel crimping provides superior fastening solutions with excellent corrosion resistance. Ideal for construction, industrial, automotive and marine applications with local delivery throughout Rajkot and Gujarat.",
      "sku": "CRIMP-SHEET-01",
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
        "ratingCount": "157",
        "reviewCount": "82"
      },
      "material": ["Galvanized Steel", "Stainless Steel", "Aluminized Steel"],
      "width": {
        "@type": "QuantitativeValue",
        "value": "12-25",
        "unitCode": "MMT"
      },
      "height": {
        "@type": "QuantitativeValue",
        "value": "0.5-2.0",
        "unitCode": "MMT"
      },
      "weight": {
        "@type": "QuantitativeValue",
        "value": "varies by size",
        "unitCode": "KGM"
      },
      "additionalProperty": [
        {
          "@type": "PropertyValue",
          "name": "Tensile Strength",
          "value": "High strength fastening"
        },
        {
          "@type": "PropertyValue",
          "name": "Corrosion Resistance",
          "value": "Superior anti-rust protection"
        },
        {
          "@type": "PropertyValue",
          "name": "Local Availability",
          "value": "Available in Rajkot with same-day delivery"
        },
        {
          "@type": "PropertyValue",
          "name": "Installation Services",
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
          "name": "Crimping Metal Sheets Department",
          "description": "Specializing in premium crimping metal sheets for construction, industrial and automotive applications in Rajkot and across Gujarat",
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
    
    // Only add script tag in browser environment
    if (isPlatformBrowser(this.platformId)) {
      const script = this.document.createElement('script');
      script.type = 'application/ld+json';
      script.text = JSON.stringify(faqStructuredData);
      this.document.head.appendChild(script);
    }
  }
}
