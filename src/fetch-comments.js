import { Octokit } from "@octokit/action";

const octokit = new Octokit();

const fetchPRComments = async function(octokit, owner, repo) {

  const { data } = await octokit.request('GET /repos/{owner}/{repo}/issues/comments', {
    owner,
    repo,
    headers: {
      'X-GitHub-Api-Version': '2022-11-28'
    }
  })

  console.log("PR Comments: %s", data)
}

const octokit = new Octokit()
const [owner, repo] = process.env.GITHUB_REPOSITORY.split("/")

fetchPRComments(octokit, owner, repo, branch)
