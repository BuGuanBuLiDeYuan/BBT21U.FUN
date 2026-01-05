import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import SessionProvider from "@/components/SessionProvider";
import Layout from "@/components/Layout";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://bbt21u.fun'),
  title: {
    default: "BBT21U.fun - 四论BBT：智能金融时代的数字智慧",
    template: "%s | BBT21U.fun"
  },
  description: "探索BBT的崛起与TradeFi智能经济的未来。BBT是智能时代的数字智慧燃料，通过AI预测模型实现价值增长。为什么建议你持有至少2100个BBT？",
  keywords: [
    "BBT", "BlindBox Token", "比特币", "BTC", "区块链", "AI", "人工智能", 
    "智能经济", "加密货币", "数字智慧", "智能金融", "TradeFi", 
    "价格预测", "量化交易", "Solana", "SOL", "pump.fun", "老赵讲讲"
  ],
  authors: [{ name: "老赵讲讲", url: "https://bbt21u.fun" }],
  creator: "老赵讲讲",
  publisher: "BBT21U.fun",
  category: "金融科技",
  classification: "智能金融",
  openGraph: {
    title: "BBT21U.fun - 四论BBT：智能金融时代的数字智慧",
    description: "探索BBT的崛起与TradeFi智能经济的未来。BBT是智能时代的数字智慧燃料，通过AI预测模型实现价值增长。",
    url: "https://bbt21u.fun",
    siteName: "BBT21U.fun",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "BBT21U.fun - 四论BBT：智能金融时代的数字智慧",
        type: "image/png",
      },
    ],
    locale: "zh_CN",
    type: "website",
    countryName: "中国",
  },
  twitter: {
    card: "summary_large_image",
    title: "BBT21U.fun - 四论BBT：智能金融时代的数字智慧",
    description: "探索BBT的崛起与TradeFi智能经济的未来。BBT是智能时代的数字智慧燃料。",
    images: ["/og-image.png"],
    creator: "@bbt21u",
    site: "@bbt21u",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" }
    ],
    shortcut: "/favicon.svg",
    apple: [
      { url: "/favicon.svg", sizes: "180x180", type: "image/svg+xml" }
    ],
  },
  manifest: "/site.webmanifest",
  alternates: {
    canonical: "https://bbt21u.fun",
    languages: {
      "zh-CN": "https://bbt21u.fun",
    }
  },
  verification: {
    google: process.env.GOOGLE_VERIFICATION,
    yandex: process.env.YANDEX_VERIFICATION,
    other: {
      baidu: process.env.BAIDU_VERIFICATION || "",
    }
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "BBT21U.fun",
    "alternateName": "四论BBT",
    "description": "探索BBT的崛起与TradeFi智能经济的未来。BBT是智能时代的数字智慧燃料，通过AI预测模型实现价值增长。",
    "url": "https://bbt21u.fun",
    "author": {
      "@type": "Person",
      "name": "老赵讲讲",
      "identifier": "BrotherZhaoSay",
      "sameAs": ["https://bbt21u.fun"]
    },
    "publisher": {
      "@type": "Organization",
      "name": "BBT21U.fun",
      "url": "https://bbt21u.fun",
      "logo": {
        "@type": "ImageObject",
        "url": "https://bbt21u.fun/logo-21u.svg"
      }
    },
    "inLanguage": "zh-CN",
    "keywords": "BBT, BlindBox Token, 比特币, BTC, 区块链, AI, 人工智能, 智能经济, 加密货币, 数字智慧, 智能金融, TradeFi, 价格预测, 量化交易, Solana",
    "potentialAction": {
      "@type": "ReadAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://bbt21u.fun/articles/{article_id}"
      }
    },
    "mainEntity": {
      "@type": "Blog",
      "name": "四论BBT系列文章",
      "description": "探讨BBT在智能金融时代的价值与意义",
      "blogPost": [
        {
          "@type": "BlogPosting",
          "headline": "BTC 是数字黄金，什么才是数字智慧｜四论 BBT 之一",
          "url": "https://bbt21u.fun/articles/1",
          "datePublished": "2024-10-05",
          "author": {
            "@type": "Person",
            "name": "老赵讲讲"
          }
        },
        {
          "@type": "BlogPosting",
          "headline": "预测力，才是人类最稀缺的资源｜四论 BBT 之二",
          "url": "https://bbt21u.fun/articles/2",
          "datePublished": "2024-10-05",
          "author": {
            "@type": "Person",
            "name": "老赵讲讲"
          }
        },
        {
          "@type": "BlogPosting",
          "headline": "当文明开始计算自己：BBT、BTC 与智能货币的未来｜四论 BBT 之三",
          "url": "https://bbt21u.fun/articles/3",
          "datePublished": "2024-10-05",
          "author": {
            "@type": "Person",
            "name": "老赵讲讲"
          }
        },
        {
          "@type": "BlogPosting",
          "headline": "挑战 BTC 的，不会是另一个 BTC，而是整个智能时代｜四论 BBT 之四",
          "url": "https://bbt21u.fun/articles/4",
          "datePublished": "2024-10-05",
          "author": {
            "@type": "Person",
            "name": "老赵讲讲"
          }
        }
      ]
    }
  }

  return (
    <html lang="zh-CN">
      <head>
        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}>
        <SessionProvider>
          <Layout>
            {children}
          </Layout>
        </SessionProvider>
      </body>
    </html>
  );
}
