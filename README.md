# Hotel Shivoy Palace & V2 Restaurant - Deployment Guide

This is a premium, mobile-first demo website created for Hotel Shivoy Palace & V2 Restaurant. It is built with React, Vite, and Tailwind CSS.

## Vercel Deployment Steps

Follow these steps to deploy this project to Vercel and connect your custom subdomain:

### 1. Deploy to Vercel
1. Push this project code to a GitHub repository.
2. Go to [Vercel](https://vercel.com/) and log in.
3. Click **Add New** -> **Project**.
4. Import your GitHub repository.
5. In the Build and Output Settings, ensure:
   - Framework Preset: **Vite**
   - Build Command: `npm run build`
   - Output Directory: `dist`
6. Click **Deploy**. Vercel will build and deploy the site (the `vercel.json` file handles SPA routing).

### 2. Add Custom Subdomain (`shivoypalace.webrion.online`)
Once deployed, configure the custom domain:
1. In your Vercel dashboard, go to the newly deployed project.
2. Click **Settings** in the top menu.
3. Go to **Domains** on the left sidebar.
4. Enter `shivoypalace.webrion.online` into the input field and click **Add**.
5. Vercel will give you a DNS Record to configure (usually a CNAME).
   - **Type:** `CNAME`
   - **Name:** `shivoypalace`
   - **Value:** `cname.vercel-dns.com.`
6. Log in to your domain provider for `webrion.online` (e.g., GoDaddy, Cloudflare, Hostinger).
7. Go to DNS Settings/Management.
8. Add the CNAME record as specified by Vercel.
9. Wait a few minutes (up to 24 hours depending on TTl) for DNS propagation. Vercel will show a valid TLS certificate once verified.

## WhatsApp Pitch Message
Copy this message to send to the client:

*Hello Hotel Shivoy Palace & V2 Restaurant Team 👋*

*I created a quick modern website preview idea for your hotel, with rooms, restaurant, map, call button and WhatsApp booking.*
*Check it out here: [Insert Vercel Link Here]*

*This type of website can help guests trust your hotel faster and contact you directly for booking.*

*If you like it, I can make the full website live for your hotel at an affordable price.*
