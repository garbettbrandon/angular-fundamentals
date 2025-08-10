import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { DeveloperService } from '../../services/developer';
import { Developer } from '../../models/developer';
import { HeaderComponent } from '../header/header';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-developer-list',
  standalone: true,
  imports: [CommonModule, HeaderComponent],
  templateUrl: './developer-list.html',
  styleUrl: './developer-list.css',
})
export class DeveloperListComponent implements OnInit {
  developers: Developer[] = [];
  filteredDevelopers: Developer[] = [];
  currentFilter: string = 'all';
  isDarkMode = false;

  constructor(
    private developerService: DeveloperService,
    private router: Router,
    private themeService: ThemeService
  ) {
    this.themeService.isDarkMode$.subscribe((isDark) => {
      this.isDarkMode = isDark;
    });
  }

  ngOnInit(): void {
    this.loadDevelopers();
  }

  loadDevelopers(): void {
    console.log('Component: Loading developers...');
    this.developerService.getDevelopers().subscribe((developers) => {
      console.log('Component: Developers received:', developers);
      console.log('Component: Number of developers:', developers.length);
      this.developers = developers;
      this.filteredDevelopers = developers;
      console.log('Component: filteredDevelopers set to:', this.filteredDevelopers.length);
    });
  }

  showAll(): void {
    this.currentFilter = 'all';
    this.filteredDevelopers = this.developers;
  }

  showFrontend(): void {
    this.currentFilter = 'frontend';
    this.filteredDevelopers = this.developers.filter(
      (dev) => dev.position === 'Frontend'
    );
  }

  showBackend(): void {
    this.currentFilter = 'backend';
    this.filteredDevelopers = this.developers.filter(
      (dev) => dev.position === 'Backend'
    );
  }

  viewDetail(developerId: number): void {
    this.router.navigate(['/developer', developerId]);
  }
}
