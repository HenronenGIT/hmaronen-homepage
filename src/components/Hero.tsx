import GlassButton from "@/components/ui/GlassButton";
import { BodyLarge, H1, Metadata } from "@/components/ui/Typography";
import { COLORS } from "@/constants/colors";
import { ArrowDown } from "lucide-react";
import heroImage from "../assets/images/hmaronen.png";

// Background styles
const HERO_BACKGROUND_STYLES = {
  background: `
    radial-gradient(circle at 20% 80%, ${COLORS.primary}15 0%, transparent 50%),
    radial-gradient(circle at 80% 20%, ${COLORS.primary}10 0%, transparent 50%),
    radial-gradient(circle at 40% 40%, ${COLORS.primaryHover}08 0%, transparent 50%),
    linear-gradient(135deg, #0f0f23 0%, #1a1a2e 25%, #16213e 50%, #0f0f23 100%)
  `,
};

const ANIMATED_OVERLAY_STYLES = {
  background: `
    linear-gradient(45deg, transparent 30%, ${COLORS.primary}10 50%, transparent 70%),
    linear-gradient(-45deg, transparent 30%, ${COLORS.primaryHover}08 50%, transparent 70%)
  `,
};

const IMAGE_GLOW_STYLES = {
  background: `linear-gradient(135deg, ${COLORS.primary} 0%, transparent 70%)`,
};

const SCROLL_INDICATOR_STYLES = {
  background: "rgba(255, 255, 255, 0.05)",
  borderColor: "rgba(255, 255, 255, 0.1)",
  boxShadow: "0 4px 16px rgba(0, 0, 0, 0.1)",
};

const IMAGE_FILTER_STYLES = {
  filter: "drop-shadow(0 8px 25px rgba(79, 209, 199, 0.2))",
};

const Hero = () => {
  // Event handlers
  const handleReachOutClick = () => {
    const ctaElement = document.querySelector("#cta");
    if (ctaElement) {
      ctaElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Component parts
  const renderContentSection = () => (
    <div className="space-y-6 sm:space-y-8 animate-fade-in order-2 lg:order-1">
      <div className="space-y-3 sm:space-y-4">
        <Metadata
          style={{ color: COLORS.primary }}
          className="tracking-wide text-sm sm:text-base"
        >
          Creative Engineer
        </Metadata>

        <div className="space-y-2">
          <H1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
            <span className="block">Henri</span>
            <span className="block" style={{ color: COLORS.primary }}>
              Maronen
            </span>
          </H1>
        </div>
      </div>

      <div className="space-y-4 sm:space-y-6 max-w-2xl">
        <BodyLarge className="text-white font-heading text-base sm:text-lg font-medium leading-relaxed">
          Crafting software that brings ideas to{" "}
          <span
            className="animate-pulse-glow"
            style={{ color: COLORS.primary }}
          >
            life
          </span>
          .
        </BodyLarge>

        <div className="pt-2">
          <GlassButton
            onClick={handleReachOutClick}
            variant="primary"
            size="sm"
            className="sm:w-auto"
          >
            Let's connect
          </GlassButton>
        </div>
      </div>
    </div>
  );

  const renderImageSection = () => (
    <div className="relative lg:justify-self-end order-1 lg:order-2">
      <div className="relative max-w-sm sm:max-w-md mx-auto lg:max-w-lg">
        <div className="relative p-4 sm:p-6 rounded-3xl backdrop-blur-xl transition-all duration-500 hover:scale-105 hover:backdrop-blur-2xl">
          {/* Background glow */}
          <div
            className="absolute inset-0 rounded-3xl blur-3xl opacity-20"
            style={IMAGE_GLOW_STYLES}
          />

          <div className="relative">
            <img
              src={heroImage}
              alt="Henri Maronen"
              className="w-full rounded-2xl"
              style={IMAGE_FILTER_STYLES}
            />
          </div>
        </div>
      </div>
    </div>
  );

  const renderScrollIndicator = () => (
    <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
      <div
        className="p-2 sm:p-3 rounded-full border backdrop-blur-sm"
        style={SCROLL_INDICATOR_STYLES}
      >
        <ArrowDown className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400" />
      </div>
    </div>
  );

  return (
    <section
      className="min-h-screen flex flex-col justify-center items-start px-4 sm:px-6 md:px-12 lg:px-24 relative overflow-hidden"
      style={HERO_BACKGROUND_STYLES}
    >
      {/* Animated gradient overlay */}
      <div
        className="absolute inset-0 opacity-30"
        style={ANIMATED_OVERLAY_STYLES}
      />

      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {renderContentSection()}
          {renderImageSection()}
        </div>
      </div>

      {renderScrollIndicator()}
    </section>
  );
};

export default Hero;
