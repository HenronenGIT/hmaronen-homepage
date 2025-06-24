import linkedinQR from "@/assets/images/hmaronen-linkedin.svg";
import telegramQR from "@/assets/images/hmaronen-telegram.svg";
import GlassButton from "@/components/ui/GlassButton";
import { SOCIAL_LINKS } from "@/constants";
import { Linkedin, MessageCircle } from "lucide-react";

const CTA = () => {
  return (
    <section
      id="cta"
      className="py-24 px-6 md:px-12 lg:px-24"
      style={{ backgroundColor: "rgba(79, 209, 199, 0.05)" }}
    >
      <div className="max-w-4xl mx-auto text-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold font-heading">
              Let's <span style={{ color: "#4FD1C7" }}>connect</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-3xl mx-auto">
            {/* LinkedIn CTA */}
            <div className="space-y-6">
              <div className="flex justify-center">
                <Linkedin className="w-12 h-12" style={{ color: "#4FD1C7" }} />
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-bold font-heading">
                  Professional Network
                </h3>
                <p className="text-gray-400 font-sans">
                  Let's build something amazing together.
                </p>
                <div className="flex justify-center">
                  <div
                    className="p-6 rounded-2xl border backdrop-blur-sm"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(79, 209, 199, 0.1) 0%, rgba(175, 235, 231, 0.1) 100%)",
                      borderColor: "rgba(79, 209, 199, 0.3)",
                    }}
                  >
                    {/* LinkedIn QR Code */}
                    <div className="w-32 h-32 bg-white rounded-lg flex items-center justify-center p-2 mb-4">
                      <img
                        src={linkedinQR}
                        alt="LinkedIn QR Code"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <GlassButton
                      href={SOCIAL_LINKS.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      icon={Linkedin}
                      iconPosition="left"
                      variant="secondary"
                      size="sm"
                      className="w-full"
                    >
                      Connect
                    </GlassButton>
                  </div>
                </div>
              </div>
            </div>

            {/* Telegram QR Code */}
            <div className="space-y-6">
              <div className="flex justify-center">
                <MessageCircle
                  className="w-12 h-12"
                  style={{ color: "#4FD1C7" }}
                />
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-bold font-heading">
                  Direct Message
                </h3>
                <p className="text-gray-400 font-sans">
                  Need to reach me quickly? Telegram is the way to go.
                </p>
                <div className="flex justify-center">
                  <div
                    className="p-6 rounded-2xl border backdrop-blur-sm"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(79, 209, 199, 0.1) 0%, rgba(175, 235, 231, 0.1) 100%)",
                      borderColor: "rgba(79, 209, 199, 0.3)",
                    }}
                  >
                    {/* Telegram QR Code */}
                    <div className="w-32 h-32 bg-white rounded-lg flex items-center justify-center p-2 mb-4">
                      <img
                        src={telegramQR}
                        alt="Telegram QR Code"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <GlassButton
                      href={SOCIAL_LINKS.telegram}
                      target="_blank"
                      rel="noopener noreferrer"
                      icon={MessageCircle}
                      iconPosition="left"
                      variant="secondary"
                      size="sm"
                      className="w-full"
                    >
                      Message
                    </GlassButton>
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

export default CTA;
