import GlassButton from "@/components/ui/GlassButton";
import { BodyLarge, H1, H2, Metadata } from "@/components/ui/Typography";
import { COLORS } from "@/constants/colors";
import { ArrowLeft, Home, RefreshCw, Search } from "lucide-react";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );

    // Trigger animation after component mounts
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  // Background styles matching the Hero component
  const backgroundStyles = {
    background: `
      radial-gradient(circle at 20% 80%, ${COLORS.primary}15 0%, transparent 50%),
      radial-gradient(circle at 80% 20%, ${COLORS.primary}10 0%, transparent 50%),
      radial-gradient(circle at 40% 40%, ${COLORS.primaryHover}08 0%, transparent 50%),
      linear-gradient(135deg, #0f0f23 0%, #1a1a2e 25%, #16213e 50%, #0f0f23 100%)
    `,
  };

  const glowStyles = {
    background: `linear-gradient(135deg, ${COLORS.primary} 0%, transparent 70%)`,
  };

  const floatingAnimation = `
    @keyframes float {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-20px); }
    }
    @keyframes glow {
      0%, 100% { opacity: 0.5; }
      50% { opacity: 0.8; }
    }
  `;

  return (
    <>
      <style>{floatingAnimation}</style>
      <div
        className="min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-12 lg:px-24 relative overflow-hidden"
        style={backgroundStyles}
      >
        {/* Animated gradient overlay */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            background: `
              linear-gradient(45deg, transparent 30%, ${COLORS.primary}10 50%, transparent 70%),
              linear-gradient(-45deg, transparent 30%, ${COLORS.primaryHover}08 50%, transparent 70%)
            `,
          }}
        />

        {/* Floating elements for visual interest */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div
            className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full opacity-60"
            style={{
              backgroundColor: COLORS.primary,
              animation:
                "float 6s ease-in-out infinite, glow 3s ease-in-out infinite",
            }}
          />
          <div
            className="absolute top-3/4 right-1/4 w-1 h-1 rounded-full opacity-40"
            style={{
              backgroundColor: COLORS.primaryHover,
              animation:
                "float 4s ease-in-out infinite 2s, glow 2s ease-in-out infinite 1s",
            }}
          />
          <div
            className="absolute top-1/2 left-3/4 w-3 h-3 rounded-full opacity-30"
            style={{
              backgroundColor: COLORS.primary,
              animation:
                "float 8s ease-in-out infinite 1s, glow 4s ease-in-out infinite 2s",
            }}
          />
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          {/* Main content with glass morphism effect */}
          <div
            className={`
              relative p-8 sm:p-12 lg:p-16 rounded-3xl backdrop-blur-xl border border-white/10
              transition-all duration-1000 transform
              ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}
            `}
            style={{
              background: "rgba(255, 255, 255, 0.03)",
              boxShadow: "0 25px 50px rgba(0, 0, 0, 0.15)",
            }}
          >
            {/* Background glow */}
            <div
              className="absolute inset-0 rounded-3xl blur-3xl opacity-10"
              style={glowStyles}
            />

            <div className="relative space-y-8">
              {/* 404 Number with special styling */}
              <div className="space-y-4">
                <H1
                  className="text-8xl sm:text-9xl lg:text-[12rem] font-bold leading-none"
                  style={{
                    background: `linear-gradient(135deg, ${COLORS.primary} 0%, ${COLORS.primaryHover} 100%)`,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  404
                </H1>

                <Metadata
                  className="text-lg tracking-wider opacity-80"
                  style={{ color: COLORS.primary }}
                >
                  PAGE NOT FOUND
                </Metadata>
              </div>

              {/* Message */}
              <div className="space-y-4 max-w-2xl mx-auto">
                <H2 className="text-2xl sm:text-3xl font-semibold text-white">
                  Oops! This page doesn't exist
                </H2>

                <BodyLarge className="text-gray-300 leading-relaxed">
                  The page you're looking for might have been moved, deleted, or
                  you entered the wrong URL.
                  <br />
                  <span className="text-sm opacity-75 block mt-2">
                    Attempted to access:{" "}
                    <code className="bg-white/10 px-2 py-1 rounded text-xs">
                      {location.pathname}
                    </code>
                  </span>
                </BodyLarge>
              </div>

              {/* Action buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
                <GlassButton
                  href="/"
                  variant="primary"
                  size="md"
                  icon={Home}
                  iconPosition="left"
                  className="w-full sm:w-auto"
                >
                  Go Home
                </GlassButton>

                <GlassButton
                  onClick={() => window.history.back()}
                  variant="secondary"
                  size="md"
                  icon={ArrowLeft}
                  iconPosition="left"
                  className="w-full sm:w-auto"
                >
                  Go Back
                </GlassButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
