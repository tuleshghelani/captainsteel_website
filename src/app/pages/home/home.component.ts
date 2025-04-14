import { Component, OnInit, inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';
import Aos from 'aos';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

interface Product {
  title: string;
  description: string;
  image: string;
  link: string;
  aosDelay: number;
}

interface Dealership {
  image: string;
  name: string;
  alt: string;
}

interface Feature {
  title: string;
  description: string;
  icon: string;
  aosDelay: number;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  private platformId = inject(PLATFORM_ID);
  
  currentSlide = 0;
  slides = [0, 1, 2, 3, 4]; // Array for slide indicators
  showDesignContent = false;
  
  constructor(
    private sanitizer: DomSanitizer,
    private meta: Meta,
    private title: Title
  ) {
    this.setupSEO();
    this.setupStructuredData();
  }

  products: Product[] = [
    {
      title: 'Corrugated Roofing Sheets',
      description: 'High-quality corrugated sheets for durable and weather-resistant roofing solutions.',
      image: 'assets/products/corrugated-roofing-sheets-4.jpg',
      link: '/products/corrugated-sheets',
      aosDelay: 200
    },
    {
      title: 'Trapezoidal Profile Sheets',
      description: 'Premium trapezoidal sheets offering superior strength and modern aesthetics.',
      image: 'assets/products/trapezoidal-profile-sheets.jpg',
      link: '/products/trapezoidal-sheets',
      aosDelay: 200
    },
    {
      title: 'Air Ventilator',
      description: 'Premium trapezoidal sheets offering superior strength and modern aesthetics.',
      image: 'assets/products/air-ventilator.jpeg',
      link: '/products/air-ventilator',
      aosDelay: 200
    },
    {
      title: 'Polycarbonate Sheets',
      description: 'Premium trapezoidal sheets offering superior strength and modern aesthetics.',
      image: 'assets/products/polycarbonate-sheets-2.jpg',
      link: '/products/polycarbonate-sheet',
      aosDelay: 200
    },
  ];
  yearsOfExperience: number = new Date().getFullYear() - 2020;
  experienceText: string = this.yearsOfExperience + '+';
  dealerships: Dealership[] = [
    {
      image: 'assets/dealership/AM-NS-india.jpg',
      name: 'AM NS India',
      alt: 'AM NS India Logo'
    },
    {
      image: 'assets/dealership/APL-Roof-Tuf.svg',
      name: 'APL Roof Tuf',
      alt: 'APL Roof Tuf Logo'
    },
    {
      image: 'assets/dealership/jsw-colouron-plus.png',
      name: 'JSW Colouron Plus',
      alt: 'JSW Colouron Plus Logo'
    },
    {
      image: 'assets/dealership/jsw-pragati.png',
      name: 'JSW Pragati',
      alt: 'JSW Pragati Logo'
    },
    {
      image: 'assets/dealership/jsw-silveron.png',
      name: 'JSW Silveron',
      alt: 'JSW Silveron Logo'
    },
    {
      image: 'assets/dealership/primus-fastening-technology.jpeg',
      name: 'Primus Fastening Technology',
      alt: 'Primus Fastening Technology Logo'
    },
    {
      image: 'assets/dealership/tata-bluescope-steel.png',
      name: 'Tata BlueScope Steel',
      alt: 'Tata BlueScope Steel Logo'
    },
    {
      image: 'assets/dealership/tilara.png',
      name: 'Tilara',
      alt: 'Tilara Logo'
    }
  ];
  features: Feature[] = [
    {
      title: 'Choice of Colours and Designs',
      description: 'Wide range of colors and designs to match your architectural vision',
      icon: 'fas fa-palette',
      aosDelay: 100
    },
    {
      title: 'Durability and Total Safety',
      description: 'Built to last with premium materials ensuring complete safety',
      icon: 'fas fa-shield-alt',
      aosDelay: 200
    },
    {
      title: 'Weather Resistance',
      description: 'Superior protection against all weather conditions',
      icon: 'fas fa-cloud-sun',
      aosDelay: 300
    },
    {
      title: 'Maintenance Proof',
      description: 'Minimal maintenance required for long-lasting performance',
      icon: 'fas fa-tools',
      aosDelay: 400
    },
    {
      title: 'Environmental and Economical',
      description: 'Eco-friendly solutions that save money in the long run',
      icon: 'fas fa-leaf',
      aosDelay: 500
    },
    {
      title: 'Perfect Fitting for Any Roof',
      description: 'Custom solutions that fit perfectly on any roof type',
      icon: 'fas fa-home',
      aosDelay: 600
    },
    {
      title: '550 mpA Super Strength',
      description: 'Exceptional strength for ultimate durability',
      icon: 'fas fa-fist-raised',
      aosDelay: 700
    },
    {
      title: 'Fire Proof',
      description: 'Advanced fire-resistant properties for safety',
      icon: 'fas fa-fire-extinguisher',
      aosDelay: 800
    },
    {
      title: 'High Corrosion Resistance',
      description: 'Superior protection against corrosion and rust',
      icon: 'fas fa-shield-alt',
      aosDelay: 900
    }
  ];

  private setupSEO() {
    const description = `Captain Steel - Premium Steel Roofing Solutions in Rajkot with ${this.yearsOfExperience}+ years of excellence. Authorized dealer of JSW, Tata BlueScope Steel, AM NS India. Expert steel roof installation, steel roofing sheets, and nationwide delivery from Rajkot, Gujarat.`;

    this.title.setTitle('Captain Steel - Premium Steel Roofing Sheets in Rajkot | Best Steel Roof Manufacturer');
    
    // Meta tags for SEO
    this.meta.updateTag({ name: 'description', content: description });
    this.meta.updateTag({ name: 'keywords', content: 'steel roofing Rajkot, roofing sheets Rajkot, steel roof, corrugated sheets, trapezoidal sheets, industrial roofing Rajkot, commercial roofing, JSW steel, Tata BlueScope, steel roof installation' });
    this.meta.updateTag({ name: 'robots', content: 'index, follow' });
    this.meta.updateTag({ name: 'author', content: 'Captain Steel' });

    // Open Graph tags
    this.meta.updateTag({ property: 'og:title', content: 'Captain Steel - Premium Steel Roofing Sheets in Rajkot' });
    this.meta.updateTag({ property: 'og:description', content: description });
    this.meta.updateTag({ property: 'og:image', content: 'assets/home/company.jpg' });
    this.meta.updateTag({ property: 'og:url', content: 'https://captainsteelroofsolution.com' });
    this.meta.updateTag({ property: 'og:type', content: 'website' });

    // Twitter Card tags
    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.meta.updateTag({ name: 'twitter:title', content: 'Captain Steel - Premium Steel Roofing Sheets in Rajkot' });
    this.meta.updateTag({ name: 'twitter:description', content: description });
    this.meta.updateTag({ name: 'twitter:image', content: 'assets/home/company.jpg' });

    // Location tags
    this.meta.updateTag({ name: 'geo.region', content: 'IN-GJ' });
    this.meta.updateTag({ name: 'geo.placename', content: 'Rajkot' });
  }

  private setupStructuredData() {
    const structuredData = {
      '@context': 'http://schema.org',
      '@type': 'Organization',
      name: 'Captain Steel',
      description: 'Premium Steel Roofing Solutions Provider',
      url: 'https://captainsteelroofsolution.com',
      logo: 'assets/logo.png',
      foundingDate: '2020',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Rajkot',
        addressRegion: 'Gujarat',
        addressCountry: 'IN'
      },
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+91-9879109091',
        contactType: 'sales',
        availableLanguage: ['English', 'Hindi', 'Gujarati']
      },
      // Add dynamic product data
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Steel Roofing Products',
        itemListElement: this.products.map(product => ({
          '@type': 'Offer',
          name: product.title,
          description: product.description,
          image: product.image
        }))
      }
    };

    // Create script element for structured data
    if (isPlatformBrowser(this.platformId)) {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.text = JSON.stringify(structuredData);
      document.head.appendChild(script);
    }
  }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      Aos.init({
        duration: 1000,
        once: true
      });
      this.startSlideShow();
    }
  }

  prevSlide() {
    this.currentSlide = this.currentSlide === 0 ? this.slides.length - 1 : this.currentSlide - 1;
  }

  nextSlide() {
    this.currentSlide = this.currentSlide === this.slides.length - 1 ? 0 : this.currentSlide + 1;
  }

  goToSlide(index: number) {
    this.currentSlide = index;
  }

  private startSlideShow() {
    setInterval(() => {
      this.nextSlide();
    }, 5000); 
  }
  
  getSafeHtml(html: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }

  toggleDesignContent() {
    this.showDesignContent = !this.showDesignContent;
  }
}
