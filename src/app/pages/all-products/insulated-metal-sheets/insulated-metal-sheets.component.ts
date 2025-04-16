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

  constructor(
    private meta: Meta,
    private titleService: Title
  ) {}

  ngOnInit() {
    // Set SEO meta tags
    this.titleService.setTitle('Insulated Metal Sheets Manufacturers & Suppliers | Captain Steel, Rajkot');
    
    this.meta.addTags([
      { name: 'description', content: 'Industrial insulated metal sheets offering superior thermal efficiency, energy savings, and climate control. Perfect for commercial, industrial, and cold storage facilities with excellent R-value and moisture resistance.' },
      { name: 'keywords', content: 'insulated metal sheets, insulated panels, thermal insulation, energy efficient roofing, climate controlled buildings, insulated steel sheets, cold storage insulation, insulated roof panels, insulated wall panels, metal sandwich panels' },
      { name: 'robots', content: 'index, follow' },
      { name: 'author', content: 'Captain Steel Roof Solutions' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'canonical', content: 'https://captainsteelroofsolution.com/products/insulated-sheets' },
      // Open Graph tags for social sharing
      { property: 'og:title', content: 'Insulated Metal Sheets Manufacturers & Suppliers | Captain Steel, Rajkot' },
      { property: 'og:description', content: 'Industrial insulated metal sheets offering superior thermal efficiency, energy savings, and climate control. Ideal for commercial, industrial, and cold storage facilities.' },
      { property: 'og:image', content: 'https://captainsteelroofsolution.com/assets/products/insulated-metal-roofing-sheets.jpg' },
      { property: 'og:url', content: 'https://captainsteelroofsolution.com/products/insulated-sheets' },
      { property: 'og:type', content: 'product' },
      // Twitter Card tags
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'Insulated Metal Sheets Manufacturers & Suppliers | Captain Steel, Rajkot' },
      { name: 'twitter:description', content: 'Industrial insulated metal sheets offering superior thermal efficiency, energy savings, and climate control. Ideal for commercial, industrial, and cold storage facilities.' },
      { name: 'twitter:image', content: 'https://captainsteelroofsolution.com/assets/products/insulated-metal-roofing-sheets.jpg' }
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
