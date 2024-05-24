import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IconResolver, MatIcon, MatIconRegistry } from '@angular/material/icon';
import { JumbotronComponent } from './jumbotron/jumbotron.component';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    JumbotronComponent,
    MatIcon
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    const resolver: IconResolver = (name) =>
      sanitizer.bypassSecurityTrustResourceUrl(`/svg/${name}.svg`);
    iconRegistry.addSvgIconResolver(resolver);
  }
  // 
  site = {
    photo: "/headshot.jpg",
    title: "Wesley Montserrat",
    tag: "Software Engineering | DevOps | Cybersecurity",
    social: {
      linkedin: "wesleymontserrat",
      github: "wesleyem",
      x: "spo0f_"
    }
  }
}
