# CFA Website - Next.js

New website for Cooperative Finance Association built with Next.js 14.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ installed
- Git installed

### Setup on New Machine

1. **Clone the repository:**
   ```bash
   git clone <your-repo-url>
   cd Site2
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run development server:**
   ```bash
   npm run dev
   ```
   Open http://localhost:3000

## 📁 Project Structure

```
Site2/
├── app/                    # Next.js app directory
│   ├── page.tsx           # Homepage
│   ├── solutions/         # Loan Products page
│   ├── membership/        # Membership page
│   ├── leadership/        # Leadership page (Executive Team & Board)
│   ├── resources/         # Careers page
│   ├── news/             # News & Partners page
│   ├── contact/          # Contact page
│   ├── account-login/    # Account Login page
│   ├── components/       # Shared components (Section, etc.)
│   ├── layout.tsx        # Root layout with navigation
│   └── globals.css       # Global styles & animations
├── public/               # Static assets
│   ├── images/          # All images
│   │   ├── board/       # Board member photos
│   │   ├── elt/         # Executive team photos
│   │   └── partners/    # Partner logos (SVG)
│   └── press/           # Press release files
└── next.config.js       # Next.js configuration (static export)
```

## 🎨 Design & Features

- **Color Scheme:** Emerald green theme (#047857, #065f46)
- **Responsive:** Mobile-first with hamburger menu
- **Animations:** Animated hero backgrounds, gradients
- **Fonts:** System fonts for performance
- **Images:** All optimized for static export

## 📄 Pages

1. **Home** (`/`) - Hero with animated background, cooperative overview, features
2. **Loan Products** (`/solutions`) - Interest rates, Simpli-Fi details, commercial lending
3. **Membership** (`/membership`) - Eligibility, benefits, patronage info
4. **Leadership** (`/leadership`) - Executive Team (8 members) & Board of Directors (7 members)
5. **Careers** (`/resources`) - Benefits, compensation, open positions
6. **News & Partners** (`/news`) - Press releases & partner showcase (AgVend, Bushel)
7. **Contact** (`/contact`) - Contact form with mailto, addresses
8. **Account Login** (`/account-login`) - Links to external systems

## 🔧 Development Commands

```bash
# Development server
npm run dev

# Build for production
npm run build

# Lint code
npm run lint
```

## 📦 Deployment to GoDaddy Staging

### Build Static Site

```bash
npm run build
```

This creates an `/out` folder with static HTML/CSS/JS.

### Create Deployment Package

**Option 1: Using tar (Recommended for Linux servers):**
```bash
cd out
tar -czf ../staging-deploy.tar.gz *
```

**Option 2: Using PowerShell Compress-Archive:**
```powershell
Compress-Archive -Path "F:\Site2\out\*" -DestinationPath "F:\Site2\staging-deploy.zip"
```
⚠️ **Note:** Use tar.gz for GoDaddy to avoid Windows backslash path issues!

### Upload to cPanel

1. Log into GoDaddy cPanel
2. Open **File Manager**
3. Navigate to `/public_html/staging.cfafs.com/`
4. **Delete all existing files**
5. Upload `staging-deploy.tar.gz`
6. Right-click → **Extract**
7. Delete the tar.gz file
8. Visit https://staging.cfafs.com

### DNS Configuration (Azure)

Staging subdomain requires DNS record in Azure:
- **Type:** A Record
- **Name:** staging
- **IP Address:** 198.12.238.71
- **TTL:** 3600

### SSL Certificate

Enable SSL in cPanel:
1. Go to **SSL/TLS Status**
2. Find `staging.cfafs.com`
3. Click **Run AutoSSL**
4. Wait 5-10 minutes for certificate issuance

## 🔐 Important Files

- `.htaccess` - Included in build, handles clean URLs and MIME types
- `next.config.js` - Configured for static export with unoptimized images

## 📝 Content Updates

### Adding Press Releases

Edit `app/news/page.tsx`:
```typescript
const pressReleases = [
  {
    title: "Your New Title",
    date: "2025",
    excerpt: "Brief description...",
    link: "/press/your-file.pdf"
  },
  // ... existing releases
]
```

### Updating Interest Rates

Edit `app/solutions/page.tsx` - find the rates section around line 60.

### Adding Team Members

Edit `app/leadership/page.tsx` - add new member objects to `executiveTeam` or `boardMembers` arrays.

## 🏗️ Key Technical Details

- **Static Export:** Site is fully static, no server-side rendering
- **Image Optimization:** Disabled for static export (`unoptimized: true`)
- **Contact Form:** Uses `mailto:` protocol
- **Navigation:** Client-side with mobile responsive menu
- **Partner Logos:** SVG placeholders in `/public/images/partners/`

## 📞 Contact Information

- **Phone:** 816-214-4200
- **Email:** accountservices@cfafs.com
- **Physical:** 11500 North Ambassador Drive, Suite 300, Kansas City, MO 64153
- **Mail:** PO Box 901532, Kansas City, MO 64190-1532
- **Payment:** PO Box 842702, 6th Floor Lockbox, Kansas City, MO 64184-2702

## 🐛 Troubleshooting

### Assets not loading (403 errors)
- Check file permissions in cPanel (files: 644, folders: 755)
- Ensure using tar.gz not ZIP for deployment

### DNS not resolving
- Verify A record in Azure DNS points to 198.12.238.71
- Wait 5-10 minutes for propagation
- Clear DNS cache: `ipconfig /flushdns`

### SSL errors
- Run AutoSSL in cPanel SSL/TLS Status
- Ensure DNS is resolving first
- May take 10-15 minutes after DNS propagation

## 📚 Built With

- Next.js 14.2.33
- React 18
- Tailwind CSS (via globals.css)
- TypeScript

## 🔄 Git Workflow

```bash
# Commit changes
git add .
git commit -m "Description of changes"

# Push to remote
git push origin main

# Pull latest changes
git pull origin main
```

---

**Last Updated:** December 18, 2025
