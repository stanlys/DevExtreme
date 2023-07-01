import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { IIssues, IRepo, IRepos } from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class GitHubService {
  public repos: IRepos | null;

  constructor(private http: HttpClient) {
    this.repos = null;
  }

  public getRepos(user: string): Observable<IRepos> {
    return this.http.get<IRepos>(`https://api.github.com/users/${user}/repos`);
  }

  public getIssues(user: string, repoName: string): Observable<IIssues[]> {
    return this.http.get<IIssues[]>(
      `https://api.github.com/users/${user}/repos`
    );
  }
}
