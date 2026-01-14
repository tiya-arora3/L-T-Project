import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive, TitleCasePipe],
  template: `
    <nav class="main-nav">
      <div class="nav-brand">
        <h2>👥 Employee Dashboard</h2>
      </div>
    
    </nav>
    <main class="main-content">
      <router-outlet></router-outlet>
    </main>
  `,
  styles: [`
    .main-nav {
      background: linear-gradient(135deg, #3f51b5, #5c6bc0); 
      color: white; padding: 1rem 2rem; box-shadow: 0 4px 20px rgba(63,81,181,0.3);
    }
    .nav-brand h2 { margin: 0; font-size: 1.8rem; }
    .nav-links { display: flex; gap: 2rem; margin-left: auto; }
    .nav-link { 
      color: white; text-decoration: none; padding: 0.8rem 1.5rem; 
      border-radius: 25px; font-weight: 500; transition: all 0.3s;
    }
    .nav-link:hover { background: rgba(255,255,255,0.2); transform: translateY(-2px); }
    .nav-link.active { 
      background: rgba(255,255,255,0.3); 
      box-shadow: 0 4px 15px rgba(255,255,255,0.2);
    }
    .main-content { min-height: calc(100vh - 80px); }
  `]
})
export class AppComponent {}
