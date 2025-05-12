import { Component, OnInit, HostListener, inject, PLATFORM_ID, } from '@angular/core';
import { Router, NavigationEnd, RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule, isPlatformBrowser, DOCUMENT, ViewportScroller } from '@angular/common';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  private platformId = inject(PLATFORM_ID);
  private document = inject(DOCUMENT);
  private viewportScroller = inject(ViewportScroller);
  private lastScrollPosition = 0;
  private baseUrl = 'https://captainsteelroofsolution.com';
  
  isMobileMenuOpen = false;
  isSticky = false;
  hideTopBar = false;

  constructor(private router: Router) {
    // Subscribe to router events and scroll to top on navigation
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      if (isPlatformBrowser(this.platformId)) {
        window.scrollTo(0, 0);
      }
    });
  }

  ngOnInit(): void {
    // Close mobile menu on route change
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.closeMobileMenu();
      }
    });
    
    // Add structured data for business
    // if (isPlatformBrowser(this.platformId)) {
    //   this.setBusinessStructuredData();
    // }
  }

  @HostListener('window:scroll')
  onWindowScroll(): void {
    if (isPlatformBrowser(this.platformId)) {
      const currentScroll = window.scrollY;
      this.isSticky = currentScroll > 100;
      this.hideTopBar = currentScroll > 50 && currentScroll > this.lastScrollPosition;
      this.lastScrollPosition = currentScroll;
    }
  }

  toggleMobileMenu(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.isMobileMenuOpen = !this.isMobileMenuOpen;
      this.document.body.classList.toggle('no-scroll', this.isMobileMenuOpen);
    }
  }

  closeMobileMenu(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.isMobileMenuOpen = false;
      this.document.body.classList.remove('no-scroll');
    }
  }

  // Close mobile menu when clicking outside
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    if (!isPlatformBrowser(this.platformId)) return;
    
    const target = event.target as HTMLElement;
    if (this.isMobileMenuOpen && 
        !target.closest('.mobile-nav') && 
        !target.closest('.menu-toggle')) {
      this.closeMobileMenu();
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
      "priceRange": "₹₹", 
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
      "department": [ 
        { 
          "@type": "LocalBusiness", 
          "name": "Bamboo Profile Sheets Department", 
          "description": "Specializing in premium bamboo profile sheets for sustainable roofing in Rajkot and across Gujarat", 
          "telephone": "+91 9879109091" 
        } 
      ], 
      "areaServed": [ 
        { 
          "@type": "City", 
          "name": "Rajkot" 
        }, 
        { 
          "@type": "State", 
          "name": "Gujarat" 
        } 
      ], 
      "sameAs": [ 
        "https://www.facebook.com/captainroof/", 
        "https://www.linkedin.com/company/captain-steel/", 
        "https://twitter.com/captainsteel" 
      ] 
    };
    
    // Add JSON-LD script to head
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);
  }
}
