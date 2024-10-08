import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import {
  GlobalStateProvider,
  ProductStateProvider,
  PageStateProvider,
} from "./GlobalStateVariable";
import { AuthContextProvider } from "@/utils/auth-context";
import Footer from "@/components/footer";
import { Suspense } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "dealhives.com",
  description: "Create a website for online store",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={inter.className}>
        <AuthContextProvider>
          <GlobalStateProvider>
            <div className="flex flex-col min-h-screen bg-slate-50">
              <main className="">
                <Suspense fallback={<div>Loading...</div>}>
                  <Navbar />
                  {children}
                </Suspense>
              </main>
            </div>
            <Footer />
          </GlobalStateProvider>
        </AuthContextProvider>
      </body>
    </html>
  );
}
