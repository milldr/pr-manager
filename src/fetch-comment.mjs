import { Octokit } from "@octokit/action";
//import { Octokit } from "@octokit/rest";

const octokit = new Octokit()
const [owner, repo] = process.env.GITHUB_REPOSITORY.split("/")
//const [owner, repo] = ["milldr", "pr-manager"];
const [issueNumber, merge] = process.env.GITHUB_REF_NAME.split("/");
const commentTag = process.env.COMMENT_TAG

const result = await octokit.request('GET /repos/{owner}/{repo}/issues/{issueNumber}/comments', {
  owner,
  repo,
  issueNumber,
  headers: {
    'X-GitHub-Api-Version': '2022-11-28'
  }
})

for(const comment of result.data) {
  const commentBody = comment.body
  console.log(commentBody)

  if (commentBody.includes(commentTag)) {
    const commentId = comment.id
    console.log('Found comment: ', commentId);
    console.log(`::set-output name=commentId::${commentId}`);
    process.exit(0);
  }
}

console.error('Comment not found!');
console.log(`::set-output name=commentId::`);
