import { Component, Input } from '@angular/core';
import { IJob } from '../models/job';
import { MatListItem } from '@angular/material/list';
import { MatChipsModule } from '@angular/material/chips';

@Component({
  selector: 'app-job',
  standalone: true,
  imports: [MatListItem, MatChipsModule],
  templateUrl: './job.component.html',
  styleUrl: './job.component.scss'
})
export class JobComponent {
  @Input({ required: true })
  job!: IJob;
}
