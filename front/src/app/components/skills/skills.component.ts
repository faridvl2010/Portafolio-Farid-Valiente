import { Component, OnInit, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../../services/portfolio.service';
import { SkillCategory } from '../../models/portfolio.model';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})
export class SkillsComponent implements OnInit {
  private readonly portfolioService = inject(PortfolioService);
  skills = signal<SkillCategory[]>([]);

  ngOnInit() {
    this.portfolioService.getSkills().subscribe(s => this.skills.set(s));
  }

  levelClass(level: number): string {
    if (level >= 85) return 'expert';
    if (level >= 70) return 'advanced';
    return 'intermediate';
  }
}
