#!/usr/bin/env node

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const projectRoot = path.join(__dirname, '..')

// Get all markdown files from the markdown directory
const markdownDir = path.join(projectRoot, 'src', 'markdown')
const files = fs.readdirSync(markdownDir)
const markdownFiles = files.filter(file => file.endsWith('.md'))

console.log(`Found ${markdownFiles.length} markdown files:`)
markdownFiles.forEach(file => console.log(`  - ${file}`))

// Generate imports
const imports = markdownFiles.map(file => {
  const slug = file.replace('.md', '')
  return `import ${slug}Content from '../markdown/${file}?raw'`
}).join('\n')

// Generate articles array for getArticleMetadata
const articlesArray = markdownFiles.map(file => {
  const slug = file.replace('.md', '')
  return `        {
            content: ${slug}Content,
            slug: '${slug}'
        }`
}).join(',\n')

// Generate articles map for getArticleContent
const articlesMap = markdownFiles.map(file => {
  const slug = file.replace('.md', '')
  return `        '${slug}': ${slug}Content`
}).join(',\n')

// Generate getArticleMetadata.ts
const getArticleMetadataContent = `import matter from "gray-matter";
// Auto-generated imports for markdown files
${imports}

const getArticleMetadata = () => {
    // Auto-generated articles array
    const articles = [
${articlesArray}
    ];

    // Parse frontmatter for each article
    return articles.map((article) => {
        const matterResult = matter(article.content);
        return {
            title: matterResult.data.title,
            date: matterResult.data.date,
            bio: matterResult.data.description,
            slug: article.slug,
        }
    });
};

export default getArticleMetadata;`

// Generate getArticleContent.ts
const getArticleContentContent = `import matter from 'gray-matter'
// Auto-generated imports for markdown files
${imports}

const getArticleContent = (slug: string) => {
    // Auto-generated articles map
    const articles = {
${articlesMap}
    };

    const content = articles[slug as keyof typeof articles];
    
    if (!content) {
        throw new Error(\`Article file not found: \${slug}\`);
    }

    const matterResult = matter(content);
    return matterResult;
}

export default getArticleContent`

// Write the files
const utilsDir = path.join(projectRoot, 'src', 'utils')
fs.writeFileSync(path.join(utilsDir, 'getArticleMetadata.ts'), getArticleMetadataContent)
fs.writeFileSync(path.join(utilsDir, 'getArticleContent.ts'), getArticleContentContent)

console.log('\n✅ Successfully generated:')
console.log('  - src/utils/getArticleMetadata.ts')
console.log('  - src/utils/getArticleContent.ts')
console.log('\n🎉 Your articles are now automatically available!')
