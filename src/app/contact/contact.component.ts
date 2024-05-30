import { Component } from '@angular/core';
import { NgIconComponent } from '@ng-icons/core';
import { Social } from '../social';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [NgIconComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  social = Social;

}
