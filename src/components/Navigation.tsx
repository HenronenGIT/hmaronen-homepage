
const Navigation = () => {
  const navItems = [
    { name: "About Me", href: "#about" },
    { name: "Experience", href: "#work" },
    { name: "Skills", href: "#skills" },
  ];

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Logo in top left */}
      <div className="fixed top-0 left-0 z-50 p-6">
        <button
          onClick={handleLogoClick}
          className="group flex items-center justify-center w-12 h-12 rounded-xl border backdrop-blur-sm transition-all duration-300 hover:scale-110"
          style={{
            background: "linear-gradient(135deg, rgba(79, 209, 199, 0.2) 0%, rgba(175, 235, 231, 0.2) 100%)",
            borderColor: "rgba(79, 209, 199, 0.3)",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = "#4FD1C7";
            e.currentTarget.style.boxShadow = "0 10px 25px rgba(79, 209, 199, 0.25)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = "rgba(79, 209, 199, 0.3)";
            e.currentTarget.style.boxShadow = "none";
          }}
        >
          <span
            className="font-bold text-lg font-heading group-hover:scale-110 transition-transform duration-300"
            style={{ color: "#4FD1C7" }}
          >
            HM
          </span>
        </button>
      </div>

      {/* Navigation menu in top right */}
      <nav className="fixed top-0 right-0 z-50 p-6">
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
    </>
  );
};

export default Navigation;
