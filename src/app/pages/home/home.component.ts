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
  currentSlideIndex = 2;
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
  }

  prevSlide() {
    this.currentSlideIndex = (this.currentSlideIndex > 0) ? this.currentSlideIndex - 1 : this.products.length - 1;
    this.updateSlidePosition();
  }

  nextSlide() {
    this.currentSlideIndex = (this.currentSlideIndex < this.products.length - 1) ? this.currentSlideIndex + 1 : 0;
    this.updateSlidePosition();
  }

  updateSlidePosition() {
    const slidesContainer = document.querySelector('.slides') as HTMLElement;
    if (slidesContainer) {
      slidesContainer.style.transform = `translateX(-${this.currentSlideIndex * 100}%)`;
    }
  }
}
