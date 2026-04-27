import { Component, OnInit, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../../services/portfolio.service';
import { Profile } from '../../models/portfolio.model';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent implements OnInit {
  private readonly portfolioService = inject(PortfolioService);
  profile = signal<Profile | null>(null);

  ngOnInit() {
    this.portfolioService.getProfile().subscribe(p => this.profile.set(p));
  }
}
