# Personal Blog

A beautiful, modern personal blog built with React, TypeScript, and Cloudflare Workers.

![React](https://img.shields.io/badge/React-19.x-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue)
![Vite](https://img.shields.io/badge/Vite-6.x-purple)

## ✨ Features

- 🎨 **Beautiful Dark Theme** - Purple-blue gradient with glass morphism effects
- 📱 **Responsive Design** - Works on mobile, tablet, and desktop
- 🔍 **Search & Filter** - Search articles and filter by tags
- 📝 **Markdown Support** - Write posts in Markdown with syntax highlighting
- 🚀 **Fast Performance** - Built on Cloudflare Workers edge network
- 🌊 **Smooth Animations** - Page transitions and hover effects

## 🛠️ Tech Stack

- **Frontend**: React 19, TypeScript, Vite 6
- **Routing**: React Router DOM 7
- **Animation**: Framer Motion
- **Markdown**: react-markdown + react-syntax-highlighter
- **Icons**: Lucide React
- **Backend**: Hono (Cloudflare Workers)
- **Deployment**: Cloudflare Pages

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/gmg0829/vite-react-template.git
cd vite-react-template

# Install dependencies
npm install

# Start development server
npm run dev
```

### Build

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

### Deploy to Cloudflare

```bash
npm run deploy
```

## 📁 Project Structure

```
src/
├── react-app/
│   ├── components/     # Reusable components
│   │   ├── Layout/    # Navbar, Footer, Layout
│   │   └── Post/      # PostCard, PostList
│   ├── pages/         # Page components
│   │   ├── Home/      # Landing page
│   │   ├── BlogList/  # Articles list
│   │   ├── PostDetail/# Article detail
│   │   ├── About/     # About page
│   │   ├── Tags/      # Tags list
│   │   └── NotFound/  # 404 page
│   ├── data/          # Static data (posts, authors)
│   ├── styles/        # Global CSS
│   └── types/         # TypeScript types
└── worker/            # Cloudflare Worker API
```

## 🎯 Routes

| Path | Description |
|------|-------------|
| `/` | Home - Hero + Latest articles |
| `/blog` | All articles with search |
| `/post/:slug` | Article detail |
| `/about` | About the author |
| `/tags` | All tags |
| `/tags/:tag` | Articles by tag |

## 📝 Writing Posts

Add new posts in `src/react-app/data/posts.ts`:

```typescript
{
  slug: 'my-new-post',
  title: 'My New Post Title',
  description: 'A brief description...',
  content: '## Introduction\n\nYour markdown content here...',
  date: '2024-01-15',
  tags: ['React', 'TypeScript'],
  readingTime: 10,
  views: 0,
  author: defaultAuthor,
}
```

## 🎨 Customization

### Colors & Theme

Edit CSS variables in `src/react-app/styles/globals.css`:

```css
:root {
  --primary: #6366f1;
  --accent: #f472b6;
  --bg-primary: #0a0a0f;
  /* ... */
}
```

### Author Info

Update in `src/react-app/data/authors.ts`:

```typescript
export const defaultAuthor: Author = {
  name: 'Your Name',
  avatar: 'https://...',
  bio: 'Your bio...',
  github: 'https://github.com/...',
  // ...
};
```

## 📄 License

MIT License - feel free to use this project for your own blog!

## 🙏 Acknowledgments

- [React](https://react.dev)
- [Vite](https://vitejs.dev)
- [Cloudflare Workers](https://workers.cloudflare.com)
- [Hono](https://hono.dev)
