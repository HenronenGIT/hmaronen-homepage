import { COLORS } from "@/constants/colors";
import { Briefcase, Code, GraduationCap } from "lucide-react";

const About = () => {
  const aboutParagraphs = [
    {
      id: 1,
      content: (
        <>
          I'm a passionate problem solver currently contributing to the
          Product Team at Slush, where I'm responsible for the digital
          tools used around the year and during the event.
        </>
      )
    },
    {
      id: 2,
      content: (
        <>
          As a proud alumnus of{" "}
          <a
            href="https://www.hive.fi/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold hover:underline transition-all duration-300"
            style={{ color: COLORS.primary }}
          >
            Hive Helsinki
          </a>
          , that pivotet my career into software development, I've
          developed a endless curiosity in technology.
        </>
      )
    },
    {
      id: 3,
      content: (
        <>
          Beyond software development, I'm deeply interested in
          entrepreneurship and leadership.
        </>
      )
    },
    {
      id: 4,
      content: (
        <>
          Outside the wild, you might see me{" "}
          <a
            href="https://www.instagram.com/hmaronen/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold hover:underline transition-all duration-300"
            style={{ color: COLORS.primary }}
          >
            photographing
          </a>
          , hitting furry ball with a padel racket, reading{" "}
          <a
            href="https://www.goodreads.com/review/list/174422574-henri-maronen?shelf=read"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold hover:underline transition-all duration-300"
            style={{ color: COLORS.primary }}
          >
            non-fiction
          </a>
          , or{" "}
          <a
            href="https://youtu.be/LfyfiH3_ifQ?si=yfdi_6hi6wyYbCzM"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold hover:underline transition-all duration-300"
            style={{ color: COLORS.primary }}
          >
            snowboarding
          </a>{" "}
          in Northern Finland.
        </>
      )
    }
  ];

  return (
    <section className="py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold font-heading">
                About <span style={{ color: COLORS.primary }}>Me</span>
              </h2>
              <div
                className="w-20 h-1"
                style={{ backgroundColor: COLORS.primary }}
              ></div>
            </div>

            <div className="space-y-6 text-lg text-gray-300 leading-relaxed font-sans">
              {aboutParagraphs.map((paragraph) => (
                <p key={paragraph.id}>
                  {paragraph.content}
                </p>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="space-y-4">
              {/* Current Role Card */}
              <a
                href="https://www.slush.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div
                  className="rounded-xl p-6 backdrop-blur-sm border transition-all duration-300 hover:scale-105 hover:shadow-lg group cursor-pointer"
                  style={{
                    background: COLORS.gradients.primaryMedium,
                    borderColor: COLORS.primaryAlpha[30],
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = COLORS.primary;
                    e.currentTarget.style.boxShadow = COLORS.shadows.primaryMedium;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = COLORS.primaryAlpha[30];
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  <div className="flex items-center space-x-4">
                    <div
                      className="p-3 rounded-lg group-hover:scale-110 transition-transform duration-300"
                      style={{ backgroundColor: COLORS.primaryAlpha[20] }}
                    >
                      <Briefcase
                        className="w-6 h-6"
                        style={{ color: COLORS.primary }}
                      />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-gray-400 font-sans">
                        Current Role
                      </p>
                      <p
                        className="font-semibold font-sans text-lg"
                        style={{ color: COLORS.primary }}
                      >
                        Product Team, Slush
                      </p>
                    </div>
                  </div>
                </div>
              </a>

              {/* Education Card */}
              <a
                href="https://www.hive.fi/"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div
                  className="rounded-xl p-6 backdrop-blur-sm border transition-all duration-300 hover:scale-105 hover:shadow-lg group cursor-pointer"
                  style={{
                    background: COLORS.gradients.primaryMedium,
                    borderColor: COLORS.primaryAlpha[30],
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = COLORS.primary;
                    e.currentTarget.style.boxShadow = COLORS.shadows.primaryMedium;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = COLORS.primaryAlpha[30];
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  <div className="flex items-center space-x-4">
                    <div
                      className="p-3 rounded-lg group-hover:scale-110 transition-transform duration-300"
                      style={{ backgroundColor: COLORS.primaryAlpha[20] }}
                    >
                      <GraduationCap
                        className="w-6 h-6"
                        style={{ color: COLORS.primary }}
                      />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-gray-400 font-sans">Education</p>
                      <p
                        className="font-semibold font-sans text-lg"
                        style={{ color: COLORS.primary }}
                      >
                        Hive Helsinki
                      </p>
                    </div>
                  </div>
                </div>
              </a>

              {/* Focus Card */}
              <div
                className="rounded-xl p-6 backdrop-blur-sm border transition-all duration-300 hover:scale-105 hover:shadow-lg group cursor-pointer"
                style={{
                  background: COLORS.gradients.primaryMedium,
                  borderColor: COLORS.primaryAlpha[30],
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = COLORS.primary;
                  e.currentTarget.style.boxShadow = COLORS.shadows.primaryMedium;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = COLORS.primaryAlpha[30];
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <div className="flex items-center space-x-4">
                  <div
                    className="p-3 rounded-lg group-hover:scale-110 transition-transform duration-300"
                    style={{ backgroundColor: COLORS.primaryAlpha[20] }}
                  >
                    <Code className="w-6 h-6" style={{ color: COLORS.primary }} />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-400 font-sans">Focus</p>
                    <p
                      className="font-semibold font-sans text-lg"
                      style={{ color: COLORS.primary }}
                    >
                      Web Development
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
