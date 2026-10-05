# LensLoom

LensLoom is a lightweight image-search interface for discovering visual inspiration. Searches and category quick-picks provide accessible feedback, while the results grid remains empty until an image API is connected.

## Run Locally

Open `index.html` in a browser. No build tools or dependencies are required.

## Features

- Labeled search input and search button.
- Category quick-picks that fill and submit a search.
- Clear control and live empty-state feedback.
- Responsive, initially empty CSS grid reserved for image results.

## Design Decisions

1. **Category Quick-Picks:** Topic buttons submit common searches without requiring typing.
2. **Dedicated Empty State:** The `#empty-state` region provides initial guidance and announces search feedback accessibly.
3. **Forest Green Palette:** Forest green (`#1b4d3e`) and sea green (`#2e8b57`) distinguish the app from conventional blue or purple interfaces.