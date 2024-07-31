import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { Providers } from "./provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Dev Wizardry",
    template: "%s | Dev Wizardry",
  },
  metadataBase: new URL(process.env.BASE_URL as string),
  keywords: ["dev wizard", "blog dev"],
  openGraph: {
    description:
      "Discover tips and tricks shared by the developer community to help you streamline your coding process and solve complex problems efficiently",
    images: [""],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <ThemeProvider defaultTheme="dark">{children}</ThemeProvider>
        </Providers>
      </body>
    </html>
  );
}
