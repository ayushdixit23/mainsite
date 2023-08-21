import Footer from "./Components/Footer";
import Header from "./Components/Header";
import "./globals.css";
import { Fugaz_One } from "next/font/google";

const fugaz = Fugaz_One({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-fugaz",
});

export const metadata = {
  title: "Grovyo",
  description: "Created by Grovyo Platforms",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={` ${fugaz.variable}`}>
        <div className="h-screen scrollbar-hide overflow-auto">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
