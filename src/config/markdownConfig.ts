import remarkGfm from 'remark-gfm'
import rehypeHighlight from 'rehype-highlight'

// Centralized markdown configuration
export const markdownConfig = {
  remarkPlugins: [remarkGfm],
  rehypePlugins: [rehypeHighlight],
}

// You can also add more plugins here as needed
// import remarkMath from 'remark-math'
// import rehypeKatex from 'rehype-katex'
// 
// export const markdownConfigWithMath = {
//   remarkPlugins: [remarkGfm, remarkMath],
//   rehypePlugins: [rehypeHighlight, rehypeKatex],
// }
