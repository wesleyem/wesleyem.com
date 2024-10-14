import { Component } from '@angular/core';
import { ISocialItem, Social } from '../models/social';
import { CardComponent } from '../social/card/card.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  socialContacts: ISocialItem[] = Social.SOCIALS;
}
