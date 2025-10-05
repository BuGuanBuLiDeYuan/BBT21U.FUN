'use client'

import { Cpu, Zap, TrendingUp, Shield, Globe, Github, Copy, Check } from 'lucide-react'
import { useState } from 'react'
import CommentSection from '@/components/CommentSection'

export default function AboutPage() {
  const [copied, setCopied] = useState(false)
  const walletAddress = "FCaWGBhsM72AivvU2QCpkihPFwLg1Stm2ujvuoX3m2pV"

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(walletAddress)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy: ', err)
    }
  }
  return (
    <div className="max-w-4xl mx-auto space-y-12">
      {/* Header */}
      <div className="text-center space-y-6">

        <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-ai-400 via-purple-400 to-crypto-400 bg-clip-text text-transparent leading-tight">
          关于《四论 BBT》
        </h1>

        <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
          关于 BBT 的话题，这 4 篇文章已经讲得差不多了。文章自由开放，欢迎大家随意处置。当然了，我建议，在看到这里的时候，立即买入至少 2100 个 BBT。千错万错，不要踏空错过。
        </p>
      </div>

      {/* Content */}
      <div className="space-y-8">
        <div className="space-y-6">
          <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 rounded-xl p-6 border border-gray-700/50">
            <div className="flex items-center space-x-3 mb-4">
              <div className="p-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg">
                <TrendingUp className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white">欢迎转发</h3>
            </div>
            <p className="text-gray-400">
              这些内容值得更多人了解，欢迎在各个平台分享传播。
            </p>
          </div>

          <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 rounded-xl p-6 border border-gray-700/50">
            <div className="flex items-center space-x-3 mb-4">
              <div className="p-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg">
                <Cpu className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white">欢迎洗稿</h3>
            </div>
            <p className="text-gray-400">
              内容可以自由改编和重新创作，让更多人理解智能经济的概念。
            </p>
          </div>

          <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 rounded-xl p-6 border border-gray-700/50">
            <div className="flex items-center space-x-3 mb-4">
              <div className="p-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg">
                <Github className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white">欢迎留言评论</h3>
            </div>
            <p className="text-gray-400">
              需要登录 GitHub 账户，可以在文章页面和这里自由讨论。
            </p>
          </div>

          <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 rounded-xl p-6 border border-gray-700/50">
            <div className="flex items-center space-x-3 mb-4">
              <div className="p-2 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white">微信聊天</h3>
            </div>
            <p className="text-gray-400 mb-3">
              想要加我微信聊天的，请先转账 199 BBT（目前价格一杯星巴克）。
            </p>
            <p className="text-crypto-400 font-mono font-semibold">
              微信：BrotherZhaoSay
            </p>
          </div>

          <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 rounded-xl p-6 border border-gray-700/50">
            <div className="flex items-center space-x-3 mb-4">
              <div className="p-2 bg-gradient-to-r from-ai-500 to-crypto-500 rounded-lg">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white">获取原文</h3>
            </div>
            <p className="text-gray-400">
              这些内容有个 Word 版本，更方便大家编辑，欢迎 2100 BBT 找我要原文。
            </p>
          </div>

          <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 rounded-xl p-6 border border-gray-700/50">
            <div className="flex items-center space-x-3 mb-4">
              <div className="p-2 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg">
                <Globe className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white">线下讲课</h3>
            </div>
            <p className="text-gray-400">
              如果需要线下讲课的话，69999 BBT，3 小时。
            </p>
          </div>
        </div>

        {/* Additional Info */}
        <div className="bg-gradient-to-br from-gray-900/30 to-gray-800/20 rounded-xl p-8 border border-gray-700/50">
          <h3 className="text-2xl font-semibold text-white mb-6">过滤无效沟通</h3>
          <div className="space-y-4 text-gray-300 leading-relaxed">
            <p>
              其实没啥，就是过滤一下无效沟通。关于 BBT 的话题，这 4 篇文章已经讲得差不多了。
              也没多少可聊的。翻来覆去的车轱辘话也没意思，大家都挺忙的。
            </p>

            {/* Image */}
            <div className="flex justify-center my-6">
              <img
                src="/not_for_sale.webp"
                alt="Not for sale"
                className="w-64 h-auto rounded-lg shadow-lg"
              />
            </div>

            <p>
              我曾经几乎以一己之力，把一个估值五亿美金的 web3 项目，刷屏微信朋友圈。
              三篇文章转化微信好友+QQ好友三千人。微信群被封二十多个，微信被封很多次。
              微信公众号永封 2 个。
            </p>
          </div>
        </div>

        {/* SOL Wallet */}
        <div className="bg-gradient-to-br from-gray-900/30 to-gray-800/20 rounded-xl p-8 border border-gray-700/50 text-center">
          <h3 className="text-2xl font-semibold text-white mb-4">SOL 链钱包地址</h3>
          <p className="text-gray-400 mb-6">
            这是我的 SOL 链钱包地址和二维码，点击地址可直接复制
          </p>

          {/* QR Code */}
          <div className="w-48 h-48 mx-auto mb-6 bg-white rounded-lg overflow-hidden">
            <img
              src="/SOL_ADDRESS_BBT21UdotFUN.png"
              alt="SOL Wallet QR Code"
              className="w-full h-full object-contain"
            />
          </div>

          <div 
            onClick={copyToClipboard}
            className="bg-gray-800/50 rounded-lg p-4 font-mono text-crypto-400 text-sm break-all cursor-pointer hover:bg-gray-800/70 transition-colors relative group"
          >
            <div className="flex items-center justify-between">
              <span className="flex-1 pr-2">{walletAddress}</span>
              <div className="flex-shrink-0 ml-2">
                {copied ? (
                  <Check className="w-4 h-4 text-green-400" />
                ) : (
                  <Copy className="w-4 h-4 text-gray-400 group-hover:text-crypto-400 transition-colors" />
                )}
              </div>
            </div>
            {copied && (
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded">
                已复制!
              </div>
            )}
          </div>
        </div>

      </div>

      {/* Comments Section */}
      <CommentSection articleId={0} />
    </div>
  )
}