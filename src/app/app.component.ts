// Core Angular
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

// Application Components
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { NavbarComponent } from './navbar/navbar.component';

// ng-icons
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { bootstrapGithub, bootstrapLinkedin, bootstrapTwitterX } from '@ng-icons/bootstrap-icons';

// ------------------------------------------------------------------------------------

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NgIconComponent,
    NavbarComponent,
    RouterLink, RouterOutlet, RouterLinkActive
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  viewProviders: [
    provideIcons({bootstrapGithub, bootstrapLinkedin, bootstrapTwitterX})
  ]
})
export class AppComponent {

}