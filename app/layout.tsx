import type { Metadata } from "next";
import { Geist, Geist_Mono, Hind_Siliguri } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./components/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const hindSiliguri = Hind_Siliguri({
  variable: "--font-hind-siliguri",
  subsets: ["bengali", "latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: {
    default: "Go বাংলা - Go Programming শিখুন বাংলায়",
    template: "%s | Go বাংলা",
  },
  description:
    "Go programming language এবং backend development শেখার একটি বাংলা-first practical learning platform।",
  keywords: ["Go", "Golang", "Backend", "Bangla", "বাংলা", "programming", "tutorial"],
  authors: [{ name: "Billal Ahmed Akash" }],
  openGraph: {
    title: "Go বাংলা - Go Programming শিখুন বাংলায়",
    description:
      "Go programming language এবং backend development শেখার একটি বাংলা-first practical learning platform।",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="bn"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} ${hindSiliguri.variable} h-full`}
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
