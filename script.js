let ghdata = JSON.parse(process.env.GITHUB_CONTEXT);
console.log(ghdata.event.issue.body);
