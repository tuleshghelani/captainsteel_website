import { Component, OnInit, ViewChild, ElementRef, inject, PLATFORM_ID } from '@angular/core';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Title, Meta } from '@angular/platform-browser';
import Aos from 'aos';

@Component({
  selector: 'app-catalogue',
  standalone: true,
  imports: [CommonModule, NgxExtendedPdfViewerModule],
  templateUrl: './catalogue.component.html',
  styleUrl: './catalogue.component.scss'
})
export class CatalogueComponent implements OnInit {
  private platformId = inject(PLATFORM_ID);
  pdfSrc = 'assets/catalogue/catalogue.pdf';
  catalogueItems = [
    {
      title: 'Premium Roofing Sheets',
      description: 'Explore our extensive range of high-quality roofing sheets in Rajkot, designed for durability and performance.',
      aosDelay: 100
    },
    {
      title: 'Colour Coated Sheets',
      description: 'Discover our premium colour coated roofing sheets available in various profiles and finishes for all applications.',
      aosDelay: 200
    },
    {
      title: 'Technical Specifications',
      description: 'Detailed technical specifications for all our roofing sheet products manufactured in Rajkot.',
      aosDelay: 300
    },
    {
      title: 'Installation Guidelines',
      description: 'Expert installation instructions for our roofing sheets to ensure optimal performance and longevity.',
      aosDelay: 400
    }
  ];

  @ViewChild('pdfViewer') pdfViewer!: ElementRef;

  constructor(private titleService: Title, private meta: Meta) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) { 
      Aos.init({
        duration: 1000,
        once: true
      });
    }

    this.titleService.setTitle('Premium Colour Coated Roofing Sheets Catalogue | Captain Steel Rajkot');
    this.meta.addTags([
      { name: 'description', content: 'Download our comprehensive roofing sheet catalogue featuring premium colour coated roofing sheets, corrugated sheets, and accessories with technical specifications from Rajkot\'s leading manufacturer.' },
      { name: 'keywords', content: 'roofing sheet in Rajkot, colour coated roofing sheet, roofing sheet manufacturer Rajkot, colour coated roofing sheet in Rajkot, corrugated roofing sheets Rajkot, trapezoidal roofing sheets Gujarat, steel roofing catalogue, roofing product specifications Rajkot, steel roof technical details, roofing accessories Gujarat, Captain Steel products Rajkot, roofing material guide Rajkot, industrial roofing specifications' },
      { name: 'robots', content: 'index, follow' },
      { name: 'author', content: 'Captain Steel Roof Solutions' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'canonical', content: 'https://captainsteelroofsolution.com/catalogue' },
      { property: 'og:title', content: 'Premium Colour Coated Roofing Sheets Catalogue | Captain Steel Rajkot' },
      { property: 'og:description', content: 'Download our comprehensive roofing sheet catalogue with premium colour coated roofing sheets, corrugated sheets, and accessories with detailed specifications.' },
      { property: 'og:url', content: 'https://captainsteelroofsolution.com/catalogue' },
      { property: 'og:type', content: 'website' },
      { property: 'og:image', content: 'https://captainsteelroofsolution.com/assets/catalogue/catalogue-cover.jpg' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'Premium Colour Coated Roofing Sheets Catalogue | Captain Steel Rajkot' },
      { name: 'twitter:description', content: 'Download our comprehensive roofing sheet catalogue with specifications and technical details for all roofing solutions in Rajkot.' },
      { name: 'geo.region', content: 'IN-GJ' },
      { name: 'geo.placename', content: 'Rajkot' },
      { name: 'geo.position', content: '22.089419;70.782472' }
    ]);
    
    // Add structured data for review aggregate rating
    this.addStructuredData();
  }

  onPageChange(pageNumber: number) {
  }
  
  private addStructuredData(): void {
    if (isPlatformBrowser(this.platformId)) {
      // Create the structured data script element
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      
      // Create the structured data object with AggregateRating
      const structuredData = {
        '@context': 'https://schema.org',
        '@type': 'Product',
        'name': 'Captain Steel Colour Coated Roofing Sheets Catalogue',
        'description': 'Comprehensive product catalogue featuring premium colour coated roofing sheets in Rajkot, corrugated sheets, trapezoidal sheets, accessories and technical specifications from Rajkot\'s leading manufacturer.',
        'image': 'https://captainsteelroofsolution.com/assets/catalogue/catalogue-cover.jpg',
        'brand': {
          '@type': 'Brand',
          'name': 'Captain Steel'
        },
        'offers': {
          '@type': 'AggregateOffer',
          'priceCurrency': 'INR',
          'availability': 'https://schema.org/InStock',
          'highPrice': '1200',
          'lowPrice': '300',
          'offerCount': '10'
        },
        'aggregateRating': {
          '@type': 'AggregateRating',
          'ratingValue': 4.8,
          'reviewCount': 127,
          'bestRating': 5,
        }
      };
      
      // Add the JSON-LD to the script element
      script.textContent = JSON.stringify(structuredData);
      
      // Append to the document head
      document.head.appendChild(script);
    }
  }
}
