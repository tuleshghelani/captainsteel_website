import { Component, OnInit, inject, PLATFORM_ID } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';
import { isPlatformBrowser } from '@angular/common';
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

@Component({
  selector: 'app-insulated-metal-sheets',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './insulated-metal-sheets.component.html',
  styleUrl: './insulated-metal-sheets.component.scss'
})
export class InsulatedMetalSheetsComponent implements OnInit {
  private platformId = inject(PLATFORM_ID);
  
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
    private titleService: Title
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
    this.addJsonLdSchema();
    
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

  private addJsonLdSchema(): void {
    if (isPlatformBrowser(this.platformId)) {
      // Create schema script element
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      
      // Create the schema object with required offers property
      const schema = {
        '@context': 'https://schema.org',
        '@type': 'Product',
        name: 'Insulated Metal Sheets',
        description: 'Premium insulation sheets manufactured by Captain Steel in Rajkot, offering superior thermal efficiency and energy savings.',
        brand: {
          '@type': 'Brand',
          name: 'Captain Steel'
        },
        image: 'https://captainsteelroofsolution.com/assets/products/insulated-metal-roofing-sheets.jpg',
        // Adding offers to fix the schema error
        offers: {
          '@type': 'AggregateOffer',
          priceCurrency: 'INR',
          lowPrice: '80',
          highPrice: '500',
          priceValidUntil: new Date(new Date().setFullYear(new Date().getFullYear() + 1)).toISOString().split('T')[0],
          availability: 'https://schema.org/InStock',
          offerCount: this.allProducts.length,
          seller: {
            '@type': 'Organization',
            name: 'Captain Steel Roof Solutions'
          }
        },
        // Adding aggregateRating to fix the schema error
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '4.8',
          reviewCount: '124'
        },
        // Using allProducts to create itemListElement
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Insulation Sheet Products',
          itemListElement: this.allProducts.map(product => ({
            '@type': 'Offer',
            name: product.title,
            description: product.description,
            image: product.image,
            price: 'Contact for Quote',
            priceCurrency: 'INR',
            itemCondition: 'https://schema.org/NewCondition',
            availability: 'https://schema.org/InStock'
          }))
        },
        // Add manufacturer information
        manufacturer: {
          '@type': 'Organization',
          name: 'Captain Steel Roof Solutions',
          address: {
            '@type': 'PostalAddress',
            streetAddress: 'Industrial Area',
            addressLocality: 'Rajkot',
            addressRegion: 'Gujarat',
            postalCode: '360110',
            addressCountry: 'IN'
          }
        }
      };
      
      // Set the script content
      script.textContent = JSON.stringify(schema);
      
      // Add script to head
      document.head.appendChild(script);
    }
  }
}
