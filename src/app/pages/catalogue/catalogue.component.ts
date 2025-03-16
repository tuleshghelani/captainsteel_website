import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { CommonModule } from '@angular/common';
import Aos from 'aos';

@Component({
  selector: 'app-catalogue',
  standalone: true,
  imports: [CommonModule, NgxExtendedPdfViewerModule],
  templateUrl: './catalogue.component.html',
  styleUrl: './catalogue.component.scss'
})
export class CatalogueComponent implements OnInit {
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

  ngOnInit() {
    Aos.init({
      duration: 1000,
      once: true
    });
  }

  onPageChange(pageNumber: number) {
  }
}
