import { Component } from '@angular/core';
import { ISocialItem, Social } from '../models/social';
import { IJob, Job } from '../models/job';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [MatCardModule, MatChipsModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  linkedIn: ISocialItem | undefined = Social.getSocialByType('linkedin');

  jobs: IJob[] = [
    new Job('Software Engineer', 'IBM', '2024', 'Present', ['Angular', 'Spring Framework', 'AWS']),
    new Job('Helicopter Pilot', 'US Marine Corps', '2015', '2024', ['Leadership', 'Problem Solving', 'Collaboration']),
    new Job('Software Engineer', 'CA Dept of Technology', '2013', '2015', ['Angular' ,'.NET' ,'C#']),
  ];
}
