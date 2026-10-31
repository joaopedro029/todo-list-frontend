import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "../components/layout/Header";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR">
      <body className={inter.variable}>
        <Header></Header>
        {children}
      </body>
    </html>
  );
}
