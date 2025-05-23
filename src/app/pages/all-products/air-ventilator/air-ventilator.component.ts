import { Component, OnInit, inject, PLATFORM_ID, Inject } from '@angular/core';
import { CommonModule, isPlatformBrowser, DOCUMENT } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';
import Aos from 'aos';

@Component({
  selector: 'app-air-ventilator',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './air-ventilator.component.html',
  styleUrl: './air-ventilator.component.scss'
})
export class AirVentilatorComponent implements OnInit {
  private platformId = inject(PLATFORM_ID);

  // Add FAQ data
  faqs = [
    {
      question: 'How do air ventilators work without electricity?',
      answer: 'Our air ventilators utilize the natural force of wind and thermal convection to create rotation. Even a slight breeze causes the ventilator to spin, creating a low-pressure area that draws hot air upward and out of the building. This continuous air extraction requires no electricity and operates 24/7 as long as there is even minimal air movement.'
    },
    {
      question: 'What is the lifespan of your air ventilators?',
      answer: 'Our air ventilators are built to last with high-quality materials and precision engineering. Depending on the model and environmental conditions, they typically have a lifespan of 15-20 years with minimal maintenance requirements. All our products come with a comprehensive warranty and after-sales support.'
    },
    {
      question: 'How many ventilators do I need for my facility?',
      answer: 'The number of ventilators required depends on several factors including your building size, ceiling height, heat sources, and desired air changes per hour. Our technical team conducts a thorough assessment and provides customized recommendations based on your specific requirements to ensure optimal ventilation performance.'
    }
  ];

  constructor(
    private meta: Meta,
    private titleService: Title,
    @Inject(DOCUMENT) private document: Document
  ) {}

  ngOnInit() {
    // Set SEO meta tags
    this.titleService.setTitle('Best Air Ventilators in Rajkot | Industrial Air Ventilators | Captain Steel');
    
    this.meta.addTags([
      { name: 'description', content: 'Buy premium air ventilators in Rajkot with zero electricity cost. Our industrial air ventilators reduce temperature by 8-10°C, eliminate humidity & provide superior ventilation for factories, warehouses & commercial buildings.' },
      { name: 'keywords', content: 'air ventilator, air ventilators in rajkot, industrial air ventilator, turbo ventilator, roof ventilator, natural ventilation, energy-saving ventilator, factory ventilation, warehouse ventilation, gujarat ventilation, wind ventilator, wind-driven ventilator' },
      { name: 'robots', content: 'index, follow' },
      { name: 'author', content: 'Captain Steel Roof Solutions' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'canonical', content: 'https://captainsteelroofsolution.com/products/air-ventilator' },
      // Location-specific meta tags
      { name: 'geo.region', content: 'IN-GJ' },
      { name: 'geo.placename', content: 'Rajkot, Gujarat' },
      // Open Graph tags for social sharing
      { property: 'og:title', content: 'Best Air Ventilators in Rajkot | Industrial Air Ventilators | Captain Steel' },
      { property: 'og:description', content: 'Premium industrial air ventilators from Rajkot with zero electricity cost. Reduce temperature by 8-10°C, eliminate humidity and provide superior ventilation for all buildings.' },
      { property: 'og:image', content: 'https://captainsteelroofsolution.com/assets/products/air-ventilator.jpeg' },
      { property: 'og:url', content: 'https://captainsteelroofsolution.com/products/air-ventilator' },
      { property: 'og:type', content: 'product' },
      { property: 'og:locale', content: 'en_IN' },
      // Twitter Card tags
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'Best Air Ventilators in Rajkot | Industrial Air Ventilators | Captain Steel' },
      { name: 'twitter:description', content: 'Premium industrial air ventilators from Rajkot with zero electricity cost. Reduce temperature by 8-10°C, eliminate humidity and provide superior ventilation.' },
      { name: 'twitter:image', content: 'https://captainsteelroofsolution.com/assets/products/air-ventilator.jpeg' }
    ]);
    
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
      
      // Update Product Schema for better local SEO
      this.updateProductSchema();
      // Add FAQ structured data
      this.setFaqStructuredData();
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
    
    // Create schema script element
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    
    // Set the script content
    script.textContent = JSON.stringify(faqStructuredData);
    
    // Remove any existing FAQ schema first
    const existingSchemas = document.querySelectorAll('script[type="application/ld+json"]');
    existingSchemas.forEach(existingSchema => {
      const content = existingSchema.textContent;
      if (content && content.includes('"@type":"FAQPage"')) {
        existingSchema.remove();
      }
    });
    
    // Add script to head
    document.head.appendChild(script);
  }
  
  private updateProductSchema(): void {
    // Create schema script element
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    
    // Enhanced schema with more specific details for Rajkot location
    const schema = {
      "@context": "https://schema.org/",
      "@type": "Product",
      "name": "Industrial Air Ventilator - Captain Steel Rajkot",
      "image": [
        "https://captainsteelroofsolution.com/assets/products/air-ventilator.jpeg"
      ],
      "description": "Premium air ventilators manufactured in Rajkot, Gujarat. Our energy-efficient ventilation solutions reduce temperature by 8-10°C, eliminate humidity & provide superior air circulation with zero electricity costs. Ideal for factories, warehouses & commercial buildings across Gujarat and India.",
      "brand": {
        "@type": "Brand",
        "name": "Captain Steel"
      },
      "manufacturer": {
        "@type": "Organization",
        "name": "Captain Steel Roof Solutions",
        "description": "Leading air ventilator manufacturer in Rajkot, Gujarat",
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
        "bestRating": "5",
        "worstRating": "1",
        "ratingCount": "186"
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
            "name": "Rajkot Industrial Solutions Ltd."
          },
          "reviewBody": "We installed Captain Steel's air ventilators in our manufacturing facility in Rajkot and immediately noticed a significant drop in temperature by 8-10°C. The zero electricity consumption provides major cost savings."
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
            "name": "Gujarat Warehouse Corporation"
          },
          "reviewBody": "Captain Steel's air ventilators have transformed our warehouse environment. The natural ventilation system keeps our facility cool even during Gujarat's hot summers without any operating costs."
        }
      ]
    };
    
    // Set the script content
    script.textContent = JSON.stringify(schema);
    
    // Remove any existing product schema first
    const existingSchemas = document.querySelectorAll('script[type="application/ld+json"]');
    existingSchemas.forEach(existingSchema => {
      const content = existingSchema.textContent;
      if (content && content.includes('"@type":"Product"')) {
        existingSchema.remove();
      }
    });
    
    // Add script to head
    document.head.appendChild(script);
  }
}
