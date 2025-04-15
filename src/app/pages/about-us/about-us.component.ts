import { Component, OnInit, inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';
import Aos from 'aos';

interface TeamMember {
  name: string;
  position: string;
  image: string;
  description: string;
}

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.scss'
})
export class AboutUsComponent implements OnInit {
  private platformId = inject(PLATFORM_ID);
  yearsOfExperience: number = new Date().getFullYear() - 2020;
  experienceText: string = this.yearsOfExperience + '+';

  constructor(
    private meta: Meta,
    private title: Title
  ) {
    this.setupSEO();
  }

  private setupSEO() {
    const description = `Captain Steel - Leading steel roofing manufacturer in Rajkot with ${this.yearsOfExperience}+ years of excellence. We provide premium corrugated sheets, trapezoidal sheets, and air ventilators with expert installation services across Gujarat.`;

    this.title.setTitle('About Captain Steel - Premium Steel Roofing Manufacturer in Rajkot, Gujarat');
    
    // Enhanced meta tags for better SEO
    this.meta.updateTag({ name: 'description', content: description });
    this.meta.updateTag({ name: 'keywords', content: 'steel roofing Rajkot, roofing manufacturer Gujarat, Captain Steel Rajkot, roofing solutions Gujarat, corrugated sheets manufacturer, trapezoidal sheets Rajkot, industrial roofing Gujarat, commercial roofing Rajkot, steel roofing company history, best roofing manufacturer Rajkot' });
    this.meta.updateTag({ name: 'robots', content: 'index, follow' });
    this.meta.updateTag({ name: 'author', content: 'Captain Steel Roof Solutions' });
    
    // Open Graph tags for better social sharing
    this.meta.updateTag({ property: 'og:title', content: 'About Captain Steel - Premium Steel Roofing Manufacturer in Rajkot, Gujarat' });
    this.meta.updateTag({ property: 'og:description', content: description });
    this.meta.updateTag({ property: 'og:image', content: 'https://captainsteelroofsolution.com/assets/home/company.jpg' });
    this.meta.updateTag({ property: 'og:url', content: 'https://captainsteelroofsolution.com/about-us' });
    this.meta.updateTag({ property: 'og:type', content: 'website' });

    // Twitter Card tags
    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.meta.updateTag({ name: 'twitter:title', content: 'About Captain Steel - Premium Steel Roofing Manufacturer in Rajkot' });
    this.meta.updateTag({ name: 'twitter:description', content: description });
    this.meta.updateTag({ name: 'twitter:image', content: 'https://captainsteelroofsolution.com/assets/home/company.jpg' });
    
    // Geo tags for local SEO
    this.meta.updateTag({ name: 'geo.region', content: 'IN-GJ' });
    this.meta.updateTag({ name: 'geo.placename', content: 'Rajkot' });
    this.meta.updateTag({ name: 'geo.position', content: '22.089419;70.782472' });
    this.meta.updateTag({ name: 'ICBM', content: '22.089419, 70.782472' });
  }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      Aos.init({
        duration: 1000,
        once: true
      });
    }
  }
}
