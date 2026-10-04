# Reel The Deal

A portfolio and booking website for a Mumbai-based photo and video production studio. It
presents the studio's services, gear and past work, and lets clients book a shoot.

## Sections

| Section | What it shows |
|---|---|
| Hero | Full-screen cinematic intro |
| Services | Product retouching, portrait shoots, full-length and social-media video, reel and long-form editing, voice-over |
| Gear | The studio's camera and production equipment |
| Selected Works | Portfolio of campaigns: fashion, product, drone, real estate, events |
| The Workflow | Book → discovery call → execution → delivery |
| Contact | Booking form, base location (Mumbai, available to travel) |

## Stack

- **React 19** + **TypeScript**, built with **Vite 6**
- **Tailwind CSS 4** for styling
- **Motion** for scroll and entrance animations
- **lucide-react** icons

The first version was generated with Google AI Studio and then edited by hand.

## Run locally

Requires Node.js 18 or later.

```bash
npm install
npm run dev        # http://localhost:3000
```

```bash
npm run build      # production build in dist/
npm run lint       # type-check
```

No API key is needed. The site doesn't call any AI service.
