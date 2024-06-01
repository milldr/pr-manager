all: reqs test

reqs:
	npm install @octokit/rest

test:
	node src/fetch-comment.mjs
