# Azure Static Web Apps and safesight.ca

Prepared November 7, 2026. These are instructions for an authorized deployment; no Azure or registrar access is assumed.

## 1. Finish launch content

The owner supplied khashayar.ghorab@ucalgary.ca as the public inquiry mailbox. Confirm that it remains appropriate, finalize the Privacy Policy's business/retention/hosting details, and approve the site. Review the production export locally with `pnpm build` and `pnpm preview`. Test a real email draft on a device with an email application. Keep all development-status statements.

## 2. Prepare GitHub and Azure

After approval, put this folder's contents at the root of a GitHub repository, including `pnpm-lock.yaml` and the workflow, excluding `node_modules`, `.next`, and `out`. Create an Azure Static Web App in the intended subscription/resource group. Review the selected plan's pricing and limits in your own account. Choose a manual/Other deployment source if available to avoid automatically generating a push-triggered workflow.

Store the app's deployment token as the GitHub environment secret `AZURE_STATIC_WEB_APPS_API_TOKEN`, in the `production` environment. Optionally add `NEXT_PUBLIC_CONTACT_EMAIL` as an environment variable in that same GitHub environment to override the owner-supplied default address in the source. Never commit a deployment token. Configure required reviewers for the environment if supported by the repository plan.

## 3. Deploy on explicit approval

The supplied workflow runs only through **Actions → Deploy SafeSight (manual) → Run workflow**. It installs locked dependencies, checks types, builds the static export, and uploads the prebuilt `out/` directory with `skip_app_build: true`. This uses no Next.js server runtime or API deployment. Do not enable a second generated deployment workflow alongside it.

If instead using Azure's build integration, the source app location is `/`, the API location is empty, the output directory is `out`, and the build command is `pnpm build`. Follow Microsoft's static-export instructions, including `IS_STATIC_EXPORT=true` when Azure performs the Next.js build. Do not mix these source-build settings with the supplied prebuilt-upload workflow.

Validate the Azure-generated HTTPS address first: all five routes on direct navigation and refresh, logo/assets, mobile menu, contact flow, and a real 404. Confirm response headers from `staticwebapp.config.json`. Local preview cannot verify Azure routing, TLS, or deployment credentials.

## 4. Connect the domain after the Azure preview is approved

In the app's **Custom domains**, add `safesight.ca`. Use the TXT verification value Azure generates; do not invent a value. At the existing DNS provider, follow Azure's record instructions. For the root domain, use ALIAS/ANAME or supported CNAME flattening to the exact Azure hostname. If the provider lacks those features, consult Microsoft's alternatives before changing DNS.

Optionally add `www.safesight.ca` separately and use the required CNAME to the Azure hostname. Select the intended default custom domain after both are validated. The site's metadata assumes `https://safesight.ca` as its canonical origin. Preserve existing mail-related MX/TXT records. Wait for domain validation, DNS propagation, and the managed certificate, then check HTTPS on both names and navigation on every page.

## 5. Updates and rollback

Keep source changes in Git. Run the manual workflow for each approved update. To roll back, restore the last known-good source commit and run the workflow again. Keep the previous build until the replacement is verified.

## Official references

- [Next.js static export](https://nextjs.org/docs/app/guides/static-exports)
- [Microsoft: static-rendered Next.js deployment](https://learn.microsoft.com/en-us/azure/static-web-apps/deploy-nextjs-static-export)
- [Microsoft: custom domains](https://learn.microsoft.com/en-us/azure/static-web-apps/custom-domain)
- [Microsoft: apex domains with external DNS](https://learn.microsoft.com/en-us/azure/static-web-apps/apex-domain-external)

Account-specific DNS targets, tokens, plan availability, and portal options must be obtained from the actual account at deployment time.
