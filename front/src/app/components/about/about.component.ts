import { Component, OnInit, AfterViewInit, OnDestroy, signal, inject, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../../services/portfolio.service';
import { Profile } from '../../models/portfolio.model';
import { RevealDirective } from '../../directives/reveal.directive';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RevealDirective],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent implements OnInit, AfterViewInit, OnDestroy {
  private readonly portfolioService = inject(PortfolioService);
  private readonly host = inject(ElementRef);

  profile       = signal<Profile | null>(null);
  counterValues = signal<string[]>([]);
  private observer?: IntersectionObserver;

  ngOnInit() {
    this.portfolioService.getProfile().subscribe(p => {
      this.profile.set(p);
      this.counterValues.set(p.stats.map(() => '0'));
    });
  }

  ngAfterViewInit() {
    this.observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          this.animateCounters();
          this.observer?.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    this.observer.observe(this.host.nativeElement);
  }

  ngOnDestroy() {
    this.observer?.disconnect();
  }

  private animateCounters() {
    const stats = this.profile()?.stats ?? [];
    stats.forEach((stat, i) => {
      const raw    = parseInt(stat.value);
      const suffix = stat.value.replace(/[0-9]/g, '');
      if (isNaN(raw)) return;

      const duration = 1400;
      const start    = performance.now();

      const tick = (now: number) => {
        const progress = Math.min((now - start) / duration, 1);
        const eased    = 1 - Math.pow(1 - progress, 3);
        const current  = Math.floor(eased * raw);
        this.counterValues.update(vals => {
          const next = [...vals];
          next[i] = current + suffix;
          return next;
        });
        if (progress < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    });
  }
}
