# GitHub Pages deployment

Updated November 9, 2026 to match the repository configuration.

## Active deployment

The origin repository is Khashayarghorab/Safesight. The active workflow is
.github/workflows/deploy-github-pages.yml. It triggers on pushes to main and supports
manual workflow_dispatch. A push to main is therefore a publication action.

The build job uses Node.js 24 and pnpm 11.25.0, installs with the frozen lockfile, runs
pnpm typecheck and pnpm build, then uploads the static out/ directory. The deployment job
uses the github-pages environment and actions/deploy-pages. Its deployment output is the
authoritative site URL. Keep node_modules/, .next/ and out/ out of source commits.

## Releasing an update

1. Review the final diff and current validation record in docs/VALIDATION.md.
2. Obtain owner authorization for publication; the current messaging release is authorized.
3. Commit the reviewed source and documentation, then push main to origin.
4. Open the matching commit in GitHub Actions and confirm both build and deploy succeed.
5. Verify the deployment URL and public domain: direct page navigation, assets, mobile menu,
   workflow/FAQ, inquiry draft behavior, privacy notice and a missing-page response.

No separate Azure deployment token or Azure workflow is used by this configuration.
public/staticwebapp.config.json is a retained Azure-specific artifact; its headers and routing
do not establish GitHub Pages behavior. The prior manual Azure instructions are superseded.

## Configuration and limits

NEXT_PUBLIC_CONTACT_EMAIL is an optional public build variable. The existing owner-provided
mailbox is used if it is unset. Never store secrets in public build variables or source.
The canonical origin remains https://safesight.ca. Confirm the repository Pages settings and
existing custom-domain configuration before asserting a domain change; none is part of this
release. Do not create a second hosting workflow.

The existing privacy notice still identifies unresolved business identity, retention and hosting
details. Publication authorization does not supply those facts; they require an owner content
update. No new collection, inquiry sending or field-data handling was introduced.

## Rollback

Review a revert of the release commit and push the approved revert to main to trigger the same
build/deploy process. Verify the restored version on the deployment URL. Avoid force-pushing
shared history.
