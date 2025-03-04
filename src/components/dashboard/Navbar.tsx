
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 animate-fade-in border-gray-800"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <span className="text-xl font-bold text-criptex-500">
                Criptex<span className="text-white">Hub</span>
              </span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden rounded-md p-2 text-gray-400 hover:bg-gray-800 transition-colors"
            onClick={toggleMenu}
          >
            <span className="sr-only">Open menu</span>
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {isMenuOpen && (
        <div className="animate-slide-in md:hidden bg-secondary border-b border-gray-800">
          <div className="space-y-1 px-4 py-3">
            <Link
              to="/"
              className={cn(
                "block py-2 px-3 rounded-md text-base font-medium",
                isActive("/")
                  ? "bg-accent text-white"
                  : "text-gray-400 hover:text-white hover:bg-gray-800"
              )}
              onClick={toggleMenu}
            >
              Users
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
