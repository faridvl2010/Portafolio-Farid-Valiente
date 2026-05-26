import { Component, OnInit, AfterViewInit, OnDestroy, signal, inject, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../../services/portfolio.service';
import { SkillCategory } from '../../models/portfolio.model';
import { RevealDirective } from '../../directives/reveal.directive';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, RevealDirective],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})
export class SkillsComponent implements OnInit, AfterViewInit, OnDestroy {
  private readonly portfolioService = inject(PortfolioService);
  private readonly host = inject(ElementRef);

  skills    = signal<SkillCategory[]>([]);
  animated  = signal(false);
  private observer?: IntersectionObserver;

  ngOnInit() {
    this.portfolioService.getSkills().subscribe(s => this.skills.set(s));
  }

  ngAfterViewInit() {
    this.observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          this.animated.set(true);
          this.observer?.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    this.observer.observe(this.host.nativeElement);
  }

  ngOnDestroy() {
    this.observer?.disconnect();
  }

  levelClass(level: number): string {
    if (level >= 85) return 'expert';
    if (level >= 70) return 'advanced';
    return 'intermediate';
  }
}
