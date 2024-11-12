# GitHub actions playground  
This is a project serving as a playground to try out GitHub Actions. Most of the files are located at .github/

# Definitions

- A workflow must contain the following basic components:
    - One or more events that will trigger the workflow.
    - One or more jobs, each of which will execute on a runner machine and run a series of one or more steps.
    - Each step can either run a script that you define or run an action, which is a reusable extension that can simplify your workflow.

- Workflow triggers are events that cause a workflow to run. These events can be:
    - Events that occur in your workflow's repository
    - Events that occur outside of GitHub and trigger a repository_dispatch event on GitHub
    - Scheduled times
    - Manual

# Useful links
- [Guides for GitHub Actions](https://docs.github.com/en/actions/guides)
- [GitHub Marketplace - actions](https://github.com/marketplace?type=actions)
- [Events that trigger workflows](https://docs.github.com/en/actions/using-workflows/events-that-trigger-workflows)
- [Using secrets in GitHub Actions](https://docs.github.com/en/actions/security-for-github-actions/security-guides/using-secrets-in-github-actions)
