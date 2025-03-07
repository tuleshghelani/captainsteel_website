import { Component, OnInit, HostListener, inject, PLATFORM_ID } from '@angular/core';
import { Router, NavigationEnd, RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  private platformId = inject(PLATFORM_ID);
  private lastScrollPosition = 0;
  
  isMobileMenuOpen = false;
  isSticky = false;
  hideTopBar = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Close mobile menu on route change
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.closeMobileMenu();
      }
    });
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
      document.body.classList.toggle('mobile-menu-open', this.isMobileMenuOpen);
    }
  }

  closeMobileMenu(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.isMobileMenuOpen = false;
      document.body.classList.remove('mobile-menu-open');
    }
  }

  // Close mobile menu when clicking outside
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    if (!isPlatformBrowser(this.platformId)) return;
    
    const target = event.target as HTMLElement;
    if (this.isMobileMenuOpen && 
        !target.closest('.mobile-nav') && 
        !target.closest('.mobile-menu-btn')) {
      this.closeMobileMenu();
    }
  }
}
