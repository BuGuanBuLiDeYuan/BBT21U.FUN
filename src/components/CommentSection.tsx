'use client'

import { useState, useEffect } from 'react'
import { useSession, signIn } from 'next-auth/react'
import { MessageCircle, Send, Github, User } from 'lucide-react'

interface Comment {
  id: string
  author: string
  content: string
  timestamp: string
  avatar?: string
}

interface CommentSectionProps {
  articleId: number
}

export default function CommentSection({ articleId }: CommentSectionProps) {
  const { data: session } = useSession()
  const [comments, setComments] = useState<Comment[]>([])
  const [newComment, setNewComment] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Load comments from localStorage
  useEffect(() => {
    const storedComments = localStorage.getItem(`comments-${articleId}`)
    if (storedComments) {
      setComments(JSON.parse(storedComments))
    }
  }, [articleId])

  // Save comments to localStorage
  const saveComments = (updatedComments: Comment[]) => {
    localStorage.setItem(`comments-${articleId}`, JSON.stringify(updatedComments))
    setComments(updatedComments)
  }

  const handleSubmitComment = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!session || !newComment.trim()) return

    setIsSubmitting(true)

    const comment: Comment = {
      id: Date.now().toString(),
      author: session.user?.name || 'Anonymous',
      content: newComment.trim(),
      timestamp: new Date().toISOString(),
      avatar: session.user?.image || undefined,
    }

    const updatedComments = [comment, ...comments]
    saveComments(updatedComments)
    setNewComment('')
    setIsSubmitting(false)
  }

  const formatTime = (timestamp: string) => {
    const date = new Date(timestamp)
    return date.toLocaleString('zh-CN', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    })
  }

  return (
    <div className="space-y-8">
      <div className="border-t border-gray-700/50 pt-8">
        <div className="flex items-center space-x-3 mb-6">
          <MessageCircle className="w-6 h-6 text-ai-400" />
          <h3 className="text-2xl font-semibold text-white">
            评论区 ({comments.length})
          </h3>
        </div>

        {/* Login prompt or comment form */}
        {!session ? (
          <div className="text-center py-8 space-y-4">
            <p className="text-gray-400">
              登录 GitHub 后即可参与讨论
            </p>
            <button
              onClick={() => {
                try {
                  signIn('github')
                } catch (error) {
                  console.error('GitHub登录错误:', error)
                  alert('GitHub OAuth 尚未配置，请联系管理员')
                }
              }}
              className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-ai-600 to-crypto-600 hover:from-ai-500 hover:to-crypto-500 rounded-lg font-semibold transition-all glow"
            >
              <Github className="w-5 h-5" />
              <span>GitHub 登录</span>
            </button>
            <div className="text-xs text-gray-500 mt-4">
              <p>💡 管理员注意：需要配置 GitHub OAuth 应用</p>
              <p>回调URL: https://bbt21u.fun/api/auth/callback/github</p>
              <p>请设置 GITHUB_ID 和 GITHUB_SECRET 环境变量</p>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmitComment} className="space-y-4">
            <div className="flex items-start space-x-3">
              {session.user?.image ? (
                <img
                  src={session.user.image}
                  alt={session.user.name || 'User'}
                  className="w-10 h-10 rounded-full"
                />
              ) : (
                <div className="w-10 h-10 bg-gradient-to-r from-ai-600 to-crypto-600 rounded-full flex items-center justify-center">
                  <User className="w-5 h-5 text-white" />
                </div>
              )}
              <div className="flex-1">
                <textarea
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  placeholder="分享你的观点..."
                  className="w-full p-4 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-ai-500 focus:ring-1 focus:ring-ai-500 resize-none"
                  rows={3}
                />
                <div className="flex justify-between items-center mt-3">
                  <span className="text-sm text-gray-400">
                    以 {session.user?.name} 身份发布
                  </span>
                  <button
                    type="submit"
                    disabled={!newComment.trim() || isSubmitting}
                    className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-ai-600 to-crypto-600 hover:from-ai-500 hover:to-crypto-500 disabled:opacity-50 disabled:cursor-not-allowed rounded-lg font-medium transition-all"
                  >
                    <Send className="w-4 h-4" />
                    <span>{isSubmitting ? '发布中...' : '发布评论'}</span>
                  </button>
                </div>
              </div>
            </div>
          </form>
        )}

        {/* Comments list */}
        <div className="space-y-6 mt-8">
          {comments.length === 0 ? (
            <div className="text-center py-12">
              <MessageCircle className="w-12 h-12 text-gray-600 mx-auto mb-4" />
              <p className="text-gray-400">
                暂无评论，{session ? '成为第一个评论的人吧！' : '登录后可以发表评论'}
              </p>
            </div>
          ) : (
            comments.map((comment) => (
              <div key={comment.id} className="flex items-start space-x-3 p-4 bg-gray-800/30 rounded-lg border border-gray-700/30">
                {comment.avatar ? (
                  <img
                    src={comment.avatar}
                    alt={comment.author}
                    className="w-10 h-10 rounded-full"
                  />
                ) : (
                  <div className="w-10 h-10 bg-gradient-to-r from-ai-600 to-crypto-600 rounded-full flex items-center justify-center">
                    <User className="w-5 h-5 text-white" />
                  </div>
                )}
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="font-medium text-white">{comment.author}</span>
                    <span className="text-sm text-gray-400">{formatTime(comment.timestamp)}</span>
                  </div>
                  <p className="text-gray-300 leading-relaxed whitespace-pre-wrap">
                    {comment.content}
                  </p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  )
}