import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { Developer } from '../models/developer';

@Injectable({
  providedIn: 'root',
})
export class DeveloperService {
  private developers: Developer[] = [];
  private developersSubject = new BehaviorSubject<Developer[]>([]);

  constructor(private http: HttpClient) {
    this.loadDevelopers();
  }

  private loadDevelopers(): void {
    console.log('Loading developers from assets/developers.json...');
    this.http.get<Developer[]>('assets/developers.json').subscribe(
      (data) => {
        console.log('Developers loaded successfully:', data);
        console.log('Number of developers:', data.length);
        // Normalize remote values to handle null values
        this.developers = data.map((dev) => ({
          ...dev,
          remote: dev.remote === null ? false : dev.remote,
        }));
        this.developersSubject.next(this.developers);
      },
      (error) => {
        console.error('Error loading developers:', error);
      }
    );
  }

  getDevelopers(): Observable<Developer[]> {
    return this.developersSubject.asObservable();
  }

  getDeveloperById(id: number): Developer | undefined {
    return this.developers.find((dev) => dev.id === id);
  }

  addDeveloper(developer: Omit<Developer, 'id'>): void {
    const newId = Math.max(...this.developers.map((d) => d.id)) + 1;
    const newDeveloper: Developer = {
      ...developer,
      id: newId,
      gender: developer.gender || null,
      remote: developer.remote === null ? false : developer.remote,
    };
    this.developers.push(newDeveloper);
    this.developersSubject.next(this.developers);
  }

  updateDeveloper(developer: Developer): void {
    const index = this.developers.findIndex((d) => d.id === developer.id);
    if (index !== -1) {
      this.developers[index] = developer;
      this.developersSubject.next(this.developers);
    }
  }

  deleteDeveloper(id: number): void {
    this.developers = this.developers.filter((d) => d.id !== id);
    this.developersSubject.next(this.developers);
  }

  getDevelopersByPosition(position: string): Developer[] {
    return this.developers.filter((dev) => dev.position === position);
  }
}
