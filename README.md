# Personal Portfolio Website

> This is the source code for my personal portfolio, designed and developed by **Quan Tran**. The site showcases my projects, skills, and contact information in a modern, responsive, and interactive format.

## About the Project

This portfolio is built with **React**, **TypeScript**, and **Vite** for fast development and optimal performance. It features a clean UI, smooth navigation, and a mobile-first responsive design. The site includes:

- **Home Page**: Introduction and hero section
- **About Page**: My background, skills, and experience
- **Projects Gallery**: Detailed showcase of my featured and recent projects
- **Contact Page**: Secure contact form powered by EmailJS
- **Error Page**: Custom error handling for navigation

### Technologies Used

- React 19
- TypeScript
- Vite
- Tailwind CSS (with custom animations)
- EmailJS (for contact form integration)
- Radix UI, Lucide Icons, Embla Carousel
- Zod (form validation)

### Key Features

- 🚀 **Fast & Modern**: Built with Vite for instant reloads and optimized builds
- 📱 **Responsive**: Mobile-first design, works on all devices
- 🖼️ **Project Gallery**: Interactive carousel and project details
- 📬 **Contact Form**: EmailJS integration with validation and status feedback
- 🌙 **Custom UI Components**: Reusable, accessible, and animated
- 🛡️ **Type Safety**: Strict TypeScript configuration
- 🧩 **Easy Customization**: Modular structure for quick updates

## Image Loading & Future Improvements

Currently, the project does not implement true lazy loading for images. The about page image and the home page hero image use blur effects and placeholders to improve perceived performance, especially on slow networks. The project carousel does not have any loading effect yet. In the future, we may add native lazy loading and/or skeleton loaders for images, providing a more consistent and visually appealing loading experience during image fetches.

## Splash Screen & CSS Loading Notice

This project uses a splash screen for initial loading. To prevent a Flash of Unstyled Content (FOUC) during development, CSS is built manually and linked directly in `index.html` using the `dev:tailwind` script. This ensures styles are applied immediately, so the splash screen and initial layout appear styled from the start. The generated CSS file will be located in the `public` folder as `index.css`.

### Switching Between Development and Production CSS Loading

**Development:**

- Run both `npm run dev` and `npm run dev:tailwind` in separate terminals.
- Use the manual CSS link in `index.html` (`<link rel="stylesheet" href="/index.css" />`).
- Ensure the import statement in `src/main.tsx` (`import "@/styles/index.css";`) is **commented out**.
- The CSS file will be generated in the `public` folder.

**Production:**

- Remove or comment out the manual CSS link in `index.html`.
- Uncomment the import statement in `src/main.tsx` (`import "@/styles/index.css";`).
- Vite will automatically extract and inject the CSS into the final HTML, so you do not need to manually link the CSS file.

This ensures the splash screen and critical styles load instantly in development, while production builds use Vite's optimized CSS handling.

**Summary:**

- Use the manual linking method and `dev:tailwind` for a seamless splash screen experience in development.
- For production, Vite handles CSS extraction and injection automatically.

## Getting Started

### Prerequisites

- Node.js (v16 or newer)
- npm (or yarn)

### Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/qtrann1379/personal-portfolio.git
cd personal-portfolio
npm install
```

### Development

To run the project locally with splash screen and instant styles:

1. Start the Vite dev server:

```bash
npm run dev
```

2. In a separate terminal, start the Tailwind watcher:

```bash
npm run dev:tailwind
```

This will generate and update the CSS file at `public/index.css` automatically as you edit styles. 3. Make sure the CSS link is present in `index.html`:

```html
<link rel="stylesheet" href="/index.css" />
```

4. Ensure the import statement in `src/main.tsx` is **commented out**:

```tsx
// import "@/styles/index.css";
```

5. Open [http://localhost:5173](http://localhost:5173) in your browser to view the site.

### Build

To build the project for production:

```bash
npm run build:tailwind   # Generate and minify Tailwind CSS
npm run build            # Type-check and build the Vite app
```

This will:

- Generate a minified Tailwind CSS file at `public/index.css`
- Type-check your code and build the Vite app into the `dist/` folder

Preview the production build locally:

```bash
npm run preview
```

## Project Structure

```
src/
  assets/         # Images and icons
  components/     # Reusable UI components (icons, layout, menus, UI)
  constants/      # App-wide constants
  hooks/          # Custom React hooks
  layouts/        # Layout components
  lib/            # Shared libraries/utilities
  pages/          # Page components (Home, About, Contact, Projects, Error)
  routes/         # App routes
  services/       # API integrations (EmailJS)
  styles/         # Global CSS (Tailwind)
  types/          # TypeScript types
  utils/          # Utility functions
  validations/    # Zod validation schemas
public/           # Static assets, manifest, favicon, etc.
```

## Customization

- Update content in `src/pages/` and `src/components/`
- Replace images in `src/assets/images/`
- Edit site metadata in `public/site.webmanifest` and `public/index.html`
- Adjust navigation links in `src/constants/nav-links.constants.ts`

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

## Code of Conduct

See [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md) for community standards.

## Security

See [SECURITY.md](SECURITY.md) for vulnerability reporting.

## License

This project is licensed under the terms of the [MIT License](LICENSE).
