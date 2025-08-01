# Giscus Guestbook Setup Guide

This project uses [Giscus](https://giscus.app/) to provide a GitHub Discussions-based guestbook system.

## Quick Setup

### 1. Enable GitHub Discussions

First, make sure GitHub Discussions is enabled for your repository:

1. Go to your repository: `https://github.com/shjeon02/yebadong`
2. Click **Settings**
3. Scroll down to **Features** section
4. Check ☑️ **Discussions**

### 2. Create Guestbook Category

1. Go to **Discussions** tab in your repository
2. Click **New discussion**
3. Create a category named **"Guestbook"** 
4. Set it as **Announcement** type (optional)

### 3. Configure Giscus

1. Visit [giscus.app](https://giscus.app/)
2. Enter your repository: `shjeon02/yebadong`
3. Select **Discussion** mapping
4. Choose **"Guestbook"** category
5. Choose **"Light"** theme
6. **Disable** reactions (already set in code)
7. Copy the generated configuration

### 4. Update Environment Variables

Create a `.env.local` file in your project root:

```bash
# Giscus Configuration
NEXT_PUBLIC_GISCUS_REPO_ID=your_repo_id_here
NEXT_PUBLIC_GISCUS_CATEGORY_ID=your_category_id_here
```

Replace the values with the ones from giscus.app configuration.

### 5. Test the Setup

1. Start your development server: `npm run dev`
2. Navigate to `/guestbook`
3. The Giscus widget should load
4. Try posting a test message (requires GitHub login)

## Current Configuration

The guestbook is configured with:

- ✅ **Repository**: `shjeon02/yebadong`
- ✅ **Category**: "Guestbook"
- ✅ **Theme**: Light (retro-friendly)
- ✅ **Reactions**: Disabled
- ✅ **Metadata**: Disabled
- ✅ **Mapping**: Pathname-based
- ✅ **Language**: Korean (ko)
- ✅ **Loading**: Lazy

## Troubleshooting

### Giscus doesn't load

1. Check browser console for errors
2. Verify repository is public
3. Ensure Discussions are enabled
4. Confirm category exists and is spelled correctly

### Wrong category

1. Go to giscus.app and reconfigure
2. Update environment variables
3. Restart development server

### Styling issues

The component uses Tailwind CSS classes and should inherit your site's design. Customize the styles in:
- `src/app/guestbook/page.tsx` (main page layout)
- `src/app/guestbook/GiscusGuestbook.tsx` (widget container)

## Features

- 🚀 **Lazy loading** with proper fallbacks
- 📱 **Mobile responsive** design
- 🔄 **Error handling** with retry options
- 🎨 **Retro-style** UI matching your site
- 🔗 **Deep linking** to GitHub Discussions
- ⚡ **Client-side rendering** (no hydration issues)

## Security

- Environment variables are prefixed with `NEXT_PUBLIC_` (safe for client-side)
- No sensitive data is exposed
- GitHub handles all authentication and authorization
- Comments are stored on GitHub (not your server)