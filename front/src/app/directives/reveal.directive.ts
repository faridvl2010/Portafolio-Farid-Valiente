import { Directive, ElementRef, Input, OnInit, inject } from '@angular/core';

@Directive({
  selector: '[appReveal]',
  standalone: true,
})
export class RevealDirective implements OnInit {
  /** Optional delay in ms: <div appReveal [revealDelay]="150"> */
  @Input() revealDelay = 0;
  private readonly el = inject(ElementRef);

  ngOnInit() {
    const el = this.el.nativeElement as HTMLElement;
    el.style.opacity = '0';
    el.style.transform = 'translateY(28px)';
    el.style.transition =
      `opacity 0.65s ease ${this.revealDelay}ms, transform 0.65s ease ${this.revealDelay}ms`;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = '1';
          el.style.transform = 'translateY(0)';
          observer.unobserve(el);
        }
      },
      { threshold: 0.1 },
    );
    observer.observe(el);
  }
}
