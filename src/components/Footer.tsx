import React from 'react';
import { Twitter, Facebook, Rss } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-dark-900 border-t border-dark-800">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold text-white">YEBADONG</h3>
            <p className="text-sm text-gray-400 mt-2">
              Since 1994, the heart of the Korean Progressive Rock scene.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold text-white">Links</h3>
            <ul className="mt-2 space-y-2 text-sm">
              <li><a href="/about" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
              <li><a href="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
              <li><a href="/privacy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold text-white">Connect</h3>
            <div className="flex mt-2 space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Twitter /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Facebook /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Rss /></a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-dark-800 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Yebadong. All rights reserved.</p>
          <p className="mt-1">Powered by the love of Progressive Rock.</p>
        </div>
      </div>
    </footer>
  );
}; 