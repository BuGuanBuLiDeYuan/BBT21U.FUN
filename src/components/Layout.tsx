'use client'

import { useSession, signIn, signOut } from "next-auth/react"
import Link from "next/link"
import { Github, LogOut, User, Home, Info } from "lucide-react"
import Logo21U from "./Logo21U"

export default function Layout({ children }: { children: React.ReactNode }) {
  const { data: session } = useSession()

  return (
    <div className="min-h-screen matrix-bg">
      <nav className="border-b border-gray-800 bg-black/50 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-2 md:space-x-3 group">
              <div className="group-hover:scale-110 transition-transform">
                <Logo21U size="small" variant="premium" className="md:hidden" />
                <Logo21U size="medium" variant="premium" className="hidden md:block" />
              </div>
              <span className="text-lg md:text-xl font-bold bg-gradient-to-r from-ai-400 to-crypto-400 bg-clip-text text-transparent">
                BBT21U.fun
              </span>
            </Link>

            <div className="flex items-center space-x-2 md:space-x-6">
              <Link 
                href="/" 
                className="flex items-center space-x-1 md:space-x-2 text-gray-300 hover:text-white transition-colors"
              >
                <Home size={16} className="md:w-[18px] md:h-[18px]" />
                <span className="text-sm md:text-base whitespace-nowrap">首页</span>
              </Link>
              <Link 
                href="/about" 
                className="flex items-center space-x-1 md:space-x-2 text-gray-300 hover:text-white transition-colors"
              >
                <Info size={16} className="md:w-[18px] md:h-[18px]" />
                <span className="text-sm md:text-base whitespace-nowrap">关于</span>
              </Link>
              
              {session ? (
                <div className="flex items-center space-x-2 md:space-x-4">
                  <div className="hidden md:flex items-center space-x-2 text-gray-300">
                    <User size={18} />
                    <span className="text-sm">{session.user?.name}</span>
                  </div>
                  <button
                    onClick={() => signOut()}
                    className="flex items-center space-x-1 md:space-x-2 px-2 md:px-3 py-1 md:py-2 rounded-lg bg-red-600/20 text-red-400 hover:bg-red-600/30 transition-colors"
                  >
                    <LogOut size={14} className="md:w-4 md:h-4" />
                    <span className="text-xs md:text-sm">退出</span>
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => signIn('github')}
                  className="flex items-center space-x-1 md:space-x-2 px-2 md:px-4 py-1 md:py-2 rounded-lg bg-gradient-to-r from-ai-600 to-crypto-600 hover:from-ai-500 hover:to-crypto-500 transition-all glow text-xs md:text-sm"
                >
                  <Github size={14} className="md:w-4 md:h-4" />
                  <span className="whitespace-nowrap">GitHub登录</span>
                </button>
              )}
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>

      <footer className="border-t border-gray-800 bg-black/30 backdrop-blur-md mt-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-gray-400">
            <p>© 2024 BBT21U.fun - 智能金融时代的数字智慧</p>
            <div className="mt-4 space-y-3">
              <p className="text-gray-300 text-sm font-medium">友情链接</p>
              <div className="flex justify-center space-x-6">
                <a 
                  href="https://bbtfans.club/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-crypto-400 hover:text-crypto-300 transition-colors underline decoration-crypto-400/50 hover:decoration-crypto-300 underline-offset-2"
                >
                  BBT粉丝网站
                </a>
                <a 
                  href="https://123456btc.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-ai-400 hover:text-ai-300 transition-colors underline decoration-ai-400/50 hover:decoration-ai-300 underline-offset-2"
                >
                  AI预测系统
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}