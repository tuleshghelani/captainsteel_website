import { Component, OnInit, PLATFORM_ID, Inject } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';
import * as AOS from 'aos';

interface Client {
  name: string;
  logoPath: string;
  isBlack?: boolean;
}

interface Testimonial {
  text: string;
  position?: string;
  company?: string;
}

@Component({
  selector: 'app-clients',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './clients.component.html',
  styleUrl: './clients.component.scss'
})
export class ClientsComponent implements OnInit {
  clientsCount: number = 500; 

  clients: Client[] = [
    {
      name: 'Airports Authority of India',
      logoPath: 'assets/clients/Airports_Authority_of_India_logo.png'
    },
    {
      name: 'Aatomize Machine',
      logoPath: 'assets/clients/aatomize-machine.png'
    },
    {
      name: 'Ambuja Cement',
      logoPath: 'assets/clients/ambuja-cement.jpg'
    },
    {
      name: 'Angel Pipe',
      logoPath: 'assets/clients/angel-pipe.png'
    },
    {
      name: 'Balaji Wafers',
      logoPath: 'assets/clients/balaji.svg'
    },
    {
      name: 'Bediya Technocast',
      logoPath: 'assets/clients/bediya-technocast.jpeg'
    },
    {
      name: 'Bhoomi Agro',
      logoPath: 'assets/clients/bhoomi-agro.png'
    },
    {
      name: 'Chehar Detergent',
      logoPath: 'assets/clients/chehar-detergent.png'
    },
    {
      name: 'Davat Beverages',
      logoPath: 'assets/clients/davatbeverages.png'
    },
    {
      name: 'Dhs-Metco',
      logoPath: 'assets/clients/dhs-metco.png'
    },
    {
      name: 'Doctor Pumps',
      logoPath: 'assets/clients/doctor-pumps.png'
    },
    {
      name: 'Everest Starch',
      logoPath: 'assets/clients/everest-starch.png'
    },
    {
      name: 'Falcan Pump',
      logoPath: 'assets/clients/falcan-pump.png'
    },
    {
      name:'Flowtech Pump',
      logoPath: 'assets/clients/flowtech-pump.png'
    },
    {
      name: 'Galaxy Technoforge',
      logoPath: 'assets/clients/galaxy-technoforge.png'
    },
    {
      name: 'Giriraj Milk',
      logoPath: 'assets/clients/giriraj-milk.png'
    },
    {
      name: 'Goldcoin',
      logoPath: 'assets/clients/goldcoin.webp'
    },
    {
      name: 'Harmony Laminates',
      logoPath: 'assets/clients/harmony-laminates.png'
    },
    {
      name: 'Hi-Bond Cement',
      logoPath: 'assets/clients/hi-bond-cement.png'
    },
    {
      name: 'Indian Railway',
      logoPath: 'assets/clients/indian-railway.jpg'
    },
    {
      name: 'Jupiter Machine',
      logoPath: 'assets/clients/jupiter-machine.jpeg'
    },
    {
      name: 'Jyoti CNC',
      logoPath: 'assets/clients/Jyoti-CNC.jpeg'
    },
    {
      name:'Kaneriya Oil Industries',
      logoPath: 'assets/clients/kaneriya-oil-industries.png'
    },
    {
      name: 'KBZ Foods',
      logoPath: 'assets/clients/KBZ.jpg'
    },
    {
      name: 'Khusaboo Ice Cream',
      logoPath: 'assets/clients/khusaboo-ice-cream.png'
    },
    {
      name: 'Magotteaux',
      logoPath: 'assets/clients/Magotteaux.png'
    },
    {
      name: 'Meera Casting',
      logoPath: 'assets/clients/meera-casting.png'
    },
    {
      name: 'Omni Tech',
      logoPath: 'assets/clients/omni-tech.png'
    },
    {
      name: 'Orbit',
      logoPath: 'assets/clients/orbit.png'
    },
    {
      name: 'Pan Agri',
      logoPath: 'assets/clients/pan-agri.jpg'
    },
    {
      name: 'Pantex',
      logoPath: 'assets/clients/pantex.png'
    },
    {
      name: 'Patel Brass',
      logoPath: 'assets/clients/patel-brass.png'
    },
    {
      name: 'Rajani Cha',
      logoPath: 'assets/clients/rajani-cha.svg'
    },
    {
      name: 'Ravi Techno Forge',
      logoPath: 'assets/clients/ravi-techno-forge.png'
    },
    {
      name: 'Rajan Techcast',
      logoPath: 'assets/clients/rajan-techcast.png'
    },
    {
      name: 'Redifil',
      logoPath: 'assets/clients/redifil.png'
    },
    {
      name: 'Reliance',
      logoPath: 'assets/clients/reliance.png',
      isBlack: true
    },
    {
      name: 'Satani Forge',
      logoPath: 'assets/clients/SATANI-FORGE.png'
    },
    {
      name: 'Sanddy Electronics',
      logoPath: 'assets/clients/sanddy-electonics.png'
    },
    {
      name: 'Sendura Forge',
      logoPath: 'assets/clients/sendura-forge.png'
    },
    {
      name: 'Shailesh Forging',
      logoPath: 'assets/clients/sensitive-forge.gif'
    },
    {
      name: 'Shailesh Forging',
      logoPath: 'assets/clients/shailesh-forging.png'
    },
    {
      name: 'Samay Expeller',
      logoPath: 'assets/clients/samay-expeller.webp'
    },
    {
      name: 'Sumangal Castings',
      logoPath: 'assets/clients/sumangal-castings.png',
      isBlack: true
    },
    {
      name: 'Tirth Agro',
      logoPath: 'assets/clients/shaktiman-agro.png'
    },
    {
      name: 'Tilara Polyplast',
      logoPath: 'assets/clients/tilara.png'
    },
    {
      name: 'Shilpan Cast',
      logoPath: 'assets/clients/shilpan-cast.jpeg'
    },
    {
      name: 'Shreeya Peanuts',
      logoPath: 'assets/clients/shreeya-peanuts.png'
    },
    {
      name: 'Silver Pump',
      logoPath: 'assets/clients/silver-pump.png',
      isBlack: true
    },
    {
      name: 'Super Casting',
      logoPath: 'assets/clients/super-casting.gif'
    },
    {
      name: 'Synergy Transformers',
      logoPath: 'assets/clients/synergy-transformers.png'
    },
    {
      name: 'Synnova Gear',
      logoPath: 'assets/clients/synnova-gear.jpg'
    },
    {
      name: 'Turbo Casting',
      logoPath: 'assets/clients/turbo-casting.png'
    },
    {
      name: 'Unique Forge',
      logoPath: 'assets/clients/unique-forge.webp',
      isBlack: true
    },
    {
      name: 'Unity Cement',
      logoPath: 'assets/clients/unity-cement.jpeg'
    },
    {
      name:'Vanraj Foods',
      logoPath: 'assets/clients/vanraj-food.jpeg'
    },
    {
      name: 'Vishwas Seed',
      logoPath: 'assets/clients/vishwas-seed.png'
    },
    {
      name:'Vision Laminates',
      logoPath: 'assets/clients/vision-laminates.jpeg'
    },
    {
      name: 'VK Drinks',
      logoPath: 'assets/clients/vk-drinks.png'
    }
  ];

  testimonials: Testimonial[] = [
    {
      text: "Captain Steel delivered exceptional quality roofing for our manufacturing facility. Their attention to detail and commitment to deadlines made them the perfect partner for our expansion project.",
    },
    {
      text: "We've worked with Captain Steel on multiple projects, and their consistent quality and professional service keep us coming back. Their roofing solutions have significantly improved our facilities' durability and energy efficiency.",
    },
    {
      text: "Captain Steel's premium roofing solutions have withstood extreme weather conditions at our facilities. Their technical expertise and quality materials make them our preferred roofing partner.",
    }
  ];

  constructor(
    private meta: Meta,
    private title: Title,
    @Inject(PLATFORM_ID) private platformId: Object
  ) { }

  ngOnInit(): void {
    this.setupSEO();
    
    // Initialize AOS animations only in browser environment
    if (isPlatformBrowser(this.platformId)) {
      setTimeout(() => {
        AOS.init({
          duration: 800,
          once: true
        });
      });
    }
  }

  private setupSEO(): void {
    const description = 'Discover Captain Steel\'s portfolio of satisfied clients. Leading companies across India trust our premium steel roofing solutions for their commercial and industrial facilities.';

    this.title.setTitle('Our Valued Clients | Captain Steel Premium Roofing Solutions, Rajkot');
    
    this.meta.updateTag({ name: 'description', content: description });
    this.meta.updateTag({ name: 'keywords', content: 'steel roofing clients, Captain Steel clients, premium roofing clients, industrial roofing partners, commercial roofing clients' });
    
    // Open Graph tags
    this.meta.updateTag({ property: 'og:title', content: 'Our Valued Clients | Captain Steel Premium Roofing Solutions, Rajkot' });
    this.meta.updateTag({ property: 'og:description', content: description });
    this.meta.updateTag({ property: 'og:image', content: 'assets/clients/clients-showcase.jpg' });
    this.meta.updateTag({ property: 'og:url', content: 'https://captainsteelroofsolution.com/clients' });
    this.meta.updateTag({ property: 'og:type', content: 'website' });

    // Twitter Card tags
    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.meta.updateTag({ name: 'twitter:title', content: 'Our Valued Clients | Captain Steel Premium Roofing Solutions, Rajkot' });
    this.meta.updateTag({ name: 'twitter:description', content: description });
    this.meta.updateTag({ name: 'twitter:image', content: 'assets/clients/clients-showcase.jpg' });
  }
}
