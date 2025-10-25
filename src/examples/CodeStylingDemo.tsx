import React from 'react'
import MarkdownRenderer from '@/components/Markdown'

/**
 * Demo component showing different code styling examples
 */
export function CodeStylingDemo() {
  const demoContent = `
# Code Styling Demo

This demonstrates the enhanced inline code and code block styling.

## Inline Code Examples

Here are some examples of \`inline code\` with enhanced styling:

- \`const variable = "value"\`
- \`function example() { return true; }\`
- \`npm install package\`
- \`git commit -m "message"\`

## Code Block Examples

Here's a JavaScript code block:

\`\`\`javascript
function greetUser(name) {
    const greeting = \`Hello, \${name}!\`;
    console.log(greeting);
    return greeting;
}

// Call the function
greetUser("World");
\`\`\`

Here's a Python code block:

\`\`\`python
def calculate_fibonacci(n):
    if n <= 1:
        return n
    return calculate_fibonacci(n-1) + calculate_fibonacci(n-2)

# Example usage
result = calculate_fibonacci(10)
print(f"Fibonacci of 10 is: {result}")
\`\`\`

## Features

- **Inline code**: Enhanced background, padding, and border
- **Code blocks**: Dark theme with syntax highlighting
- **Hover effects**: Subtle interactions for inline code
- **Responsive**: Works well on all screen sizes
- **Accessible**: Good contrast ratios and readable fonts

## Blockquote Example

> This is a blockquote example with custom styling.
> It has a blue left border and light blue background.

## Table Example

| Feature | Status | Description |
|---------|--------|-------------|
| Inline Code | ✅ | Enhanced styling with background |
| Code Blocks | ✅ | Dark theme with syntax highlighting |
| Tables | ✅ | Clean borders and spacing |
| Blockquotes | ✅ | Blue accent styling |
  `

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Code Styling Demo</h1>
      <MarkdownRenderer filePath="data:text/plain;base64," />
      <div className="mt-8 p-4 bg-gray-50 rounded-lg">
        <h2 className="text-xl font-semibold mb-4">How to Use</h2>
        <div className="space-y-2 text-sm">
          <p><strong>Inline code:</strong> Use single backticks: <code className="bg-gray-200 px-1 rounded">`code`</code></p>
          <p><strong>Code blocks:</strong> Use triple backticks with language:</p>
          <pre className="bg-gray-800 text-gray-100 p-2 rounded text-xs overflow-x-auto">
{`\`\`javascript
// Your code here
\`\`\``}
          </pre>
        </div>
      </div>
    </div>
  )
}

export default CodeStylingDemo
