import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header';
import { ThemeService } from '../../services/theme.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [CommonModule, HeaderComponent],
  templateUrl: './welcome.html',
  styleUrl: './welcome.css'
})
export class WelcomeComponent {
  isDarkMode = false;

  constructor(
    private themeService: ThemeService,
    private router: Router
  ) {
    this.themeService.isDarkMode$.subscribe(isDark => {
      this.isDarkMode = isDark;
    });
  }

  onShowUsers(): void {
    this.router.navigate(['/developers']);
  }

  onAddUser(): void {
    this.router.navigate(['/add-developer']);
  }
}
