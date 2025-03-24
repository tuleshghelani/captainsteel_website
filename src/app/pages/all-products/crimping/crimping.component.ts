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

interface Specification {
  thickness: string;
  width: string;
  length: string;
  material: string;
  finish: string;
  applications: string;
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

  constructor(
    private meta: Meta,
    private titleService: Title
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
    this.titleService.setTitle('Premium Crimping & Crimp Banding Solutions | Captain Steel');
    
    this.meta.addTags([
      { name: 'description', content: 'Premium quality crimping and crimp banding for industrial, construction, and roofing applications. Superior strength, corrosion-resistant, and precision-engineered for reliable connections.' },
      { name: 'keywords', content: 'crimping, crimp banding, metal crimping, roofing crimping, industrial crimping, steel crimping, crimped joints, crimping solutions, crimp connections, roofing solutions' },
      { name: 'robots', content: 'index, follow' },
      { name: 'author', content: 'Captain Steel Roof Solutions' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'canonical', content: 'https://captainsteelroofsolution.com/products/crimping' },
      // Open Graph tags for social sharing
      { property: 'og:title', content: 'Premium Crimping & Crimp Banding Solutions' },
      { property: 'og:description', content: 'Premium quality crimping and crimp banding for industrial, construction, and roofing applications. Superior strength, corrosion-resistant designs.' },
      { property: 'og:image', content: 'https://captainsteelroofsolution.com/assets/products/crimping-and-accessories.jpg' },
      { property: 'og:url', content: 'https://captainsteelroofsolution.com/products/crimping' },
      { property: 'og:type', content: 'product' },
      // Twitter Card tags
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'Premium Crimping & Crimp Banding Solutions' },
      { name: 'twitter:description', content: 'Premium quality crimping and crimp banding for industrial, construction, and roofing applications.' },
      { name: 'twitter:image', content: 'https://captainsteelroofsolution.com/assets/products/crimping-and-accessories.jpg' }
    ]);
  }
}
