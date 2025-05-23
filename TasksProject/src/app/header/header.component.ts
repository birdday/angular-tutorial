import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  // standalone: true, // Default in Angular 19+
  // Alternative is modular components (older style).
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  // Also stylesUrls for multiple css styles.
})
export class HeaderComponent {}
