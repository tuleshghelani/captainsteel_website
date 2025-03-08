import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
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
  currentSlide = 0;
  slides = [0, 1, 2, 3, 4]; // Array for slide indicators
  
  constructor(private sanitizer: DomSanitizer) {}
  products: Product[] = [
    {
      title: 'Corrugated Roofing Sheets',
      description: 'High-quality corrugated sheets for durable and weather-resistant roofing solutions.',
      image: 'assets/home/Corrugated-roofing-sheets.jpeg',
      link: '/products/corrugated-sheets',
      aosDelay: 200
    },
    {
      title: 'Trapezoidal Profile Sheets',
      description: 'Premium trapezoidal sheets offering superior strength and modern aesthetics.',
      image: 'assets/home/trapezoidal-sheets.jpeg',
      link: '/products/trapezoidal-sheets',
      aosDelay: 200
    },
    {
      title: 'Air Ventilator',
      description: 'Premium trapezoidal sheets offering superior strength and modern aesthetics.',
      image: 'assets/home/air-ventilator.jpeg',
      link: '/products/air-ventilator',
      aosDelay: 200
    },
    {
      title: 'Polycarbonate Sheets',
      description: 'Premium trapezoidal sheets offering superior strength and modern aesthetics.',
      image: 'assets/home/polycarbonate-sheets.jpeg',
      link: '/products/polycarbonate-sheets',
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
      icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" fill="currentColor" opacity="0.2"/>
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" fill="currentColor"/>
      </svg>`,
      aosDelay: 100
    },
    {
      title: 'Durability and Total Safety',
      description: 'Built to last with premium materials ensuring complete safety',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 4c1.4 0 2.78.38 4 1.08V14h-8V8.08C9.22 7.38 10.6 7 12 7z" fill="currentColor" opacity="0.2"/>
        <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm6 6H6v-1.4c0-2 4-3.1 6-3.1s6 1.1 6 3.1V17z" fill="currentColor"/>
      </svg>`,
      aosDelay: 200
    },
    {
      title: 'Weather Resistance',
      description: 'Superior protection against all weather conditions',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path d="M19.35 10.04A7.49 7.49 0 0012 4C9.11 4 6.6 5.64 5.35 8.04A5.994 5.994 0 000 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z" fill="currentColor"/>
      </svg>`,
      aosDelay: 300
    },
    {
      title: 'Maintenance Proof',
      description: 'Minimal maintenance required for long-lasting performance',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" fill="currentColor" opacity="0.2"/>
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.5 14H8c-1.66 0-3-1.34-3-3s1.34-3 3-3l.14.01A3.98 3.98 0 0112 7c2.21 0 4 1.79 4 4h.5c1.38 0 2.5 1.12 2.5 2.5S17.88 16 16.5 16z" fill="currentColor"/>
      </svg>`,
      aosDelay: 400
    },
    {
      title: 'Environmental and Economical',
      description: 'Eco-friendly solutions that save money in the long run',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path d="M12 22c3.31 0 6-2.69 6-6 0-1-.25-1.97-.7-2.8L12 2l-5.3 11.2c-.45.83-.7 1.8-.7 2.8 0 3.31 2.69 6 6 6z" fill="currentColor" opacity="0.2"/>
        <path d="M12 6.5c1.38 0 2.5 1.12 2.5 2.5 0 .74-.33 1.39-.83 1.85l3.63 3.63c.98-1.86 1.7-3.8 1.7-5.48 0-3.87-3.13-7-7-7-1.98 0-3.76.83-5.04 2.15l3.19 3.19c.46-.5 1.11-.84 1.85-.84z" fill="currentColor"/>
      </svg>`,
      aosDelay: 500
    },
    {
      title: 'Perfect Fitting for Any Roof',
      description: 'Custom solutions that fit perfectly on any roof type',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path d="M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z" fill="currentColor" opacity="0.2"/>
        <path d="M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3zm0 5.5c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2z" fill="currentColor"/>
      </svg>`,
      aosDelay: 600
    },
    {
      title: '550 mpA Super Strength',
      description: 'Exceptional strength for ultimate durability',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
        <path d="M21 10.5h-7.5V3c0-.55-.45-1-1-1h-1c-.55 0-1 .45-1 1v7.5H3c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1h7.5V21c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-7.5H21c.55 0 1-.45 1-1v-1c0-.55-.45-1-1-1z"/>
      </svg>`,
      aosDelay: 700
    },
    {
      title: 'Fire Proof',
      description: 'Advanced fire-resistant properties for safety',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
        <path d="M13.5.67s.74 2.65.74 4.8c0 2.06-1.35 3.73-3.41 3.73-2.07 0-3.63-1.67-3.63-3.73l.03-.36C5.21 7.51 4 10.62 4 14c0 4.42 3.58 8 8 8s8-3.58 8-8C20 8.61 17.41 3.8 13.5.67zM12 20c-3.31 0-6-2.69-6-6 0-1.53.3-3.04.86-4.43 1.01 1.01 2.41 1.63 3.97 1.63 2.66 0 4.75-1.83 5.28-4.43C17.34 8.97 18 11.44 18 14c0 3.31-2.69 6-6 6z"/>
      </svg>`,
      aosDelay: 800
    },
    {
      title: 'High Corrosion Resistance',
      description: 'Superior protection against corrosion and rust',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8 0-1.85.63-3.55 1.69-4.9L16.9 18.31C15.55 19.37 13.85 20 12 20zm6.31-3.1L7.1 5.69C8.45 4.63 10.15 4 12 4c4.42 0 8 3.58 8 8 0 1.85-.63 3.55-1.69 4.9z"/>
      </svg>`,
      aosDelay: 900
    }
  ];

  ngOnInit() {
    Aos.init({
      duration: 1000,
      once: true
    });
    this.startSlideShow();
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
}
