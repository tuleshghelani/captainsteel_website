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
  material: string;
  length: string;
  width: string;
  thickness: string;
  colors: string;
  compatibility: string;
  warranty: string;
}

@Component({
  selector: 'app-gutter',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './gutter.component.html',
  styleUrl: './gutter.component.scss'
})
export class GutterComponent implements OnInit {
  private platformId = inject(PLATFORM_ID);
  
  features: Feature[] = [
    {
      icon: 'fas fa-tint-slash',
      title: 'Superior Water Management',
      description: 'Engineered to efficiently channel rainwater away from your building, preventing water damage and foundation issues.'
    },
    {
      icon: 'fas fa-shield-alt',
      title: 'Corrosion Resistant',
      description: 'Premium materials with specialized coatings provide exceptional resistance to rust, corrosion, and environmental degradation.'
    },
    {
      icon: 'fas fa-tools',
      title: 'Easy Installation',
      description: 'Modular design with precision-engineered components ensures straightforward installation and perfect fit.'
    },
    {
      icon: 'fas fa-paint-brush',
      title: 'Aesthetic Appeal',
      description: 'Clean lines and professional finish enhance your building\'s appearance while providing essential functionality.'
    },
    {
      icon: 'fas fa-snowflake',
      title: 'Weather Resistant',
      description: 'Designed to withstand extreme weather conditions including heavy rainfall, snow loads, and temperature fluctuations.'
    },
    {
      icon: 'fas fa-clock',
      title: 'Long-Term Durability',
      description: 'Built to last with premium materials that maintain performance and appearance for decades with minimal maintenance.'
    }
  ];
  
  specifications: Specification = {
    material: 'High-grade galvanized steel with protective coating',
    length: 'Standard 4-meter sections, customizable',
    width: '150mm standard width (custom sizes available)',
    thickness: '0.5mm - 0.8mm depending on application',
    colors: 'Available in multiple colors to match roofing system',
    compatibility: 'Compatible with all roofing types and building designs',
    warranty: '10-year manufacturer warranty against defects'
  };
  
  gutterTypes = [
    {
      name: 'HYBRIDE GUTTER 4MTR LENGTH',
      image: 'assets/products/HYBRIDE_GUTTER/GUTEER 1.jpeg',
      description: 'Premium 4-meter hybrid gutter sections offering superior water capacity and structural integrity. Engineered with reinforced edges and optimized flow design for maximum drainage efficiency.'
    },
    {
      name: 'HYBRIDE G.I. CLAMP FOR GUTTER SUPPORT',
      image: 'assets/products/HYBRIDE_GUTTER/HYBRIDE G I CLAMP.jpeg',
      description: 'Heavy-duty galvanized iron support clamps designed specifically for hybrid gutter systems. Provides exceptional stability and load-bearing capacity while accommodating thermal expansion.'
    },
    {
      name: 'HYBRIDE END DROP RIGHT SIDE',
      image: 'assets/products/HYBRIDE_GUTTER/HYBRIDE END DROP RIGHT.png',
      description: 'Precision-engineered right-side end drop component that directs water flow to downspouts. Features seamless integration with gutter sections and secure water channeling.'
    },
    {
      name: 'HYBRIDE END DROP LEFT SIDE',
      image: 'assets/products/HYBRIDE_GUTTER/HYBRIDE END DROP LEFT.png',
      description: 'Complementary left-side end drop component with identical quality and performance characteristics. Ensures balanced water distribution in complex roofing systems.'
    },
    {
      name: 'HYBRIDE END CAP RIGHT SIDE',
      image: 'assets/products/HYBRIDE_GUTTER/HYBRIDE END CAP RIGHT.png',
      description: 'Watertight right-side end cap that provides perfect termination for gutter runs. Features integrated seal technology for leak-proof performance.'
    },
    {
      name: 'HYBRIDE END CAP LEFT SIDE',
      image: 'assets/products/HYBRIDE_GUTTER/HYBRIDE END CAP LEFT.png',
      description: 'Matching left-side end cap with identical sealing properties. Designed for perfect fit and long-term water-tight performance.'
    },
    {
      name: 'HYBRIDE ELBOW OUT WORD',
      image: 'assets/products/HYBRIDE_GUTTER/HYBRIDE ELBOW OUT WORD.png',
      description: 'Specialized outward elbow fitting for navigating exterior corners and transitions. Maintains optimal water flow while changing direction.'
    },
    {
      name: 'HYBRIDE ELBOW IN WORD',
      image: 'assets/products/HYBRIDE_GUTTER/HYBRIDE ELBOW INWORD.png',
      description: 'Precision-engineered inward elbow component for interior corners and complex routing requirements. Ensures smooth water transition without turbulence.'
    },
    {
      name: 'HYBRIDE ELBOW DROP IN WORD',
      image: 'assets/products/HYBRIDE_GUTTER/HYBRIDE ELBOEW DROP IN WORD.png',
      description: 'Advanced inward elbow drop component that combines direction change with downspout connection. Optimizes water flow while maintaining system integrity.'
    },
    {
      name: 'HYBRIDE ELBOW DROP OUT WORD',
      image: 'assets/products/HYBRIDE_GUTTER/HYBRIDE ELBOW DROP OUT WORD.png',
      description: 'Complementary outward elbow drop fitting for comprehensive water management solutions. Provides versatility for complex architectural requirements.'
    },
    {
      name: 'HYBRIDE GUTTER CENTER JOINT',
      image: 'assets/products/HYBRIDE_GUTTER/HYBRIDE CENTER JOINT.png',
      description: 'Precision-engineered center joint connector that creates seamless connections between gutter sections. Features integrated expansion technology for thermal accommodation.'
    },
    {
      name: 'HYBRIDE GUTTER CENTER DROP',
      image: 'assets/products/HYBRIDE_GUTTER/HYBRIDE CENTER DROP.png',
      description: 'Specialized center drop component for mid-run downspout connections. Optimizes water distribution in extended gutter systems for maximum efficiency.'
    }
  ];
  
  constructor(private meta: Meta, private title: Title) {}
  
  ngOnInit(): void {
    // Set page title and meta tags for SEO
    this.title.setTitle('Premium Hybrid Gutter Systems | Complete Water Management Solutions');
    this.meta.addTags([
      { name: 'description', content: 'Premium hybrid gutter systems offering superior water management, durability, and aesthetic appeal. Complete solution with gutters, downspouts, and all necessary accessories for residential and commercial buildings.' },
      { name: 'keywords', content: 'hybrid gutters, roofing gutters, water management system, rain gutters, gutter accessories, downspouts, gutter installation, commercial gutters, residential gutters, premium gutters, seamless gutters, gutter protection' },
      { name: 'robots', content: 'index, follow' },
      { name: 'author', content: 'Captain Steel Roof Solutions' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'canonical', content: 'https://captainsteelroofsolution.com/products/gutter' },
      // Open Graph tags for social sharing
      { property: 'og:title', content: 'Premium Hybrid Gutter Systems | Complete Water Management Solutions' },
      { property: 'og:description', content: 'Premium hybrid gutter systems offering superior water management, durability, and aesthetic appeal for residential and commercial buildings.' },
      { property: 'og:image', content: 'https://captainsteelroofsolution.com/assets/products/HYBRIDE_GUTTER/GUTEER 1.jpeg' },
      { property: 'og:url', content: 'https://captainsteelroofsolution.com/products/gutter' },
      { property: 'og:type', content: 'product' },
      // Twitter Card tags
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'Premium Hybrid Gutter Systems | Complete Water Management Solutions' },
      { name: 'twitter:description', content: 'Premium hybrid gutter systems offering superior water management, durability, and aesthetic appeal for all building applications.' },
      { name: 'twitter:image', content: 'https://captainsteelroofsolution.com/assets/products/HYBRIDE_GUTTER/GUTEER 1.jpeg' }
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
