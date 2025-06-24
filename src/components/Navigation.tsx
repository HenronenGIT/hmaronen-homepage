
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const Navigation = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  const navItems = [
    { name: "Who am I", href: "#about" },
    { name: "Experience", href: "#work" },
    { name: "Skillset", href: "#skills" },
    { name: "Testimonials", href: "#testimonials" },
  ];

  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY;

      // Mark that user has scrolled and show navigation
      if (!hasScrolled && currentScrollY > 50) {
        setHasScrolled(true);
        setIsVisible(true);
      }

      // Only apply hide/show logic after user has scrolled once
      if (hasScrolled) {
        if (currentScrollY < 100) {
          // Always show when near top
          setIsVisible(true);
        } else if (currentScrollY > lastScrollY) {
          // Scrolling down
          setIsVisible(false);
        } else {
          // Scrolling up
          setIsVisible(true);
        }
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", controlNavbar);
    return () => window.removeEventListener("scroll", controlNavbar);
  }, [lastScrollY, hasScrolled]);

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false); // Close mobile menu after navigation
  };

  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      {/* Glass morphism container */}
      <div className="mx-4 sm:mx-6 mt-4 sm:mt-6 mb-2">
        <div
          className="flex items-center justify-between px-4 sm:px-6 py-4 rounded-2xl border backdrop-blur-xl transition-all duration-300 hover:backdrop-blur-2xl"
          style={{
            background: "rgba(255, 255, 255, 0.05)",
            borderColor: "rgba(255, 255, 255, 0.1)",
            boxShadow:
              "0 8px 32px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
          }}
        >
          {/* Logo */}
          <button
            onClick={handleLogoClick}
            className="group flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-xl border backdrop-blur-sm transition-all duration-300 hover:scale-110"
            style={{
              background:
                "linear-gradient(135deg, rgba(79, 209, 199, 0.2) 0%, rgba(175, 235, 231, 0.2) 100%)",
              borderColor: "rgba(79, 209, 199, 0.3)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "#4FD1C7";
              e.currentTarget.style.boxShadow =
                "0 10px 25px rgba(79, 209, 199, 0.25)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "rgba(79, 209, 199, 0.3)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            <span
              className="font-bold text-base sm:text-lg font-heading group-hover:scale-110 transition-transform duration-300"
              style={{ color: "#4FD1C7" }}
            >
              HM
            </span>
          </button>

          {/* Desktop Navigation items */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <button
                key={index}
                onClick={() => handleNavClick(item.href)}
                className="relative group text-white hover:text-teal-400 transition-all duration-300 font-heading text-sm font-medium py-2 px-1"
              >
                {item.name}
                {/* Animated underline */}
                <span
                  className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-teal-400 to-teal-300 transition-all duration-300 group-hover:w-full"
                  style={{
                    boxShadow: "0 0 8px rgba(79, 209, 199, 0.5)",
                  }}
                />
                {/* Glow effect on hover */}
                <span
                  className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                  style={{
                    background:
                      "radial-gradient(circle, rgba(79, 209, 199, 0.3) 0%, transparent 70%)",
                  }}
                />
              </button>
            ))}
          </div>

          {/* Mobile Hamburger Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden p-2 text-white hover:text-teal-400 transition-colors duration-300"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div
            className="md:hidden mt-2 rounded-2xl border backdrop-blur-xl transition-all duration-300"
            style={{
              background: "rgba(255, 255, 255, 0.05)",
              borderColor: "rgba(255, 255, 255, 0.1)",
              boxShadow:
                "0 8px 32px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
            }}
          >
            <div className="flex flex-col space-y-2 p-4">
              {navItems.map((item, index) => (
                <button
                  key={index}
                  onClick={() => handleNavClick(item.href)}
                  className="text-left text-white hover:text-teal-400 transition-all duration-300 font-heading text-sm font-medium py-3 px-2 rounded-lg hover:bg-white/5"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
