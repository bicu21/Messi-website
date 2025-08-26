import React from 'react';
import { FaEnvelope, FaTwitter, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6 text-center mt-1 shadow-amber-500">

      <div className="flex justify-center gap-8 mb-4 text-white">
        <a
          href="mailto:your.email@example.com"
          aria-label="Send email"
          className="flex items-center gap-2 hover:text-amber-400 transition"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaEnvelope size={20} />
          <span>Email</span>
        </a>
        <a
          href="https://twitter.com/TeamMessi"
          aria-label="Twitter Profile"
          className="flex items-center gap-2 hover:text-amber-400 transition"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter size={20} />
          <span>Twitter</span>
        </a>
        <a
          href="https://www.instagram.com/leomessi/"
          aria-label="Instagram Profile"
          className="flex items-center gap-2 hover:text-amber-400 transition"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram size={20} />
          <span>Instagram</span>
        </a>
      </div>

      <p>© {new Date().getFullYear()} Celebrating a Legend. All rights reserved.</p>
      <p className="mt-2 text-sm">Designed and developed by Lydia Kebede Mare.</p>
    </footer>
  );
}
