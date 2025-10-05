import Link from "next/link";
import { ArrowRight, Cpu, TrendingUp, Zap, Brain, Info } from "lucide-react";
import Logo21U from "@/components/Logo21U";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "四论BBT：没有BBT是你的可惜，持有BBT是你的幸运 - BBT单价21U再见",
  description: "探索BBT的崛起与TradeFi智能经济的未来。从数字黄金到数字智慧，从预测力稀缺到智能货币经济，BBT如何重新定义价值？为什么建议你持有至少2100个BBT？",
  keywords: [
    "四论BBT", "BBT", "BlindBox Token", "数字智慧", "智能金融", "AI预测",
    "比特币", "BTC", "区块链", "人工智能", "智能经济", "TradeFi",
    "价格预测", "量化交易", "Solana", "pump.fun", "老赵讲讲", "2100个BBT"
  ],
  openGraph: {
    title: "四论BBT：智能金融时代的数字智慧",
    description: "探索BBT的崛起与TradeFi智能经济的未来。BBT是智能时代的数字智慧燃料，通过AI预测模型实现价值增长。",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "四论BBT：智能金融时代的数字智慧",
      },
    ],
  },
  twitter: {
    title: "四论BBT：智能金融时代的数字智慧",
    description: "探索BBT的崛起与TradeFi智能经济的未来。BBT是智能时代的数字智慧燃料。",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://bbt21u.fun",
  }
};

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "四论BBT：智能金融时代的数字智慧",
    "description": "探索BBT的崛起与TradeFi智能经济的未来。BBT是智能时代的数字智慧燃料，通过AI预测模型实现价值增长。",
    "url": "https://bbt21u.fun",
    "mainEntity": {
      "@type": "ItemList",
      "name": "四论BBT系列文章",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "item": {
            "@type": "Article",
            "name": "BTC 是数字黄金，什么才是数字智慧｜四论 BBT 之一",
            "description": "从黄金到比特币再到BBT，价值定义逐步从物质稀缺到共识稀缺再到智能稀缺。",
            "url": "https://bbt21u.fun/articles/1"
          }
        },
        {
          "@type": "ListItem",
          "position": 2,
          "item": {
            "@type": "Article",
            "name": "预测力，才是人类最稀缺的资源｜四论 BBT 之二",
            "description": "BBT将预测能力商品化、去中心化、开放化，让每个人都可以拥有智能预测的权利。",
            "url": "https://bbt21u.fun/articles/2"
          }
        },
        {
          "@type": "ListItem",
          "position": 3,
          "item": {
            "@type": "Article",
            "name": "当文明开始计算自己：BBT、BTC 与智能货币的未来｜四论 BBT 之三",
            "description": "BBT的经济模型建立在消耗→燃烧→通缩→智能增益的循环之上。",
            "url": "https://bbt21u.fun/articles/3"
          }
        },
        {
          "@type": "ListItem",
          "position": 4,
          "item": {
            "@type": "Article",
            "name": "挑战 BTC 的，不会是另一个 BTC，而是整个智能时代｜四论 BBT 之四",
            "description": "当AI占据市场主导，BBT有潜力成为'机器金融货币'。",
            "url": "https://bbt21u.fun/articles/4"
          }
        },
        {
          "@type": "ListItem",
          "position": 5,
          "item": {
            "@type": "Article",
            "name": "附录：BBT基础信息概况",
            "description": "BBT（BlindBox Token）完整基础信息，包含技术特性、价值主张和投资建议。",
            "url": "https://bbt21u.fun/articles/5"
          }
        }
      ]
    },
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "item": {
            "@type": "WebPage",
            "name": "首页",
            "url": "https://bbt21u.fun"
          }
        }
      ]
    }
  };

  const articles = [
    {
      id: 1,
      title: "1️⃣ 《BTC 是数字黄金，什么才是数字智慧｜四论 BBT 之一》",
      excerpt: "从黄金到比特币再到BBT，价值定义逐步从物质稀缺到共识稀缺再到智能稀缺。探索BBT如何承接比特币的共识逻辑，同时引入智能化动力。",
      icon: <Brain className="w-6 h-6" />,
      gradient: "from-yellow-400 to-orange-500",
    },
    {
      id: 2,
      title: "2️⃣ 《预测力，才是人类最稀缺的资源｜四论 BBT 之二》",
      excerpt: "历史上的财富与权力，本质上源于预测未来的能力。BBT将预测能力商品化、去中心化、开放化，让每个人都可以拥有智能预测的权利。",
      icon: <TrendingUp className="w-6 h-6" />,
      gradient: "from-purple-400 to-pink-500",
    },
    {
      id: 3,
      title: "3️⃣ 《当文明开始计算自己：BBT、BTC 与智能货币的未来｜四论 BBT 之三》",
      excerpt: "BBT的经济模型建立在消耗→燃烧→通缩→智能增益的循环之上。每一次代币消耗，都是AI模型迭代与预测能力增强的过程。",
      icon: <Cpu className="w-6 h-6" />,
      gradient: "from-blue-400 to-cyan-500",
    },
    {
      id: 4,
      title: "4️⃣ 《挑战 BTC 的，不会是另一个 BTC，而是整个智能时代｜四论 BBT 之四》",
      excerpt: "当AI占据市场主导，BBT有潜力成为'机器金融货币'。分析BBT是否可能成为智能金融时代的基础货币。",
      icon: <Zap className="w-6 h-6" />,
      gradient: "from-green-400 to-emerald-500",
    },
    {
      id: 5,
      title: "5️⃣ 《BBT基础信息概况｜四论BBT之五》",
      excerpt: "BBT（BlindBox Token）完整基础信息概况，包含技术特性、价值主张、投资建议和核心概念解析。",
      icon: <Info className="w-6 h-6" />,
      gradient: "from-indigo-400 to-purple-500",
    }
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="space-y-16">
        {/* Hero Section */}
        <div className="text-center space-y-8">
          {/* 大logo展示 */}
          <div className="flex justify-center my-8">
            <div className="animate-float">
              <Logo21U size="large" />
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-ai-400 via-purple-400 to-crypto-400 bg-clip-text text-transparent leading-tight">
            四论BBT
          </h1>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            “电梯原理”说的是，在一部向上的电梯里，即使什么都不做，你也在向上前进。所以，
            <span className="text-crypto-400 font-semibold"> 先上去再说。</span>
          </p>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            这就是为什么我建议你持有至少
            <span className="text-crypto-400 font-semibold"> 2100 个BBT</span>。这是上电梯的门票🎫。
          </p>
        </div>

        {/* Articles Grid */}
        <div className="space-y-8">
          <div className="space-y-6">
            {articles.map((article) => (
              <Link
                key={article.id}
                href={`/articles/${article.id}`}
                className="group block p-6 bg-gradient-to-br from-gray-900/50 to-gray-800/30 rounded-xl border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 hover:transform hover:scale-[1.02] glow"
              >
                <div className="flex items-start space-x-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${article.gradient} text-white flex-shrink-0`}>
                    {article.icon}
                  </div>
                  <div className="flex-1 space-y-3">
                    <h3 className="text-xl font-semibold text-white group-hover:bg-gradient-to-r group-hover:from-ai-400 group-hover:to-crypto-400 group-hover:bg-clip-text group-hover:text-transparent transition-all">
                      {article.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center text-ai-400 group-hover:text-crypto-400 transition-colors">
                      <span className="text-sm font-medium">阅读全文</span>
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

      </div>
    </>
  );
}
