import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router'; 
import { CommonModule } from '@angular/common';
import { Title, Meta } from '@angular/platform-browser';
import Aos from 'aos';

interface Product {
  title: string;
  description: string;
  image: string;
  link: string;
  aosDelay: number;
}

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];

  constructor(private titleService: Title, private meta: Meta) {}

  ngOnInit() {
    // Check if running in the browser
    if (typeof window !== 'undefined') {
      Aos.init({
        duration: 1000,
        once: true
      });
    }
    this.products = [
      {
        title: 'Corrugated Roofing Sheets',
        description: 'High-quality corrugated sheets for durable and weather-resistant roofing solutions.',
        image: 'assets/products/corrugated-roofing-sheets-4.jpg',
        link: '/products/corrugated-roofing-sheets',
        aosDelay: 100
      },
      {
        title: 'Trapezoidal Profile Sheets',
        description: 'Premium trapezoidal sheets offering superior strength and modern aesthetics.',
        image: 'assets/products/trapezoidal-profile-sheets.jpg',
        link: '/products/trapezoidal-profile-sheets',
        aosDelay: 200
      },
      {
        title: 'Air Ventilator',
        description: 'Efficient air ventilators for improved airflow and ventilation.',
        image: 'assets/products/air-ventilator.jpeg',
        link: '/products/air-ventilator',
        aosDelay: 300
      },
      {
        title: 'Insulated Metal Sheets',
        description: 'Insulated sheets providing excellent thermal performance.',
        image: 'assets/products/insulated-metal-roofing-sheets.jpg',
        link: '/products/insulated-metal-sheets',
        aosDelay: 400
      },
      {
        title: 'Crimping',
        description: 'High-quality crimping solutions for various applications.',
        image: 'assets/products/crimping-and-accessories.jpg',
        link: '/products/crimping',
        aosDelay: 5000
      },
      {
        title: 'Polycarbonate Sheet',
        description: 'Durable polycarbonate sheets for versatile applications.',
        image: 'assets/products/polycarbonate-sheets-2.jpg',
        link: '/products/polycarbonate-sheet',
        aosDelay: 6000
      },
      {
        title: 'Polycarbonate Multiwall',
        description: 'Multiwall polycarbonate sheets for enhanced insulation.',
        image: 'assets/products/polycarbonate-sheets.jpg',
        link: '/products/polycarbonate-sheet',
        aosDelay: 7000
      },
      {
        title: 'Roofing Accessories',
        description: 'A range of accessories to complement our roofing solutions.',
        image: 'assets/products/crimping-and-accessories-2.jpg',
        link: '/products/roofing-accessories',
        aosDelay: 8000
      },
      {
        title: 'Bamboo Profile',
        description: 'Bamboo profile sheets for sustainable and eco-friendly roofing solutions.',
        image: 'assets/products/BAMBOO_PROFILE/UPVC BAMBOO TILE SHEET.png',
        link: '/products/bamboo-profile',
        aosDelay: 9000
      },
      {
        title: 'Roofing Gutter',
        description: 'Bamboo profile sheets for sustainable and eco-friendly roofing solutions.',
        image: 'assets/products/HYBRIDE_GUTTER/GUTEER 1.jpeg',
        link: '/products/gutter',
        aosDelay: 10000
      }
    ];

    // Set SEO meta tags
    this.titleService.setTitle('Premium Steel Roofing Solutions in Rajkot | Captain Steel');
    this.meta.addTags([
      { name: 'description', content: 'Premium steel roofing solutions in Rajkot, Gujarat. We offer corrugated sheets, trapezoidal sheets, air ventilators, insulated panels, polycarbonate sheets, and more with expert installation services.' },
      { name: 'keywords', content: 'steel roofing Rajkot, roofing sheets Rajkot, corrugated sheets Rajkot, trapezoidal sheets Rajkot, air ventilators Rajkot, industrial roofing Rajkot, insulated metal sheets Rajkot, polycarbonate sheets Gujarat, crimping solutions Rajkot, roofing accessories Gujarat, bamboo profile sheets Rajkot, gutter systems Rajkot, steel roof manufacturers Gujarat, Captain Steel Rajkot, best roofing company Rajkot, commercial roofing Gujarat, industrial ventilation Rajkot, factory roofing solutions Gujarat' },
      { name: 'robots', content: 'index, follow' },
      { name: 'author', content: 'Captain Steel Roof Solutions' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'canonical', content: 'https://captainsteelroofsolution.com/products' },
      // Open Graph tags for social sharing
      { property: 'og:title', content: 'Premium Steel Roofing Solutions in Rajkot | Captain Steel' },
      { property: 'og:description', content: 'Premium steel roofing solutions in Rajkot, Gujarat including corrugated sheets, trapezoidal sheets, air ventilators, insulated panels, and more.' },
      { property: 'og:url', content: 'https://captainsteelroofsolution.com/products' },
      { property: 'og:type', content: 'website' },
      // Twitter Card tags
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'Premium Steel Roofing Solutions in Rajkot | Captain Steel' },
      { name: 'twitter:description', content: 'Premium steel roofing solutions in Rajkot, Gujarat including corrugated sheets, trapezoidal sheets, air ventilators, insulated panels, and more.' }
    ]);
  }
}
