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

// export interface IIssue {
//   id: number;
//   node_id: string;
//   url: string;
//   repository_url: string;
//   labels_url: string;
//   comments_url: string;
//   events_url: string;
//   html_url: string;
//   number: number;
//   state: string;
//   title: string;
//   body: string | null | undefined;
//   user: {
//     login: string;
//     id: number;
//     node_id: string;
//     avatar_url: string;
//     gravatar_id: '';
//     url: string;
//     html_url: string;
//     followers_url: string;
//     following_url: string;
//     gists_url: string;
//     starred_url: string;
//     subscriptions_url: string;
//     organizations_url: string;
//     repos_url: string;
//     events_url: string;
//     received_events_url: string;
//     type: string;
//     site_admin: boolean;
//   };
//   closed_at: null;
//   created_at: string;
//   updated_at: string;
//   author_association: string;
//   state_reason: string;
// }

export interface IIssue {
  id: number;
  created_at: string;
  body: string;
  title: string;
}

export type IIssues = Array<IIssue>;

// closed_by: {
//   login: 'octocat';
//   id: 1;
//   node_id: 'MDQ6VXNlcjE=';
//   avatar_url: 'https://github.com/images/error/octocat_happy.gif';
//   gravatar_id: '';
//   url: 'https://api.github.com/users/octocat';
//   html_url: 'https://github.com/octocat';
//   followers_url: 'https://api.github.com/users/octocat/followers';
//   following_url: 'https://api.github.com/users/octocat/following{/other_user}';
//   gists_url: 'https://api.github.com/users/octocat/gists{/gist_id}';
//   starred_url: 'https://api.github.com/users/octocat/starred{/owner}{/repo}';
//   subscriptions_url: 'https://api.github.com/users/octocat/subscriptions';
//   organizations_url: 'https://api.github.com/users/octocat/orgs';
//   repos_url: 'https://api.github.com/users/octocat/repos';
//   events_url: 'https://api.github.com/users/octocat/events{/privacy}';
//   received_events_url: 'https://api.github.com/users/octocat/received_events';
//   type: 'User';
//   site_admin: false;
// };

// labels: [
//   {
//     id: 208045946;
//     node_id: 'MDU6TGFiZWwyMDgwNDU5NDY=';
//     url: 'https://api.github.com/repos/octocat/Hello-World/labels/bug';
//     name: 'bug';
//     description: "Something isn't working";
//     color: 'f29513';
//     default: true;
//   }
// ];
// assignee: {
//   login: 'octocat';
//   id: 1;
//   node_id: 'MDQ6VXNlcjE=';
//   avatar_url: 'https://github.com/images/error/octocat_happy.gif';
//   gravatar_id: '';
//   url: 'https://api.github.com/users/octocat';
//   html_url: 'https://github.com/octocat';
//   followers_url: 'https://api.github.com/users/octocat/followers';
//   following_url: 'https://api.github.com/users/octocat/following{/other_user}';
//   gists_url: 'https://api.github.com/users/octocat/gists{/gist_id}';
//   starred_url: 'https://api.github.com/users/octocat/starred{/owner}{/repo}';
//   subscriptions_url: 'https://api.github.com/users/octocat/subscriptions';
//   organizations_url: 'https://api.github.com/users/octocat/orgs';
//   repos_url: 'https://api.github.com/users/octocat/repos';
//   events_url: 'https://api.github.com/users/octocat/events{/privacy}';
//   received_events_url: 'https://api.github.com/users/octocat/received_events';
//   type: 'User';
//   site_admin: false;
// };
// assignees: [
//   {
//     login: 'octocat';
//     id: 1;
//     node_id: 'MDQ6VXNlcjE=';
//     avatar_url: 'https://github.com/images/error/octocat_happy.gif';
//     gravatar_id: '';
//     url: 'https://api.github.com/users/octocat';
//     html_url: 'https://github.com/octocat';
//     followers_url: 'https://api.github.com/users/octocat/followers';
//     following_url: 'https://api.github.com/users/octocat/following{/other_user}';
//     gists_url: 'https://api.github.com/users/octocat/gists{/gist_id}';
//     starred_url: 'https://api.github.com/users/octocat/starred{/owner}{/repo}';
//     subscriptions_url: 'https://api.github.com/users/octocat/subscriptions';
//     organizations_url: 'https://api.github.com/users/octocat/orgs';
//     repos_url: 'https://api.github.com/users/octocat/repos';
//     events_url: 'https://api.github.com/users/octocat/events{/privacy}';
//     received_events_url: 'https://api.github.com/users/octocat/received_events';
//     type: 'User';
//     site_admin: false;
//   }
// ];
// milestone: {
//   url: 'https://api.github.com/repos/octocat/Hello-World/milestones/1';
//   html_url: 'https://github.com/octocat/Hello-World/milestones/v1.0';
//   labels_url: 'https://api.github.com/repos/octocat/Hello-World/milestones/1/labels';
//   id: 1002604;
//   node_id: 'MDk6TWlsZXN0b25lMTAwMjYwNA==';
//   number: 1;
//   state: 'open';
//   title: 'v1.0';
//   description: 'Tracking milestone for version 1.0';
//   creator: {
//     login: 'octocat';
//     id: 1;
//     node_id: 'MDQ6VXNlcjE=';
//     avatar_url: 'https://github.com/images/error/octocat_happy.gif';
//     gravatar_id: '';
//     url: 'https://api.github.com/users/octocat';
//     html_url: 'https://github.com/octocat';
//     followers_url: 'https://api.github.com/users/octocat/followers';
//     following_url: 'https://api.github.com/users/octocat/following{/other_user}';
//     gists_url: 'https://api.github.com/users/octocat/gists{/gist_id}';
//     starred_url: 'https://api.github.com/users/octocat/starred{/owner}{/repo}';
//     subscriptions_url: 'https://api.github.com/users/octocat/subscriptions';
//     organizations_url: 'https://api.github.com/users/octocat/orgs';
//     repos_url: 'https://api.github.com/users/octocat/repos';
//     events_url: 'https://api.github.com/users/octocat/events{/privacy}';
//     received_events_url: 'https://api.github.com/users/octocat/received_events';
//     type: 'User';
//     site_admin: false;
//   };
//   open_issues: number;
//   closed_issues: number;
//   created_at: string;
//   updated_at: string;
//   closed_at: string;
//   due_on: string;
// };
// locked: boolean;
// active_lock_reason: string;
// comments: number;
// pull_request: {
//   url: string;
//   html_url: string;
//   diff_url: string;
//   patch_url: string;
// };
