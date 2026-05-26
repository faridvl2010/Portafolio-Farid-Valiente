import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Profile, SkillCategory, Project, Experience, Education, Certification } from '../models/portfolio.model';
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class PortfolioService {
  private readonly http = inject(HttpClient);
  private readonly base = `${environment.apiUrl}/api/portfolio`;

  getProfile(): Observable<Profile> {
    return this.http.get<Profile>(`${this.base}/profile`);
  }

  getSkills(): Observable<SkillCategory[]> {
    return this.http.get<SkillCategory[]>(`${this.base}/skills`);
  }

  getProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(`${this.base}/projects`);
  }

  getExperience(): Observable<Experience[]> {
    return this.http.get<Experience[]>(`${this.base}/experience`);
  }

  getEducation(): Observable<Education[]> {
    return this.http.get<Education[]>(`${this.base}/education`);
  }

  getCertifications(): Observable<Certification[]> {
    return this.http.get<Certification[]>(`${this.base}/certifications`);
  }
}
