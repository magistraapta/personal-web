# Automatic Article Generation

This project automatically detects and renders markdown files from the `src/markdown/` folder.

## How it works

1. **Add markdown files** to `src/markdown/` folder
2. **Run the generation script**: `npm run generate-articles`
3. **Your articles are automatically available** in the app!

## Usage

### Adding a new article

1. Create a new `.md` file in `src/markdown/` (e.g., `my-new-article.md`)
2. Add frontmatter to your markdown file:
   ```markdown
   ---
   title: "My New Article"
   description: "A description of my article"
   date: "2024-01-20"
   ---
   
   # My New Article
   
   Your content goes here...
   ```
3. Run `npm run generate-articles`
4. Your article will automatically appear in the articles list!

### Available routes

- `/articles` - List of all articles
- `/article/article1` - Individual article pages
- `/article/my-new-article` - Your new article

## Script details

The `npm run generate-articles` command:
- Scans `src/markdown/` for all `.md` files
- Generates static imports for each file
- Updates `src/utils/getArticleMetadata.ts` and `src/utils/getArticleContent.ts`
- Parses frontmatter using `gray-matter`

## Frontmatter fields

- `title` - Article title
- `description` - Article description/bio
- `date` - Publication date (YYYY-MM-DD format)

## Example

```markdown
---
title: "Getting Started with React"
description: "Learn the basics of React development"
date: "2024-01-20"
---

# Getting Started with React

React is a JavaScript library for building user interfaces...
```

After running `npm run generate-articles`, this article will be available at `/article/getting-started-with-react` and will appear in the articles list sorted by date.
