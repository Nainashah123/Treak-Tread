# Track & Tread E-Commerce Store

A modern e-commerce store built with React, TypeScript, and Vite, following the design from Figma.

## Recent Updates

### Product List Page (PLP)
- ✅ Created a complete Product List Page based on Figma design
- ✅ Organized into reusable sections and components
- ✅ Downloaded and integrated product images from Figma
- ✅ Implemented responsive grid layout with 4 products per row
- ✅ Added product badges (Best Seller, Discount)
- ✅ Created color variant selectors
- ✅ Pricing display with compare-at-price strikethrough
- ✅ Category tabs (Shop All, Shoes, Apparel, Accessories)
- ✅ Filter button with chevron icon

### Components Created
- `ProductListHeaderSection` - Page title section
- `ProductListTabsSection` - Category tabs and filters
- `ProductListGridSection` - Product grid with images and info
- `ColorVariant` & `ColorVariants` - Color selection components
- Updated `Badge` component for purple/red variants
- Updated `ProductCard` component for PLP layout

### Routes
- `/shop` - Product List Page
- `/products` - Alternative route to Product List Page

## Setup

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      ...tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      ...tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      ...tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
