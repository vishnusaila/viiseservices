import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Sun, Moon } from "lucide-react";
import { cn } from "@/lib/utils";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDark, setIsDark] = useState(
    () => document.documentElement.classList.contains("dark")
  );

  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark");
    setIsDark((prev) => !prev);
  };

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Products", href: "/products" },
    { name: "Careers", href: "/careers" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  const linkClass =
    "text-foreground/70 dark:text-gray-300 hover:text-[#11d4d4] dark:hover:text-[#11d4d4] focus:text-[#11d4d4] active:text-[#11d4d4] transition-colors duration-200";

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/95 dark:bg-gray-900/95 backdrop-blur-md border-b border-border shadow-elegant"
          : "bg-transparent"
      )}
    >
      <nav className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 animate-fade-in-left">
            <div className="w-10 h-10 bg-[#11d4d4] rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">V</span>
            </div>
            <span className="font-heading font-bold text-2xl text-foreground dark:text-white">
              VIISE<span className="text-[#11d4d4]">SOLUTIONS</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8 animate-fade-in-up">
            {navigation.map((item, index) => (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  "nav-link text-sm font-medium transition-colors duration-200 relative",
                  isActive(item.href)
                    ? "text-[#11d4d4]" // active link
                    : linkClass
                )}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA + Theme Toggle - Desktop */}
          <div className="hidden lg:flex items-center space-x-4 animate-fade-in-right">
            {/* Theme Toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="hover:text-[#11d4d4] focus:text-[#11d4d4]"
            >
              {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>

            <Button
              variant="outline"
              size="sm"
              asChild
              className="border-[#11d4d4] text-[#11d4d4] hover:bg-[#11d4d4]/10 hover:text-black  dark:text-white dark:hover:text-[#11d4d4]"
            >
              <Link to="/contact">Let,s Talk</Link>
            </Button>

            
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-background/98 dark:bg-gray-900/98 backdrop-blur-md border-b border-border animate-fade-in-up">
            <div className="container mx-auto px-4 py-6">
              <div className="flex flex-col space-y-4">
                {navigation.map((item, index) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={cn(
                      "text-base font-medium py-2 transition-colors duration-200",
                      isActive(item.href)
                        ? "text-[#11d4d4] border-l-2 border-[#11d4d4] pl-4"
                        : "text-foreground/70 dark:text-gray-300 hover:text-[#11d4d4] dark:hover:text-[#11d4d4] hover:pl-2"
                    )}
                    onClick={() => setIsMenuOpen(false)}
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              {/* CTA + Theme Toggle - Mobile */}
              <div className="flex flex-col space-y-3 mt-6 pt-6 border-t border-border">
                <Button
                  variant="ghost"
                  onClick={toggleTheme}
                  className="flex items-center justify-center hover:text-[#11d4d4] focus:text-[#11d4d4]"
                >
                  {isDark ? (
                    <>
                      <Sun className="h-5 w-5 mr-2" /> Light Mode
                    </>
                  ) : (
                    <>
                      <Moon className="h-5 w-5 mr-2" /> Dark Mode
                    </>
                  )}
                </Button>

                <Button
                  variant="outline"
                  asChild
                  className="border-[#11d4d4] text-[#11d4d4] hover:bg-[#11d4d4]/10"
                >
                  <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
                    Let's Talk
                  </Link>
                </Button>

                
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
