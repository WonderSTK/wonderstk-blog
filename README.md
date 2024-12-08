

<div align="center">

## wonderstk


</div>

wonderstk is an opinionated, no-frills static blogging template built with [Astro](https://astro.build/), [Tailwind](https://tailwindcss.com/), and [shadcn/ui](https://ui.shadcn.com/). Extraordinarily loosely based off the [Astro Micro](https://astro-micro.vercel.app/) 
> [!NOTE]
> To learn more about why this template exists, read [The State of Static Blogs in 2024](https://wonderstk-blog.vercel.app/blog/the-state-of-static-blogs), where I share my take on what constitutes a great blogging template and my goals while developing this one.




## Features

- [Astro](https://astro.build/)&rsquo;s [Islands](https://docs.astro.build/en/concepts/islands/) architecture for partial/selective hydration and client-side interactivity while maintaining a fast-to-render static site.
- [shadcn/ui](https://ui.shadcn.com/)&rsquo;s [Tailwind](https://tailwindcss.com/) color convention for automatic styling across both light and dark themes. Includes accessible, theme-aware UI components for navigation, buttons, etc.
- [rehype-pretty-code](https://rehype-pretty.pages.dev/) with [Shiki](https://github.com/shikijs/shiki) for advanced code block styling, highlighting, and code block titles/captions.
- Blog post authoring using [MDX](https://mdxjs.com/) for component-style content, alongside $\LaTeX$ rendering using [KaTeX](https://katex.org/).
- Astro [View Transitions](https://docs.astro.build/en/guides/view-transitions/) in <abbr title="Single Page Application">SPA</abbr> mode for smooth, opt-in animations during route switching.
- SEO optimization with fine-grained control over metadata and [Open Graph](https://ogp.me/) tags for each post.
- [RSS](https://en.wikipedia.org/wiki/RSS) feeds and sitemap generation!
- Supports author profiles (with a dedicated authors page) and adding multiple authors per post.
- Supports project tags (with a dedicated tags page) for easy post categorization and discovery.

## Technology Stack

This is a list of the various technologies used to build this template:

| Category            | Technology Name                                                                                    |
| ------------------- | -------------------------------------------------------------------------------------------------- |
| Framework           | [Astro](https://astro.build/)                                                                      |
| Styling             | [Tailwind](https://tailwindcss.com)                                                                |
| Components          | [shadcn/ui](https://ui.shadcn.com/)                                                                |
| Content             | [MDX](https://mdxjs.com/)                                                                          |
| Syntax Highlighting | [Shiki](https://github.com/shikijs/shiki) + [rehype-pretty-code](https://rehype-pretty.pages.dev/) |
| Graphics            | [Figma](https://www.figma.com/)                                                                    |
| Deployment          | [Vercel](https://vercel.com)                                                                       |

## Getting Started

1. Hit &ldquo;Use this template&rdquo;, the big green button on the top right, to create a new repository in your own GitHub account with this template.

2. Clone the repository:

   ```bash
   git clone https://github.com/[YOUR_USERNAME]/[YOUR_REPO_NAME].git
   cd [YOUR_REPO_NAME]
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open your browser and visit `http://localhost:1234` to get started. The following commands are also available:

   | Command            | Description                                                     |
   | ------------------ | --------------------------------------------------------------- |
   | `npm run start`    | Alias for `npm run dev`                                         |
   | `npm run build`    | Run type checking and build the project                         |
   | `npm run preview`  | Previews the built project                                      |
   | `npm run astro`    | Run Astro CLI commands                                          |
   | `npm run prettier` | Blanket format all files using [Prettier](https://prettier.io/) |



Built with &hearts; by [wonderstk](https://personal-portfolio-liard-five.vercel.app/)!

