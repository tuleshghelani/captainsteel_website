import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';
import Aos from 'aos';

interface Feature {
  icon: string;
  title: string;
  description: string;
}

interface Specification {
  name: string;
  value: string;
}

interface FAQ {
  question: string;
  answer: string;
}

@Component({
  selector: 'app-corrugated-roofing-sheets',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './corrugated-roofing-sheets.component.html',
  styleUrl: './corrugated-roofing-sheets.component.scss'
})
export class CorrugatedRoofingSheetsComponent implements OnInit {
  
  features: Feature[] = [
    {
      icon: 'fas fa-shield-alt',
      title: 'Superior Durability',
      description: 'Engineered with high-tensile steel to withstand extreme weather conditions and provide long-lasting protection.'
    },
    {
      icon: 'fas fa-bolt',
      title: 'Corrosion Resistant',
      description: 'Advanced galvanized coating technology offers exceptional protection against rust and corrosion.'
    },
    {
      icon: 'fas fa-tint-slash',
      title: 'Weather Proof',
      description: 'Designed to resist heavy rainfall, high winds, snow loads, and extreme temperatures year-round.'
    },
    {
      icon: 'fas fa-sun',
      title: 'UV Resistant',
      description: 'Special coating prevents color fading and material degradation from prolonged sun exposure.'
    },
    {
      icon: 'fas fa-feather',
      title: 'Lightweight',
      description: 'High strength-to-weight ratio reduces structural load requirements and makes installation easier.'
    },
    {
      icon: 'fas fa-palette',
      title: 'Aesthetic Appeal',
      description: 'Available in multiple colors and finishes to complement any architectural style and design vision.'
    }
  ];

  specifications: Specification[] = [
    { name: 'Material', value: 'High-tensile galvanized steel' },
    { name: 'Thickness', value: '0.35mm to 0.80mm' },
    { name: 'Width Coverage', value: '1050mm (standard)' },
    { name: 'Length', value: 'Customizable up to 12m' },
    { name: 'Surface Treatment', value: 'Galvanized/Aluzinc/Color Coated' },
    { name: 'Coating', value: 'PE/PVDF/SMP/HDP' },
    { name: 'Profile Height', value: '17mm to 32mm' },
    { name: 'Rib Spacing', value: '76mm (standard)' },
    { name: 'Color Options', value: 'Multiple premium colors available' },
    { name: 'Wind Uplift Resistance', value: 'Up to 180 km/h' },
    { name: 'Warranty', value: 'Up to 20 years (material dependent)' }
  ];

  faqs: FAQ[] = [
    {
      question: 'What is the minimum order quantity for corrugated roofing sheets?',
      answer: 'Our minimum order quantity is typically 100 square meters. However, we can accommodate smaller orders for specific projects. Please contact our sales team for customized solutions.'
    },
    {
      question: 'Do you offer installation services along with the product?',
      answer: 'Yes, we provide professional installation services through our certified installation partners across the country. Our installation comes with a workmanship warranty and ensures optimal performance of the roofing system.'
    },
    {
      question: 'How do corrugated sheets compare to other roofing materials?',
      answer: 'Corrugated sheets offer superior durability, weather resistance, and cost-effectiveness compared to traditional roofing materials. They are lighter, easier to install, require minimal maintenance, and have a longer lifespan, making them an excellent investment for various applications.'
    },
    {
      question: 'What colors are available for corrugated roofing sheets?',
      answer: 'We offer a wide range of premium colors including but not limited to Classic Red, Forest Green, Royal Blue, Charcoal Grey, Terracotta, Bright White, and Metallic Silver. Custom colors are also available for large orders.'
    },
    {
      question: 'How long do corrugated roofing sheets last?',
      answer: 'With proper installation and maintenance, our corrugated roofing sheets can last 25-30 years or more. The exact lifespan depends on the coating type, environmental conditions, and maintenance practices.'
    },
    {
      question: 'Are your corrugated sheets environmentally friendly?',
      answer: 'Yes, our steel corrugated sheets are 100% recyclable. We also use eco-friendly manufacturing processes that minimize waste and energy consumption, contributing to sustainable building practices.'
    }
  ];

  constructor(
    private meta: Meta,
    private titleService: Title
  ) {}

  ngOnInit() {
    // Set SEO meta tags
    this.titleService.setTitle('Premium Corrugated Roofing Sheets | Durable Steel Roofing | Captain Steel');
    
    this.meta.addTags([
      { name: 'description', content: 'Premium corrugated roofing sheets with superior durability and weather resistance. Perfect for industrial, commercial & residential roofing with customizable lengths, colors, and finishes.' },
      { name: 'keywords', content: 'corrugated roofing sheets, metal roofing, steel roofing, industrial roofing, commercial roofing, galvanized roofing, color coated roofing, roof sheets' },
      { name: 'robots', content: 'index, follow' },
      { name: 'author', content: 'Captain Steel Roof Solutions' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'canonical', content: 'https://captainsteelroofsolution.com/products/corrugated-sheets' },
      // Open Graph tags for social sharing
      { property: 'og:title', content: 'Premium Corrugated Roofing Sheets | Durable Steel Roofing' },
      { property: 'og:description', content: 'Premium corrugated roofing sheets with superior durability and weather resistance. Perfect for industrial, commercial & residential roofing.' },
      { property: 'og:image', content: 'https://captainsteelroofsolution.com/assets/products/Corrugated-roofing-sheets.jpeg' },
      { property: 'og:url', content: 'https://captainsteelroofsolution.com/products/corrugated-sheets' },
      { property: 'og:type', content: 'product' },
      // Twitter Card tags
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'Premium Corrugated Roofing Sheets | Durable Steel Roofing' },
      { name: 'twitter:description', content: 'Premium corrugated roofing sheets with superior durability and weather resistance. Ideal for all roofing applications.' },
      { name: 'twitter:image', content: 'https://captainsteelroofsolution.com/assets/products/Corrugated-roofing-sheets.jpeg' }
    ]);
    
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
