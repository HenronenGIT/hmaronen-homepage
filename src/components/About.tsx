import { COLORS } from "@/constants/colors";
import { Briefcase, Code, GraduationCap } from "lucide-react";
import InfoCard from "./InfoCard";

const About = () => {
  const aboutParagraphs = [
    {
      id: 1,
      content: (
        <>
          I'm a passionate problem solver currently working with the Product
          Team at Slush, where I contribute as a developer to digital tools
          used year-round and during the main event.
        </>
      ),
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
          —the school that pivoted my career into software development—I've
          developed an endless curiosity for technology.
        </>
      ),
    },
    {
      id: 3,
      content: (
        <>
          Beyond code, I'm deeply interested in entrepreneurship and leadership.
        </>
      ),
    },
    {
      id: 4,
      content: (
        <>
          When I'm not deep in the digital world, you'll find me behind a{" "}
          <a
            href="https://www.instagram.com/hmaronen/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold hover:underline transition-all duration-300"
            style={{ color: COLORS.primary }}
          >
            camera
          </a>
          , chasing furry balls on the padel court, diving into{" "}
          <a
            href="https://www.goodreads.com/review/list/174422574-henri-maronen?shelf=read"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold hover:underline transition-all duration-300"
            style={{ color: COLORS.primary }}
          >
            non-fiction
          </a>
          , or carving down{" "}
          <a
            href="https://youtu.be/LfyfiH3_ifQ?si=yfdi_6hi6wyYbCzM"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold hover:underline transition-all duration-300"
            style={{ color: COLORS.primary }}
          >
            snowy slopes
          </a>{" "}
          in Northern Finland.
        </>
      ),
    },
  ];

  return (
    <section className="py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold font-heading">
                Who am <span style={{ color: COLORS.primary }}>I</span>
              </h2>
              <div
                className="w-20 h-1"
                style={{ backgroundColor: COLORS.primary }}
              ></div>
            </div>

            <div className="space-y-6 text-lg text-gray-300 leading-relaxed font-sans">
              {aboutParagraphs.map((paragraph) => (
                <p key={paragraph.id}>{paragraph.content}</p>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="space-y-4">
              <InfoCard
                icon={Briefcase}
                label="Current Role"
                value="Product Team, Slush"
                href="https://www.slush.org/"
              />

              <InfoCard
                icon={GraduationCap}
                label="Education"
                value="Hive Helsinki"
                href="https://www.hive.fi/"
              />

              <InfoCard icon={Code} label="Focus" value="Web Development" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
