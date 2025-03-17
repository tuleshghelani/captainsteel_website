import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
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
  
  constructor(
    private meta: Meta,
    private titleService: Title
  ) {}

  ngOnInit() {
    // Set SEO meta tags
    this.titleService.setTitle('Industrial Air Ventilators | Energy-Efficient Roof Ventilation | Captain Steel');
    
    this.meta.addTags([
      { name: 'description', content: 'Premium industrial air ventilators with zero electricity cost. Our roof ventilators reduce temperature, eliminate humidity and provide superior ventilation for factories, warehouses & commercial buildings.' },
      { name: 'keywords', content: 'air ventilator, roof ventilator, industrial ventilator, turbo ventilator, natural ventilation, energy-saving ventilator, factory ventilation, warehouse ventilation' },
      { name: 'robots', content: 'index, follow' },
      { name: 'author', content: 'Captain Steel Roof Solutions' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'canonical', content: 'https://captainsteelroofsolution.com/products/air-ventilator' },
      // Open Graph tags for social sharing
      { property: 'og:title', content: 'Industrial Air Ventilators | Energy-Efficient Roof Ventilation' },
      { property: 'og:description', content: 'Premium industrial air ventilators with zero electricity cost. Reduce temperature, eliminate humidity and provide superior ventilation for all buildings.' },
      { property: 'og:image', content: 'https://captainsteelroofsolution.com/assets/products/air-ventilator.jpeg' },
      { property: 'og:url', content: 'https://captainsteelroofsolution.com/products/air-ventilator' },
      { property: 'og:type', content: 'product' },
      // Twitter Card tags
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'Industrial Air Ventilators | Energy-Efficient Roof Ventilation' },
      { name: 'twitter:description', content: 'Premium industrial air ventilators with zero electricity cost. Reduce temperature, eliminate humidity and provide superior ventilation.' },
      { name: 'twitter:image', content: 'https://captainsteelroofsolution.com/assets/products/air-ventilator.jpeg' }
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
