import { Component, Input } from '@angular/core';
import { IIssue } from 'src/app/interfaces';

@Component({
  selector: 'app-issue',
  templateUrl: './issue.component.html',
  styleUrls: ['./issue.component.scss'],
})
export class IssueComponent {

  @Input() issue!: IIssue;
}
