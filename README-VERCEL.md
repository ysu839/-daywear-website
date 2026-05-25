# DAYWEAR Vercel Upload Guide

This is a static website. Upload the whole folder to Vercel:

`C:\Users\awety\Documents\Codex\2026-05-17\files-mentioned-by-the-user-chatgpt`

## Option 1: Upload With Vercel Dashboard

1. Go to https://vercel.com/new
2. Sign in or create a Vercel account.
3. Choose **Add New Project**.
4. Import this folder through GitHub, or drag/upload the project files if your Vercel screen supports manual upload.
5. Framework preset: **Other**.
6. Build command: leave empty.
7. Output directory: leave empty.
8. Deploy.

## Option 2: Upload With Vercel CLI

Open a terminal in this folder and run:

```powershell
npm i -g vercel
vercel login
vercel --prod
```

## Connect `day-wear.shop`

After deployment:

1. Open your Vercel project.
2. Go to **Settings > Domains**.
3. Add `day-wear.shop`.
4. Add `www.day-wear.shop` too.
5. Vercel will show the DNS records to put in GoDaddy.

In GoDaddy:

1. Go to **My Products**.
2. Open `day-wear.shop`.
3. Open **DNS / Manage DNS**.
4. Add the records Vercel shows.

Common Vercel records are:

```text
Type: A
Name: @
Value: 76.76.21.21

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

Use the exact values shown in your Vercel dashboard if they differ.
