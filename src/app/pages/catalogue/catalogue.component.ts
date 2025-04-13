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

    this.titleService.setTitle('Product Catalogue | Captain Steel');
    this.meta.addTags([
      { name: 'description', content: 'Explore our comprehensive product catalogue featuring premium steel roofing solutions, specifications, and technical details.' },
      { name: 'keywords', content: 'product catalogue, steel roofing solutions, technical specifications, Captain Steel' },
      { name: 'robots', content: 'index, follow' },
      { name: 'author', content: 'Captain Steel Roof Solutions' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'canonical', content: 'https://captainsteelroofsolution.com/catalogue' }
    ]);
  }

  onPageChange(pageNumber: number) {
  }
}
