import { Component, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PortfolioService } from '../../services/portfolio.service';

interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  private readonly portfolioService = inject(PortfolioService);

  form: ContactForm = { name: '', email: '', subject: '', message: '' };
  submitted = signal(false);
  sending   = signal(false);

  readonly socials = [
    { icon: 'fab fa-github',   label: 'GitHub',   url: 'https://github.com/faridvl2010' },
    { icon: 'fab fa-linkedin', label: 'LinkedIn', url: 'https://linkedin.com/in/farid-valiente' },
    { icon: 'fas fa-envelope', label: 'Email',    url: 'mailto:farid.valiente@uptc.edu.co' },
  ];

  onSubmit() {
    if (!this.form.name || !this.form.email || !this.form.message) return;
    this.sending.set(true);
    setTimeout(() => {
      this.sending.set(false);
      this.submitted.set(true);
      this.form = { name: '', email: '', subject: '', message: '' };
    }, 1200);
  }

  resetForm() {
    this.submitted.set(false);
  }
}
