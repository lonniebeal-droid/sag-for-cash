import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "Sag for Cash | Atlanta Creator Culture",
  description: "18+ streetwear creator marketplace for premium drops, tips and custom content requests.",
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
