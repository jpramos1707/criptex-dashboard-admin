
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Monitor, Menu, X, BarChart2, Users, Database, BookOpen, Users2 } from "lucide-react";
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
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 animate-fade-in bg-background border-b border-gray-800"
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

          {/* Balance display */}
          <div className="hidden md:flex items-center">
            <div className="bg-gray-800 rounded-full px-4 py-1 text-criptex-500 font-semibold">
              Balance: 10,000 USDT
            </div>
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

      {/* Navigation bar */}
      <div className="border-t border-gray-800 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="hidden md:flex items-center h-12 space-x-6">
            <Link
              to="/"
              className={cn(
                "flex items-center h-full px-4 text-sm font-medium transition-colors",
                isActive("/")
                  ? "bg-accent text-white"
                  : "text-gray-400 hover:text-white hover:bg-gray-800"
              )}
            >
              <BarChart2 className="h-4 w-4 mr-2" />
              Dashboard
            </Link>
            <Link
              to="/users"
              className={cn(
                "flex items-center h-full px-4 text-sm font-medium transition-colors",
                isActive("/users")
                  ? "bg-accent text-white"
                  : "text-gray-400 hover:text-white hover:bg-gray-800"
              )}
            >
              <Users className="h-4 w-4 mr-2" />
              Users
            </Link>
            <Link
              to="/management"
              className="flex items-center h-full px-4 text-sm font-medium text-gray-400 hover:text-white hover:bg-gray-800 transition-colors"
            >
              <Database className="h-4 w-4 mr-2" />
              Management
            </Link>
            <Link
              to="/brokers"
              className="flex items-center h-full px-4 text-sm font-medium text-gray-400 hover:text-white hover:bg-gray-800 transition-colors"
            >
              <BookOpen className="h-4 w-4 mr-2" />
              Brokers
            </Link>
            <Link
              to="/community"
              className="flex items-center h-full px-4 text-sm font-medium text-gray-400 hover:text-white hover:bg-gray-800 transition-colors"
            >
              <Users2 className="h-4 w-4 mr-2" />
              Community
            </Link>
          </nav>
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
              Dashboard
            </Link>
            <Link
              to="/users"
              className={cn(
                "block py-2 px-3 rounded-md text-base font-medium",
                isActive("/users")
                  ? "bg-accent text-white"
                  : "text-gray-400 hover:text-white hover:bg-gray-800"
              )}
              onClick={toggleMenu}
            >
              Users
            </Link>
            <Link
              to="/management"
              className="block py-2 px-3 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-800"
              onClick={toggleMenu}
            >
              Management
            </Link>
            <Link
              to="/brokers"
              className="block py-2 px-3 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-800"
              onClick={toggleMenu}
            >
              Brokers
            </Link>
            <Link
              to="/community"
              className="block py-2 px-3 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-800"
              onClick={toggleMenu}
            >
              Community
            </Link>
          </div>
          
          {/* Mobile balance display */}
          <div className="px-4 py-3 border-t border-gray-800">
            <div className="bg-gray-800 rounded-full px-4 py-1 text-criptex-500 font-semibold inline-block">
              Balance: 10,000 USDT
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
