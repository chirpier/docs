# Chirpier Docs Content Ownership

## Canonical Ownership

- `docs` owns navigation, IA, landing pages, concepts, workflows, screenshots, and cross-repo guides.
- `chirpier-js` owns JavaScript install commands, examples, and SDK-specific behavior.
- `chirpier-go` owns Go install commands, examples, and SDK-specific behavior.
- `chirpier-py` owns Python install commands, examples, and SDK-specific behavior.
- `charts` owns embed runtime, React wrapper, token flow, props, and package examples.
- `web` owns internal frontend development docs, not public product docs.

## Sync Strategy

Start lightweight.

1. Keep the public docs site in `docs` as the only published docs surface.
2. Treat sibling repo READMEs as source material for SDK- and package-specific snippets.
3. Keep shared concepts only in `docs` so terminology changes happen in one place.
4. Add snippet markers to README sections that should be mirrored into the docs site.
5. Add a small sync script later that extracts only marked sections into generated partials.
6. Add a CI drift check once the markers are stable.

## Suggested Snippet Marker Format

```md
<!-- docs:start quickstart -->
...
<!-- docs:end quickstart -->
```

## Review Rule

If a change affects the product model, update `docs` first.
If a change affects SDK usage details, update the repo README first, then refresh the docs page that mirrors it.
