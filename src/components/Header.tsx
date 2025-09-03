'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">F</span>
              </div>
              <span className="text-xl font-bold text-gray-900">Flaretion</span>
            </Link>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/features" className="text-gray-600 hover:text-gray-900 transition-colors">
              功能特色
            </Link>
            <Link href="/strategies" className="text-gray-600 hover:text-gray-900 transition-colors">
              策略库
            </Link>
            <Link href="/pricing" className="text-gray-600 hover:text-gray-900 transition-colors">
              价格方案
            </Link>
            <Link href="/docs" className="text-gray-600 hover:text-gray-900 transition-colors">
              文档
            </Link>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="/login"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              登录
            </Link>
            <Link
              href="/signup"
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200"
            >
              免费试用
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-gray-900 focus:outline-none focus:text-gray-900"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <Link href="/features" className="block px-3 py-2 text-gray-600 hover:text-gray-900">
                功能特色
              </Link>
              <Link href="/strategies" className="block px-3 py-2 text-gray-600 hover:text-gray-900">
                策略库
              </Link>
              <Link href="/pricing" className="block px-3 py-2 text-gray-600 hover:text-gray-900">
                价格方案
              </Link>
              <Link href="/docs" className="block px-3 py-2 text-gray-600 hover:text-gray-900">
                文档
              </Link>
              <div className="border-t pt-3 mt-3">
                <Link href="/login" className="block px-3 py-2 text-gray-600 hover:text-gray-900">
                  登录
                </Link>
                <Link href="/signup" className="block px-3 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg mx-3 text-center">
                  免费试用
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
