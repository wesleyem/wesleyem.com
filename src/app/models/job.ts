export interface IJob {
  position: string,
  company: string,
  startDate: string,
  endDate: string,
  headline: string,
  chips: string[]
}

export class Job implements IJob {
  constructor(
    public position: string,
    public company: string,
    public startDate: string,
    public endDate: string,
    public chips: string[]
  ) {}

  get headline(): string {
    return '@ ' + this.company + ' (' + this.startDate + ' - ' + this.endDate + ')';
  }
}
