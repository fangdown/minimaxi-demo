# MiniMax

MiniMax 官方网站 Next.js 项目，支持中英文国际化。

## 技术栈

- **框架**: Next.js 16 (App Router)
- **语言**: TypeScript
- **样式**: Tailwind CSS 4
- **国际化**: next-intl

## 开始开发

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev
```

访问 http://localhost:3000 （默认语言为中文）

## 目录结构

```
src/
├── app/                 # Next.js App Router
│   ├── [locale]/        # 国际化路由
│   │   ├── about/       # 关于页面
│   │   ├── careers/     # 招聘页面
│   │   ├── models/      # 模型页面
│   │   ├── news/        # 新闻页面
│   │   └── page.tsx     # 首页
│   ├── layout.tsx       # 根布局
│   ├── globals.css      # 全局样式
│   ├── robots.ts        # SEO
│   └── sitemap.ts       # 站点地图
├── components/          # React 组件
│   ├── home/           # 首页组件
│   ├── layout/         # 布局组件
│   ├── news/           # 新闻组件
│   └── ui/             # UI 组件
├── data/               # 静态数据
│   ├── en/             # 英文数据
│   └── zh/             # 中文数据
├── hooks/              # 自定义 Hooks
└── lib/                # 工具函数
```

## 功能

- 中英文国际化 (i18n)
- 响应式设计
- SEO 优化 (robots.txt, sitemap.xml)
- 首页轮播展示
- 产品矩阵展示
- 音乐卡片滚动
- 新闻动态页面

## 部署

项目使用 Vercel 部署，详情见 [Vercel 部署文档](https://nextjs.org/docs/app/building-your-application/deploying)。

## 相关链接

- [MiniMax 官网](https://www.minimaxi.com)
- [MiniMax 文档](https://platform.minimaxi.com)
