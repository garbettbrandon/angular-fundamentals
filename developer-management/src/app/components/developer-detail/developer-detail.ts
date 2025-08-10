import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DeveloperService } from '../../services/developer';
import { Developer } from '../../models/developer';
import { HeaderComponent } from '../header/header';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-developer-detail',
  standalone: true,
  imports: [CommonModule, FormsModule, HeaderComponent],
  templateUrl: './developer-detail.html',
  styleUrl: './developer-detail.css',
})
export class DeveloperDetailComponent implements OnInit {
  developer: Developer | undefined;
  isEditing = false;
  isDarkMode = false;
  editedDeveloper: Developer | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private developerService: DeveloperService,
    private themeService: ThemeService
  ) {
    this.themeService.isDarkMode$.subscribe((isDark) => {
      this.isDarkMode = isDark;
    });
  }

  ngOnInit(): void {
    this.loadDeveloper();
  }

  loadDeveloper(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.developer = this.developerService.getDeveloperById(id);
    if (!this.developer) {
      this.router.navigate(['/developers']);
    }
  }

  startEditing(): void {
    if (this.developer) {
      this.editedDeveloper = { ...this.developer };
      this.isEditing = true;
    }
  }

  cancelEditing(): void {
    this.isEditing = false;
    this.editedDeveloper = undefined;
  }

  saveChanges(): void {
    if (this.editedDeveloper) {
      this.developerService.updateDeveloper(this.editedDeveloper);
      this.developer = this.editedDeveloper;
      this.isEditing = false;
      this.editedDeveloper = undefined;
    }
  }

  deleteDeveloper(): void {
    if (
      this.developer &&
      confirm('¿Estás seguro de que quieres eliminar este desarrollador?')
    ) {
      this.developerService.deleteDeveloper(this.developer.id);
      this.router.navigate(['/developers']);
    }
  }

  goBack(): void {
    this.router.navigate(['/developers']);
  }
}
