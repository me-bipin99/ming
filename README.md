# Ming Food & Beverages

## 📁 Project Structure (Current)
```
ming/
├─ src/
│  ├─ assets/                # Images, fonts, static assets
│  ├─ components/            # Re‑usable UI components
│  │   ├─ Navbar.tsx          # Navigation bar (state‑aware)
│  │   ├─ Hero.tsx            # Hero section with CTA
│  │   ├─ FeaturedItems.tsx   # Home‑page *Top Foods* preview (2 × 3 grid)
│  │   ├─ FullMenu.tsx        # Dedicated full‑menu page (search / filter / sort)
│  │   ├─ MenuItem.tsx        # Card for a single dish
│  │   ├─ CategoryFilter.tsx  # Category selector
│  │   ├─ SearchSort.tsx       # Search + sort controls
│  │   ├─ Footer.tsx           # Footer with quick links
│  │   └─ ...                  # Other UI pieces (MomoPopup, Story, etc.)
│  ├─ data/                 # Static data files (menuCategories, menuItems)
│  ├─ App.tsx               # Root component – view router (`home` | `menu`)
│  └─ main.tsx              # Application entry point
├─ public/                  # `index.html`
├─ vite.config.ts           # Vite configuration (React + OXC)
├─ tailwind.config.js       # Tailwind CSS configuration
└─ package.json             # Scripts & dependencies
```

## 🎯 Future Roadmap
- **Admin Dashboard** (planned) – a protected area where staff can:
  - Add, edit, delete menu items on‑the‑fly.
  - Re‑order categories.
  - Upload images (or provide URLs) for each dish.
  - Persist changes in **`localStorage`** for now (later replace with a proper backend).
- **Dynamic Menu Data** – `src/data/menuData.ts` now exposes helper functions:
  ```ts
  export const defaultMenuItems = [ /* all starter dishes */ ];
  export function getMenuItems(): MenuItem[];   // reads from localStorage or falls back to defaults
  export function setMenuItems(items: MenuItem[]): void; // writes to localStorage
  ```
  Components (`FeaturedItems`, `FullMenu`) import `getMenuItems()` instead of a static array, so any admin changes instantly reflect in the UI.
- **Authentication stub** – a simple “admin mode” toggle that could be expanded with JWT / OAuth later.
- **Styling polish** – glass‑morphism cards, subtle micro‑animations, dark‑mode support.

---
