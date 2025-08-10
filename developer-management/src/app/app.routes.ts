import { Routes } from '@angular/router';
import { WelcomeComponent } from './components/welcome/welcome';
import { DeveloperListComponent } from './components/developer-list/developer-list';
import { DeveloperDetailComponent } from './components/developer-detail/developer-detail';
import { DeveloperFormComponent } from './components/developer-form/developer-form';

export const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'developers', component: DeveloperListComponent },
  { path: 'developer/:id', component: DeveloperDetailComponent },
  { path: 'add-developer', component: DeveloperFormComponent },
  { path: '**', redirectTo: '' }
];
