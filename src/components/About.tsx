import { useState } from "react";
import { COLORS } from "@/constants/colors";
import { Briefcase, Code, GraduationCap } from "lucide-react";
import InfoCard from "./InfoCard";
import LoadingInfoCard from "./LoadingInfoCard";
import VideoModal from "./VideoModal";
import skiingVideo from "@/assets/videos/spring-slopes.mp4";

const About = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const aboutParagraphs = [
    {
      id: 1,
      content: (
        <>
          I'm a passionate builder who recently worked on Slush's Product Team,
          where I developed and maintained digital products that enabled
          seamless operations for one of the world's largest startup events.
        </>
      ),
    },
    {
      id: 2,
      content: (
        <>
          As a{" "}
          <a
            href="https://www.hive.fi/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold hover:underline transition-all duration-300"
            style={{ color: COLORS.primary }}
          >
            Hive Helsinki
          </a>{" "}
          alumnus, I made the jump into world of software development and
          haven't looked back. I'm captivated by the potential of technology to
          solve meaningful problems.{" "}
        </>
      ),
    },
    {
      id: 3,
      content: (
        <>
          Beyond code, I'm drawn to entrepreneurship and leadership. I find it
          fascinating to understand what drives great teams and in result great
          products.
        </>
      ),
    },
    {
      id: 4,
      content: (
        <>
          When I'm not coding, you'll find me{" "}
          <a
            href="https://www.instagram.com/hmaronen/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold hover:underline transition-all duration-300"
            style={{ color: COLORS.primary }}
          >
            framing the landscapes
          </a>
          , chasing furry balls in padel court, sharpening my mind with{" "}
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
          <button
            onClick={() => setIsVideoOpen(true)}
            className="font-semibold hover:underline transition-all duration-300 cursor-pointer"
            style={{ color: COLORS.primary }}
          >
            carving down the snowy slopes
          </button>{" "}
          of Northern Finland.
        </>
      ),
    },
  ];

  return (
    <>
      <VideoModal
        isOpen={isVideoOpen}
        onClose={() => setIsVideoOpen(false)}
        videoSrc={skiingVideo}
      />
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
                <LoadingInfoCard icon={Briefcase} label="Current Role" />

                {/* <InfoCard
                icon={Briefcase}
                label="Current Role"
                value="Product Team, Slush"
                href="https://www.slush.org/"
              /> */}

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
    </>
  );
};

export default About;
