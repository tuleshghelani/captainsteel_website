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
  thicknessOptions: string;
  width: string;
  widthOptions: string;
  length: string;
  lengthOptions: string;
  lightTransmission: string;
  impactResistance: string;
  uvProtection: string;
  colors: string;
  colorOptions: string;
  temperatureResistance: string;
  fireRating: string;
  warranty: string;
}

interface Application {
  icon: string;
  title: string;
  description: string;
  benefits: string[];
}

interface Benefit {
  icon: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-polycarbonate-sheet',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './polycarbonate-sheet.component.html',
  styleUrl: './polycarbonate-sheet.component.scss'
})
export class PolycarbonateSheetComponent implements OnInit {
  private platformId = inject(PLATFORM_ID);
  
  features: Feature[] = [
    {
      icon: 'fas fa-shield-alt',
      title: 'Superior Impact Resistance',
      description: 'Virtually unbreakable sheets with 200 times the impact strength of glass, ideal for areas prone to hail or other impacts.'
    },
    {
      icon: 'fas fa-sun',
      title: 'UV Protection',
      description: 'Co-extruded UV protective layer blocks harmful radiation while allowing light transmission, preventing yellowing and degradation.'
    },
    {
      icon: 'fas fa-temperature-high',
      title: 'Weather Resistance',
      description: 'Excellent durability in extreme temperatures from -40°C to 120°C, withstanding harsh weather conditions year-round.'
    },
    {
      icon: 'fas fa-fire-alt',
      title: 'Fire Resistance',
      description: 'Self-extinguishing material with high fire resistance ratings meeting international safety standards.'
    },
    {
      icon: 'fas fa-lightbulb',
      title: 'Optical Clarity',
      description: 'Exceptional light transmission up to 90% with options for diffused or tinted sheets for specific lighting requirements.'
    },
    {
      icon: 'fas fa-feather-alt',
      title: 'Lightweight',
      description: 'Half the weight of glass with superior strength, reducing structural support requirements and installation costs.'
    }
  ];

  specifications: Specification[] = [
    {
      thickness: '0.8mm - 12mm',
      thicknessOptions: 'Standard and custom options available',
      width: '1000mm - 2100mm',
      widthOptions: 'Custom widths available on request',
      length: 'Up to 12 meters',
      lengthOptions: 'Cut-to-size service available',
      lightTransmission: '90% for clear sheets',
      impactResistance: 'High (200x stronger than glass)',
      uvProtection: 'Yes, on one or both sides',
      colors: 'Clear, Bronze, Blue, Green, Grey, Opal',
      colorOptions: 'Custom colors available for bulk orders',
      temperatureResistance: '-40°C to 120°C',
      fireRating: 'Class B1 according to DIN 4102',
      warranty: '10-year limited warranty'
    }
  ];

  applications: Application[] = [
    {
      icon: 'fas fa-home',
      title: 'Residential Applications',
      description: 'Perfect for skylights, patio covers, carports, and greenhouse glazing in residential settings.',
      benefits: [
        'Natural daylight with UV protection',
        'Exceptional durability against weather elements',
        'Attractive, modern aesthetic appeal'
      ]
    },
    {
      icon: 'fas fa-building',
      title: 'Commercial Architecture',
      description: 'Ideal for shopping malls, office buildings, and exhibition centers requiring transparent roofing and glazing solutions.',
      benefits: [
        'Energy-efficient natural lighting',
        'Excellent acoustic properties',
        'Design flexibility with various colors and finishes'
      ]
    },
    {
      icon: 'fas fa-industry',
      title: 'Industrial Facilities',
      description: 'Used in factories, warehouses, and processing plants as rooflights, partitions, and safety barriers.',
      benefits: [
        'Impact resistance for safety',
        'High light transmission for reduced energy costs',
        'Low maintenance requirements'
      ]
    },
    {
      icon: 'fas fa-leaf',
      title: 'Agricultural Structures',
      description: 'Perfect for greenhouses, nurseries, and livestock shelters providing controlled environments for growth.',
      benefits: [
        'Optimal light diffusion for plant growth',
        'Excellent thermal insulation',
        'Resistant to agricultural chemicals'
      ]
    },
    {
      icon: 'fas fa-subway',
      title: 'Infrastructure Projects',
      description: 'Used in bus shelters, railway stations, airports, and pedestrian walkways for durable transparent covering.',
      benefits: [
        'Vandal resistance and durability',
        'Weather protection with visibility',
        'Long-term cost-effectiveness'
      ]
    },
    {
      icon: 'fas fa-swimming-pool',
      title: 'Recreational Facilities',
      description: 'Implemented in swimming pool enclosures, sports arenas, and stadiums for durable transparent covering.',
      benefits: [
        'Safety with impact resistance',
        'UV protection for users',
        'Sound dampening properties'
      ]
    }
  ];

  benefits: Benefit[] = [
    {
      icon: 'fas fa-wallet',
      title: 'Cost-Effective',
      description: 'Lower installation costs due to lightweight nature and reduced structural support requirements compared to glass.'
    },
    {
      icon: 'fas fa-tools',
      title: 'Easy Installation',
      description: 'Can be cold-formed on site, cut with standard tools, and requires no specialized equipment for installation.'
    },
    {
      icon: 'fas fa-thermometer-half',
      title: 'Energy Efficiency',
      description: 'Excellent thermal insulation properties help reduce heating and cooling costs throughout the seasons.'
    },
    {
      icon: 'fas fa-shield-alt',
      title: 'Safety & Security',
      description: 'Virtually unbreakable material enhances building security and significantly reduces injury risks from breakage.'
    },
    {
      icon: 'fas fa-recycle',
      title: 'Environmentally Friendly',
      description: '100% recyclable material that contributes to sustainable building practices and reduced environmental impact.'
    },
    {
      icon: 'fas fa-wrench',
      title: 'Low Maintenance',
      description: 'Requires minimal cleaning and maintenance throughout its long service life with no degradation in performance.'
    }
  ];

  constructor(
    private meta: Meta,
    private titleService: Title
  ) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      Aos.init({
        duration: 1000,
        once: true,
        offset: 100
      });
    }

    // Set SEO meta tags
    this.titleService.setTitle('Premium Polycarbonate Sheets | Transparent Roofing Solutions | Captain Steel');
    
    this.meta.addTags([
      { name: 'description', content: 'Premium polycarbonate sheets with exceptional transparency, impact resistance & UV protection. Ideal for skylights, canopies, greenhouses & architectural applications. 200x stronger than glass at half the weight.' },
      { name: 'keywords', content: 'polycarbonate sheets, transparent roofing, polycarbonate roofing, impact resistant glazing, UV protected sheets, skylight material, greenhouse glazing, polycarbonate panels, clear roofing sheets, lightweight glazing solution' },
      { name: 'robots', content: 'index, follow' },
      { name: 'author', content: 'Captain Steel Roof Solutions' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'canonical', content: 'https://captainsteelroofsolution.com/products/polycarbonate-sheet' },
      // Open Graph tags for social sharing
      { property: 'og:title', content: 'Premium Polycarbonate Sheets | Transparent Roofing Solutions' },
      { property: 'og:description', content: 'Premium polycarbonate sheets with exceptional transparency, impact resistance & UV protection. Ideal for skylights, canopies, greenhouses & architectural applications.' },
      { property: 'og:image', content: 'https://captainsteelroofsolution.com/assets/products/polycarbonate-sheets-2.jpg' },
      { property: 'og:url', content: 'https://captainsteelroofsolution.com/products/polycarbonate-sheet' },
      { property: 'og:type', content: 'product' },
      // Twitter Card tags
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'Premium Polycarbonate Sheets | Transparent Roofing Solutions' },
      { name: 'twitter:description', content: 'Premium polycarbonate sheets with exceptional transparency, impact resistance & UV protection for all architectural applications.' },
      { name: 'twitter:image', content: 'https://captainsteelroofsolution.com/assets/products/polycarbonate-sheets-2.jpg' }
    ]);
  }
}
