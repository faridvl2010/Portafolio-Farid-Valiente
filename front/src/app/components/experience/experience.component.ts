import { Component, OnInit, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../../services/portfolio.service';
import { Experience, Education, Certification } from '../../models/portfolio.model';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss',
})
export class ExperienceComponent implements OnInit {
  private readonly portfolioService = inject(PortfolioService);

  experience     = signal<Experience[]>([]);
  education      = signal<Education[]>([]);
  certifications = signal<Certification[]>([]);
  activeTab      = signal<'experience' | 'education' | 'certifications'>('experience');

  ngOnInit() {
    this.portfolioService.getExperience().subscribe(e => this.experience.set(e));
    this.portfolioService.getEducation().subscribe(e => this.education.set(e));
    this.portfolioService.getCertifications().subscribe(c => this.certifications.set(c));
  }
}
