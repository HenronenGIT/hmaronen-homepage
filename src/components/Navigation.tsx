import React from "react";

const Navigation = () => {
  const navItems = [
    { name: "About Me", href: "#about" },
    { name: "Work", href: "#work" },
    { name: "Skills", href: "#skills" },
  ];

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 right-20 z-50 p-6">
      <div className="flex items-center space-x-8">
        {navItems.map((item, index) => (
          <button
            key={index}
            onClick={() => handleNavClick(item.href)}
            className="text-white hover:text-teal-400 transition-colors duration-300 font-sans text-sm font-medium"
          >
            {item.name}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Navigation;
