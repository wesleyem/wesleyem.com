import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { JumbotronComponent } from './jumbotron/jumbotron.component';
import {
  FontAwesomeModule,
  FaIconLibrary,
} from '@fortawesome/angular-fontawesome';
import {
  faGithub,
  faLinkedin,
  faXTwitter,
} from '@fortawesome/free-brands-svg-icons'

import {
  faBlog,
  faChevronDown
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    JumbotronComponent,
    FontAwesomeModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  constructor(faLib: FaIconLibrary) {
    faLib.addIcons(
      faGithub,
      faLinkedin,
      faXTwitter,
      faChevronDown,
      faBlog
    )
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
