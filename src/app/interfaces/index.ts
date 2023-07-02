export interface IRepo {
  id: number;
  repoName: string;
  language: string;
  pushed_at: Date;
  archived: boolean;
  homepage: string;
  login: string;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
  name: string;
  company: string;
  blog: string;
  location: string;
  email: string;
  hireable: string;
  bio: string;
  public_repos: number;
  public_gists: number;
  followers: number;
  following: number;
  created_at: string;
  updated_at: string;
}

export type IRepos = Array<IRepo>;

export interface IIssue {
  id: number;
  created_at: string;
  body: string;
  title: string;
}

export type IIssues = Array<IIssue>;
