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
  width: string;
  length: string;
  material: string;
  coating: string;
  colors: string;
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
  
  features: Feature[] = [
    {
      icon: 'fas fa-vector-square',
      title: 'Optimized Profile Design',
      description: 'Precision-engineered trapezoidal geometry for maximum structural integrity and water flow efficiency.'
    },
    {
      icon: 'fas fa-tint',
      title: 'Superior Water Drainage',
      description: 'Enhanced water channeling capability that prevents water pooling and leakage even during heavy rainfall.'
    },
    {
      icon: 'fas fa-weight-hanging',
      title: 'High Load Bearing Capacity',
      description: 'Exceptional structural strength to support heavy loads and withstand extreme weather conditions.'
    },
    {
      icon: 'fas fa-bolt',
      title: 'Quick Installation',
      description: 'Designed for easy and efficient installation, reducing project time and labor costs.'
    },
    {
      icon: 'fas fa-paint-brush',
      title: 'Customizable Finish',
      description: 'Available in a wide range of colors and finishes to match your architectural vision.'
    },
    {
      icon: 'fas fa-shield-alt',
      title: 'Corrosion Resistant',
      description: 'Advanced coating technology provides superior protection against rust and corrosion.'
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

  constructor(
    private meta: Meta,
    private titleService: Title
  ) {}

  ngOnInit() {
    // Set SEO meta tags
    this.titleService.setTitle('Premium Trapezoidal Profile Sheets | Modern Steel Roofing | Captain Steel');
    
    this.meta.addTags([
      { name: 'description', content: 'Premium trapezoidal profile sheets with superior strength, durability, and modern aesthetics. Ideal for industrial, commercial & architectural roofing with excellent water drainage and customizable finishes.' },
      { name: 'keywords', content: 'trapezoidal profile sheets, metal roofing, steel roofing, industrial roofing, commercial roofing, architectural roofing, roof cladding, wall cladding, color coated roofing, modern roofing' },
      { name: 'robots', content: 'index, follow' },
      { name: 'author', content: 'Captain Steel Roof Solutions' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'canonical', content: 'https://captainsteelroofsolution.com/products/trapezoidal-sheets' },
      // Open Graph tags for social sharing
      { property: 'og:title', content: 'Premium Trapezoidal Profile Sheets | Modern Steel Roofing' },
      { property: 'og:description', content: 'Premium trapezoidal profile sheets with superior strength, durability, and modern aesthetics. Ideal for industrial, commercial & architectural applications.' },
      { property: 'og:image', content: 'https://captainsteelroofsolution.com/assets/products/trapezoidal-sheets.jpeg' },
      { property: 'og:url', content: 'https://captainsteelroofsolution.com/products/trapezoidal-sheets' },
      { property: 'og:type', content: 'product' },
      // Twitter Card tags
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'Premium Trapezoidal Profile Sheets | Modern Steel Roofing' },
      { name: 'twitter:description', content: 'Premium trapezoidal profile sheets with superior strength, durability, and modern aesthetics for all roofing applications.' },
      { name: 'twitter:image', content: 'https://captainsteelroofsolution.com/assets/products/trapezoidal-sheets.jpeg' }
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
    }
  }
}
