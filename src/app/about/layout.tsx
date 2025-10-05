import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "关于《四论BBT》- BBT21U.fun",
  description: "关于BBT的话题，这4篇文章已经讲得差不多了。文章自由开放，欢迎大家随意处置。",
  keywords: "BBT, 关于BBT, 老赵讲讲, 微信BrotherZhaoSay, 区块链, AI, 智能经济",
  authors: [{ name: "老赵讲讲", url: "https://bbt21u.fun" }],
  creator: "老赵讲讲",
  publisher: "BBT21U.fun",
  openGraph: {
    title: "关于《四论BBT》- BBT21U.fun",
    description: "关于BBT的话题，这4篇文章已经讲得差不多了。文章自由开放，欢迎大家随意处置。",
    url: "/about",
    siteName: "BBT21U.fun",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "关于《四论BBT》- BBT21U.fun",
        type: "image/svg+xml",
      },
    ],
    locale: "zh_CN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "关于《四论BBT》- BBT21U.fun",
    description: "关于BBT的话题，这4篇文章已经讲得差不多了。文章自由开放，欢迎大家随意处置。",
    images: ["/og-image.svg"],
    creator: "@bbt21u",
  },
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}