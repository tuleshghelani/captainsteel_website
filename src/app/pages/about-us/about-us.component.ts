import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
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
  yearsOfExperience: number = new Date().getFullYear() - 2020;
  experienceText: string = this.yearsOfExperience + '+';

  constructor(
    private meta: Meta,
    private title: Title
  ) {
    this.setupSEO();
  }

  private setupSEO() {
    const description = `Captain Steel - Leading supplier of premium steel roofing solutions with ${this.yearsOfExperience}+ years of experience. Discover our innovative roofing solutions combining durability and sustainability.`;

    this.title.setTitle('About Captain Steel - Premium Steel Roofing Solutions');
    
    this.meta.updateTag({ name: 'description', content: description });
    this.meta.updateTag({ name: 'keywords', content: 'steel roofing, premium roofing, roofing solutions, Captain Steel, sustainable roofing' });
    
    // Open Graph tags
    this.meta.updateTag({ property: 'og:title', content: 'About Captain Steel - Premium Steel Roofing Solutions' });
    this.meta.updateTag({ property: 'og:description', content: description });
    this.meta.updateTag({ property: 'og:image', content: 'assets/about/company.jpg' });
    this.meta.updateTag({ property: 'og:url', content: 'https://captainsteelroofsolution.com/about-us' });
    this.meta.updateTag({ property: 'og:type', content: 'website' });

    // Twitter Card tags
    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.meta.updateTag({ name: 'twitter:title', content: 'About Captain Steel - Premium Steel Roofing Solutions' });
    this.meta.updateTag({ name: 'twitter:description', content: description });
    this.meta.updateTag({ name: 'twitter:image', content: 'assets/about/company.jpg' });
  }

  ngOnInit() {
    Aos.init({
      duration: 1000,
      once: true
    });
  }
}
