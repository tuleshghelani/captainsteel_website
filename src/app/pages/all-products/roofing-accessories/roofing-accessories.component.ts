import { Component, OnInit, inject, PLATFORM_ID, Inject } from '@angular/core';
import { CommonModule, isPlatformBrowser, DOCUMENT } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';
import { TransferState, makeStateKey } from '@angular/platform-browser';
import Aos from 'aos';

// Define TransferState keys
const PRODUCT_SCHEMA_KEY = makeStateKey<string>('ROOFING_ACCESSORIES_PRODUCT_SCHEMA');
const BUSINESS_SCHEMA_KEY = makeStateKey<string>('ROOFING_ACCESSORIES_BUSINESS_SCHEMA');
const FAQ_SCHEMA_KEY = makeStateKey<string>('ROOFING_ACCESSORIES_FAQ_SCHEMA');

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

interface FAQ {
  question: string;
  answer: string;
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
  private baseUrl = 'https://captainsteelroofsolution.com';
  
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
      name: 'Adhesive',
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

  faqs: FAQ[] = [
    {
      question: 'Why are quality roofing accessories important for my roofing system?',
      answer: 'Quality roofing accessories are critical because they complete the roofing system by sealing transitions, preventing water infiltration, and reinforcing vulnerable areas. While the roofing sheets themselves cover most of the surface, accessories address the joints, edges, and penetrations where most leaks occur. Using inferior accessories with premium roofing materials is like installing an expensive door with cheap hinges—the system is only as strong as its weakest component. Premium accessories ensure your entire roofing system performs to its maximum potential, extends its lifespan, and maintains warranty coverage. Additionally, proper accessories improve aesthetic appeal, enhance energy efficiency, and can significantly reduce maintenance costs over the life of your roof.'
    },
    {
      question: 'What materials are used in your roofing accessories, and how do they ensure durability?',
      answer: 'Our roofing accessories are manufactured using premium materials specifically selected to withstand the same environmental challenges as the primary roofing system. For metal components like flashing, ridge caps, and fasteners, we use high-grade galvanized steel, stainless steel, or aluminum with specialized coatings that resist corrosion, UV degradation, and temperature extremes. Our adhesive and gaskets incorporate advanced polymer technologies including EPDM, butyl rubber, and silicone compounds engineered to maintain flexibility and adhesion despite years of expansion, contraction, and exposure to elements. Each accessory undergoes rigorous testing including accelerated weathering, salt spray resistance, and thermal cycling to ensure they will maintain their integrity throughout the roofing system\'s expected lifespan, even in the harshest environments.'
    },
    {
      question: 'How do your accessories integrate with different roofing systems?',
      answer: 'Our accessories are designed with universal compatibility in mind while offering optimized performance for specific roofing systems. We produce both standard configurations that work across multiple roofing products and specialized accessories engineered for perfect integration with particular systems. For metal roofing, we offer profile-specific flashing and closure components that precisely match the corrugation pattern or trapezoidal shape of each sheet type. Our fastening systems are calibrated for different substrate materials, insulation thicknesses, and environmental requirements. For contractors and building owners working with multiple roofing types, we provide comprehensive compatibility guides and technical support to ensure the right accessory selection. Additionally, our engineering team can develop custom solutions for unique applications or challenging installation conditions where standard accessories might not be optimal.'
    },
    {
      question: 'Do you offer customized roofing accessories for special projects?',
      answer: 'Yes, we specialize in providing customized roofing accessories for projects with unique requirements or architectural specifications. Our manufacturing capabilities allow us to produce custom-length flashing, specialized trim profiles, non-standard colors, and accessories for unusual roof geometries or special applications. For large projects, we can develop bespoke accessory systems that address specific performance requirements such as enhanced wind resistance, specialized thermal characteristics, or unique aesthetic considerations. The customization process begins with a consultation with our technical team to understand your project needs, followed by design and engineering of the custom components, and quality-controlled manufacturing to ensure precise specifications are met. While custom accessories may require slightly longer lead times than standard items, they often result in superior performance, easier installation, and a more cohesive final appearance for your specialized roofing project.'
    }
  ];

  constructor(
    private meta: Meta,
    private titleService: Title,
    @Inject(DOCUMENT) private document: Document,
    private transferState: TransferState
  ) {}

  ngOnInit() {
    // Set SEO meta tags
    this.titleService.setTitle('Premium Roofing Accessories | Complete Roofing Solutions | Captain Steel');
    
    this.meta.addTags([
      { name: 'description', content: 'High-quality roofing accessories including flashing, fasteners, ridge caps, adhesive, and ventilation components. Complete your roofing system with durable, weather-resistant accessories engineered for superior performance and longevity.' },
      { name: 'keywords', content: 'roofing accessories, roof flashing, ridge caps, roof fasteners, roof adhesive, roof ventilation, roofing components, metal roof accessories, roofing system parts, roofing hardware, roof trims, roof installation accessories' },
      { name: 'robots', content: 'index, follow' },
      { name: 'author', content: 'Captain Steel Roof Solutions' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'canonical', content: 'https://captainsteelroofsolution.com/products/roofing-accessories' },
      // Open Graph tags for social sharing
      { property: 'og:title', content: 'Premium Roofing Accessories | Complete Roofing Solutions' },
      { property: 'og:description', content: 'High-quality roofing accessories including flashing, fasteners, ridge caps, adhesive, and ventilation components. Complete your roofing system with durable, weather-resistant accessories.' },
      { property: 'og:image', content: 'https://captainsteelroofsolution.com/assets/products/crimping-and-accessories-2.jpg' },
      { property: 'og:url', content: 'https://captainsteelroofsolution.com/products/roofing-accessories' },
      { property: 'og:type', content: 'product' },
      // Twitter Card tags
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'Premium Roofing Accessories | Complete Roofing Solutions' },
      { name: 'twitter:description', content: 'High-quality roofing accessories including flashing, fasteners, ridge caps, adhesive, and ventilation components for all roofing applications.' },
      { name: 'twitter:image', content: 'https://captainsteelroofsolution.com/assets/products/crimping-and-accessories-2.jpg' }
    ]);
    
    // Add structured data
    this.setProductStructuredData();
    this.setBusinessStructuredData();
    this.setFaqStructuredData();
    
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

  private setProductStructuredData(): void {
    const structuredData = {
      "@context": "https://schema.org/",
      "@type": "Product",
      "name": "Premium Roofing Accessories",
      "image": [
        `${this.baseUrl}/assets/products/crimping-and-accessories-2.jpg`
      ],
      "description": "High-quality roofing accessories including flashing, fasteners, ridge caps, adhesive, and ventilation components. Complete your roofing system with durable, weather-resistant accessories engineered for superior performance and longevity.",
      "brand": {
        "@type": "Brand",
        "name": "Captain Steel"
      },
      "manufacturer": "Captain Steel Roof Solutions",
      "offers": {
        "@type": "AggregateOffer",
        "priceCurrency": "INR",
        "lowPrice": "100",
        "highPrice": "2500",
        "offerCount": "24",
        "availability": "https://schema.org/InStock"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "bestRating": "5",
        "worstRating": "1",
        "ratingCount": "183"
      },
      "review": {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "author": {
          "@type": "Person",
          "name": "Reliable Construction Ltd."
        },
        "reviewBody": "We've used Captain Steel's roofing accessories for multiple commercial projects and have been impressed with their quality and durability. The complete system works perfectly together, and their technical support is outstanding. These accessories truly enhance the overall performance of the entire roofing system."
      }
    };
    
    // Store the structured data in transfer state
    this.transferState.set(PRODUCT_SCHEMA_KEY, JSON.stringify(structuredData));
    
    // Only add script tag in browser environment
    if (isPlatformBrowser(this.platformId)) {
      const script = this.document.createElement('script');
      script.type = 'application/ld+json';
      script.text = JSON.stringify(structuredData);
      this.document.head.appendChild(script);
    }
  }

  private setBusinessStructuredData(): void {
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Captain Steel Roof Solutions",
      "image": `${this.baseUrl}/assets/logo/logo.png`,
      "url": this.baseUrl,
      "telephone": "+91 9879109091",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Sadak Pipliya, National Highway, Ta. Gondal",
        "addressLocality": "Rajkot",
        "addressRegion": "Gujarat",
        "postalCode": "360311",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "22.089547",
        "longitude": "70.783704"
      },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday"
        ],
        "opens": "09:00",
        "closes": "19:00"
      },
      "sameAs": [
        "https://www.facebook.com/captainroof/",
        "https://www.linkedin.com/company/captain-steel/",
        "https://twitter.com/captainsteel"
      ]
    };
    
    // Store the structured data in transfer state
    this.transferState.set(BUSINESS_SCHEMA_KEY, JSON.stringify(structuredData));
    
    // Only add script tag in browser environment
    if (isPlatformBrowser(this.platformId)) {
      const script = this.document.createElement('script');
      script.type = 'application/ld+json';
      script.text = JSON.stringify(structuredData);
      this.document.head.appendChild(script);
    }
  }

  private setFaqStructuredData(): void {
    const faqStructuredData = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": this.faqs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    };
    
    // Store the structured data in transfer state
    this.transferState.set(FAQ_SCHEMA_KEY, JSON.stringify(faqStructuredData));
    
    // Only add script tag in browser environment
    if (isPlatformBrowser(this.platformId)) {
      const script = this.document.createElement('script');
      script.type = 'application/ld+json';
      script.text = JSON.stringify(faqStructuredData);
      this.document.head.appendChild(script);
    }
  }
}
