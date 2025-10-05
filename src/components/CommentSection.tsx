'use client'

import Giscus from '@giscus/react'
import { MessageCircle } from 'lucide-react'

interface CommentSectionProps {
  articleId: number
}

export default function CommentSection({ articleId }: CommentSectionProps) {
  return (
    <div className="space-y-8">
      <div className="border-t border-gray-700/50 pt-8">
        <div className="flex items-center space-x-3 mb-6">
          <MessageCircle className="w-6 h-6 text-ai-400" />
          <h3 className="text-2xl font-semibold text-white">
            评论区
          </h3>
        </div>

        <div className="bg-gray-900/30 rounded-xl p-6 border border-gray-700/50">
          <Giscus
            id="comments"
            repo="BuGuanBuLiDeYuan/BBT21U.FUN"
            repoId="R_kgDOP8ZSmg"
            category="General"
            categoryId="DIC_kwDOP8ZSms4CwREH"
            mapping="pathname"
            strict="1"
            reactionsEnabled="1"
            emitMetadata="0"
            inputPosition="top"
            theme="dark"
            lang="zh-CN"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  )
}