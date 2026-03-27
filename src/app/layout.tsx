import type { Metadata } from "next";
import "../styles/globals.css";
import { Provider } from "../components/ui/providers";
import Header from "../components/ui/header";
import Footer from "../components/ui/footer";

export const metadata: Metadata = {
  title: "Expo Go - Expo",
  description:
    "Run your projects on your own device faster and share those projects across your team.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="preload"
          href="/fonts/inter-latin.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/inter-latin-ext.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/jetbrains-mono-latin.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/jetbrains-mono-latin-ext.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </head>
      <body>
        <Provider>
          <Header />
          <main style={{ paddingTop: "60px" }}>{children}</main>
          <Footer />
        </Provider>
      </body>
    </html>
  );
}