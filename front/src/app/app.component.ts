import { Component, HostListener, signal } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroComponent } from './components/hero/hero.component';
import { AboutComponent } from './components/about/about.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { ContactComponent } from './components/contact/contact.component';
import { CursorComponent } from './components/cursor/cursor.component';
import { BootScreenComponent } from './components/boot-screen/boot-screen.component';
import { ToastComponent } from './components/toast/toast.component';
import { TerminalWidgetComponent } from './components/terminal-widget/terminal-widget.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavbarComponent,
    HeroComponent,
    AboutComponent,
    SkillsComponent,
    ProjectsComponent,
    ExperienceComponent,
    ContactComponent,
    CursorComponent,
    BootScreenComponent,
    ToastComponent,
    TerminalWidgetComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  readonly currentYear  = new Date().getFullYear();
  scrollProgress = signal(0);

  @HostListener('window:scroll')
  onScroll() {
    const el = document.documentElement;
    const pct = (el.scrollTop / (el.scrollHeight - el.clientHeight)) * 100;
    this.scrollProgress.set(Math.min(pct, 100));
  }
}
