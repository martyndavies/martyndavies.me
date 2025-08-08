import type { Metadata } from "next";
import { Outfit, Space_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-sans",
  subsets: ["latin"],
});

const spaceMono = Space_Mono({
  variable: "--font-mono",
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Martyn Davies - Developer Relations, Technical Writing & Speaking",
  description: "Developer Relations professional with extensive experience in technical writing, community building, and conference speaking.",
  openGraph: {
    title: "Martyn Davies - Developer Relations, Technical Writing & Speaking",
    description: "Developer Relations professional with extensive experience in technical writing, community building, and conference speaking.",
    url: "https://martyndavies.me",
    siteName: "Martyn Davies",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Martyn Davies - Developer Relations, Technical Writing & Speaking",
    description: "Developer Relations professional with extensive experience in technical writing, community building, and conference speaking.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${outfit.variable} ${spaceMono.variable} antialiased font-sans`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
