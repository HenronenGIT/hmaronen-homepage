import linkedinQR from "@/assets/images/hmaronen-linkedin.svg";
import telegramQR from "@/assets/images/hmaronen-telegram.svg";
import GlassButton from "@/components/ui/GlassButton";
import { SOCIAL_LINKS } from "@/constants";
import { COLORS } from "@/constants/colors";
import { Linkedin, type LucideIcon, MessageCircle } from "lucide-react";

// Constants for styling
const GRADIENTS = {
  card: `linear-gradient(135deg, ${COLORS.primary}1A 0%, ${COLORS.secondary}1A 100%)`,
} as const;

const DIMENSIONS = {
  qrCodeSize: "w-32 h-32",
  iconSize: "w-12 h-12",
} as const;

// Types
interface QRCardData {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
  qrImage: string;
  qrAlt: string;
  buttonText: string;
  href: string;
}

interface QRCardProps {
  data: QRCardData;
}

// Reusable QR Card Component
const QRCard = ({ data }: QRCardProps) => {
  const {
    icon: Icon,
    title,
    description,
    qrImage,
    qrAlt,
    buttonText,
    href,
  } = data;

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <h3 className="text-2xl font-bold font-heading">{title}</h3>
        <p className="text-gray-400 font-sans">{description}</p>

        <div className="flex justify-center">
          <div
            className="p-6 rounded-2xl border backdrop-blur-sm"
            style={{
              background: GRADIENTS.card,
              borderColor: `${COLORS.primary}4D`,
            }}
          >
            <div
              className={`${DIMENSIONS.qrCodeSize} bg-white rounded-lg flex items-center justify-center p-2 mb-4`}
            >
              <img
                src={qrImage}
                alt={qrAlt}
                className="w-full h-full object-contain"
                loading="lazy"
              />
            </div>

            <GlassButton
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              icon={Icon}
              iconPosition="left"
              variant="secondary"
              size="sm"
              className="w-full"
              aria-label={`${buttonText} - Opens in new tab`}
            >
              {buttonText}
            </GlassButton>
          </div>
        </div>
      </div>
    </div>
  );
};

// QR Cards data configuration
const QR_CARDS_DATA: QRCardData[] = [
  {
    id: "linkedin",
    icon: Linkedin,
    title: "Professional Network",
    description: "Let's build something amazing together.",
    qrImage: linkedinQR,
    qrAlt: "LinkedIn QR Code - Scan to connect with Henri Maronen",
    buttonText: "Connect",
    href: SOCIAL_LINKS.linkedin,
  },
  {
    id: "telegram",
    icon: MessageCircle,
    title: "Direct Message",
    description: "Need to reach me quickly? Telegram is the way to go.",
    qrImage: telegramQR,
    qrAlt: "Telegram QR Code - Scan to message Henri Maronen",
    buttonText: "Message",
    href: SOCIAL_LINKS.telegram,
  },
] as const;

const CTA = () => {
  return (
    <section
      id="cta"
      className="py-24 px-6 md:px-12 lg:px-24"
      style={{ backgroundColor: `${COLORS.primary}0D` }}
      aria-labelledby="cta-heading"
    >
      <div className="max-w-4xl mx-auto text-center">
        <div className="space-y-8">
          <header className="space-y-4">
            <h2
              id="cta-heading"
              className="text-4xl md:text-5xl font-bold font-heading"
            >
              Let's <span style={{ color: COLORS.primary }}>connect</span>
            </h2>
          </header>

          <div
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-3xl mx-auto"
            role="region"
            aria-label="Contact options"
          >
            {QR_CARDS_DATA.map((cardData) => (
              <QRCard key={cardData.id} data={cardData} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
