'use client'

import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-primary-600">Flaretion</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#features" className="text-gray-700 hover:text-primary-600 transition-colors">
              功能特性
            </a>
            <a href="#pricing" className="text-gray-700 hover:text-primary-600 transition-colors">
              价格方案
            </a>
            <a href="#about" className="text-gray-700 hover:text-primary-600 transition-colors">
              关于我们
            </a>
            <a href="#contact" className="text-gray-700 hover:text-primary-600 transition-colors">
              联系我们
            </a>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="btn-secondary">登录</button>
            <button className="btn-primary">免费试用</button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-primary-600"
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

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <a href="#features" className="block px-3 py-2 text-gray-700 hover:text-primary-600">
                功能特性
              </a>
              <a href="#pricing" className="block px-3 py-2 text-gray-700 hover:text-primary-600">
                价格方案
              </a>
              <a href="#about" className="block px-3 py-2 text-gray-700 hover:text-primary-600">
                关于我们
              </a>
              <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-primary-600">
                联系我们
              </a>
              <div className="pt-4 space-y-2">
                <button className="w-full btn-secondary">登录</button>
                <button className="w-full btn-primary">免费试用</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
