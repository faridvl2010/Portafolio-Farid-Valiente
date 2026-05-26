import { Component, OnInit, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../../services/portfolio.service';
import { Project } from '../../models/portfolio.model';
import { RevealDirective } from '../../directives/reveal.directive';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, RevealDirective],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent implements OnInit {
  private readonly portfolioService = inject(PortfolioService);
  projects = signal<Project[]>([]);

  ngOnInit() {
    this.portfolioService.getProjects().subscribe(p => this.projects.set(p));
  }

  statusClass(status: string): string {
    if (status === 'Completado') return 'done';
    if (status === 'Activo')     return 'active';
    return 'wip';
  }
}
