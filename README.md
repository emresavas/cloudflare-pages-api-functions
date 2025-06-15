⚠️ **IMPORTANT NOTE (June 2025)**: Cloudflare now recommends using Cloudflare Workers over Cloudflare Pages for new projects. While this template has served its purpose well for me, for new projects consider using Cloudflare Workers which offers broader features (including Durable Objects, Cron Triggers, and better observability). See [Cloudflare's migration guide](https://developers.cloudflare.com/workers/static-assets/migration-guides/migrate-from-pages/) for more details.

# Cloudflare Pages with API Template

A template project for creating web applications using Cloudflare Pages with both static HTML pages and serverless API endpoints.

## Features

- Static HTML pages served via Cloudflare Pages
- Serverless API endpoints using Cloudflare Functions
- Client-side API integration examples

## Project Structure

```
/
├── dist/                # Static assets served by Cloudflare Pages
│   ├── index.html        # Home page
│   ├── about.html        # About page
│   ├── styles.css        # Global styles
│   ├── script.js         # Client-side JavaScript
│   └── functions/        # Cloudflare Functions (API endpoints)
│       └── api/
│           ├── hello.js  # Simple greeting API
│           └── time.js   # Server time API
│
└── README.md            # Project documentation
```

## API Endpoints

- `/api/hello` - Returns a simple greeting with timestamp
- `/api/time` - Returns the current server time in different formats

## Development

### Local Development

To run this template locally, you need to have [Wrangler](https://developers.cloudflare.com/workers/wrangler/install-and-update/) installed:

```bash
npm install -g wrangler
wrangler pages dev
```

### Deployment

This template is designed to be deployed to Cloudflare Pages. You can deploy it by connecting your GitHub repository to Cloudflare Pages:

1. Push this code to a GitHub repository
2. Go to the Cloudflare Dashboard
3. Navigate to Pages > Create a project
4. Connect your GitHub repository
5. Configure your deployment:
   - Build command: (leave empty for this template)
   - Build output directory: `dist`
6. Deploy

## Documentation

For more information on Cloudflare Pages and Cloudflare Functions, see the [official documentation](https://developers.cloudflare.com/pages/functions/).

## Customization

This template is designed to be a starting point. You can customize it by:

- Adding more HTML pages in the `dist` directory
- Creating additional API endpoints in the `dist/functions/api` directory

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.
