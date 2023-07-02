import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GitHubService } from './services/getrepos.service';
import { IIssues, IRepos } from './interfaces';
import { LoadingService } from './services/loading.service';
import { Observable, debounceTime, fromEvent, map } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public popupVisible = false;

  readonly allowedPageSizes = [10, 50, 100];

  displayMode = 'full';

  @ViewChild('someInput', { static: true })
  someInput: ElementRef<HTMLInputElement>;

  private selectedUser: string = 'stanlys';

  private selectedRepoName: string = '';

  public repoList$ = new Observable();

  public repos: IRepos = [];

  public issueList: IIssues = [];

  public loader$ = this.loader.loading$;

  constructor(
    private getReposService: GitHubService,
    public loader: LoadingService
  ) {
    this.someInput = {} as ElementRef;
  }

  ngOnInit(): void {
    this.getUserRepo();
    fromEvent(this.someInput.nativeElement, 'input')
      .pipe(
        debounceTime(500),
        map((search) =>
          (search.target as HTMLInputElement).value.length >= 5
            ? (search.target as HTMLInputElement).value
            : ''
        )
      )
      .subscribe((search) => {
        this.selectedUser = search;
        console.log(this.selectedUser);
        this.getUserRepo();
      });
  }

  getUserRepo() {
    this.loader.showLoading();
    this.repos = [];
    this.getReposService
      .getRepos(this.selectedUser)
      .subscribe((data: IRepos) => {
        this.repos = data;
        console.log(this.repos);
        this.loader.hideLoading();
      });
  }

  dblClick(e: any) {
    this.loader.showLoading();
    this.popupVisible = false;
    this.selectedRepoName = e.data.name;
    this.issueList = [];
    this.getReposService
      .getIssues(this.selectedUser, this.selectedRepoName)
      .subscribe((data) => {
        data.slice(0, 4).forEach((issue) => this.issueList.push({ ...issue }));
        this.loader.hideLoading();
      });
    this.popupVisible = true;
  }
}
