import { Montserrat, Poppins } from "next/font/google";
import "../styles/globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Sidebar from "@/components/Sidebar";

const montserrat = Montserrat({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"], 
});

const poppins = Poppins({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "Awwal Fitness",
  description: "Welcome to Awwal Fitness, the professional landing page for a certified fitness coach dedicated to helping you achieve your health and wellness goals.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${poppins.variable} antialiased`}
      >
        <div className="flex min-h-screen">
          {/* Sidebar - visible on laptop+ */}
          <aside className=" z-40 fixed left-0 top-0 h-[100dvh] hidden xl:flex min-w-70 bg-gray-900 text-white">
            <Sidebar />
          </aside>

          {/* Main content area */}
          <div className="ml-0 xl:ml-70 flex-1 flex flex-col">
            {/* Header - visible on mobile */}
            <div className="z-40 xl:hidden">
              <Header />
            </div>

            <main className="flex-1 pt-20 lg:pt-0">{children}</main>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}