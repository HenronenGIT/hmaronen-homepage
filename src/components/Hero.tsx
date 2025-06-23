import { BodyLarge, H1, Metadata } from "@/components/ui/Typography";
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
    <section
      className="min-h-screen flex flex-col justify-center items-start px-6 md:px-12 lg:px-24 relative overflow-hidden"
      style={{
        background: `
          radial-gradient(circle at 20% 80%, ${COLORS.primary}15 0%, transparent 50%),
          radial-gradient(circle at 80% 20%, ${COLORS.primary}10 0%, transparent 50%),
          radial-gradient(circle at 40% 40%, ${COLORS.primaryHover}08 0%, transparent 50%),
          linear-gradient(135deg, #0f0f23 0%, #1a1a2e 25%, #16213e 50%, #0f0f23 100%)
        `
      }}
    >
      {/* Animated gradient overlay */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background: `
            linear-gradient(45deg, transparent 30%, ${COLORS.primary}10 50%, transparent 70%),
            linear-gradient(-45deg, transparent 30%, ${COLORS.primaryHover}08 50%, transparent 70%)
          `
        }}
      ></div>

      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <Metadata
                style={{ color: COLORS.primary }}
                className="tracking-wide"
              >
                Creative Engineer
              </Metadata>
              <H1>
                <span className="block">Henri</span>
                <span className="block" style={{ color: COLORS.primary }}>
                  Maronen
                </span>
              </H1>
            </div>

            <div className="space-y-6 max-w-2xl">
              <BodyLarge>
                Solving problems with the help of software.
              </BodyLarge>

              <button
                onClick={handleReachOutClick}
                className="text-white px-8 py-4 rounded-lg text-button transition-all duration-300 hover:scale-105 hover:shadow-lg"
                style={{
                  background: `linear-gradient(135deg, ${COLORS.primary} 0%, ${COLORS.primaryHover} 100%)`,
                }}
              >
                Let's work together
              </button>
            </div>
          </div>

          <div className="relative lg:justify-self-end">
            <div className="relative">
              <div
                className="absolute inset-0 rounded-3xl blur-3xl opacity-30"
                style={{
                  background: `linear-gradient(135deg, ${COLORS.primary} 0%, transparent 70%)`,
                }}
              ></div>

              <div className="relative">
                <img
                  src={heroImage}
                  alt="Henri Maronen"
                  className="w-full max-w-md lg:max-w-lg rounded-3xl"
                  style={{
                    filter: "drop-shadow(0 25px 50px rgba(79, 209, 199, 0.3))",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <ArrowDown className="w-6 h-6 text-gray-400" />
      </div>
    </section>
  );
};

export default Hero;
