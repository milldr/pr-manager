import { Octokit } from "@octokit/action";

const octokit = new Octokit()
const [owner, repo] = process.env.GITHUB_REPOSITORY.split("/")

const result = await octokit.request('GET /repos/{owner}/{repo}/issues/comments', {
  owner,
  repo,
  headers: {
    'X-GitHub-Api-Version': '2022-11-28'
  }
})

console.log("PR Comments: %s", result.data)
