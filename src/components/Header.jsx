import React from 'react';
import { Home, Sparkles, Heart, User } from 'lucide-react';
import Logo from './Logo';

function Header() {
  return (
    <header className="sticky top-0 z-20 w-full backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <Logo />
        <nav className="hidden md:flex items-center gap-6 text-sm text-gray-700">
          <a href="#discover" className="hover:text-gray-900 inline-flex items-center gap-2"><Home size={18}/>Discover</a>
          <a href="#guided" className="hover:text-gray-900 inline-flex items-center gap-2"><Sparkles size={18}/>Guided</a>
          <a href="#favorites" className="hover:text-gray-900 inline-flex items-center gap-2"><Heart size={18}/>Favorites</a>
          <a href="#profile" className="hover:text-gray-900 inline-flex items-center gap-2"><User size={18}/>Profile</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
