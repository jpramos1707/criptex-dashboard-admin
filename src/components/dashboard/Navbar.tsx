
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Monitor, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 animate-fade-in",
        isScrolled
          ? "bg-white/80 backdrop-blur-md border-b border-gray-200 shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Monitor className="h-6 w-6 text-criptex-600" />
              <span className="text-xl font-semibold text-gray-900">
                CriptexHub <span className="text-criptex-600">Admin</span>
              </span>
            </Link>
          </div>

          {/* Desktop menu */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link
              to="/"
              className="text-sm font-medium text-gray-700 hover:text-criptex-600 transition-colors"
            >
              Dashboard
            </Link>
            <Link
              to="/users"
              className="text-sm font-medium text-gray-700 hover:text-criptex-600 transition-colors"
            >
              Users
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden rounded-md p-2 text-gray-700 hover:bg-gray-100 transition-colors"
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
        <div className="animate-slide-in md:hidden bg-white border-b border-gray-200">
          <div className="space-y-1 px-4 py-3">
            <Link
              to="/"
              className="block py-2 px-3 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100 transition-colors"
              onClick={toggleMenu}
            >
              Dashboard
            </Link>
            <Link
              to="/users"
              className="block py-2 px-3 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100 transition-colors"
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
