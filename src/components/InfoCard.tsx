import { COLORS } from "@/constants/colors";
import { ExternalLink, type LucideIcon } from "lucide-react";

interface InfoCardProps {
  icon: LucideIcon;
  label: string;
  value: string;
  href?: string;
}

const InfoCard = ({ icon: Icon, label, value, href }: InfoCardProps) => {
  const cardContent = (
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
          <Icon className="w-6 h-6" style={{ color: COLORS.primary }} />
        </div>
        <div className="flex-1">
          <p className="text-sm text-gray-400 font-sans">{label}</p>
          <p
            className="font-semibold font-sans text-lg"
            style={{ color: COLORS.primary }}
          >
            {value}
          </p>
        </div>
        {href && <ExternalLink className="w-4 h-4" color={COLORS.primary} />}
      </div>
    </div>
  );

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        {cardContent}
      </a>
    );
  }

  return cardContent;
};

export default InfoCard;
