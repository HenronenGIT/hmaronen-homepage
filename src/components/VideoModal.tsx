import { useEffect, useRef } from "react";
import { X } from "lucide-react";
import { COLORS } from "@/constants/colors";

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoSrc: string;
}

const VideoModal = ({ isOpen, onClose, videoSrc }: VideoModalProps) => {
  const overlayRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleEscape);
    }
    return () => window.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (isOpen && videoRef.current) {
      videoRef.current.play();
    } else if (!isOpen && videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={(e) => {
        if (e.target === overlayRef.current) onClose();
      }}
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        backdropFilter: "blur(8px)",
      }}
    >
      <div
        className="relative w-full animate-in fade-in zoom-in duration-300"
        style={{ maxWidth: "360px" }}
      >
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 p-2 rounded-full transition-all duration-200 hover:scale-110 cursor-pointer"
          style={{
            backgroundColor: COLORS.primaryAlpha[20],
            color: COLORS.primary,
          }}
        >
          <X size={20} />
        </button>

        <div
          className="rounded-2xl overflow-hidden shadow-2xl"
          style={{
            border: `1px solid ${COLORS.primaryAlpha[20]}`,
            boxShadow: COLORS.shadows.primaryStrong,
          }}
        >
          <video
            ref={videoRef}
            src={videoSrc}
            className="w-full"
            style={{ aspectRatio: "9/16" }}
            controls
            playsInline
          />
        </div>
      </div>
    </div>
  );
};

export default VideoModal;
