# currency-mobile-app

A simple currency converter for mobile web.

## How to set up for development

1. Run `pnpm -F currency-mobile-app install`
1. Create `env.local` file in `/currency-mobile-app`
1. In `env.local`, add `VITE_EXCHANGE_RATES_DATA_API_KEY={your-key-here}`.
1. Run `pnpm -F currency-mobile-app dev`

## How to build files for production nad serve the app.

1. Run `pnpm -F currency-mobile-app install`
1. Run `pnpm -F currency-mobile-app build`
1. Serve the files in `dist` into a URL.
