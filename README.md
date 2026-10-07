# Transform My Wealth

Gatsby landing pages for the Transform My Wealth video masterclass.

## Project Status

**Closed**

## Contents

| Path                                                         | Description                                                                                         |
| ------------------------------------------------------------ | --------------------------------------------------------------------------------------------------- |
| [src/pages/](src/pages/)                                     | Home, masterclass, and 404 pages.                                                                   |
| [src/components/](src/components/)                           | Page sections, layout, SEO, and the Mailchimp sign-up modal.                                        |
| [src/contexts/](src/contexts/)                               | Sign-up modal open state.                                                                           |
| [src/scss/](src/scss/)                                       | Global SCSS. `style.scss` imports abstracts, vendor, base, layouts, components, pages, then themes. |
| [src/img/](src/img/)                                         | Favicon, thumbnail, and icons.                                                                      |
| [src/utilities/callingCard.js](src/utilities/callingCard.js) | Mythic Digital calling card copy.                                                                   |
| [static/](static/)                                           | `humans.txt` and `robots.txt`.                                                                      |
| [gatsby-config.js](gatsby-config.js)                         | Site metadata, plugins, and the Mailchimp list endpoint.                                            |

## Requirements

- [Node.js](https://nodejs.org/) v14.17.4.
- [Gatsby](https://www.gatsbyjs.com/) v2.26.1.

## Installation

From the project root:

1. Install dependencies with `npm install`.

## Usage

1. Start the development server with `npm run develop`.
2. Open [http://localhost:8000](http://localhost:8000).
3. Edit pages in `src/pages/` and sections in `src/components/`.

## Scripts

| Command           | Description                                    |
| ----------------- | ---------------------------------------------- |
| `npm run develop` | Start the local development server.            |
| `npm run start`   | Start the local development server over HTTPS. |
| `npm run build`   | Build the site for production.                 |
| `npm run serve`   | Serve the production build.                    |
| `npm run format`  | Format code with Prettier.                     |
| `npm run clean`   | Clear the `.cache` and `public` directories.   |

## Environments

| Name       | URL                                                            | Notes               |
| ---------- | -------------------------------------------------------------- | ------------------- |
| Local      | [http://localhost:8000](http://localhost:8000)                 | Development server. |
| Production | [https://transformmywealth.com](https://transformmywealth.com) | Public site.        |

## Domains

Domains are attached to the Netlify site.

| Domain                          | URL                                                                                | Notes                                       |
| ------------------------------- | ---------------------------------------------------------------------------------- | ------------------------------------------- |
| transformmywealth.com           | [https://transformmywealth.com](https://transformmywealth.com)                     | Apex domain. Canonical production hostname. |
| www.transformmywealth.com       | [https://www.transformmywealth.com](https://www.transformmywealth.com)             | Redirects to `transformmywealth.com` (301). |
| transform-my-wealth.netlify.app | [https://transform-my-wealth.netlify.app](https://transform-my-wealth.netlify.app) | Netlify production alias.                   |

## Deployment

Hosted on [Netlify](https://app.netlify.com/sites/transform-my-wealth/overview). The public site is [https://transformmywealth.com](https://transformmywealth.com).
