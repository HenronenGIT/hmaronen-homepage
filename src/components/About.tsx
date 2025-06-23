import { Briefcase, Code, GraduationCap } from "lucide-react";

const About = () => {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold font-heading">
                About <span style={{ color: "#4FD1C7" }}>Me</span>
              </h2>
              <div
                className="w-20 h-1"
                style={{ backgroundColor: "#4FD1C7" }}
              ></div>
            </div>

            <div className="space-y-6 text-lg text-gray-300 leading-relaxed font-sans">
              <p>
                I'm a passionate problem solver currently contributing to the
                Product Team at Slush, where I'm responsible for the digital
                tools used around the year and during the event.
              </p>
              <p>
                As a proud alumnus of{" "}
                <a
                  href="https://www.hive.fi/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold hover:underline transition-all duration-300"
                  style={{ color: "#4FD1C7" }}
                >
                  Hive Helsinki
                </a>
                , that pivotet my career into software development, I've
                developed a endless curiosity in technology.
              </p>
              <p>
                Beyond software development, I'm deeply interested in
                entrepreneurship and leadership.
              </p>
              <p>
                Outside the wild, you might see me{" "}
                <a
                  href="https://www.instagram.com/hmaronen/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold hover:underline transition-all duration-300"
                  style={{ color: "#4FD1C7" }}
                >
                  photographing
                </a>
                , hitting furry ball with a padel racket, reading{" "}
                <a
                  href="https://www.goodreads.com/review/list/174422574-henri-maronen?shelf=read"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold hover:underline transition-all duration-300"
                  style={{ color: "#4FD1C7" }}
                >
                  non-fiction
                </a>
                , or{" "}
                <a
                  href="https://youtu.be/LfyfiH3_ifQ?si=yfdi_6hi6wyYbCzM"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold hover:underline transition-all duration-300"
                  style={{ color: "#4FD1C7" }}
                >
                  snowboarding
                </a>{" "}
                in Northern Finland.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="space-y-4">
              {/* Current Role Card */}
              <div
                className="rounded-xl p-6 backdrop-blur-sm border transition-all duration-300 hover:scale-105 hover:shadow-lg group cursor-pointer"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(79, 209, 199, 0.15) 0%, rgba(175, 235, 231, 0.15) 100%)",
                  borderColor: "rgba(79, 209, 199, 0.3)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "#4FD1C7";
                  e.currentTarget.style.boxShadow =
                    "0 10px 25px rgba(79, 209, 199, 0.2)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(79, 209, 199, 0.3)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <div className="flex items-center space-x-4">
                  <div
                    className="p-3 rounded-lg group-hover:scale-110 transition-transform duration-300"
                    style={{ backgroundColor: "rgba(79, 209, 199, 0.2)" }}
                  >
                    <Briefcase
                      className="w-6 h-6"
                      style={{ color: "#4FD1C7" }}
                    />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-400 font-sans">
                      Current Role
                    </p>
                    <p
                      className="font-semibold font-sans text-lg"
                      style={{ color: "#4FD1C7" }}
                    >
                      Product Team,{" "}
                      <a
                        href="https://www.hive.fi/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-semibold font-sans text-lg hover:underline transition-all duration-300"
                        style={{ color: "#4FD1C7" }}
                      >
                        Slush
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              {/* Education Card */}
              <div
                className="rounded-xl p-6 backdrop-blur-sm border transition-all duration-300 hover:scale-105 hover:shadow-lg group cursor-pointer"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(79, 209, 199, 0.15) 0%, rgba(175, 235, 231, 0.15) 100%)",
                  borderColor: "rgba(79, 209, 199, 0.3)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "#4FD1C7";
                  e.currentTarget.style.boxShadow =
                    "0 10px 25px rgba(79, 209, 199, 0.2)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(79, 209, 199, 0.3)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <div className="flex items-center space-x-4">
                  <div
                    className="p-3 rounded-lg group-hover:scale-110 transition-transform duration-300"
                    style={{ backgroundColor: "rgba(79, 209, 199, 0.2)" }}
                  >
                    <GraduationCap
                      className="w-6 h-6"
                      style={{ color: "#4FD1C7" }}
                    />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-400 font-sans">Education</p>
                    <a
                      href="https://www.hive.fi/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold font-sans text-lg hover:underline transition-all duration-300"
                      style={{ color: "#4FD1C7" }}
                    >
                      Hive Helsinki
                    </a>
                  </div>
                </div>
              </div>

              {/* Focus Card */}
              <div
                className="rounded-xl p-6 backdrop-blur-sm border transition-all duration-300 hover:scale-105 hover:shadow-lg group cursor-pointer"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(79, 209, 199, 0.15) 0%, rgba(175, 235, 231, 0.15) 100%)",
                  borderColor: "rgba(79, 209, 199, 0.3)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "#4FD1C7";
                  e.currentTarget.style.boxShadow =
                    "0 10px 25px rgba(79, 209, 199, 0.2)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(79, 209, 199, 0.3)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <div className="flex items-center space-x-4">
                  <div
                    className="p-3 rounded-lg group-hover:scale-110 transition-transform duration-300"
                    style={{ backgroundColor: "rgba(79, 209, 199, 0.2)" }}
                  >
                    <Code className="w-6 h-6" style={{ color: "#4FD1C7" }} />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-400 font-sans">Focus</p>
                    <p
                      className="font-semibold font-sans text-lg"
                      style={{ color: "#4FD1C7" }}
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
