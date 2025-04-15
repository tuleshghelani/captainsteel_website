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
      title: 'Company Overview',
      description: 'Learn about our history, mission, and vision for the future.',
      aosDelay: 100
    },
    {
      title: 'Product Range',
      description: 'Explore our extensive range of steel products and solutions.',
      aosDelay: 200
    },
    {
      title: 'Technical Specifications',
      description: 'Detailed technical specifications for all our products.',
      aosDelay: 300
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

    this.titleService.setTitle('Steel Roofing Product Catalogue | Captain Steel Rajkot');
    this.meta.addTags([
      { name: 'description', content: 'Download our comprehensive steel roofing product catalogue featuring premium roofing sheets, ventilators, accessories and technical specifications from Rajkot\'s leading manufacturer.' },
      { name: 'keywords', content: 'steel roofing catalogue, roofing product specifications Rajkot, steel roof technical details, corrugated sheets catalogue, trapezoidal sheets specifications, roofing accessories Gujarat, Captain Steel products Rajkot, steel roofing PDF, roofing material guide Rajkot, industrial roofing specifications' },
      { name: 'robots', content: 'index, follow' },
      { name: 'author', content: 'Captain Steel Roof Solutions' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'canonical', content: 'https://captainsteelroofsolution.com/catalogue' },
      { property: 'og:title', content: 'Steel Roofing Product Catalogue | Captain Steel Rajkot' },
      { property: 'og:description', content: 'Download our comprehensive steel roofing product catalogue with premium roofing sheets, ventilators, accessories and technical specifications.' },
      { property: 'og:url', content: 'https://captainsteelroofsolution.com/catalogue' },
      { property: 'og:type', content: 'website' },
      { property: 'og:image', content: 'https://captainsteelroofsolution.com/assets/catalogue/catalogue-cover.jpg' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'Steel Roofing Product Catalogue | Captain Steel Rajkot' },
      { name: 'twitter:description', content: 'Download our comprehensive steel roofing product catalogue with specifications and technical details.' },
      { name: 'geo.region', content: 'IN-GJ' },
      { name: 'geo.placename', content: 'Rajkot' },
      { name: 'geo.position', content: '22.089419;70.782472' }
    ]);
  }

  onPageChange(pageNumber: number) {
  }
}
