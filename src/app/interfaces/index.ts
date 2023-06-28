export interface IRepo {
  id: number;
  repoName: string;
  language: string;
  pushed_at: Date;
  archived: boolean;
  homepage: string;
}

export type IRepos = Array<IRepo>;
