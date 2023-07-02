import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IIssues, IRepos } from '../interfaces';
import { Octokit } from 'octokit';

const GITHUB_TOKEN = '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';

@Injectable({
  providedIn: 'root',
})
export class GitHubService {
  public repos: IRepos | null;

  octokit = new Octokit({
    auth: GITHUB_TOKEN,
  });

  constructor(private http: HttpClient) {
    this.repos = null;
  }

  public getRepos(user: string): Observable<IRepos> {
    return this.http.get<IRepos>(`https://api.github.com/users/${user}/repos`);
  }

  public getIssues(user: string, repoName: string): Observable<IIssues> {
    return this.http.get<IIssues>(
      `https://api.github.com/repos/${user}/${repoName}/issues`
    );
  }

  // можно реализовать согласно документации
  async getReposOctokit(userName: string) {
    const response = await this.octokit.request('GET /users/{org}/repos', {
      org: 'stanlys',
      per_page: 100,
      headers: {
        'X-GitHub-Api-Version': '2022-11-28',
      },
    });

    this.repos = response.data;
  }
}
