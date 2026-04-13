import type { ReactNode } from "react";
import ThoughtsHeader from "../components/ThoughtsHeader";

type ThoughtsLayoutProps = {
  children: ReactNode;
};

export default function ThoughtsLayout({ children }: ThoughtsLayoutProps) {
  return (
    <>
      <ThoughtsHeader />
      {children}
    </>
  );
}
