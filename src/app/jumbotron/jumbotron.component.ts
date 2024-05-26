import { Component, Input } from '@angular/core';
// ng-icons
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { bootstrapGithub, bootstrapTwitterX, bootstrapLinkedin, bootstrapBlockquoteLeft, bootstrapChevronDown } from '@ng-icons/bootstrap-icons';

@Component({
  selector: 'app-jumbotron',
  standalone: true,
  imports: [
    NgIconComponent
  ],
  templateUrl: './jumbotron.component.html',
  styleUrl: './jumbotron.component.scss',
  viewProviders: [provideIcons({
    bootstrapGithub, bootstrapTwitterX, bootstrapLinkedin, bootstrapBlockquoteLeft, bootstrapChevronDown
  })]
})
export class JumbotronComponent {

  @Input() site: any;

}
