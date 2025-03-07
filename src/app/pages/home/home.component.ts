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
  products = [
    {
      title: 'Corrugated Roofing Sheets',
      description: 'High-quality corrugated sheets for durable and weather-resistant roofing solutions.',
      image: 'assets/images/products/corrugated-sheets.jpg',
      link: '/products/corrugated-sheets',
      aosDelay: '0'
    },
    {
      title: 'Trapezoidal Profile Sheets',
      description: 'Premium trapezoidal sheets offering superior strength and modern aesthetics.',
      image: 'assets/images/products/trapezoidal-sheets.jpg',
      link: '/products/trapezoidal-sheets',
      aosDelay: '100'
    },
  ];

  ngOnInit() {
    Aos.init({
      duration: 1000,
      once: true
    });
  }
}
