# CFAFS UI/UX Design Handbook

This handbook provides the complete specification for building the user interface and user experience of CFAFS's new website. It is intended for the design and frontend development team.

---

## 🎨 Design Aesthetic Summary

The design takes heavy inspiration from [finto.io](https://finto.io), characterized by:

- **Minimalist** structure with strong white space usage
- **Soft color gradients**, floating elements
- **Flat design**, no harsh shadows
- **Subtle motion** for scroll reveal and hover interactivity
- **Professional, confident tone**

All implementation will follow a clean, grid-based layout with Tailwind CSS and React components in a Next.js environment.

---

## 🎨 Color Palette & Usage

| Role          | Color Name     | HEX     | Usage                            |
| ------------- | -------------- | ------- | -------------------------------- |
| Primary       | Fern Green     | #4F7942 | Headers, navigation, key visuals |
| Secondary     | Sky Blue       | #5CA4EA | Backgrounds, section dividers    |
| Accent        | Goldenrod      | #FFC857 | Buttons, icons, highlights       |
| Neutral Light | Eggshell White | #F7F7F2 | Main background, content areas   |
| Neutral Dark  | Slate Gray     | #495464 | Text, footers, overlays          |

---

## 🧱 Page Layout Wireframes

Use this layout guidance for your Figma designs:

### About

- Hero section with image + large headline
- Timeline or milestone feature
- Vision & Mission card elements
- Call to action (CTA)

### Loans

- Hero + Cards (loan types)
- FAQ accordion section
- Apply Now banner CTA

### Membership

- Hero with intro
- Benefits grid with icons
- How it works (step-by-step)
- CTA

### Contact

- Full-width map
- Contact form with styled fields
- Info cards for phone, email, office

### Board Members

- Grid layout with photos
- Hover effects for name, title, bio excerpt
- Filters for categories/roles

### Executive Leadership

- Hero + list of execs
- Expandable/clickable profile bios

### Careers

- Job list feed (cards or accordion)
- Apply button per job
- Benefits section

### Press Releases

- Grid layout of press cards
- Date filters and search bar
- Article preview + download link

### Login

- Styled login form with 2FA ready
- Link to reset password
- Branded background

---

## 🧩 Component System (Tailwind CSS + React)

Use Tailwind to create reusable components:

- `Button.jsx` — primary and secondary variants
- `Card.jsx` — for jobs, press, team
- `HeroSection.jsx` — headline, subhead, buttons
- `Navbar.jsx` — sticky top nav with dynamic background
- `Footer.jsx` — site links, socials, contact
- `FormField.jsx` — reusable form input wrapper
- `SectionWrapper.jsx` — for spacing and background logic

---

## 🌐 Frontend Tech Stack (Next.js)

- **Tailwind CSS** for styles
- **Framer Motion** for animations
- **Google Fonts** (Inter, Poppins, or DM Sans)
- **React Icons or Lucide** for illustrations
- **Next SEO** for metadata
- **AOS** (Animate on Scroll) optional

---

## 💻 Backend API Structure (Python/FastAPI or Django REST)

### Press

```json
GET /api/press
[
  {
    "id": "press-2024-01",
    "title": "New Partnership Announced",
    "date": "2024-01-15",
    "url": "https://...",
    "summary": "We’re proud to announce..."
  }
]
```

### Careers

```json
GET /api/careers
[
  {
    "id": "job-123",
    "title": "Software Engineer",
    "location": "Remote",
    "description": "We’re hiring...",
    "applyUrl": "https://..."
  }
]
```

### Board & Leadership

```json
GET /api/team/board
[
  {
    "id": "board-jane",
    "name": "Jane Doe",
    "title": "Board Chair",
    "bio": "Jane has 30 years...",
    "photo": "/images/team/jane.jpg"
  }
]
```

### Login

```json
POST /api/auth/login
{
  "email": "user@example.com",
  "password": "secret"
}
// Response: JWT in HttpOnly cookie
```

---

## 🔐 Auth Flow

- JWT auth for secure login
- Session managed via HttpOnly cookies
- Optional: 2FA using TOTP or SSO for enterprise users

---

## ✅ Dev Notes

- Use a global layout file `layouts/DefaultLayout.jsx` to wrap all pages
- Add SEO metadata to each route with `next-seo`
- Responsive design: Mobile-first, breakpoints for grid stacking
- A11y: Ensure WCAG compliance, keyboard nav, and color contrast

