import Footer from "./Components/Footer";
import Header from "./Components/Header";
import "./globals.css";
import { Fugaz_One, Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const fugaz = Fugaz_One({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-fugaz",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${fugaz.variable}`}>
        <div className="h-screen scrollbar-hide overflow-auto">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}