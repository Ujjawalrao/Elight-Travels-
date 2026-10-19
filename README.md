# Elight-Travels-

Elight Travels is a React and Vite travel website with destination and gallery pages, a responsive contact form, an enquiry dialog, and an Express API that delivers enquiries over SMTP.

## Requirements

- Node.js 20.19+ or 22.12+
- npm

## Setup

1. Install dependencies:

   ```sh
   npm install
   ```

2. Copy `.env.example` to `.env` and set your SMTP credentials, sender, recipient, and trusted frontend origin. Keep `.env` private; it is ignored by Git.

3. Start the enquiry API in one terminal:

   ```sh
   npm run server
   ```

4. Start the Vite frontend in another terminal:

   ```sh
   npm run dev
   ```

The Vite development server proxies `/api` requests to the port configured by `PORT`. In production, deploy the frontend and API, set `VITE_API_URL` to the API base URL when building the frontend, and set `CORS_ORIGIN` to the trusted frontend origin(s). Set `VITE_MAP_QUERY` to the business location you want the contact page map to search for.

## Checks

```sh
npm run build
npm run lint
```
