# Aegis Builder

A complete starter project for an Aegis website builder.

## Current capabilities
- Admin login using the access code `berzelia`
- Dashboard with page management
- Create and delete pages
- Add hero, text, image, card-grid and button sections
- Select sections and edit their content
- Site title, logo URL, favicon URL and colour settings
- Preview mode
- Local persistence while developing

## Important production note
The browser demo login is intentionally simple so the project can be opened immediately. It is **not secure production authentication**. Before public use, connect the login and save/publish actions to the included Cloudflare Worker and D1 database, set a private `ADMIN_CODE` secret, and remove the client-side fallback login.

## GitHub + Cloudflare
1. Upload all files to a GitHub repository.
2. Create a Cloudflare Pages project connected to that repository.
3. Set the build command to empty and the output directory to `/`.
4. Deploy `worker.js` separately as a Cloudflare Worker.
5. Create a D1 database and replace the database ID in `wrangler.toml`.
6. Run `schema.sql` against D1.
7. Add the Worker secret `ADMIN_CODE`.
8. Connect the dashboard API calls to the Worker URL.

This ZIP is the editable project source, not a hosted production service.
