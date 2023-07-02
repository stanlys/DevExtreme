import { AfterContentInit, Component, Input } from '@angular/core';
import { IIssues } from 'src/app/interfaces';
import { LoadingService } from 'src/app/services/loading.service';

@Component({
  selector: 'app-issuelist',
  templateUrl: './issuelist.component.html',
  styleUrls: ['./issuelist.component.scss'],
})
export class IssuelistComponent {
  @Input() issueList!: IIssues;

  @Input() issueCount!: number;

  loader$ = this.loader.loading$;

  constructor(public loader: LoadingService) {}
}
