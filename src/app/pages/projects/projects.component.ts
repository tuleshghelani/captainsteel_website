import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';
import { isPlatformBrowser } from '@angular/common';
import Aos from 'aos';

interface Project {
  id: number;
  title: string;
  shortDescription?: string;
  fullDescription?: string;
  category?: string;
  imageUrl?: string;
  galleryImages?: string[];
  location?: string;
  completionDate?: string;
  specifications?: string[];
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent implements OnInit {
  activeCategory: string = 'all';
  selectedProject: Project | null = null;
  hasMoreProjects: boolean = true;
  visibleProjects: number = 6;
  completedProjects: number = 500;
  satisfiedClients: number = 100; 
  
  // Sample project data (in a real application, this would come from a service)
  projects: Project[] = [
    {
      id: 1,
      title: 'Project 1',
      shortDescription: 'Premium steel roofing for a large commercial complex with innovative design elements.',
      fullDescription: 'This landmark commercial complex features our state-of-the-art steel roofing solution that provides exceptional durability and weather resistance. The project incorporated custom design elements to match the modern architecture while ensuring optimal energy efficiency and sustainability.',
      category: 'commercial',
      imageUrl: 'assets/products/air-ventilator.jpeg',
      galleryImages: [
        'assets/products/air-ventilator.jpeg',
        'assets/products/polycarbonate-sheets.jpg',
        'assets/products/trapezoidal-sheets.jpeg'
      ],
      location: 'Mumbai, Maharashtra',
      completionDate: 'January 2023',
      specifications: [
        'Total area: 75,000 sq ft',
        'Material: Galvanized steel with premium coating',
        'Special features: Weather-resistant, thermal insulation',
        'Warranty: 25 years'
      ]
    },
    {
      id: 2,
      title: 'Project 2',
      shortDescription: 'Custom steel roofing solution for a premium residential property with aesthetic appeal.',
      fullDescription: 'We delivered a bespoke steel roofing solution for this luxury villa that combines aesthetic elegance with superior functionality. The design incorporated special weather-resistant features while maintaining the high-end appearance required by the client.',
      category: 'residential',
      imageUrl: 'assets/products/air-ventilator.jpeg',
      galleryImages: [
        'assets/products/air-ventilator.jpeg',
        'assets/products/polycarbonate-sheets.jpg',
        'assets/products/trapezoidal-sheets.jpeg'
      ],
      location: 'Pune, Maharashtra',
      completionDate: 'March 2023',
      specifications: [
        'Total area: 5,200 sq ft',
        'Material: Color-coated steel with UV protection',
        'Special features: Decorative trims, sound insulation',
        'Warranty: 20 years'
      ]
    },
    {
      id: 3,
      title: 'Project 3',
      shortDescription: 'Heavy-duty industrial roofing solution designed for extreme conditions and longevity.',
      fullDescription: 'This large-scale industrial project required a robust roofing solution capable of withstanding harsh environmental conditions. We implemented our industrial-grade steel roofing system with reinforced supports and specialized insulation to ensure optimal performance for decades to come.',
      category: 'industrial',
      imageUrl: 'assets/products/air-ventilator.jpeg',
      galleryImages: [
        'assets/products/air-ventilator.jpeg',
        'assets/products/polycarbonate-sheets.jpg',
        'assets/products/trapezoidal-sheets.jpeg'
      ],
      location: 'Ahmedabad, Gujarat',
      completionDate: 'November 2022',
      specifications: [
        'Total area: 120,000 sq ft',
        'Material: Heavy-gauge steel with corrosion-resistant coating',
        'Special features: Heat-reflective surface, industrial ventilation',
        'Warranty: 30 years'
      ]
    },
    {
      id: 4,
      title: 'Project 4',
      shortDescription: 'Sleek steel roofing design for a contemporary office building in the heart of the city.',
      fullDescription: 'Our team provided a comprehensive roofing solution for this innovative office tower, featuring a sleek design that complemented the building\'s modern architecture while ensuring superior protection against the elements.',
      category: 'commercial',
      imageUrl: 'assets/products/air-ventilator.jpeg',
      location: 'Bangalore, Karnataka',
      completionDate: 'May 2023',
      specifications: [
        'Total area: 45,000 sq ft',
        'Material: Premium coated steel with anti-rust technology',
        'Special features: Integrated solar panels, green roof sections',
        'Warranty: 25 years'
      ]
    },
    {
      id: 5,
      title: 'Project 5',
      shortDescription: 'Multi-unit residential complex featuring durable and aesthetically pleasing steel roofing.',
      fullDescription: 'This project involved providing roofing solutions for an entire residential complex comprising 35 individual units. We implemented a standardized yet customizable approach that ensured consistency in quality while allowing for aesthetic variations.',
      category: 'residential',
      imageUrl: 'assets/products/air-ventilator.jpeg',
      location: 'Chennai, Tamil Nadu',
      completionDate: 'February 2023',
      specifications: [
        'Total area: 65,000 sq ft',
        'Material: Lightweight steel with designer finish',
        'Special features: Rainwater harvesting integration, thermal barrier',
        'Warranty: 20 years'
      ]
    },
    {
      id: 6,
      title: 'Project 6',
      shortDescription: 'Large-scale warehouse facility with specialized industrial roofing solution.',
      fullDescription: 'For this expansive warehouse project, we developed a customized industrial roofing system designed to maximize durability and minimize maintenance requirements over an extended operational lifespan.',
      category: 'industrial',
      imageUrl: 'assets/products/air-ventilator.jpeg',
      location: 'Delhi NCR',
      completionDate: 'August 2022',
      specifications: [
        'Total area: 95,000 sq ft',
        'Material: Industrial-grade galvanized steel',
        'Special features: Enhanced load-bearing capacity, strategic skylight integration',
        'Warranty: 30 years'
      ]
    },
    {
      id: 7,
      title: 'Project 7',
      shortDescription: 'Complete roof renovation for an existing shopping mall with minimal disruption.',
      fullDescription: 'This challenging project involved completely replacing the existing roof structure of an operational shopping mall with minimal disruption to daily activities. Our team executed the project in phases, employing specialized techniques to ensure safety and efficiency.',
      category: 'commercial',
      imageUrl: 'assets/products/air-ventilator.jpeg',
      location: 'Hyderabad, Telangana',
      completionDate: 'April 2023',
      specifications: [
        'Total area: 85,000 sq ft',
        'Material: High-grade steel with reflective coating',
        'Special features: Improved insulation, decorative ceiling elements',
        'Warranty: 25 years'
      ]
    },
    {
      id: 8,
      title: 'Project 8',
      shortDescription: 'Premium steel roofing solution for a high-end apartment complex with coastal exposure.',
      fullDescription: 'Located in a coastal area, this luxury apartment complex required specialized roofing solutions to withstand salt exposure and high winds. We developed a custom system using marine-grade materials with enhanced corrosion resistance.',
      category: 'residential',
      imageUrl: 'assets/products/air-ventilator.jpeg',
      location: 'Goa',
      completionDate: 'July 2023',
      specifications: [
        'Total area: 40,000 sq ft',
        'Material: Marine-grade steel with triple-layer protection',
        'Special features: Hurricane resistance, salt-spray protection',
        'Warranty: 25 years'
      ]
    },
    {
      id: 9,
      title: 'Project 9',
      shortDescription: 'Comprehensive roofing system for a large-scale manufacturing facility with specialized needs.',
      fullDescription: 'This manufacturing complex required a roofing solution that could accommodate various industrial processes with different ventilation, temperature, and structural requirements. Our engineered solution addressed these diverse needs while maintaining a cohesive appearance.',
      category: 'industrial',
      imageUrl: 'assets/products/air-ventilator.jpeg',
      location: 'Jamshedpur, Jharkhand',
      completionDate: 'October 2022',
      specifications: [
        'Total area: 150,000 sq ft',
        'Material: Heavy-duty steel with industrial-grade finishes',
        'Special features: Zoned ventilation systems, chemical resistance',
        'Warranty: 30 years'
      ]
    }
  ];

  constructor(
    private meta: Meta,
    private title: Title,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.setupSEO();
  }

  private setupSEO() {
    const description = 'Explore our premium steel roofing projects at Captain Steel. View our portfolio of commercial, residential, and industrial roofing solutions delivered with excellence across India.';

    this.title.setTitle('Premium Roofing Projects - Captain Steel Roof Solutions');
    
    this.meta.updateTag({ name: 'description', content: description });
    this.meta.updateTag({ name: 'keywords', content: 'steel roofing projects, completed projects, roofing portfolio, Captain Steel, premium roofing' });
    
    // Open Graph tags
    this.meta.updateTag({ property: 'og:title', content: 'Premium Roofing Projects - Captain Steel Roof Solutions' });
    this.meta.updateTag({ property: 'og:description', content: description });
    this.meta.updateTag({ property: 'og:image', content: 'assets/projects/projects-hero.jpg' });
    this.meta.updateTag({ property: 'og:url', content: 'https://captainsteelroofsolution.com/projects' });
    this.meta.updateTag({ property: 'og:type', content: 'website' });

    // Twitter Card tags
    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.meta.updateTag({ name: 'twitter:title', content: 'Premium Roofing Projects - Captain Steel Roof Solutions' });
    this.meta.updateTag({ name: 'twitter:description', content: description });
    this.meta.updateTag({ name: 'twitter:image', content: 'assets/projects/projects-hero.jpg' });
  }

  get filteredProjects(): Project[] {
    let filtered = this.activeCategory === 'all' 
      ? this.projects 
      : this.projects.filter(project => project.category === this.activeCategory);
    
    // Return visible number of projects
    return filtered.slice(0, this.visibleProjects);
  }

  ngOnInit(): void {
    // Only initialize AOS if we're in the browser environment
    if (isPlatformBrowser(this.platformId)) {
      setTimeout(() => {
        Aos.init({ duration: 800, once: true });
      }, 0);
    }
  }

  filterProjects(category: string): void {
    this.activeCategory = category;
    this.visibleProjects = 6; // Reset visible projects when changing category
    this.updateHasMoreProjects();
  }

  loadMoreProjects(): void {
    this.visibleProjects += 3;
    this.updateHasMoreProjects();
  }

  updateHasMoreProjects(): void {
    const totalFilteredProjects = this.activeCategory === 'all' 
      ? this.projects.length 
      : this.projects.filter(project => project.category === this.activeCategory).length;
    
    this.hasMoreProjects = this.visibleProjects < totalFilteredProjects;
  }

  openProjectDetails(project: Project): void {
    this.selectedProject = project;
    document.body.classList.add('modal-open');
  }

  closeProjectDetails(): void {
    this.selectedProject = null;
    document.body.classList.remove('modal-open');
  }

  setMainImage(imageUrl: string): void {
    if (this.selectedProject) {
      // Create a new object to trigger change detection
      this.selectedProject = { 
        ...this.selectedProject, 
        imageUrl 
      };
    }
  }
}
