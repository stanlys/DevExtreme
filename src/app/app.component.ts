import { Component } from '@angular/core';
import { GetreposService } from './services/getrepos.service';
import { IRepo, IRepos } from './interfaces';
import { Octokit } from 'octokit';
import { HomepagelinkComponent } from './components/homepagelink/homepagelink.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Energo';

  moreInfoButtonOptions: any;

  constructor(private getReposService: GetreposService) {}

  public repoList$ = this.getReposService.getRepos();

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

  helloWorld() {
    this.getReposService.getRepos();
    this.repoList$.subscribe((data: IRepos) => (this.repos = data));
    console.log(this.repos);
  }

  async helloWorld2() {
    const octokit = new Octokit({
      auth: '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',
    });
    const a = await octokit.request('GET /users/stanlys/repos', {});
    console.log(a);
  }

  showDialog() {
    this.popupVisible = !this.popupVisible;
  }

  dblClick(e: any) {
    console.log(e.data.name, '-> click');
  }

  priceColumn_customizeText(value: string) {
    return `date: ${value}`;
  }

  isArchive(value: boolean): string {
    return value ? 'Да' : 'Нет';
  }

  homePage(value: any) {
    console.log(value);
    return HomepagelinkComponent;
  }
}
