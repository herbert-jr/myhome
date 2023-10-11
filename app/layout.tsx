import Footer from "./components/footer";
import Header from "./components/header";
import { AppProvider } from "./context";
import "./globals.scss";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Herbert Jr | Desenvolvedor Front-end",
  description:
    "Desenvolvedor Front-end, apaixonado por tecnologia e design. 🚀",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body>
        <AppProvider>
          <Header />
          {children}
          <Footer />
        </AppProvider>
      </body>
    </html>
  );
}
