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
const FAQ_SCHEMA_KEY = makeStateKey<string>('insulatedMetalSheetsFaqSchema');

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
    this.titleService.setTitle('Best Insulated Metal Sheets & Roofing Sheets in Rajkot | Captain Steel');
    
    this.meta.addTags([
      { name: 'description', content: 'Buy the best insulated metal sheets, insulated roofing sheets & insulation sheets from Captain Steel - #1 manufacturer & supplier in Rajkot, Gujarat. Premium quality, energy-efficient insulated sheets with superior thermal performance & durability for all building applications.' },
      { name: 'keywords', content: 'insulated sheet in rajkot, insulated roofing sheet rajkot, insulated metal sheet in rajkot, best roofing sheet rajkot, insulation sheet manufacturer rajkot, insulation sheets rajkot, insulated metal sheets rajkot, thermal insulation sheets rajkot, energy efficient roofing sheets rajkot, best insulation sheets rajkot, premium insulated sheets rajkot, insulated roof panels rajkot, metal insulation rajkot, wholesale insulation sheets rajkot' },
      { name: 'robots', content: 'index, follow' },
      { name: 'author', content: 'Captain Steel Roof Solutions Rajkot' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'canonical', content: 'https://captainsteelroofsolution.com/products/insulated-metal-sheets' },
      // Open Graph tags for social sharing
      { property: 'og:title', content: 'Best Insulated Metal Sheets & Roofing Sheets in Rajkot | Captain Steel' },
      { property: 'og:description', content: 'Buy the best insulated metal sheets & insulated roofing sheets from Captain Steel Rajkot. Premium quality, energy-efficient insulated sheets with superior thermal performance for all building applications in Rajkot and across India.' },
      { property: 'og:image', content: 'https://captainsteelroofsolution.com/assets/products/insulated-metal-roofing-sheets.jpg' },
      { property: 'og:url', content: 'https://captainsteelroofsolution.com/products/insulated-metal-sheets' },
      { property: 'og:type', content: 'product' },
      // Twitter Card tags
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'Best Insulated Metal Sheets & Roofing Sheets in Rajkot | Captain Steel' },
      { name: 'twitter:description', content: 'Premium insulated sheets from Rajkot\'s leading manufacturer. Superior thermal efficiency, energy savings, and climate control for all building applications.' },
      { name: 'twitter:image', content: 'https://captainsteelroofsolution.com/assets/products/insulated-metal-roofing-sheets.jpg' }
    ]);
    
    // Add JSON-LD schema markup with required properties
    this.setProductStructuredData();
    this.setFaqStructuredData();
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
      }, 500);
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
      "department": [
        {
          "@type": "LocalBusiness",
          "name": "Insulated Metal Sheets Department",
          "description": "Leading manufacturer and wholesale supplier of premium insulation sheets in Rajkot, Gujarat serving clients across India with high-quality insulation sheet products for all construction needs.",
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
  }

  private setProductStructuredData(): void {
    const structuredData = {
      "@context": "https://schema.org/",
      "@type": "Product",
      "name": "Best Insulated Metal Sheets in Rajkot",
      "alternateName": ["Insulation Sheets in Rajkot", "Insulated Roofing Sheets Rajkot", "Best Roofing Sheets Rajkot", "Energy Efficient Insulated Sheets Rajkot", "Wholesale Insulation Sheets Rajkot"],
      "image": [
        `${this.baseUrl}/assets/products/insulated-metal-roofing-sheets.jpg`,
        `${this.baseUrl}/assets/products/insulated-metal-sheet-close.jpg`,
        `${this.baseUrl}/assets/products/insulated-metal-sheet-installation.jpg`
      ],
      "description": "Premium insulated sheets manufactured by Captain Steel in Rajkot, offering superior thermal efficiency, energy savings, and exceptional climate control for commercial and industrial buildings across India. Best insulated metal sheet manufacturer in Rajkot, Gujarat.",
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
        "ratingValue": "4.9",
        "ratingCount": "156",
        "reviewCount": "156"
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
          "value": "Available across India with manufacturing in Rajkot"
        },
        {
          "@type": "PropertyValue",
          "name": "Energy Efficiency",
          "value": "Reduces energy consumption by 20-30%"
        },
        {
          "@type": "PropertyValue",
          "name": "Warranty",
          "value": "Up to 20 years structural warranty"
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

  private setFaqStructuredData(): void {
    const faqStructuredData = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What makes insulated metal sheets from Captain Steel Rajkot more energy efficient than traditional building materials?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Insulated metal sheets from Rajkot achieve superior energy efficiency through their continuous insulation core that eliminates thermal bridging common in traditional construction. The high R-value insulation combined with reflective metal facings creates an effective thermal barrier that minimizes heat transfer in both directions. This integrated system can reduce energy consumption by 20-30% compared to conventional building materials, providing significant cost savings over the building's lifecycle while maintaining more consistent interior temperatures with less HVAC demand."
          }
        },
        {
          "@type": "Question",
          "name": "What types of insulation cores are available in Captain Steel's insulation sheets in Rajkot?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "As a leading insulation sheet manufacturer in Rajkot, we offer three primary insulation core options: polyurethane (PUR), polyisocyanurate (PIR), and mineral wool. Polyurethane provides excellent thermal efficiency with an R-value of approximately 6.5 per inch and good moisture resistance. PIR offers similar thermal performance but with enhanced fire resistance properties, making it ideal for applications where fire ratings are critical. Mineral wool cores deliver superior fire resistance and acoustic performance, though with a slightly lower R-value of around 4.3 per inch. Our technical team can help you select the optimal core material based on your specific requirements for thermal performance, fire safety, budget, and environmental considerations."
          }
        },
        {
          "@type": "Question",
          "name": "Where can I purchase wholesale insulation sheets in Rajkot?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Captain Steel is a premier wholesale insulation sheet supplier in Rajkot, Gujarat. Our manufacturing facility is located at Sadak Pipliya, National Highway, Ta. Gondal, Rajkot, Gujarat 360311. We offer competitive wholesale pricing for bulk orders and serve clients throughout India. Contact our sales team at +91 9879109091 or visit our facility to discuss your wholesale insulated sheet requirements, get samples, and quotations for your projects."
          }
        },
        {
          "@type": "Question",
          "name": "How do insulated metal sheets contribute to sustainable building design?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Insulated metal sheets contribute significantly to sustainable building design through multiple pathways. Their outstanding thermal performance reduces energy consumption and associated carbon emissions throughout the building's operational life. The panels contain recycled content (typically 25-35% in the steel facings) and are fully recyclable at the end of their service life. Their lightweight nature reduces transportation emissions and foundation requirements. Additionally, the precise manufacturing process minimizes construction waste, while the durable design extends building lifespan, reducing materials consumption over time. These properties make insulated metal sheets valuable for projects seeking LEED, BREEAM, or other green building certifications."
          }
        },
        {
          "@type": "Question",
          "name": "What is the typical installation process for insulated metal sheets?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The installation process for insulated metal sheets is significantly faster and more straightforward than traditional construction methods. First, the building's structural framework is erected according to specifications. Next, panels are lifted into place using appropriate handling equipment, with each panel featuring precision-engineered tongue and groove joints that interlock to create weather-tight seals. Fasteners are then installed according to engineering requirements, typically through the panel faces into the supporting structure. Finally, trim and flashing components are added at transitions, openings, and terminations to complete the weatherproof envelope. This streamlined process can reduce construction schedules by 30-50% compared to multi-component systems, with fewer trades required on site."
          }
        },
        {
          "@type": "Question",
          "name": "Why are Captain Steel insulated sheets considered the best roofing sheets in the market?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Captain Steel insulated sheets are considered the best roofing sheets due to their superior build quality, premium materials, and industry-leading performance metrics. Our insulated sheets feature high-grade steel facings with advanced corrosion protection, precision-engineered core materials that exceed industry thermal standards, and manufacturing tolerances that ensure perfect installation and long-term durability. Independent testing shows our products consistently outperform competitors in thermal efficiency, weather resistance, and structural integrity. Additionally, our comprehensive warranty, expert technical support, and nationwide availability make Captain Steel the preferred choice for architects, contractors, and building owners seeking the best insulated roofing solution."
          }
        },
        {
          "@type": "Question",
          "name": "What makes insulated roofing sheets more cost-effective than traditional roofing options?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Insulated roofing sheets provide superior cost-effectiveness compared to traditional roofing through multiple economic advantages. Initially, their all-in-one design combines structural, insulative, and finishing elements, reducing material costs and eliminating the need for separate insulation layers. During installation, their lightweight nature and integrated design reduce labor requirements and installation time by up to 50%, significantly lowering construction costs. Long-term, the superior thermal performance can reduce energy costs by 20-30% annually, while their durable construction minimizes maintenance expenses over the building's lifetime. Additionally, their fire resistance properties may reduce insurance premiums, and their potential contribution to green building certifications can enhance property value. When calculating total lifetime ownership costs, insulated roofing sheets consistently deliver better return on investment than conventional roofing systems."
          }
        }
      ]
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
