import type { Metadata } from "next";
import { Press_Start_2P, JetBrains_Mono, Courier_Prime } from "next/font/google";
import "./globals.css";

const pressStart2P = Press_Start_2P({
  variable: "--font-pixel",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

const courierPrime = Courier_Prime({
  variable: "--font-courier-prime",
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Arcade Vault",
  description: "Play games online and compete for the highest score.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${pressStart2P.variable} ${jetbrainsMono.variable} ${courierPrime.variable} h-full antialiased`}
    >
      <body className="h-full">
        <div id="root">
          <div className="av-bg" />
          <div className="av-noise" />
          <main className="av-main">{children}</main>
        </div>
      </body>
    </html>
  );
}
