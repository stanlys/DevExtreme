import { Component } from '@angular/core';
import { GetreposService } from './services/getrepos.service';
import { IRepo } from './interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Energo';

  constructor(private getReposService: GetreposService) {}

  public repoList$ = this.getReposService.getRepos();

  public repos: IRepo[] = [];

  helloWorld() {
    this.getReposService.getRepos();
    this.repoList$.subscribe((data) => (this.repos = data));
  }
}
