import { Component, Input } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { IconComponent } from '../icon/icon.component';
import { ISocialItem, Social } from '../../models/social';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [MatCardModule, IconComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input({required: true}) socialItem: ISocialItem | undefined;

  constructor() {
    this.socialItem = Social.getSocialByType('github') // default;
  }
}
