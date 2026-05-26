import { Directive, ElementRef, HostListener, Input, inject } from '@angular/core';

@Directive({ selector: '[appTilt]', standalone: true })
export class TiltDirective {
  @Input() appTilt: string = '';
  private readonly el = inject(ElementRef);

  @HostListener('mousemove', ['$event'])
  onMouseMove(e: MouseEvent) {
    const el   = this.el.nativeElement as HTMLElement;
    const rect = el.getBoundingClientRect();
    const cx   = rect.left + rect.width  / 2;
    const cy   = rect.top  + rect.height / 2;
    const rotX = ((e.clientY - cy) / (rect.height / 2)) * -7;
    const rotY = ((e.clientX - cx) / (rect.width  / 2)) *  7;
    el.style.transform  = `perspective(900px) rotateX(${rotX}deg) rotateY(${rotY}deg) scale3d(1.025,1.025,1.025)`;
    el.style.transition = 'transform 0.08s ease';
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    const el = this.el.nativeElement as HTMLElement;
    el.style.transform  = '';
    el.style.transition = 'transform 0.45s ease';
  }
}
