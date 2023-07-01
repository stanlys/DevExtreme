import { AfterContentInit, Component, Input } from '@angular/core';
import { IIssues } from 'src/app/interfaces';

@Component({
  selector: 'app-issuelist',
  templateUrl: './issuelist.component.html',
  styleUrls: ['./issuelist.component.scss'],
})
export class IssuelistComponent {
  @Input() issueList!: IIssues;

  @Input() issueCount!: number;

  constructor() {}

}
