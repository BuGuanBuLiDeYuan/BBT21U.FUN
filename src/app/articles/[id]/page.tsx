import { notFound } from 'next/navigation'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { articles } from '@/lib/articles'
import { ArrowLeft, Clock, User } from 'lucide-react'
import Link from 'next/link'
import CommentSection from '@/components/CommentSection'
import type { Metadata } from 'next'

interface ArticlePageProps {
  params: Promise<{
    id: string
  }>
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const resolvedParams = await params
  const articleId = parseInt(resolvedParams.id)
  const article = articles[articleId as keyof typeof articles]

  if (!article) {
    notFound()
  }

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Back Button */}
      <Link
        href="/"
        className="inline-flex items-center space-x-2 text-gray-400 hover:text-white transition-colors group"
      >
        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
        <span>返回首页</span>
      </Link>

      {/* Article Header */}
      <div className="space-y-6">
        <div className="inline-flex items-center space-x-2 px-3 py-1 bg-gradient-to-r from-ai-600/20 to-crypto-600/20 rounded-full border border-ai-500/30">
          <div className="w-2 h-2 bg-crypto-400 rounded-full animate-pulse"></div>
          <span className="text-sm text-gray-300">四论BBT 第{article.id}篇</span>
        </div>

        <h1 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-blue-300 via-purple-300 to-green-300 bg-clip-text text-transparent leading-tight">
          {article.title}
        </h1>

        <div className="flex items-center space-x-6 text-gray-400 text-sm">
          <div className="flex items-center space-x-2">
            <User className="w-4 h-4" />
            <span>老赵讲讲（微信：BrotherZhaoSay）</span>
          </div>
          <div className="flex items-center space-x-2">
            <Clock className="w-4 h-4" />
            <span>2025年国庆节</span>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div className="prose prose-invert prose-lg max-w-none">
        <div className="bg-gradient-to-br from-gray-900/30 to-gray-800/20 rounded-xl p-8 border border-gray-700/50">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              h1: ({ children }) => (
                <h1 className="text-3xl font-bold bg-gradient-to-r from-ai-400 to-crypto-400 bg-clip-text text-transparent mb-6 mt-8 first:mt-0">
                  {children}
                </h1>
              ),
              h2: ({ children }) => (
                <h2 className="text-2xl font-semibold text-white mb-4 mt-8 first:mt-0">
                  {children}
                </h2>
              ),
              h3: ({ children }) => (
                <h3 className="text-xl font-semibold text-white mb-3 mt-6">
                  {children}
                </h3>
              ),
              p: ({ children }) => (
                <p className="mb-4 text-gray-300 leading-relaxed">
                  {children}
                </p>
              ),
              blockquote: ({ children }) => (
                <blockquote className="border-l-4 border-ai-500 pl-4 my-6 bg-ai-600/10 py-3 rounded-r-lg">
                  {children}
                </blockquote>
              ),
              ul: ({ children }) => (
                <ul className="list-disc list-inside mb-4 space-y-2 text-gray-300">
                  {children}
                </ul>
              ),
              ol: ({ children }) => (
                <ol className="list-decimal list-inside mb-4 space-y-2 text-gray-300">
                  {children}
                </ol>
              ),
              strong: ({ children }) => (
                <strong className="text-crypto-400 font-semibold">
                  {children}
                </strong>
              ),
              code: ({ children }) => (
                <code className="bg-gray-800 px-2 py-1 rounded text-crypto-400 font-mono text-sm">
                  {children}
                </code>
              ),
              table: ({ children }) => (
                <div className="overflow-x-auto my-8">
                  <table className="w-full border-collapse bg-gray-900/50 rounded-lg overflow-hidden shadow-xl">
                    {children}
                  </table>
                </div>
              ),
              thead: ({ children }) => (
                <thead className="bg-gradient-to-r from-ai-600/40 to-crypto-600/40">
                  {children}
                </thead>
              ),
              tbody: ({ children }) => (
                <tbody className="divide-y divide-gray-700">
                  {children}
                </tbody>
              ),
              th: ({ children }) => (
                <th className="px-6 py-4 text-left text-white font-semibold text-sm uppercase tracking-wider">
                  {children}
                </th>
              ),
              td: ({ children }) => (
                <td className="px-6 py-4 text-gray-300 text-sm whitespace-nowrap">
                  {children}
                </td>
              ),
              img: ({ src, alt }) => (
                <span className="block my-8">
                  <img 
                    src={src} 
                    alt={alt} 
                    className="w-full rounded-lg shadow-xl border border-gray-700/50"
                  />
                  {alt && (
                    <span className="block text-sm text-gray-400 mt-3 text-center italic">
                      {alt}
                    </span>
                  )}
                </span>
              ),
            }}
          >
            {article.content}
          </ReactMarkdown>
        </div>
      </div>

      {/* Comments Section */}
      <CommentSection articleId={articleId} />

      {/* Previous/Next Navigation */}
      <div className="flex justify-between items-center py-8 border-t border-gray-700/50 mt-8">
        <div className="flex-1">
          {articleId > 1 && (
            <Link
              href={`/articles/${articleId - 1}`}
              className="inline-flex items-center space-x-3 px-6 py-3 bg-gradient-to-r from-gray-800/60 to-gray-700/60 rounded-lg border border-gray-600/50 hover:from-ai-600/20 hover:to-ai-500/20 hover:border-ai-500/50 transition-all duration-300 group"
            >
              <ArrowLeft className="w-5 h-5 text-gray-400 group-hover:text-ai-400 group-hover:-translate-x-1 transition-all" />
              <div className="text-left">
                <div className="text-xs text-gray-500 uppercase tracking-wider">上一篇</div>
                <div className="text-sm text-gray-300 group-hover:text-white transition-colors line-clamp-1">
                  {articles[(articleId - 1) as keyof typeof articles]?.title}
                </div>
              </div>
            </Link>
          )}
        </div>
        
        <div className="flex-1 flex justify-end">
          {articleId < Object.keys(articles).length && (
            <Link
              href={`/articles/${articleId + 1}`}
              className="inline-flex items-center space-x-3 px-6 py-3 bg-gradient-to-r from-gray-800/60 to-gray-700/60 rounded-lg border border-gray-600/50 hover:from-crypto-600/20 hover:to-crypto-500/20 hover:border-crypto-500/50 transition-all duration-300 group"
            >
              <div className="text-right">
                <div className="text-xs text-gray-500 uppercase tracking-wider">下一篇</div>
                <div className="text-sm text-gray-300 group-hover:text-white transition-colors line-clamp-1">
                  {articles[(articleId + 1) as keyof typeof articles]?.title}
                </div>
              </div>
              <ArrowLeft className="w-5 h-5 text-gray-400 group-hover:text-crypto-400 group-hover:translate-x-1 transition-all rotate-180" />
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const resolvedParams = await params
  const articleId = parseInt(resolvedParams.id)
  const article = articles[articleId as keyof typeof articles]

  if (!article) {
    return {
      title: '文章未找到 - BBT21U.fun',
    }
  }

  const articleNumber = ['一', '二', '三', '四'][article.id - 1]
  
  return {
    title: `${article.title} - BBT21U.fun`,
    description: `四论BBT之${articleNumber}：${article.title}。探索BBT的崛起与TradeFi智能经济的未来。`,
    keywords: "BBT, 比特币, 区块链, AI, 人工智能, 智能经济, 加密货币, 四论BBT",
    authors: [{ name: "老赵讲讲", url: "https://bbt21u.fun" }],
    creator: "老赵讲讲",
    publisher: "BBT21U.fun",
    openGraph: {
      title: `${article.title} - BBT21U.fun`,
      description: `四论BBT之${articleNumber}：${article.title}。探索BBT的崛起与TradeFi智能经济的未来。`,
      url: `https://bbt21u.fun/articles/${article.id}`,
      siteName: "BBT21U.fun",
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: `${article.title} - BBT21U.fun`,
          type: "image/png",
        },
      ],
      locale: "zh_CN",
      type: "article",
      publishedTime: "2025-10-01T00:00:00.000Z",
      authors: ["老赵讲讲"],
      section: "智能金融",
      tags: ["BBT", "比特币", "AI", "智能经济", "加密货币"],
    },
    alternates: {
      canonical: `https://bbt21u.fun/articles/${article.id}`,
    },
    twitter: {
      card: "summary_large_image",
      title: `${article.title} - BBT21U.fun`,
      description: `四论BBT之${articleNumber}：${article.title}。探索BBT的崛起与TradeFi智能经济的未来。`,
      images: ["/og-image.png"],
      creator: "@bbt21u",
    },
  }
}

export async function generateStaticParams() {
  return Object.keys(articles).map((id) => ({
    id: id,
  }))
}