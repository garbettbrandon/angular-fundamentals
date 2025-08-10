import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { DeveloperService } from '../../services/developer';
import { Developer } from '../../models/developer';
import { HeaderComponent } from '../header/header';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-developer-form',
  standalone: true,
  imports: [CommonModule, FormsModule, HeaderComponent],
  templateUrl: './developer-form.html',
  styleUrl: './developer-form.css'
})
export class DeveloperFormComponent {
  newDeveloper = {
    first_name: '',
    last_name: '',
    email: '',
    gender: null as string | null,
    position: 'Frontend' as string,
    remote: false as boolean,
    photo: 'https://i.pravatar.cc/200?img=' as string
  };

  isDarkMode = false;

  constructor(
    private developerService: DeveloperService,
    private router: Router,
    private themeService: ThemeService
  ) {
    this.themeService.isDarkMode$.subscribe(isDark => {
      this.isDarkMode = isDark;
    });
  }

  onSubmit(): void {
    if (this.isFormValid()) {
      // Generate a random number for the photo URL
      const randomNumber = Math.floor(Math.random() * 100) + 1;
      this.newDeveloper.photo = `https://i.pravatar.cc/200?img=${randomNumber}`;

      this.developerService.addDeveloper(this.newDeveloper as Omit<Developer, 'id'>);
      this.router.navigate(['/developers']);
    }
  }

  cancel(): void {
    this.router.navigate(['/developers']);
  }

  private isFormValid(): boolean {
    return this.newDeveloper.first_name.trim() !== '' &&
           this.newDeveloper.last_name.trim() !== '' &&
           this.newDeveloper.email.trim() !== '' &&
           this.newDeveloper.position.trim() !== '';
  }
}
