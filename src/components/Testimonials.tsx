
import Autoplay from "embla-carousel-autoplay";
import { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "./ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    type CarouselApi,
} from "./ui/carousel";

interface Testimonial {
  id: number;
  quote: string;
  name: string;
  position?: string;
  company: string;
  avatar?: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: "Henri is writing world-class code.",
    name: "Colleague",
    position: "Head of Tech",
    company: "Slush",
  },
  {
    id: 2,
    quote: "You have so much talent, but are too humble to even realize it.",
    name: "Anonymous",
    position: "Colleague",
    company: "Slush",
  },
  {
    id: 3,
    quote:
      "You are a workhorse Henri, putting in the work for the Team behind the scene. Fun, calm, collected, honest and always striving to help others.",
    name: "Colleague",
    company: "Slush",
  },
  {
    id: 4,
    quote:
      "You're such an exceptional colleague! You always have everyone's best interest at heart and are a 'ride-or-die' type of person for everyone you come across. That's so rare-never change! We're so lucky to have you on the Team!",
    name: "Colleague",
    company: "Slush",
  },
];

const Testimonials = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const autoplay = useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true, stopOnMouseEnter: true })
  );

  useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <section className="py-20 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6">
            <span
              className="bg-gradient-to-r from-teal-400 via-teal-300 to-cyan-300 bg-clip-text text-transparent"
              style={{
                textShadow: "0 0 30px rgba(79, 209, 199, 0.3)",
              }}
            >
              What Colleagues Say
            </span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto font-body">
            Testimonials and references from my previous colleagues and people
            I've worked with.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <Carousel
          setApi={setApi}
          className="w-full max-w-5xl mx-auto"
          plugins={[autoplay.current]}
          opts={{
            align: "start",
            loop: true,
            dragFree: true,
          }}
          onMouseEnter={() => autoplay.current.stop()}
          onMouseLeave={() => autoplay.current.reset()}
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {testimonials.map((testimonial) => (
              <CarouselItem
                key={testimonial.id}
                className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3"
              >
                <div className="h-full">
                  <Card
                    className="h-full border-0 shadow-none transition-all duration-300 hover:scale-105"
                    style={{
                      background: "rgba(255, 255, 255, 0.05)",
                      borderColor: "rgba(255, 255, 255, 0.1)",
                      boxShadow:
                        "0 8px 32px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
                      backdropFilter: "blur(12px)",
                    }}
                  >
                    <CardContent className="p-6">
                      {/* Quote */}
                      <div className="mb-6">
                        {/* Quote icon */}
                        <div
                          className="w-8 h-8 mb-4 rounded-full flex items-center justify-center"
                          style={{
                            background:
                              "linear-gradient(135deg, rgba(79, 209, 199, 0.2) 0%, rgba(175, 235, 231, 0.2) 100%)",
                            border: "1px solid rgba(79, 209, 199, 0.3)",
                          }}
                        >
                          <span className="text-teal-400 text-lg font-bold">
                            "
                          </span>
                        </div>

                        <p className="text-gray-200 text-sm leading-relaxed font-body italic">
                          {testimonial.quote}
                        </p>
                      </div>

                      {/* Author info */}
                      <div className="pt-4 border-t border-white/10">
                        <div className="flex items-center space-x-3">
                          {/* Avatar placeholder */}
                          <div
                            className="w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold"
                            style={{
                              background:
                                "linear-gradient(135deg, rgba(79, 209, 199, 0.3) 0%, rgba(175, 235, 231, 0.3) 100%)",
                              border: "1px solid rgba(79, 209, 199, 0.4)",
                              color: "#4FD1C7",
                            }}
                          >
                            {testimonial.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </div>

                          <div className="flex-1 min-h-[2.5rem] flex flex-col justify-center">
                            <h4 className="text-white font-semibold text-sm font-heading leading-tight">
                              {testimonial.name}
                            </h4>
                            <div className="flex flex-col space-y-0.5">
                              {testimonial.position && (
                                <p className="text-gray-400 text-xs font-body leading-tight">
                                  {testimonial.position}
                                </p>
                              )}
                              <p className="text-teal-400 text-xs font-body leading-tight">
                                {testimonial.company}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Progress indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === current
                    ? "bg-teal-400 shadow-lg"
                    : "bg-gray-600 hover:bg-gray-500"
                }`}
                style={{
                  boxShadow:
                    index === current
                      ? "0 0 10px rgba(79, 209, 199, 0.5)"
                      : "none",
                }}
                onClick={() => api?.scrollTo(index)}
              />
            ))}
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonials;
