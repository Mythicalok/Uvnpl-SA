# UV Netware Landing Page (Uvnpl-SA)

A modern, high-performance static landing page for **UV Netware**, built using the [Eleventy (11ty)](https://www.11ty.dev/) static site generator. The page features a sleek, dark-themed responsive design with integrated animations, a responsive grid system, and links directly to the main application frontend.

## 🚀 Features

- **Blazing Fast**: Generated as pure static HTML/CSS.
- **Modern UI/UX**: Dark theme, glassmorphism elements, animated "glow orbs", and a smooth gradient layout.
- **Responsive Design**: Fully responsive across mobile, tablet, and desktop devices.
- **Integrated Routing**: "Get Started" call-to-action buttons configured to link seamlessly to the main React application (e.g., `http://localhost:5173/`).

## 📁 Project Structure

```text
Uvnpl-SA/
├── .eleventy.js        # Eleventy configuration (handles passthrough for assets)
├── package.json        # Project metadata and dependencies
├── src/                # Source files
│   ├── index.html      # Main landing page template (HTML & CSS)
│   └── assests/        # Static assets (images, icons, etc.)
└── _site/              # Generated output folder (Created automatically after build)
```

## 🛠️ Prerequisites

Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

## 📦 Installation

1. Clone the repository and navigate to the project directory:
   ```bash
   cd Uvnpl-SA
   ```
2. Install the necessary dependencies (Eleventy):
   ```bash
   npm install
   ```

## 💻 Local Development

To run the site locally with hot-reload enabled, use the following Eleventy command:

```bash
# npx @11ty/eleventy --serve
```

This will run a local development server (typically on `http://localhost:8080`) and watch for any changes you make in the `src` directory.

## 🏗️ Building for Production

To build the static site for production deployment, simply run:

```bash
npx @11ty/eleventy
```

This compiles your `src` directory and outputs the optimized, production-ready static files into the `_site` directory. You can then host the contents of the `_site` folder on any static hosting provider (e.g., Vercel, Netlify, GitHub Pages, or an Nginx/Apache server).
