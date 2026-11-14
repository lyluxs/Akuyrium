# Akuyrium architecture

## Product layout

- `apps/app`: the complete creative application, initially preserved as its original single HTML document while the migration is validated.
- `apps/website`: the independent public website, built with Astro.
- `packages/design`: shared design tokens. The app will consume these after its CSS extraction is tested.
- `docs`: architecture, decisions and release notes.

## Application strategy

The application frontend is being prepared for Vite. Tauri 2 is the planned native shell for Windows, Linux and Android. Native integration is intentionally not enabled in this first migration commit: the existing application must first build and behave correctly in the new frontend workspace.

## Migration rules

1. Keep a pristine copy of the original single-file application in version history.
2. Do not extract CSS or JavaScript in one large rewrite. Extract one concern at a time and verify all navigation and tools after each change.
3. Centralize persistence behind a small storage layer before adding native storage or synchronization.
4. Preserve offline behavior. Bundle essential assets locally; optional web fonts may use system fallbacks.
5. Treat Android as a full-featured target. Test every tool and interaction on touch layouts before declaring parity.

## Current baseline

The imported HTML baseline has 26 `section` elements, 3 inline style blocks, 5 inline script blocks, 6 inline event-handler attributes and 20 references to `localStorage`. It loads its DM Sans and Nunito fonts from Google Fonts, so those fonts are not currently guaranteed offline. These counts describe the imported file and should be rechecked after changes.

## Website

The website is independent of the app. It will host product information, screenshots, documentation, release notes and verified download links. Replace the placeholder canonical site URL in `apps/website/astro.config.mjs` before publishing.
