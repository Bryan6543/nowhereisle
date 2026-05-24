"use client";

import { navLinks } from "@/app/lib/navLinks";
import Image from "next/image";
import Link from "next/link";
import {
  SiX,
  SiInstagram,
  SiYoutube,
  SiDiscord,
  SiTiktok,
} from "@icons-pack/react-simple-icons";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16">
          {/* Logo Section */}
          <div className="lg:col-span-5 flex flex-col items-center md:items-start">
            <Image
              src="/nowhereislelogo.png"
              alt="NowhereIsle Studio"
              width={180}
              height={180}
              className="mb-6"
            />
            <p className="text-gray-400 text-center md:text-left max-w-xs">
              Crafting atmospheric worlds and unforgettable stories.
            </p>
          </div>

          {/* Links Container */}
          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-10">
            {/* Community */}
            <div>
              <h4 className="text-lg font-bold mb-5 text-white">Community</h4>
              <ul className="space-y-3 text-gray-400">
                <li><Link href="/community" className="hover:text-white transition">Community Hub</Link></li>
                <li><Link href="#" className="hover:text-white transition">Fan Art Gallery</Link></li>
                <li><Link href="#" className="hover:text-white transition">Feedback Forum</Link></li>
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-bold mb-5 text-white">Quick Links</h4>
              <ul className="space-y-3 text-gray-400">
                {navLinks.map((item) => (
                  <li key={item.label}>
                    <Link 
                      href={item.href} 
                      className="hover:text-white transition"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social Media */}
            <div>
              <h4 className="text-lg font-bold mb-5 text-white">Follow Us</h4>
              <div className="flex gap-6">
                <SocialIcon href="https://x.com/nowhereisle" icon={<SiX size={24} />} />
                <SocialIcon href="https://instagram.com/nowhereisle" icon={<SiInstagram size={24} />} />
                <SocialIcon href="https://youtube.com/@nowhereisle" icon={<SiYoutube size={24} />} />
                <SocialIcon href="https://discord.gg/nowhereisle" icon={<SiDiscord size={24} />} />
                <SocialIcon href="https://tiktok.com/@nowhereisle" icon={<SiTiktok size={24} />} />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-gray-500">
          <div className="flex flex-wrap gap-x-6 gap-y-2 justify-center md:justify-start">
            <Link href="/privacy" className="hover:text-gray-300 transition">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-gray-300 transition">Terms & Conditions</Link>
          </div>

          <p className="text-center md:text-right">
            © 2026 NowhereIsle Studios. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

// Reusable Social Icon Component
function SocialIcon({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-400 hover:text-white transition-transform hover:scale-110"
    >
      {icon}
    </a>
  );
}