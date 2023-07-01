import { Component } from '@angular/core';
import { GitHubService } from './services/getrepos.service';
import { IIssues, IRepos } from './interfaces';
import { Octokit } from 'octokit';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  moreInfoButtonOptions: any;

  constructor(private getReposService: GitHubService) {}

  public repoList$ = this.getReposService.getRepos('microsoft');

  private selectedRepoName: string = '';

  popupVisible = false;

  readonly allowedPageSizes = [10, 50, 100];

  readonly displayModes = [
    { text: "Display Mode 'full'", value: 'full' },
    { text: "Display Mode 'compact'", value: 'compact' },
  ];

  displayMode = 'full';

  showPageSizeSelector = true;

  showInfo = true;

  showNavButtons = true;

  public repos: IRepos = [];

  public issueList: IIssues = [];

  helloWorld() {
    this.getReposService.getRepos('microsoft');
    this.repoList$.subscribe((data: IRepos) => (this.repos = data));
  }

  async helloWorld2() {
    const octokit = new Octokit({
      auth: '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',
    });
    const a = await octokit.request('GET /users/{org}/repos', {
      org: 'stanlys',
      per_page: 100,
      headers: {
        'X-GitHub-Api-Version': '2022-11-28',
      },
    })
  }

  showDialog() {
    this.popupVisible = !this.popupVisible;
  }

  async dblClick(e: any) {
    console.log(e.data.name, '-> click');
    this.selectedRepoName = e.data.name;
    const issue = '';
    const octokit = new Octokit({
      auth: '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',
    });
    const a = await octokit.request('GET /repos/{owner}/{repo}/issues', {
      owner: 'microsoft',
      repo: this.selectedRepoName,
      headers: {
        'X-GitHub-Api-Version': '2022-11-28',
      },
    });
    this.issueList = [];
    a.data.slice(0, 5).forEach((issue) => {
      this.issueList.push({
        id: issue.id,
        created_at: issue.created_at,
        body: issue.body as string,
        title: issue.title,
      });
    });
    console.log(this.issueList);
    this.popupVisible = !this.popupVisible;
  }

  priceColumn_customizeText(value: string) {
    return `date: ${value}`;
  }

  isArchive(value: boolean): string {
    return value ? 'Да' : 'Нет';
  }
}
