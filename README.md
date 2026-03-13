# Aswin Mohan — Developer Portfolio

A modern, dark-themed full stack developer portfolio built with **Next.js 14**, **Tailwind CSS**, and **Framer Motion**.

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 14 (App Router) |
| Styling | Tailwind CSS |
| Animations | Framer Motion |
| Icons | React Icons |
| Email | EmailJS (client-side) |
| Theme | next-themes |

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Set up environment variables

Create `.env.local`:

```env
# EmailJS — get these from https://emailjs.com
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key

# Site URL (update when deployed)
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### 3. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## EmailJS Setup

1. Create an account at [emailjs.com](https://emailjs.com)
2. Add a **Gmail SMTP** email service (use a Gmail App Password, not regular password) 
## riiq ywaf knyd nugg

3. Create a **Contact Us** email template with these variables:
   - `{{from_name}}` — sender's name
   - `{{from_email}}` — sender's email
   - `{{message}}` — the message
   - `{{time}}` — timestamp
4. Enable **Auto-Reply** in the template settings for thank-you emails
5. Copy **Service ID**, **Template ID**, and **Public Key** into `.env.local`

### Gmail App Password

Required for EmailJS SMTP:
1. Go to [myaccount.google.com/security](https://myaccount.google.com/security)
2. Enable **2-Step Verification**
3. Go to [myaccount.google.com/apppasswords](https://myaccount.google.com/apppasswords)
4. Create an app password for "Mail"
5. Use the 16-character password in EmailJS SMTP settings
## riiq ywaf knyd nugg


## Project Structure

```
app/
  layout.js              # Root layout with ThemeProvider, Navbar, Footer
  page.js                # Home page (all sections)
  api/contact/route.js   # Contact API (fallback, not actively used)
components/
  layout/
    Navbar.js            # Sticky navigation + mobile menu
    Footer.js            # Footer with social links
  sections/
    Hero.js              # Hero section with profile card
    About.js             # About + stats
    Skills.js            # Skills with progress bars
    Projects.js          # Project showcase cards
    Experience.js        # Work experience timeline
    Contact.js           # Contact form (EmailJS)
  ui/
    ThemeProvider.js      # Dark/light theme provider
    ThemeToggle.js       # Theme toggle button
```

## Personalizing Content

| File | What to change |
|---|---|
| `components/sections/Hero.js` | Name, title, tagline, social links |
| `components/sections/About.js` | Bio, stats, technologies |
| `components/sections/Skills.js` | Skills, proficiency levels |
| `components/sections/Projects.js` | Project cards, links, tech stacks |
| `components/sections/Experience.js` | Work history, roles, descriptions |
| `components/sections/Contact.js` | Contact info, location |
| `app/layout.js` | SEO metadata, OG tags |

## Deployment (Vercel)

1. Push code to GitHub
2. Import repo at [vercel.com/new](https://vercel.com/new)
3. Add environment variables in Vercel dashboard:
   - `NEXT_PUBLIC_EMAILJS_SERVICE_ID`
   - `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`
   - `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`
   - `NEXT_PUBLIC_SITE_URL`
4. Deploy

---

Built by Aswin Mohan