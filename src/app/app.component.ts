// Core Angular
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

// Application Components
import { JumbotronComponent } from './jumbotron/jumbotron.component';
import { MainComponent } from './main/main.component';

// ------------------------------------------------------------------------------------

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    JumbotronComponent,
    MainComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',

})
export class AppComponent {
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