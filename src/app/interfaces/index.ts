export interface IRepo {
  id: number;
  repoName: string;
  pushed_at: string;
  archived: boolean;
  homepage: string;
}

export type IRepos = Array<IRepo>;
