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
  
  // Product Schema for SEO
  productSchema = {
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": "Premium Hybrid Roofing Gutter Systems",
    "image": [
      "https://captainsteelroofsolution.com/assets/products/HYBRIDE_GUTTER/GUTEER 1.jpeg"
    ],
    "description": "Premium hybrid roofing gutter systems offering superior water management, durability, and aesthetic appeal in Rajkot. Our comprehensive gutter solutions include gutters, downspouts, elbows, end caps, and all necessary accessories for complete rainwater management.",
    "brand": {
      "@type": "Brand",
      "name": "Captain Steel"
    },
    "manufacturer": "Captain Steel Roof Solutions",
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "INR",
      "lowPrice": "250",
      "highPrice": "1200",
      "offerCount": "15",
      "availability": "https://schema.org/InStock"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "bestRating": "5",
      "worstRating": "1",
      "ratingCount": "178"
    },
    "review": {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5",
      },
      "author": {
        "@type": "Person",
        "name": "Building Solutions Ltd."
      },
      "reviewBody": "We've installed Captain Steel's hybrid roofing gutter systems on multiple commercial projects in Rajkot and have been consistently impressed with their quality, durability, and water management efficiency. The installation is straightforward, and the finished appearance enhances the overall look of the building."
    }
  };
  
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
    this.title.setTitle('Premium Hybrid Roofing Gutters in Rajkot | Captain Steel Roof Solutions');
    this.meta.addTags([
      { name: 'description', content: 'Premium hybrid roofing gutter systems in Rajkot offering superior water management, durability, and aesthetic appeal. Complete solution with gutters, downspouts, and all necessary accessories for residential and commercial buildings. Captain Steel, Rajkot, Gujarat, India' },
      { name: 'keywords', content: 'hybrid gutters, roofing gutters, hybrid roofing gutters Rajkot, water management system, rain gutters, gutter accessories, downspouts, gutter installation, commercial gutters, residential gutters, premium gutters, seamless gutters, gutter protection, roofing solutions Rajkot' },
      { name: 'robots', content: 'index, follow' },
      { name: 'author', content: 'Captain Steel Roof Solutions' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'canonical', content: 'https://captainsteelroofsolution.com/products/gutter' },
      { name: 'geo.region', content: 'IN-GJ' },
      { name: 'geo.placename', content: 'Rajkot' },
      // Open Graph tags for social sharing
      { property: 'og:title', content: 'Premium Hybrid Roofing Gutters in Rajkot | Captain Steel Roof Solutions' },
      { property: 'og:description', content: 'Premium hybrid roofing gutter systems offering superior water management, durability, and aesthetic appeal for residential and commercial buildings in Rajkot.' },
      { property: 'og:image', content: 'https://captainsteelroofsolution.com/assets/products/HYBRIDE_GUTTER/GUTEER 1.jpeg' },
      { property: 'og:url', content: 'https://captainsteelroofsolution.com/products/gutter' },
      { property: 'og:type', content: 'product' },
      { property: 'og:site_name', content: 'Captain Steel Roof Solutions' },
      { property: 'og:locale', content: 'en_IN' },
      // Twitter Card tags
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'Premium Hybrid Roofing Gutters in Rajkot | Captain Steel Roof Solutions' },
      { name: 'twitter:description', content: 'Premium hybrid roofing gutter systems offering superior water management, durability, and aesthetic appeal for all building applications in Rajkot.' },
      { name: 'twitter:image', content: 'https://captainsteelroofsolution.com/assets/products/HYBRIDE_GUTTER/GUTEER 1.jpeg' }
    ]);
    
    // Add structured data schema to the document
    this.addStructuredData();
    
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
  
  // Method to add structured data schema to the document
  private addStructuredData(): void {
    if (isPlatformBrowser(this.platformId)) {
      // Create script element for product schema
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.text = JSON.stringify(this.productSchema);
      document.head.appendChild(script);
      
      // Create additional schemas
      this.addFAQSchema();
      this.addBreadcrumbSchema();
    }
  }
  
  // Method to add FAQ schema
  private addFAQSchema(): void {
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What makes hybrid roofing gutters superior to traditional gutter systems?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Hybrid roofing gutter systems combine the best features of traditional materials with advanced engineering for superior performance. They offer enhanced water capacity, improved structural strength, and better resistance to environmental factors. The hybrid design features reinforced edges and optimized profiles that prevent sagging and deformation even under heavy water loads. Additionally, our hybrid gutters incorporate specialized mounting systems that accommodate thermal expansion and contraction, reducing the risk of leaks and separation at joints. This comprehensive approach results in a longer-lasting, more efficient water management solution compared to conventional gutter systems."
          }
        },
        {
          "@type": "Question",
          "name": "How do I determine the right roofing gutter size and number of downspouts for my building?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Determining the appropriate roofing gutter size and downspout configuration depends on several factors: roof area, roof pitch, local rainfall intensity, and building design. As a general guideline, each downspout can effectively drain approximately 600-800 square feet of roof area. For buildings in areas with heavy rainfall, this capacity should be reduced by 20-30%. Our standard hybrid gutters are designed to handle most residential and commercial applications, but larger industrial buildings may require custom solutions. For precise calculations, we recommend consulting with our technical team who can analyze your specific requirements and provide a customized recommendation based on hydrological calculations and building specifications."
          }
        },
        {
          "@type": "Question",
          "name": "What maintenance is required for hybrid roofing gutter systems?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "While our hybrid roofing gutter systems are designed for minimal maintenance, some regular care will ensure optimal performance and longevity. We recommend inspecting and cleaning gutters at least twice a year, typically in spring and fall, to remove accumulated debris. Check for proper water flow, secure attachments, and signs of damage after severe weather events. The smooth interior surfaces of our hybrid gutters minimize debris accumulation, but periodic flushing with water can help maintain clear channels. With this basic maintenance routine, our hybrid gutter systems typically provide 20+ years of reliable service without major repairs or replacements."
          }
        },
        {
          "@type": "Question",
          "name": "Can hybrid roofing gutters be installed on existing buildings?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, our hybrid roofing gutter systems are designed for both new construction and retrofit applications. The versatile mounting system accommodates various fascia board configurations and roof edge designs, making installation on existing buildings straightforward. When replacing old gutters, our specialized GI clamps can often utilize existing mounting points, minimizing structural modifications. For buildings without previous gutters, our technical team can assess the structure and recommend the most appropriate installation method. The modular nature of our system allows for customization around existing architectural features and obstacles. We provide comprehensive installation guidelines for contractors, or our certified installation partners can handle the entire process for a seamless upgrade to your building's water management system."
          }
        }
      ]
    };
    
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(faqSchema);
    document.head.appendChild(script);
  }
  
  // Method to add BreadcrumbList schema
  private addBreadcrumbSchema(): void {
    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://captainsteelroofsolution.com/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Products",
          "item": "https://captainsteelroofsolution.com/products"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Hybrid Roofing Gutters",
          "item": "https://captainsteelroofsolution.com/products/gutter"
        }
      ]
    };
    
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(breadcrumbSchema);
    document.head.appendChild(script);
  }
}
