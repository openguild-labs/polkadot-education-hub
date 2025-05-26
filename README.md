# 🎓 Polkadot Education Hub


A comprehensive education platform for learning about Polkadot, Polkadot SDK, and Web3 development. This Next.js-based application provides structured learning paths, courses, workshops, and resources for developers and enthusiasts to master Polkadot ecosystem development.

Public good site made by OpenGuild Labs for the Polkadot ecosystem.

> **Note:** This project uses [pnpm](https://pnpm.io/) as the package manager. Please ensure you have pnpm installed before proceeding.

## 🚀 Features

- **Structured Learning Paths**: Guided journeys for different skill levels
- **Interactive Courses**: Hands-on coding exercises and projects
- **Workshops**: Live and recorded sessions on various topics
- **Video Library**: Collection of tutorials and talks
- **Research Articles**: In-depth technical content
- **Bootcamps**: Intensive learning programs

## 🏗️ Project Structure

```
.
├── app/                    # Next.js app directory
│   ├── bootcamp/           # Bootcamp pages
│   ├── courses/            # Course pages
│   ├── learning-path/      # Learning path pages
│   ├── learning-roadmap/   # Learning roadmap
│   ├── videos/             # Video library
│   └── workshops/          # Workshop pages
│
├── components/            # Reusable UI components
│   ├── animations/         # Animation components
│   ├── course-preview/     # Course preview components
│   ├── learning-path/      # Learning path components
│   └── ui/                 # Base UI components
│
├── content/               # Content managed files
│   ├── bootcamps/          # Bootcamp content
│   ├── courses/            # Course content
│   ├── learning-paths/     # Learning path content
│   ├── learning-resources/ # Additional resources
│   ├── research-articles/  # Technical articles
│   ├── videos/             # Video metadata
│   └── workshops/          # Workshop content
│
├── lib/                   # Utility functions and server-side code
├── public/                 # Static assets
└── styles/                 # Global styles
```

## 🛠️ Tech Stack

- **Framework**: Next.js 13+ (App Router)
- **Styling**: Tailwind CSS with CSS Modules
- **UI Components**: Radix UI Primitives
- **Animations**: Framer Motion
- **Form Handling**: React Hook Form
- **State Management**: React Context API
- **Type Safety**: TypeScript
- **Content Management**: File-based MDX content

## 🚀 Getting Started

### Prerequisites

- Node.js 18.0.0 or later
- pnpm 8.15.5 or later
- Git

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/openguild-labs/polkadot-education-hub.git
   cd polkadot-education-hub
   ```

2. Install dependencies:
   ```bash
   pnpm install
   ```

3. Create a `.env.local` file in the root directory and add your environment variables:
   ```env
   NEXT_PUBLIC_SITE_URL=http://localhost:3000
   # Add other environment variables as needed
   ```

4. Run the development server:
   ```bash
   pnpm dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📝 Adding Content

All content is managed through the `constants/index.ts` file. Here's how to add different types of content:

### Adding a New Video

1. Add a new entry to the `technicalVideos` array in `constants/index.ts`:
   ```typescript
   export const technicalVideos = [
     // ... existing videos
     { 
       url: 'https://www.youtube.com/embed/YOUR_VIDEO_ID',
       title: 'Video Title',
       description: 'Brief description of the video',
       date: '2023-01-01',
       duration: '15:30',
       tags: ['polkadot', 'tutorial']
     }
   ];
   ```

### Adding a New Workshop

1. Add a new entry to the `workshops` array in `constants/index.ts`:
   ```typescript
   export const workshops = [
     // ... existing workshops
     {
       title: 'Your Workshop Title',
       description: 'Brief description of the workshop',
       url: 'https://link-to-slides-or-resources',
       date: '2023-01-01',
       duration: '2 hours',
       level: 'beginner|intermediate|advanced',
       tags: ['substrate', 'workshop']
     }
   ];
   ```

### Adding a New Research Article

1. Add a new entry to the `researchArticles` array in `constants/index.ts`:
   ```typescript
   export const researchArticles = [
     // ... existing articles
     {
       title: 'Your Research Article Title',
       description: 'Brief description of the research',
       url: 'https://link-to-research-paper',
       authors: ['Author 1', 'Author 2'],
       date: '2023-01-01',
       tags: ['research', 'blockchain']
     }
   ];
   ```

### Adding Twitter Posts

1. Add new Twitter post IDs to the appropriate arrays in `constants/index.ts`:
   ```typescript
   export const twitterPosts = [
     // ... existing post IDs
     'YOUR_TWEET_ID',  // Add new tweet IDs here
   ];
   
   export const communityTwitterFeedback = [
     // ... existing feedback IDs
     'YOUR_FEEDBACK_ID',  // Add new feedback tweet IDs here
   ];
   ```

## 🧪 Testing

Run the test suite:

```bash
pnpm test
```

## 🧹 Linting and Formatting

```bash
# Check for linting errors
pnpm lint

# Fix linting errors
pnpm lint:fix

# Format code
pnpm format

# Check formatting
pnpm check-format

# Validate everything (lint + format check)
pnpm validate
```

## 🤝 Contributing

1. Fork the repository
2. Create a new branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature/your-feature`
5. Open a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Polkadot and Substrate communities
- All contributors and maintainers
- Open source projects that made this possible
