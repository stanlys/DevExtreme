import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { IRepo, IRepos } from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class GetreposService {
  public repos: IRepos | null;

  constructor(private http: HttpClient) {
    this.repos = null;
  }

  public getRepos(): Observable<IRepo[]> {
    return this.http.get<IRepos>('https://api.github.com/users/stanlys/repos');
  }
}
