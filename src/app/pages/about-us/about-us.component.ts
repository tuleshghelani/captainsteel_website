import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
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
  teamMembers: TeamMember[] = [
    {
      name: 'Bhaveshbhai Bhuva',
      position: 'Founder',
      image: 'assets/team/ceo.jpg',
      description: 'Over 10 years of experience in steel manufacturing'
    },
    {
      name: 'Rajendrabhai Bhuva',
      position: 'Founder',
      image: 'assets/team/technical.jpg',
      description: 'Expert in structural engineering and design'
    },
  ];

  ngOnInit() {
    Aos.init({
      duration: 1000,
      once: true
    });
  }
}
