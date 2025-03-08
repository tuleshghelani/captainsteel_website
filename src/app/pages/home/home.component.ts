import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import Aos from 'aos';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  currentSlide = 0;
  slides = [0, 1, 2, 3, 4]; // Array for slide indicators
  products = [
    {
      title: 'Corrugated Roofing Sheets',
      description: 'High-quality corrugated sheets for durable and weather-resistant roofing solutions.',
      image: 'assets/home/Corrugated-roofing-sheets.jpeg',
      link: '/products/corrugated-sheets',
      aosDelay: '0'
    },
    {
      title: 'Trapezoidal Profile Sheets',
      description: 'Premium trapezoidal sheets offering superior strength and modern aesthetics.',
      image: 'assets/home/trapezoidal-sheets.jpeg',
      link: '/products/trapezoidal-sheets',
      aosDelay: '100'
    },
    {
      title: 'Air Ventilator',
      description: 'Premium trapezoidal sheets offering superior strength and modern aesthetics.',
      image: 'assets/home/air-ventilator.jpeg',
      link: '/products/air-ventilator',
      aosDelay: '100'
    },
    {
      title: 'Air Ventilator',
      description: 'Premium trapezoidal sheets offering superior strength and modern aesthetics.',
      image: 'assets/home/air-ventilator.jpeg',
      link: '/products/air-ventilator',
      aosDelay: '100'
    },
    {
      title: 'Air Ventilator',
      description: 'Premium trapezoidal sheets offering superior strength and modern aesthetics.',
      image: 'assets/home/air-ventilator.jpeg',
      link: '/products/air-ventilator',
      aosDelay: '100'
    },
  ];

  ngOnInit() {
    Aos.init({
      duration: 1000,
      once: true
    });
    this.startSlideShow();
  }

  prevSlide() {
    this.currentSlide = this.currentSlide === 0 ? this.slides.length - 1 : this.currentSlide - 1;
  }

  nextSlide() {
    this.currentSlide = this.currentSlide === this.slides.length - 1 ? 0 : this.currentSlide + 1;
  }

  goToSlide(index: number) {
    this.currentSlide = index;
  }

  private startSlideShow() {
    setInterval(() => {
      this.nextSlide();
    }, 5000); // Change slide every 5 seconds
  }
}
