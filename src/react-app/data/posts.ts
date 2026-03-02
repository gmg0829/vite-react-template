import { Post, Tag } from '../types';
import { defaultAuthor } from './authors';

export const posts: Post[] = [
  {
    slug: 'getting-started-with-react-19',
    title: 'React 19 完全指南：新特性与最佳实践',
    description: '深入探索 React 19 带来的革命性新功能，包括 Server Components、Actions 和新的 Hooks。',
    content: `
# React 19 完全指南

React 19 已经正式发布，带来了许多令人兴奋的新特性。本文将详细介绍这些新功能以及如何开始在项目中使用它们。

## Server Components

React 19 引入了 Server Components，这是一项革命性的功能，允许组件在服务器上渲染，从而减少客户端 JavaScript 体积。

\`\`\`tsx
// Server Component
async function PostList() {
  const posts = await fetchPosts();
  
  return (
    <ul>
      {posts.map(post => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}
\`\`\`

## Actions

Actions 是 React 19 另一个重要的新特性，它简化了表单处理和数据提交。

\`\`\`tsx
function MyForm() {
  async function submitForm(formData: FormData) {
    'use server';
    const name = formData.get('name');
    await saveToDatabase(name);
  }
  
  return (
    <form action={submitForm}>
      <input name="name" />
      <button type="submit">Submit</button>
    </form>
  );
}
\`\`\`

## use() Hook

新的 \`use()\` 钩子可以在任何组件中读取 Promise 和 Context。

\`\`\`tsx
function UserProfile({ userPromise }) {
  const user = use(userPromise);
  
  return <h1>{user.name}</h1>;
}
\`\`\`

## 总结

React 19 为我们带来了更强大的开发体验和更好的性能。
    `,
    date: '2024-01-15',
    tags: ['React', '前端', 'JavaScript'],
    readingTime: 15,
    views: 1234,
    author: defaultAuthor,
  },
  {
    slug: 'typescript-5-tips',
    title: 'TypeScript 5.0 实用技巧与进阶用法',
    description: '掌握 TypeScript 5.0 的新特性，提升代码质量和开发效率。',
    content: `
# TypeScript 5.0 实用技巧

TypeScript 5.0 带来了许多改进，让我们来看看一些实用的技巧。

## 1. 装饰器 (Decorators)

TypeScript 5.0 正式支持装饰器语法：

\`\`\`typescript
function log(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  const original = descriptor.value;
  descriptor.value = function (...args: any[]) {
    console.log(\`Calling \${propertyKey}\`, args);
    return original.apply(this, args);
  };
}

class Calculator {
  @log
  add(a: number, b: number) {
    return a + b;
  }
}
\`\`\`

## 2. const 类型参数

\`\`\`typescript
function getFirst<T extends readonly unknown[]>(arr: T): T[0] {
  return arr[0];
}

const arr = getFirst(['a', 'b', 'c']);
// arr 的类型是 'a' | 'b' | 'c'
\`\`\`

## 3. 更好的类型推断

TypeScript 5.0 改进了类型推断，让代码更加简洁。

## 总结

这些技巧可以帮助你写出更好的 TypeScript 代码。
    `,
    date: '2024-01-10',
    tags: ['TypeScript', '前端', '编程'],
    readingTime: 12,
    views: 856,
    author: defaultAuthor,
  },
  {
    slug: 'building-beautiful-ui-with-css',
    title: '用 CSS 构建美观的现代界面',
    description: '探索现代 CSS 特性，打造令人印象深刻的用户界面。',
    content: `
# 用 CSS 构建美观的现代界面

现代 CSS 提供了许多强大的功能，让我们来看看如何利用它们创建漂亮的界面。

## CSS 容器查询

容器查询是 CSS 的游戏改变者：

\`\`\`css
.card-container {
  container-type: inline-size;
}

@container (min-width: 400px) {
  .card {
    display: grid;
    grid-template-columns: 1fr 2fr;
  }
}
\`\`\`

## 渐变与毛玻璃效果

\`\`\`css
.glass-card {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 16px;
}

.gradient-text {
  background: linear-gradient(135deg, #667eea, #764ba2);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
\`\`\`

## CSS 动画

\`\`\`css
@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

.floating {
  animation: float 3s ease-in-out infinite;
}
\`\`\`

## 总结

现代 CSS 让创建美观界面变得更加简单和强大。
    `,
    date: '2024-01-05',
    tags: ['CSS', '前端', '设计'],
    readingTime: 10,
    views: 642,
    author: defaultAuthor,
  },
  {
    slug: 'cloudflare-workers-guide',
    title: 'Cloudflare Workers 部署全指南',
    description: '学习如何使用 Cloudflare Workers 部署高性能 Edge 应用。',
    content: `
# Cloudflare Workers 部署全指南

Cloudflare Workers 是一个强大的边缘计算平台，让我们来学习如何部署应用。

## 1. 创建 Worker

\`\`\`bash
npm create cloudflare@latest my-worker
\`\`\`

## 2. 编写代码

\`\`\`typescript
export default {
  async fetch(request: Request): Promise<Response> {
    return new Response('Hello from Edge!', {
      headers: { 'content-type': 'text/plain' }
    });
  }
};
\`\`\`

## 3. 部署

\`\`\`bash
npx wrangler deploy
\`\`\`

## 总结

Cloudflare Workers 让全球分布式应用变得简单。
    `,
    date: '2024-01-01',
    tags: ['Cloudflare', '后端', '部署'],
    readingTime: 8,
    views: 523,
    author: defaultAuthor,
  },
  {
    slug: 'vite-plugin-guide',
    title: 'Vite 插件开发实战指南',
    description: '从零开始开发自定义 Vite 插件，提升开发体验。',
    content: `
# Vite 插件开发实战指南

Vite 的插件系统非常强大，让我们来学习如何开发自定义插件。

## 插件基础

\`\`\`typescript
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [
    {
      name: 'my-custom-plugin',
      transform(code, id) {
        if (id.endsWith('.vue')) {
          return code.replace(/<script>/, '<script setup>');
        }
      }
    }
  ]
});
\`\`\`

## 高级用法

你可以通过 hook 来扩展 Vite 的功能。

## 总结

自定义插件可以大大提升开发效率。
    `,
    date: '2023-12-28',
    tags: ['Vite', '前端', '工具'],
    readingTime: 11,
    views: 445,
    author: defaultAuthor,
  },
];

export const getAllTags = (): Tag[] => {
  const tagMap = new Map<string, number>();
  
  posts.forEach(post => {
    post.tags.forEach(tag => {
      tagMap.set(tag, (tagMap.get(tag) || 0) + 1);
    });
  });
  
  return Array.from(tagMap.entries())
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => b.count - a.count);
};

export const getPostsByTag = (tag: string): Post[] => {
  return posts.filter(post => 
    post.tags.some(t => t.toLowerCase() === tag.toLowerCase())
  );
};

export const getPostBySlug = (slug: string): Post | undefined => {
  return posts.find(post => post.slug === slug);
};

export const getRecentPosts = (limit: number = 3): Post[] => {
  return [...posts]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, limit);
};
