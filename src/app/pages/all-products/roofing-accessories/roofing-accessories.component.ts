import { Component, OnInit, inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';
import Aos from 'aos';

interface Feature {
  icon: string;
  title: string;
  description: string;
}

interface Accessory {
  name: string;
  description: string;
  material: string;
  applications: string;
}

@Component({
  selector: 'app-roofing-accessories',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './roofing-accessories.component.html',
  styleUrl: './roofing-accessories.component.scss'
})
export class RoofingAccessoriesComponent implements OnInit {
  private platformId = inject(PLATFORM_ID);
  
  features: Feature[] = [
    {
      icon: 'fas fa-shield-alt',
      title: 'Superior Durability',
      description: 'Engineered from high-grade materials to withstand extreme weather conditions and provide long-lasting performance.'
    },
    {
      icon: 'fas fa-tools',
      title: 'Easy Installation',
      description: 'Designed for straightforward installation, reducing labor costs and minimizing construction time.'
    },
    {
      icon: 'fas fa-tint-slash',
      title: 'Leak Prevention',
      description: 'Precision-engineered components create watertight seals to prevent moisture intrusion and protect building integrity.'
    },
    {
      icon: 'fas fa-bolt',
      title: 'Structural Integrity',
      description: 'Reinforces roofing systems to enhance overall structural performance and resistance to environmental stresses.'
    },
    {
      icon: 'fas fa-paint-brush',
      title: 'Aesthetic Enhancement',
      description: 'Finishing accessories that improve visual appeal while maintaining functional excellence.'
    },
    {
      icon: 'fas fa-wrench',
      title: 'System Compatibility',
      description: 'Designed to integrate seamlessly with our complete range of roofing solutions for optimal performance.'
    }
  ];

  accessories: Accessory[] = [
    {
      name: 'Ridge Caps & Flashing',
      description: 'Premium finishing components that seal roof edges and transitions',
      material: 'Galvanized Steel, Aluminum, or Color-Coated Metal',
      applications: 'All roofing systems, especially at ridges, valleys, and perimeters'
    },
    {
      name: 'Fasteners & Clamps',
      description: 'High-strength securing components for reliable installation',
      material: 'Stainless Steel, Galvanized Steel, or Specialty Alloys',
      applications: 'Sheet attachment, component securing, and seam reinforcement'
    },
    {
      name: 'Sealants & Tapes',
      description: 'Weather-resistant sealing solutions for joints and penetrations',
      material: 'Butyl Rubber, Silicone, EPDM, or Specialty Polymers',
      applications: 'Seams, overlaps, penetrations, and flashing details'
    },
    {
      name: 'Ventilation Components',
      description: 'Airflow management accessories for optimal attic performance',
      material: 'Polyethylene, Steel, Aluminum, or Composite Materials',
      applications: 'Ridge vents, soffit vents, and specialized air circulation systems'
    }
  ];

  constructor(
    private meta: Meta,
    private titleService: Title
  ) {}

  ngOnInit() {
    // Set SEO meta tags
    this.titleService.setTitle('Premium Roofing Accessories | Complete Roofing Solutions | Captain Steel');
    
    this.meta.addTags([
      { name: 'description', content: 'High-quality roofing accessories including flashing, fasteners, ridge caps, sealants, and ventilation components. Complete your roofing system with durable, weather-resistant accessories engineered for superior performance and longevity.' },
      { name: 'keywords', content: 'roofing accessories, roof flashing, ridge caps, roof fasteners, roof sealants, roof ventilation, roofing components, metal roof accessories, roofing system parts, roofing hardware, roof trims, roof installation accessories' },
      { name: 'robots', content: 'index, follow' },
      { name: 'author', content: 'Captain Steel Roof Solutions' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'canonical', content: 'https://captainsteelroofsolution.com/products/roofing-accessories' },
      // Open Graph tags for social sharing
      { property: 'og:title', content: 'Premium Roofing Accessories | Complete Roofing Solutions' },
      { property: 'og:description', content: 'High-quality roofing accessories including flashing, fasteners, ridge caps, sealants, and ventilation components. Complete your roofing system with durable, weather-resistant accessories.' },
      { property: 'og:image', content: 'https://captainsteelroofsolution.com/assets/products/crimping-and-accessories-2.jpg' },
      { property: 'og:url', content: 'https://captainsteelroofsolution.com/products/roofing-accessories' },
      { property: 'og:type', content: 'product' },
      // Twitter Card tags
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'Premium Roofing Accessories | Complete Roofing Solutions' },
      { name: 'twitter:description', content: 'High-quality roofing accessories including flashing, fasteners, ridge caps, sealants, and ventilation components for all roofing applications.' },
      { name: 'twitter:image', content: 'https://captainsteelroofsolution.com/assets/products/crimping-and-accessories-2.jpg' }
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
