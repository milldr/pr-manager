# `pr-manager`

[logo](./docs/logo.png)

This GitHub Action is intended to manage and orchestrate GitHub Pull Requests.

- _Block a PR from merging until another PR is merged_
- _Automatically merge a PR when all dependencies are resolved_

## The Idea - KISS (keep it simple stupid)

Best practice in code changes is to keep Pull Requests simple. No one likes to review giant PRs.

However, we also don't like waiting on someone else to approve or review our PRs! Developers should be able to create and submit follow up PRs as fast as they can without waiting on the first PR to be merged. Time is wasted manually orchestrating PR merge order and dependencies, when it's really not a complex task.

Why not automate it.

## Workflow

Developer Workflow:

1. Developer creates PR 1, submits for review
2. Developer creates PR 2, marks it dependent on PR 1, submits for review
3. Repeat as much as you'd like. Developer is _never blocked!_

Reviewer Workflow:

1. Reviewer takes their time to review PR 1. PRs are small and easier understandable
2. Reviewer approves PR 1, PR 1 merges, PR 2 is updated automatically, workflows retriggered
3. Repeat


