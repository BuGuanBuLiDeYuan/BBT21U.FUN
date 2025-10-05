# BBT21U.fun - 四论BBT：智能金融时代的数字智慧

一个基于 Next.js 构建的现代化网站，展示关于 BBT (BlindBox Token) 的四篇核心文章，探讨智能经济的未来。

## 功能特性

- 🎨 **现代化设计**: 采用 AI 科技范儿和加密货币风格的视觉设计
- 📱 **响应式布局**: 完美适配桌面端和移动端
- 🔐 **GitHub 登录**: 集成 NextAuth.js，支持 GitHub OAuth 认证
- 💬 **评论系统**: 登录后可在任意页面发表评论和讨论
- ⚡ **高性能**: 基于 Next.js 14 App Router，SSG 静态生成
- 🌙 **暗色主题**: 专为阅读体验优化的暗色界面

## 技术栈

- **框架**: Next.js 14 (App Router)
- **样式**: Tailwind CSS
- **认证**: NextAuth.js
- **图标**: Lucide React
- **Markdown**: react-markdown
- **部署**: Vercel

## 本地开发

1. 克隆项目
```bash
git clone <repository-url>
cd bbt21u-fun
```

2. 安装依赖
```bash
npm install
```

3. 配置环境变量
复制 `.env.local` 并填入你的 GitHub OAuth 应用信息：
```env
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-secret-key-here
GITHUB_ID=your-github-client-id
GITHUB_SECRET=your-github-client-secret
```

4. 启动开发服务器
```bash
npm run dev
```

5. 打开 [http://localhost:3000](http://localhost:3000) 查看效果

## GitHub OAuth 配置

1. 访问 [GitHub Developer Settings](https://github.com/settings/applications/new)
2. 创建新的 OAuth App
3. 设置 Authorization callback URL 为 `http://localhost:3000/api/auth/callback/github`
4. 获取 Client ID 和 Client Secret 填入环境变量

## 部署到 Vercel

1. 将代码推送到 GitHub 仓库
2. 在 Vercel 中导入项目
3. 配置环境变量（同本地开发）
4. 部署完成后更新 GitHub OAuth App 的回调 URL

## 项目结构

```
src/
├── app/                 # Next.js 14 App Router 页面
│   ├── articles/[id]/   # 动态文章页面
│   ├── about/          # 关于页面
│   ├── api/auth/       # NextAuth API 路由
│   └── ...
├── components/         # React 组件
├── lib/               # 工具函数和配置
└── ...
```

## 文章内容

网站包含四篇核心文章：

1. **BTC 是数字黄金，BBT 是数字智慧** - 探讨从黄金到比特币再到BBT的价值演进
2. **预测力是人类最稀缺的资源** - 分析预测能力在智能时代的重要性
3. **从AI交易策略到智能货币经济** - 解析BBT的经济模型和通缩机制
4. **展望未来——BBT会不会挑战BTC？** - 思考智能金融时代的货币形态

## 相关链接

- [BBT粉丝网站](https://bbtfans.club/)
- [AI预测系统](https://123456btc.com/)
- [BBT合约地址](https://solscan.io/token/3s4AK2x2nGkKP8ZADbcKuhdPr3coSuh1XnwZEzWgpump)

## 许可证

MIT License
