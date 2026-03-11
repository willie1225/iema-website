import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import logoImg from "@/assets/association-logo.gif";

const navItems = [
  { name: "關於協會 | 加入我們", href: "/about" },
  { name: "師資陣容", href: "/faculty" },
  { name: "專業課程", href: "/courses" },
  { name: "會員活動", href: "/activities" },
  { name: "芳療學苑", href: "/academy" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();

  // Grass green background: #899D5B (from screenshot)
  // Text color: White
  
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-[#899D5B] shadow-md border-b border-[#899D5B]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo (Left aligned) */}
          <Link href="/" className="flex items-center gap-3 cursor-pointer">
            <img 
              src={logoImg} 
              alt="中華國際自然醫學協會" 
              className="h-12 md:h-14 object-contain" 
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <span className={cn(
                  "text-base font-medium transition-colors hover:text-white/80 relative py-1 cursor-pointer tracking-wide text-white",
                  location === item.href ? "font-bold border-b-2 border-white" : ""
                )}>
                  {item.name}
                </span>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-[#899D5B] border-t border-white/20 absolute w-full shadow-lg animate-in slide-in-from-top-5">
          <div className="flex flex-col p-4 gap-4">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <span 
                  className="block p-3 text-base font-medium text-white hover:bg-white/10 rounded-lg cursor-pointer"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
