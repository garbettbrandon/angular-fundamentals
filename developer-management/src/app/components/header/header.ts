import { Component, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { ThemeService } from '../../services/theme.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class HeaderComponent {
  @Output() showUsers = new EventEmitter<void>();
  @Output() addUser = new EventEmitter<void>();

  isDarkMode = false;

  constructor(
    private router: Router,
    private themeService: ThemeService
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

  toggleTheme(): void {
    this.themeService.toggleTheme();
  }
}
