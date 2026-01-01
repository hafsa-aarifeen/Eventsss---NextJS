# 🎯 DevEvents — Full Stack Next.js Application

A production-style **developer events platform** built with **Next.js 16**.  
Users can explore upcoming tech events, view detailed agendas, and book their spot — while the platform tracks analytics, performance, and user behavior in real time.

This project covers the **entire lifecycle of a modern web application**: design, backend architecture, database modeling, APIs, server actions, caching, analytics, and deployment.

---

## 🧠 Project Overview

DevEvents is a full-stack web application that allows users to:

- Browse curated developer events
- View detailed event pages (agenda, audience, tags, organizer)
- Book events using email-based registration
- Discover similar events based on shared tags
- Experience fast page loads via server-side caching
- Track user behavior and errors using analytics

The application is built using **Next.js App Router**, leveraging **Server Components**, **Server Actions**, and **API Routes** to deliver a scalable and maintainable architecture.

---

## 🛡 Tech Stack 

![NextJs](https://img.shields.io/badge/next%20js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-38B2AC?style=for-the-badge&logo=tailwindcss&logoColor=white)
<br/>
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![Cloudinary](https://img.shields.io/badge/Cloudinary-3448C5?style=for-the-badge&logo=Cloudinary&logoColor=white)
<br/>
![posthog](https://img.shields.io/badge/posthog-232429?style=for-the-badge&logo=posthog&logoColor=white)
![warp](https://img.shields.io/badge/warp-01A4FF?style=for-the-badge&logo=warp&logoColor=white)
<br />
![warp](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)

---

## 🧩 Core Features

### 🔍 Event Discovery
- Server-rendered homepage with featured events
- SEO-friendly dynamic routes using slugs

### 📄 Event Details Page
- Full event overview
- Agenda breakdown
- Audience, mode, location, time
- Tag-based categorization
- Similar events recommendation engine

### 📝 Event Booking
- Email-based booking system
- Duplicate booking prevention
- Server-side validation
- Real-time analytics tracking on submission

### 🖼 Image Uploads
- Secure image uploads via Cloudinary
- Optimized image delivery using Next/Image

### ⚡ Performance Optimization
- Page-level caching using `use cache`
- Reduced database load
- Faster repeat visits

### 📊 Analytics & Monitoring
- Page views & funnels
- Custom event tracking
- Error monitoring with session replays
- Web vitals monitoring

---

## 🚀 Running Locally

    git clone https://github.com/hafsa-aarifeen/dev-events.git
    cd dev-events
    npm install
    npm run dev

### Environment Variables
Create a .env.local file

    NEXT_PUBLIC_BASE_URL=http://localhost:3000
    MONGODB_URI=your_mongodb_uri
    CLOUDINARY_API_KEY=your_key
    CLOUDINARY_API_SECRET=your_secret
    CLOUDINARY_CLOUD_NAME=your_cloud_name
    NEXT_PUBLIC_POSTHOG_KEY=your_key
    NEXT_PUBLIC_POSTHOG_HOST=your_host

### Production Build
    npm run build
    npm start

---

## 🔮 Future Enhancements

- Authentication & role-based access (admin event creation)
- Ticket limits & capacity tracking
- Payment integration
- Advanced search & filters
- Admin dashboard
- Email notifications
- CMS integration

---

## 🔧 Tools & Platforms Used (Why, Where, and Value)

This project integrates several production-grade tools commonly used in modern web teams.

- **PostHog** — Product analytics & error tracking <br />
  Used to track page views, event bookings, session replays, and frontend errors, enabling data-driven UX and debugging.

- **Cloudinary** — Image upload & delivery <br />
Handles secure event image uploads and optimized image serving instead of storing media directly in the database.

- **HTTPie** — API testing <br />
Used to validate and debug REST endpoints (POST /events, GET /events, dynamic slug routes) during backend development.

- **CodeRabbit** — Automated code review <br />
Reviewed database models and API logic, helping catch schema, validation, and maintainability issues early.

- **Warp** — AI-assisted development environment <br />
Accelerated boilerplate generation (MongoDB connection, schemas) while keeping architecture and logic developer-driven.
