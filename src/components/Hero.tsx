import { COLORS } from "@/constants/colors";
import { ArrowDown } from "lucide-react";
import heroImage from "../assets/images/hmaronen.png";

const Hero = () => {
  const handleReachOutClick = () => {
    const ctaElement = document.querySelector("#cta");
    if (ctaElement) {
      ctaElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex flex-col justify-center items-start px-6 md:px-12 lg:px-24 relative">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <p
                className="text-lg md:text-xl font-medium tracking-wide font-sans"
                style={{ color: COLORS.primary }}
              >
                Creative Engineer
              </p>
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold leading-none tracking-tight font-heading">
                <span className="block">Henri</span>
                <span className="block" style={{ color: COLORS.primary }}>
                  Maronen
                </span>
              </h1>
            </div>

            <div className="space-y-6 max-w-2xl">
              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed font-sans">
                Solving real-life problems with the help of software.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 pt-8">
              <button
                onClick={handleReachOutClick}
                className="text-white px-8 py-4 rounded-lg font-semibold font-sans transition-all duration-300 hover:scale-105 hover:shadow-lg"
                style={{
                  backgroundColor: COLORS.primary,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = COLORS.primaryHover;
                  e.currentTarget.style.boxShadow = COLORS.shadows.primary;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = COLORS.primary;
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                Reach Out
              </button>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div
              className="w-80 h-80 md:w-96 md:h-96 rounded-2xl border overflow-hidden backdrop-blur-sm"
              style={{
                background: COLORS.gradients.primaryStrong,
                borderColor: COLORS.primaryAlpha[30],
              }}
            >
              <img
                src={heroImage}
                alt="Henri Maronen"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-gray-400" />
      </div>
    </section>
  );
};

export default Hero;
