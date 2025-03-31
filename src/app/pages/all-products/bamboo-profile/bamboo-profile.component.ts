import { Component, OnInit, inject, PLATFORM_ID, Inject } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';
import * as Aos from 'aos';

interface Feature {
  icon: string;
  title: string;
  description: string;
}

interface Application {
  icon: string;
  title: string;
  description: string;
}

interface FAQ {
  question: string;
  answer: string;
}

@Component({
  selector: 'app-bamboo-profile',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './bamboo-profile.component.html',
  styleUrl: './bamboo-profile.component.scss'
})
export class BambooProfileComponent implements OnInit {
  private platformId = inject(PLATFORM_ID);

  features: Feature[] = [
    {
      icon: 'leaf',
      title: 'Eco-Friendly Material',
      description: 'Made from sustainable bamboo fibers, offering an environmentally conscious roofing alternative with minimal carbon footprint'
    },
    {
      icon: 'tint-slash',
      title: 'Weather Resistant',
      description: 'Advanced treatment processes ensure excellent resistance to moisture, UV damage, and extreme weather conditions'
    },
    {
      icon: 'temperature-low',
      title: 'Thermal Insulation',
      description: 'Natural insulating properties help maintain comfortable indoor temperatures and reduce energy consumption'
    },
    {
      icon: 'bolt',
      title: 'Lightweight Design',
      description: 'Significantly lighter than traditional roofing materials, reducing structural load requirements and installation complexity'
    },
    {
      icon: 'volume-mute',
      title: 'Acoustic Performance',
      description: 'Superior sound dampening qualities reduce noise from rain and external sources for quieter interior spaces'
    },
    {
      icon: 'palette',
      title: 'Aesthetic Appeal',
      description: 'Natural bamboo texture and customizable finishes create distinctive, elegant roofing solutions with timeless appeal'
    }
  ];

  applications: Application[] = [
    {
      icon: 'home',
      title: 'Residential Buildings',
      description: 'Perfect for eco-conscious homeowners looking for distinctive, sustainable roofing with natural appeal'
    },
    {
      icon: 'hotel',
      title: 'Hospitality Structures',
      description: 'Ideal for resorts, eco-hotels, and tourism facilities seeking to create natural aesthetic environments'
    },
    {
      icon: 'store',
      title: 'Commercial Spaces',
      description: 'Distinctive option for retail, restaurants, and office buildings wanting to showcase environmental commitment'
    },
    {
      icon: 'tree',
      title: 'Garden Structures',
      description: 'Perfect for gazebos, pergolas, garden shelters, and outdoor entertainment areas requiring natural integration'
    },
    {
      icon: 'umbrella-beach',
      title: 'Beach & Waterfront',
      description: 'Excellent for beach-side structures, resorts, and waterfront properties with salt-water exposure'
    },
    {
      icon: 'pagelines',
      title: 'Eco-Developments',
      description: 'Essential component for green building projects, eco-communities, and environmentally certified structures'
    }
  ];

  faqs: FAQ[] = [
    {
      question: 'What makes bamboo profile sheets different from traditional roofing materials?',
      answer: 'Bamboo profile sheets represent a revolutionary sustainable alternative to conventional roofing. Unlike traditional materials, they\'re crafted from rapidly renewable bamboo fibers, which can be harvested in 3-5 years compared to decades for timber. The manufacturing process has a significantly lower carbon footprint than metal or cement-based materials. Bamboo profiles offer natural thermal and acoustic insulation properties, reducing energy costs. They\'re also notably lighter, reducing structural requirements and installation complexity. While providing comparable weather resistance and durability when properly treated, they bring the distinctive aesthetic of natural materials that ages gracefully, creating unique character over time that synthetic materials cannot replicate.'
    },
    {
      question: 'How durable are bamboo profile roofing sheets in different weather conditions?',
      answer: 'Our bamboo profile sheets undergo specialized treatment processes that ensure excellent durability across diverse climate conditions. They feature advanced water-resistant coatings that prevent moisture penetration, swelling, and warping, while UV-protective treatments prevent degradation from sun exposure. The natural density and fiber structure of bamboo provides inherent resistance to high winds, and the material demonstrates excellent thermal stability, withstanding temperature fluctuations without expansion or contraction issues common in other materials. In tropical environments, the sheets are treated to resist mold, mildew, and insect infestations. When properly installed and maintained, our bamboo profile sheets have a service life of 25+ years, comparable to many conventional roofing materials, while aging with a distinctive patina that many homeowners find aesthetically appealing.'
    },
    {
      question: 'What maintenance is required for bamboo profile roofing?',
      answer: 'Bamboo profile roofing requires minimal but specific maintenance to maximize its longevity. We recommend bi-annual inspections, ideally before and after monsoon or rainy seasons, to check for any signs of wear, loose fasteners, or accumulated debris. Regular cleaning with a soft brush to remove leaves, dirt, and organic matter helps prevent moisture retention. Unlike metal roofing, bamboo profiles don\'t require repainting, but we recommend reapplication of our UV-protective sealant every 3-5 years, depending on your climate conditions. Any damaged sections should be addressed promptly to prevent water infiltration. For coastal areas with high salt content in the air, a freshwater rinse every 3-4 months helps preserve the protective coatings. When properly maintained, our bamboo profiles develop a beautiful natural patina while maintaining their functional integrity throughout their 25+ year lifespan.'
    },
    {
      question: 'How do bamboo profile sheets contribute to energy efficiency in buildings?',
      answer: 'Bamboo profile sheets significantly enhance building energy efficiency through multiple mechanisms. Their natural cellular structure provides exceptional thermal insulation with R-values typically 20-30% higher than standard metal roofing, reducing heating and cooling requirements year-round. The material\'s natural breathability helps regulate moisture and prevent heat buildup in attic spaces. Our bamboo profiles reflect up to 80% of solar radiation when installed with recommended underlayment, further reducing cooling costs in hot climates. Research indicates buildings with bamboo roofing can experience indoor temperature reductions of 5-8°C compared to conventional metal roofing during summer months, potentially reducing cooling costs by 15-25%. Additionally, the reduced weight of bamboo profiles minimizes embodied energy in supporting structures, while the sustainable harvesting and manufacturing process represents a 60-70% smaller carbon footprint compared to conventional roofing options, contributing to overall environmental efficiency.'
    }
  ];

  galleryImages = [
    {
      src: 'assets/products/BAMBOO_PROFILE/3 WAY RIDGE.jpeg',
      alt: '3-Way Ridge for Bamboo Profile Sheets - Premium Natural Roofing Component',
      title: '3-Way Ridge'
    },
    {
      src: 'assets/products/BAMBOO_PROFILE/4 WAY RIDGE.jpeg',
      alt: '4-Way Ridge for Bamboo Profile Sheets - Advanced Natural Roofing Installation',
      title: '4-Way Ridge'
    },
    {
      src: 'assets/products/BAMBOO_PROFILE/MAIN RIDGE CAP.jpeg',
      alt: 'Main Ridge Cap for Bamboo Profile Roofing - Quality Roof Finishing Component',
      title: 'Main Ridge Cap'
    },
    {
      src: 'assets/products/BAMBOO_PROFILE/PLAIN RIDGE.jpeg',
      alt: 'Plain Ridge for Bamboo Profile Sheets - Elegant Natural Roofing Solution',
      title: 'Plain Ridge'
    },
    {
      src: 'assets/products/BAMBOO_PROFILE/SIDE RIDGE CAP.jpeg',
      alt: 'Side Ridge Cap for Bamboo Profile Installation - Premium Roofing Accessory',
      title: 'Side Ridge Cap'
    },
    {
      src: 'assets/products/BAMBOO_PROFILE/WhatsApp Image 2025-02-21 at 9.07.17 AM (1).jpeg',
      alt: 'Bamboo Profile Roof Installation - Sustainable Commercial Building Solution',
      title: 'Commercial Installation'
    },
    {
      src: 'assets/products/BAMBOO_PROFILE/WPC ZALAR.jpeg',
      alt: 'WPC Zalar with Bamboo Profile Roofing - Modern Eco-Friendly Building Material',
      title: 'WPC Zalar'
    },
    {
      src: 'assets/products/BAMBOO_PROFILE/ZALAR.jpeg',
      alt: 'Zalar Installation with Bamboo Profile Sheets - Premium Architectural Detail',
      title: 'Zalar Component'
    }
  ];

  constructor(
    private meta: Meta,
    private titleService: Title,    
  ) {}

  ngOnInit() {
    // Set SEO meta tags
    this.titleService.setTitle('Premium Bamboo Profile Sheets | Eco-Friendly Roofing | Captain Steel');
    
    this.meta.addTags([
      { name: 'description', content: 'Premium bamboo profile sheets - sustainable, eco-friendly roofing solution with superior thermal insulation, weather resistance and natural aesthetics. Perfect for residential, commercial and hospitality structures.' },
      { name: 'keywords', content: 'bamboo profile sheets, sustainable roofing, eco-friendly roofing, natural roofing material, bamboo roofing, green building material, thermal insulation roofing, acoustic roofing' },
      { name: 'robots', content: 'index, follow' },
      { name: 'author', content: 'Captain Steel Roof Solutions' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'canonical', content: 'https://captainsteelroofsolution.com/products/bamboo-profile' },
      // Open Graph tags for social sharing
      { property: 'og:title', content: 'Premium Bamboo Profile Sheets | Eco-Friendly Sustainable Roofing' },
      { property: 'og:description', content: 'Premium bamboo profile sheets offering sustainable, eco-friendly roofing with superior thermal insulation and natural aesthetics for all building types.' },
      { property: 'og:image', content: 'https://captainsteelroofsolution.com/assets/products/BAMBOO_PROFILE/BAMBOO PROFILE SHEET.jpeg' },
      { property: 'og:url', content: 'https://captainsteelroofsolution.com/products/bamboo-profile' },
      { property: 'og:type', content: 'product' },
      // Twitter Card tags
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'Premium Bamboo Profile Sheets | Eco-Friendly Sustainable Roofing' },
      { name: 'twitter:description', content: 'Premium bamboo profile sheets offering sustainable, eco-friendly roofing with superior thermal insulation.' },
      { name: 'twitter:image', content: 'https://captainsteelroofsolution.com/assets/products/BAMBOO_PROFILE/BAMBOO PROFILE SHEET.jpeg' }
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

        // Add click event listeners to gallery thumbnails
        const thumbnails = document.querySelectorAll('.thumbnail');
        const mainImage = document.querySelector('.main-gallery-image img') as HTMLImageElement;
        
        if (thumbnails.length > 0 && mainImage) {
          thumbnails.forEach(thumb => {
            thumb.addEventListener('click', () => {
              // Remove active class from all thumbnails
              thumbnails.forEach(t => t.classList.remove('active'));
              
              // Add active class to clicked thumbnail
              thumb.classList.add('active');
              
              // Update main image
              const thumbImg = thumb.querySelector('img') as HTMLImageElement;
              if (thumbImg) {
                mainImage.src = thumbImg.src;
                mainImage.alt = thumbImg.alt;
              }
            });
          });
        }
      }, 500);
    }
  }
}
