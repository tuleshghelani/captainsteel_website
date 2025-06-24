import { Component, OnInit, inject, PLATFORM_ID, Inject } from '@angular/core';
import { CommonModule, isPlatformBrowser, DOCUMENT } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';
import { TransferState, makeStateKey } from '@angular/platform-browser';
import * as Aos from 'aos';

// Define TransferState keys
const PRODUCT_SCHEMA_KEY = makeStateKey<string>('CORRUGATED_SHEETS_PRODUCT_SCHEMA');
const BUSINESS_SCHEMA_KEY = makeStateKey<string>('CORRUGATED_SHEETS_BUSINESS_SCHEMA');
const FAQ_SCHEMA_KEY = makeStateKey<string>('CORRUGATED_SHEETS_FAQ_SCHEMA');

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
  active?: boolean;
}

interface GalleryImage {
  src: string;
  alt: string;
  title: string;
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
      title: 'High-Tensile Strength',
      description: 'Our corrugated roofing sheets are engineered with high-tensile steel for maximum durability and impact resistance, ensuring long-lasting protection for your property in Rajkot.'
    },
    {
      icon: 'fas fa-palette',
      title: 'Vibrant Colour Coated Finish',
      description: 'Featuring a multi-layered colour coating process, our roofing sheets offer exceptional aesthetic appeal and protection against fading and peeling, perfect for Gujarat\'s climate.'
    },
    {
      icon: 'fas fa-bolt',
      title: 'Superior Corrosion Resistance',
      description: 'Advanced galvanization and colour coating technology provide exceptional protection against rust and corrosion, extending the life of your roof.'
    },
    {
      icon: 'fas fa-tint-slash',
      title: 'All-Weather Proofing',
      description: 'Designed to withstand heavy rainfall, high winds, and extreme temperatures, our colour coated roofing sheets offer reliable, year-round protection.'
    },
    {
      icon: 'fas fa-feather',
      title: 'Lightweight & Easy Installation',
      description: 'The high strength-to-weight ratio reduces structural load, simplifies transportation, and speeds up installation, saving time and money on your project.'
    },
    {
      icon: 'fas fa-recycle',
      title: 'Eco-Friendly Roofing Solution',
      description: 'Made from 100% recyclable steel, our corrugated sheets are an environmentally responsible choice for sustainable building projects in Rajkot and beyond.'
    }
  ];

  specifications: Specification[] = [
    { name: 'Product Name', value: 'Colour Coated Corrugated Roofing Sheet' },
    { name: 'Material', value: 'High-Tensile Galvanized Steel (GI) / Aluzinc' },
    { name: 'Thickness Range', value: '0.35mm to 0.80mm' },
    { name: 'Sheet Width', value: '1070mm (Effective Coverage: 1010mm)' },
    { name: 'Available Length', value: 'Customizable up to 12 meters (40 feet)' },
    { name: 'Coating Type', value: 'Regular Modified Polyester (RMP), Silicone Modified Polyester (SMP), PVDF' },
    { name: 'Colour Options', value: 'Wide range of vibrant colours (RAL shades available)' },
    { name: 'Profile Height', value: '18mm to 35mm' },
    { name: 'Application', value: 'Industrial, Commercial, Residential, Agricultural Roofing' },
    { name: 'Key Features', value: 'Weather Resistant, Leak Proof, Corrosion Resistant' },
    { name: 'Warranty', value: 'Up to 20 years for coating performance' }
  ];

  faqs: FAQ[] = [
    {
      question: 'What are colour coated roofing sheets?',
      answer: 'Colour coated roofing sheets are corrugated steel sheets that have been coated with a durable paint layer. This coating provides excellent protection against weather and corrosion while offering a wide range of aesthetic colour choices for your building in Rajkot.',
      active: true
    },
    {
      question: 'What is the price of corrugated roofing sheets in Rajkot?',
      answer: 'The price of our roofing sheets depends on thickness, coating type, and order quantity. As a leading manufacturer in Rajkot, we offer the most competitive prices in Gujarat. Please contact us for a detailed quote for your specific needs.',
      active: false
    },
    {
      question: 'How do your corrugated sheets enhance building aesthetics?',
      answer: 'Our colour coated corrugated sheets come in a variety of vibrant, long-lasting colours that can match any architectural design. The clean lines and uniform finish provide a modern and professional look to any residential or commercial building.',
      active: false
    },
    {
      question: 'Are these roofing sheets suitable for Gujarat\'s climate?',
      answer: 'Absolutely. Our sheets are specifically designed for the Indian climate. The multi-layer coating provides excellent UV resistance and can withstand heavy monsoon rains and high temperatures, ensuring long-term performance and durability.',
      active: false
    },
    {
      question: 'What is the lifespan of your colour coated roofing sheets?',
      answer: 'With proper installation and minimal maintenance, our premium colour coated roofing sheets can last for over 25 years. The advanced coating technology protects the base steel from degradation, ensuring a long and reliable service life.',
      active: false
    },
    {
      question: 'Do you provide installation for the roofing sheets?',
      answer: 'Yes, we offer professional installation services across Rajkot and Gujarat. Our experienced team ensures that your corrugated roofing sheets are installed perfectly for maximum performance and longevity.',
      active: false
    }
  ];

  galleryImages: GalleryImage[] = [
    {
      src: 'assets/products/corrugated-roofing-sheets-4.jpg',
      alt: 'Stack of blue colour coated corrugated roofing sheets in Rajkot warehouse.',
      title: 'Colour Coated Roofing Sheets'
    },
    {
      src: 'assets/products/corrugated-roofing-sheets-2.jpg',
      alt: 'Close-up of the profile of a corrugated colour coated roofing sheet.',
      title: 'Corrugated Sheet Profile'
    },
    {
      src: 'assets/products/corrugated-roofing-sheets-3.jpg',
      alt: 'Professional installation of corrugated roofing sheets on a building in Gujarat.',
      title: 'Roofing Sheet Installation'
    }
  ];

  mainImage: GalleryImage = this.galleryImages[0];

  constructor(
    private meta: Meta,
    private titleService: Title,
    @Inject(DOCUMENT) private document: Document,
    private transferState: TransferState
  ) {}

  ngOnInit() {
    this.setMetaTags();
    this.setStructuredData();
    this.initializeAOS();
  }

  setMainImage(image: GalleryImage): void {
    this.mainImage = image;
  }

  toggleFaq(faq: FAQ): void {
    faq.active = !faq.active;
  }

  private setMetaTags(): void {
    const title = 'Colour Coated Corrugated Roofing Sheets Manufacturer in Rajkot | Captain Steel';
    const description = 'Top manufacturer of colour coated corrugated roofing sheets in Rajkot. Get premium quality steel roofing sheets at the best price in Gujarat. Durable, weather-resistant, and available in various colours.';
    const keywords = 'colour coated roofing sheet, corrugated roofing sheets, roofing sheet price, steel roofing sheet, roofing solutions, captain steel, roofing manufacturer, rajkot, gujarat';
    const imageUrl = `${this.baseUrl}/assets/products/corrugated-roofing-sheets-4.jpg`;
    const url = `${this.baseUrl}/products/corrugated-roofing-sheets`;

    this.titleService.setTitle(title);

    this.meta.addTags([
      { name: 'description', content: description },
      { name: 'keywords', content: keywords },
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
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'Premium Corrugated Roofing Sheets in Rajkot | Captain Steel' },
      { name: 'twitter:description', content: 'Buy premium corrugated sheets in Rajkot. Durable, weather-resistant steel roofing with best prices and free delivery across Gujarat.' },
      { name: 'twitter:image', content: 'https://captainsteelroofsolution.com/assets/products/corrugated-roofing-sheets-4.jpg' }
    ]);

    // Add or update the canonical link
    const canonicalLink: HTMLLinkElement | null = this.document.querySelector('link[rel="canonical"]');
    if (canonicalLink) {
      canonicalLink.href = url;
    } else {
      const link: HTMLLinkElement = this.document.createElement('link');
      link.rel = 'canonical';
      link.href = url;
      this.document.head.appendChild(link);
    }
  }

  private setStructuredData(): void {
    this.setProductStructuredData();
    this.setBusinessStructuredData();
    this.setFaqStructuredData();
  }

  private initializeAOS(): void {
    if (isPlatformBrowser(this.platformId)) {
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
      "name": "Colour Coated Corrugated Roofing Sheets",
      "alternateName": ["Corrugated Roofing Sheets", "Colour Coated Roofing Sheet", "Steel Roofing Sheet", "Galvanized Corrugated Sheets", "Roofing Sheet"],
      "image": this.galleryImages.map(img => `${this.baseUrl}/${img.src}`),
      "description": "Find the best quality colour coated corrugated roofing sheets in Rajkot, Gujarat. Manufactured by Captain Steel, our roofing sheets are made from high-tensile steel, ensuring durability, weather resistance, and aesthetic appeal for all types of buildings.",
      "sku": "CS-CCRS-RJ",
      "mpn": "CS-CCRS-RJ-24",
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
      "review": {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "4.9",
          "bestRating": "5"
        },
        "author": {
          "@type": "Person",
          "name": "Rajesh Patel"
        }
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "ratingCount": "186",
        "reviewCount": "112"
      },
      "offers": {
        "@type": "Offer",
        "url": `${this.baseUrl}/products/corrugated-roofing-sheets`,
        "priceCurrency": "INR",
        "price": "250",
        "priceSpecification": {
          "@type": "PriceSpecification",
          "price": "250",
          "priceCurrency": "INR",
          "valueAddedTaxIncluded": "true",
          "unitText": "square meter"
        },
        "availability": "https://schema.org/InStock",
        "areaServed": {
            "@type": "State",
            "name": "Gujarat"
        },
        "seller": {
          "@type": "Organization",
          "name": "Captain Steel"
        }
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
    this.transferState.set(PRODUCT_SCHEMA_KEY, JSON.stringify(structuredData));
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
        "name": "Captain Steel",
        "image": `${this.baseUrl}/assets/logo.png`,
        "@id": this.baseUrl,
        "url": this.baseUrl,
        "telephone": "+91 9879109091",
        "priceRange": "₹₹",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Pipaliya",
          "addressLocality": "Rajkot",
          "postalCode": "360311",
          "addressRegion": "GJ",
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
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday"
          ],
          "opens": "09:00",
          "closes": "19:00"
        },
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
          "https://www.facebook.com/captainsteel",
          "https://www.linkedin.com/company/captain-steel/",
          "https://twitter.com/captainsteel"
        ]
    };
    this.transferState.set(BUSINESS_SCHEMA_KEY, JSON.stringify(structuredData));
    if (isPlatformBrowser(this.platformId)) {
      const script = this.document.createElement('script');
      script.type = 'application/ld+json';
      script.text = JSON.stringify(structuredData);
      this.document.head.appendChild(script);
    }
  }

  private setFaqStructuredData(): void {
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": this.faqs.map(faq => {
        return {
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer
          }
        };
      })
    };
    this.transferState.set(FAQ_SCHEMA_KEY, JSON.stringify(structuredData));
    if (isPlatformBrowser(this.platformId)) {
      const script = this.document.createElement('script');
      script.type = 'application/ld+json';
      script.text = JSON.stringify(structuredData);
      this.document.head.appendChild(script);
    }
  }
}
