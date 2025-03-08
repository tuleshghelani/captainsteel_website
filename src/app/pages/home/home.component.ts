import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import Aos from 'aos';

interface Product {
  title: string;
  description: string;
  image: string;
  link: string;
  aosDelay: number;
}

interface Dealership {
  image: string;
  name: string;
  alt: string;
}

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
  products: Product[] = [
    {
      title: 'Corrugated Roofing Sheets',
      description: 'High-quality corrugated sheets for durable and weather-resistant roofing solutions.',
      image: 'assets/home/Corrugated-roofing-sheets.jpeg',
      link: '/products/corrugated-sheets',
      aosDelay: 200
    },
    {
      title: 'Trapezoidal Profile Sheets',
      description: 'Premium trapezoidal sheets offering superior strength and modern aesthetics.',
      image: 'assets/home/trapezoidal-sheets.jpeg',
      link: '/products/trapezoidal-sheets',
      aosDelay: 200
    },
    {
      title: 'Air Ventilator',
      description: 'Premium trapezoidal sheets offering superior strength and modern aesthetics.',
      image: 'assets/home/air-ventilator.jpeg',
      link: '/products/air-ventilator',
      aosDelay: 200
    },
    {
      title: 'Polycarbonate Sheets',
      description: 'Premium trapezoidal sheets offering superior strength and modern aesthetics.',
      image: 'assets/home/polycarbonate-sheets.jpeg',
      link: '/products/polycarbonate-sheets',
      aosDelay: 200
    },
  ];
  yearsOfExperience: number = new Date().getFullYear() - 2020;
  experienceText: string = this.yearsOfExperience + '+';
  dealerships: Dealership[] = [
    {
      image: 'assets/dealership/AM-NS-india.jpg',
      name: 'AM NS India',
      alt: 'AM NS India Logo'
    },
    {
      image: 'assets/dealership/APL-Roof-Tuf.svg',
      name: 'APL Roof Tuf',
      alt: 'APL Roof Tuf Logo'
    },
    {
      image: 'assets/dealership/jsw-colouron-plus.png',
      name: 'JSW Colouron Plus',
      alt: 'JSW Colouron Plus Logo'
    },
    {
      image: 'assets/dealership/jsw-pragati.png',
      name: 'JSW Pragati',
      alt: 'JSW Pragati Logo'
    },
    {
      image: 'assets/dealership/jsw-silveron.png',
      name: 'JSW Silveron',
      alt: 'JSW Silveron Logo'
    },
    {
      image: 'assets/dealership/primus-fastening-technology.jpeg',
      name: 'Primus Fastening Technology',
      alt: 'Primus Fastening Technology Logo'
    },
    {
      image: 'assets/dealership/tata-bluescope-steel.png',
      name: 'Tata BlueScope Steel',
      alt: 'Tata BlueScope Steel Logo'
    },
    {
      image: 'assets/dealership/tilara.png',
      name: 'Tilara',
      alt: 'Tilara Logo'
    }
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
