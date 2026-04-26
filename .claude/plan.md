MiniMax 官网 1:1 复刻 — 实施计划

Context

复刻 http://www.minimaxi.com 官网，技术栈 Next.js 15 (App Router) + Tailwind CSS v4，静态 JSON 数据，中英双语。目标是像素级还原所有页面、交互和动画。

---

一、项目结构

minimaxi-demo1/
├── public/
│ ├── fonts/ # MiSans, Outfit 字体文件
│ ├── images/
│ │ ├── logo/ # Logo SVG
│ │ ├── icons/ # 导航图标、社交图标
│ │ ├── hero/ # 轮播背景图/插画
│ │ ├── models/ # 模型卡片封面图
│ │ ├── products/ # 产品卡片封面图
│ │ ├── music/ # 音乐卡片封面
│ │ ├── about/ # 关于页面图片
│ │ ├── news/ # 新闻封面图
│ │ └── qrcodes/ # 二维码图片
│ └── favicon.ico
├── src/
│ ├── app/
│ │ ├── [locale]/ # i18n 动态路由
│ │ │ ├── layout.tsx # 根布局 (Nav + Footer)
│ │ │ ├── page.tsx # 首页
│ │ │ ├── about/
│ │ │ │ └── page.tsx # 关于我们
│ │ │ ├── news/
│ │ │ │ ├── page.tsx # 新闻列表
│ │ │ │ └── [slug]/
│ │ │ │ └── page.tsx # 新闻详情
│ │ │ ├── models/
│ │ │ │ └── text/
│ │ │ │ ├── page.tsx # M2.5 模型页
│ │ │ │ └── m27/
│ │ │ │ └── page.tsx # M2.7 模型页
│ │ │ └── careers/
│ │ │ └── page.tsx # 招聘页
│ │ ├── layout.tsx # 全局 layout
│ │ └── globals.css # 全局样式 + 字体 + CSS 变量
│ ├── components/
│ │ ├── layout/
│ │ │ ├── Navbar.tsx # 导航栏
│ │ │ ├── NavDropdown.tsx # 导航下拉菜单
│ │ │ ├── NavMegaMenu.tsx # 模型 mega 下拉
│ │ │ ├── LanguageToggle.tsx
│ │ │ ├── LoginDropdown.tsx
│ │ │ ├── Footer.tsx # 页脚
│ │ │ └── MobileNav.tsx # 移动端导航
│ │ ├── home/
│ │ │ ├── HeroCarousel.tsx # 首页轮播容器
│ │ │ ├── slides/
│ │ │ │ ├── MusicSlide.tsx # Music 2.6 轮播页
│ │ │ │ ├── M27Slide.tsx # M2.7 轮播页
│ │ │ │ ├── AnnualReportSlide.tsx # 年报轮播页
│ │ │ │ ├── TokenPlanSlide.tsx # Token Plan 轮播页
│ │ │ │ ├── HailuoSlide.tsx # Hailuo 2.3 轮播页
│ │ │ │ ├── SpeechSlide.tsx # Speech 2.8 轮播页
│ │ │ │ ├── AgentSlide.tsx # Agent 轮播页
│ │ │ │ └── M2HerSlide.tsx # M2-Her 轮播页
│ │ │ ├── ModelMatrix.tsx # 全栈模型矩阵
│ │ │ ├── ProductMatrix.tsx # AI 产品矩阵
│ │ │ ├── CompanyIntro.tsx # 公司介绍 + 数字动画
│ │ │ └── MusicCardScroller.tsx # 音乐卡片横向滚动
│ │ ├── about/
│ │ │ ├── AboutHero.tsx
│ │ │ ├── AboutContent.tsx
│ │ │ └── ValueCards.tsx
│ │ ├── news/
│ │ │ ├── NewsGrid.tsx
│ │ │ ├── NewsCard.tsx
│ │ │ └── NewsDetail.tsx
│ │ └── ui/
│ │ ├── Button.tsx # CTA 按钮 (pill 形状)
│ │ ├── Badge.tsx # NEW 标签
│ │ ├── ScrollableCards.tsx # 横向滚动卡片容器
│ │ ├── TiltCard.tsx # 3D 倾斜卡片
│ │ ├── HoverLiftCard.tsx # 悬浮提升卡片
│ │ ├── AnimatedCounter.tsx # 数字滚动动画
│ │ ├── CarouselArrows.tsx # 轮播箭头
│ │ └── FeaturePill.tsx # 功能亮点胶囊
│ ├── data/
│ │ ├── zh/
│ │ │ ├── navigation.ts # 导航菜单数据
│ │ │ ├── hero-slides.ts # 轮播数据
│ │ │ ├── models.ts # 模型矩阵数据
│ │ │ ├── products.ts # 产品矩阵数据
│ │ │ ├── company.ts # 公司介绍数据
│ │ │ ├── footer.ts # 页脚链接数据
│ │ │ ├── news.ts # 新闻列表数据
│ │ │ └── about.ts # 关于页面数据
│ │ ├── en/
│ │ │ └── ... (同上，英文版)
│ │ └── types.ts # 数据类型定义
│ ├── hooks/
│ │ ├── useLocale.ts # 获取当前语言
│ │ ├── useReducedMotion.ts # 减弱动画偏好
│ │ ├── useScrollProgress.ts # 滚动进度
│ │ ├── useIntersection.ts # 可见性检测
│ │ └── useAnimatedCounter.ts # 数字动画 hook
│ ├── lib/
│ │ ├── i18n.ts # i18n 配置
│ │ ├── animation.ts # 动画工具函数
│ │ └── utils.ts # 通用工具
│ └── middleware.ts # i18n 路由中间件
├── tailwind.config.ts
├── next.config.ts
├── tsconfig.json
├── package.json
└── .env.local

---

二、设计系统 (Design Tokens)

/_ globals.css 中定义 _/
:root {
/_ 颜色 _/
--color-bg: #ffffff;
--color-bg-dark: #000000;
--color-text-primary: #18181b;
--color-text-heading: #181e25;
--color-text-secondary: #45515e;
--color-text-muted: rgba(0, 0, 0, 0.5);
--color-cta-dark: #181e25;
--color-accent-purple: #886cff;
--color-accent-purple-light: #c7b0fe;
--color-accent-red: #d01316;

/_ 字体 _/
--font-body: 'MiSans', 'PingFang SC', 'Microsoft Yahei', sans-serif;
--font-heading: 'Outfit', 'Helvetica Neue', sans-serif;

/_ 间距 _/
--nav-height: 78px;
--content-max-width: 1200px;
--section-padding: 80px 60px;

/_ 圆角 _/
--radius-pill: 60px;
--radius-card: 12px;

/_ 动画 _/
--duration-fast: 150ms;
--duration-normal: 300ms;
--ease-out-expo: cubic-bezier(0.16, 1, 0.3, 1);
}

---

三、开发阶段 (Sprints)

Sprint 1: 项目脚手架 + 设计系统 (预计 1-2 天)

目标: 项目初始化，设计系统就位，基础布局可运行

任务:

1.  npx create-next-app@latest 初始化项目 (App Router, TypeScript, Tailwind, ESLint)
2.  配置 Tailwind 扩展主题 (颜色、字体、间距)
3.  安装字体 (MiSans + Outfit)，配置 @font-face
4.  编写 globals.css CSS 变量
5.  配置 i18n 中间件 (middleware.ts)，支持 /zh 和 /en 路由
6.  创建 [locale]/layout.tsx 基础布局
7.  创建数据类型定义 (data/types.ts)
8.  编写 Button, Badge 等基础 UI 组件

交付物: 项目可 npm run dev 启动，空白页面带正确字体和颜色

---

Sprint 2: 导航栏 + 页脚 (预计 2-3 天)

目标: 全局导航和页脚完成，所有页面共享

任务:

1.  编写导航数据 (data/zh/navigation.ts, data/en/navigation.ts)
2.  实现 Navbar.tsx:

- Logo 左侧
- 5 个菜单项 (模型/产品/开放平台/新闻动态/关于我们)
- 透明背景，78px 高度
- 滚动时背景变化效果

3.  实现 NavMegaMenu.tsx (模型下拉):

- 4 列布局 (文本/语音/视频/音乐)
- 每列有图标标题 + 模型链接列表

4.  实现 NavDropdown.tsx (产品/开放平台/关于我们下拉):

- 左侧描述 + 右侧链接列表
- 外链图标标识

5.  实现 LoginDropdown.tsx (登录下拉 4 个入口)
6.  实现 LanguageToggle.tsx (EN/中文切换)
7.  实现 Footer.tsx:

- 黑色背景
- Logo + 社交链接行 (邮箱/微信/GitHub/HuggingFace/Discord)
- 4 个二维码 hover 弹出
- 5 列链接 (研究/产品/开放平台/关于我们/新闻动态)
- 底部版权栏 + 备案信息

8.  实现 MobileNav.tsx (移动端汉堡菜单)

交付物: 所有页面有完整的导航和页脚，下拉菜单交互正常

---

Sprint 3: 首页 — Hero 轮播 (预计 3-4 天)

目标: 首页核心轮播区域完成

任务:

1.  实现 HeroCarousel.tsx:

- 630px 高度
- 左右箭头切换
- 自动轮播 (5-8 秒间隔)
- 底部指示器
- 滑动过渡动画

2.  实现 8 个轮播 Slide:

- MusicSlide.tsx: 左侧标题+描述+CTA，右侧横向无限滚动音乐卡片
- M27Slide.tsx: 左侧标题+3个CTA按钮，右侧3个功能亮点胶囊 (tilt-card)
- AnnualReportSlide.tsx: 左侧标题+CTA，右侧插画图
- TokenPlanSlide.tsx: 左侧标题+2个CTA，右侧3个功能胶囊
- HailuoSlide.tsx: 标题+描述+3个CTA (视频背景可能)
- SpeechSlide.tsx: 左侧标题+3个CTA，右侧3个音频样本卡片
- AgentSlide.tsx: 左侧标题+2个CTA，右侧插画
- M2HerSlide.tsx: 左侧标题+2个CTA，右侧插画

3.  实现 MusicCardScroller.tsx:

- 无限横向滚动 (CSS animation)
- 卡片: 封面图 + 标题 + 标签
- 播放按钮 hover 效果

4.  实现 FeaturePill.tsx:

- 圆角胶囊形状
- 标题 + 副标题
- hover 提升效果

交付物: 首页轮播完整可交互，8 个 slide 切换流畅

---

Sprint 4: 首页 — 模型矩阵 + 产品矩阵 + 公司介绍 (预计 2-3 天)

目标: 首页剩余三个区块完成

任务:

1.  实现 ModelMatrix.tsx (全栈模型矩阵):

- 标题 + 描述
- 横向滚动卡片列表 (左右箭头)
- 6 张模型卡片: M2.7, Music 2.6, Hailuo 2.3, Speech 2.8, M2-her, MCP Server
- 每张卡片: 封面图 + NEW 标签 + 模型名 + 类型标签 + 描述 + 箭头

2.  实现 ProductMatrix.tsx (AI 产品矩阵):

- 同上结构
- 5 张产品卡片: Agent, 海螺视频, Audio, 视频Agent, 星野

3.  实现 CompanyIntro.tsx:

- 左侧: 标题 + 两段描述文字
- 右侧: 4 个统计数字 (带滚动动画)
- 200+ 服务国家、2.36亿+ 用户、214,000+ 企业客户、100+ 企业服务国家

4.  实现 ScrollableCards.tsx (通用横向滚动容器)
5.  实现 AnimatedCounter.tsx (数字滚动动画，IntersectionObserver 触发)

交付物: 首页所有区块完成，数字动画在滚动到可视区域时触发

---

Sprint 5: 关于我们 + 新闻页面 (预计 2 天)

目标: 关于页面和新闻列表/详情页完成

任务:

1.  实现 /about 页面:

- Hero 区域: 全宽背景图 + 叠加文字 "关于 MiniMax"
- 公司介绍段落
- 价值观区块: 3 张卡片 (不走捷径 / User-in-the-Loop / 技术驱动)

2.  实现 /news 页面:

- 页面标题 + 副标题
- 新闻卡片网格 (响应式: 1/2/3 列)
- 每张卡片: 封面图 + 标签(文章) + 日期 + 标题 + "阅读更多"
- "加载更多" 按钮 (前端分页)

3.  实现 /news/[slug] 详情页:

- 文章标题 + 日期
- 富文本内容渲染
- 返回列表导航

4.  编写新闻数据 (data/zh/news.ts)

交付物: 关于页面和新闻页面完整可访问

---

Sprint 6: 模型页面 + 招聘页面 (预计 2 天)

目标: 剩余页面完成

任务:

1.  实现 /models/text 页面 (M2.5 模型介绍)
2.  实现 /models/text/m27 页面 (M2.7 模型介绍)

- 模型概述
- 性能基准对比
- 技术规格
- API 接入引导

3.  实现 /careers 招聘页面

- 职位列表
- 职位分类筛选

4.  编写模型和招聘数据文件

交付物: 全站所有页面完成

---

Sprint 7: 英文版 + i18n 完善 (预计 2 天)

目标: 完成英文翻译，双语切换流畅

任务:

1.  编写所有 data/en/ 英文数据文件
2.  确保 middleware.ts 正确处理 locale 路由
3.  语言切换时 URL 正确跳转 (/zh/about ↔ /en/about)
4.  检查所有组件正确读取 locale 数据
5.  英文排版微调 (字间距、行高等)

交付物: 中英文切换完整可用

---

Sprint 8: 动画 + 交互打磨 (预计 2-3 天)

目标: 还原所有动画效果，交互细节到位

任务:

1.  导航下拉菜单动画 (fade + slide)
2.  轮播切换过渡动画
3.  音乐卡片无限滚动 CSS animation
4.  tilt-card 3D 倾斜效果 (鼠标跟随)
5.  hover-lift-card 悬浮阴影效果
6.  数字滚动计数器动画
7.  页面滚动渐入动画 (IntersectionObserver)
8.  按钮 hover/active 状态
9.  新闻卡片 hover 效果
10. 减弱动画偏好支持 (prefers-reduced-motion)

交付物: 所有动画效果还原，交互流畅

---

Sprint 9: 响应式 + 性能优化 (预计 2 天)

目标: 全断点响应式，性能达标

任务:

1.  响应式断点适配: 320, 375, 768, 1024, 1440, 1920
2.  移动端导航 (汉堡菜单)
3.  轮播在移动端的适配
4.  卡片网格响应式
5.  图片优化: Next.js Image 组件, AVIF/WebP
6.  字体子集化
7.  组件懒加载 (dynamic import)
8.  Lighthouse 性能审计 (LCP < 2.5s, CLS < 0.1)

交付物: 全设备适配，Lighthouse 性能评分 90+

---

Sprint 10: 测试 + 最终验收 (预计 1-2 天)

目标: 质量保证

任务:

1.  视觉回归测试 (关键断点截图对比)
2.  跨浏览器测试 (Chrome, Firefox, Safari)
3.  无障碍检查 (键盘导航, ARIA)
4.  链接完整性检查
5.  SEO meta 标签 (title, description, og tags)
6.  最终像素级对比调整

交付物: 生产就绪的完整复刻站点

---

四、关键依赖包

{
"dependencies": {
"next": "^15.x",
"react": "^19.x",
"react-dom": "^19.x",
"clsx": "^2.x",
"tailwind-merge": "^2.x"
},
"devDependencies": {
"@tailwindcss/typography": "^0.5.x",
"typescript": "^5.x",
"@types/react": "^19.x",
"@types/node": "^22.x",
"eslint": "^9.x",
"prettier": "^3.x"
}
}

不引入重型动画库 (如 GSAP/Framer Motion)，优先用 CSS animation + IntersectionObserver 实现，保持 bundle 轻量。

---

五、i18n 方案

采用 Next.js App Router 原生的 [locale] 动态路由段:

- middleware.ts: 检测 Accept-Language 或 cookie，重定向到 /zh 或 /en
- src/data/zh/ 和 src/data/en/: 按语言分目录存放静态数据
- useLocale() hook: 从路由参数获取当前语言
- 组件通过 locale 参数加载对应语言数据

---

六、验证方式

1.  npm run dev 启动开发服务器
2.  浏览器打开 localhost:3000，自动重定向到 /zh
3.  逐页对比原站视觉效果
4.  测试语言切换 (/zh ↔ /en)
5.  测试响应式 (DevTools 模拟不同设备)
6.  npm run build 确保生产构建无错误
7.  Lighthouse 审计性能指标

---

七、总工期估算

┌────────┬───────────────────┬──────────┐
│ Sprint │ 内容 │ 预计天数 │
├────────┼───────────────────┼──────────┤
│ 1 │ 脚手架 + 设计系统 │ 1-2 天 │
├────────┼───────────────────┼──────────┤
│ 2 │ 导航栏 + 页脚 │ 2-3 天 │
├────────┼───────────────────┼──────────┤
│ 3 │ 首页 Hero 轮播 │ 3-4 天 │
├────────┼───────────────────┼──────────┤
│ 4 │ 首页其余区块 │ 2-3 天 │
├────────┼───────────────────┼──────────┤
│ 5 │ 关于 + 新闻页面 │ 2 天 │
├────────┼───────────────────┼──────────┤
│ 6 │ 模型 + 招聘页面 │ 2 天 │
├────────┼───────────────────┼──────────┤
│ 7 │ 英文版 i18n │ 2 天 │
├────────┼───────────────────┼──────────┤
│ 8 │ 动画交互打磨 │ 2-3 天 │
├────────┼───────────────────┼──────────┤
│ 9 │ 响应式 + 性能 │ 2 天 │
├────────┼───────────────────┼──────────┤
│ 10 │ 测试验收 │ 1-2 天 │
├────────┼───────────────────┼──────────┤
│ 合计 │ │ 19-26 天 │
└────────┴───────────────────┴──────────┘

如果并行开发 (2-3 人团队)，可压缩到 10-14 天。
