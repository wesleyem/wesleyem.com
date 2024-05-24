// Core Angular
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';


// Application Components
import { JumbotronComponent } from './jumbotron/jumbotron.component';

// FontAwesome
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

// tsParticles
import {
  MoveDirection,
  ClickEvent,
  HoverEvent,
  OutMode,
  Container
} from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";
import { loadFull } from "tsparticles";
import { NgParticlesService, NgxParticlesModule } from "@tsparticles/angular";

// ------------------------------------------------------------------------------------

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    JumbotronComponent,
    FontAwesomeModule,
    NgxParticlesModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  id = "tsparticles";
  particlesUrl = "/tsparticles/particles.json";
  particlesOptions = {
    particles: {
      number: {
        value: 20,
        density: {
          enable: true,
          area: 1000
        }
      },
      color: {
        value: "#f1f3f5"
      },
      shape: {
        type: "circle"
      },
      opacity: {
        value: 0.5,
        random: false,
        anim: {
          enable: false
        }
      },
      size: {
        value: { min: 0.1, max: 0.5}, // 0.1
        random: false,
        anim: {
          enable: false
        }
      },
      links: {
        color: "#f1f3f5",
        distance: 200,
        enable: true,
        opacity: 0.5,
        width: 1
      },
      move: {
        direction: MoveDirection.none,
        enable: true,
        speed: 5,
        random: true,
        straight: false,
        outModes: {
          default: OutMode.bounce
        },
        attract: {
          enable: false
        }
      }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onHover: {
          enable: true,
          mode: "grab"
        },
        onClick: {
          enable: false
        },
        // resize: true,
      },
      modes: {
        grab: {
          distance: 200,
          link: {
            opacity: 1
          }
        }
      }
    },
    detectRetina: true,
  }


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

  ngOnInit(): void {
    this.ngParticlesService.init(async (engine) => {
      
      await loadFull(engine);
    })
  }

  particlesLoaded(container: Container): void {
    console.log(container);
  }

  constructor(faLib: FaIconLibrary, private readonly ngParticlesService: NgParticlesService) {
    faLib.addIcons(
      faGithub,
      faLinkedin,
      faXTwitter,
      faChevronDown,
      faBlog
    );
  }
}