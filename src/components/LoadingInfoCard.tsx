import { COLORS } from "@/constants/colors";
import { Loader2, type LucideIcon } from "lucide-react";

interface LoadingInfoCardProps {
  icon: LucideIcon;
  label: string;
}

const LoadingInfoCard = ({ icon: Icon, label }: LoadingInfoCardProps) => {
  return (
    <div
      className="rounded-xl p-6 backdrop-blur-sm border transition-all duration-300"
      style={{
        background: COLORS.gradients.primary,
        borderColor: COLORS.primaryAlpha[30],
      }}
    >
      <div className="flex items-center space-x-4">
        <div
          className="p-3 rounded-lg"
          style={{ backgroundColor: COLORS.primaryAlpha[20] }}
        >
          <Icon className="w-6 h-6" style={{ color: COLORS.primary }} />
        </div>
        <div className="flex-1">
          <p className="text-sm text-gray-400 font-sans">{label}</p>
          <div className="flex items-center space-x-2 mt-1">
            <Loader2
              className="w-4 h-4 animate-spin"
              style={{ color: COLORS.primary }}
            />
            <p className="text-sm text-gray-500 font-sans">Loading...</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingInfoCard;
