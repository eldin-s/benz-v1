import { Toaster } from "react-hot-toast";
import "./globals.css";
import Navigation from "@/components/navigation/navigation";
import { Bebas_Neue, Oswald } from "next/font/google";

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas-neue",
  subsets: ["latin"],
  weight: "400",
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${bebasNeue.className} ${oswald.className}  antialiased`}>
        <Navigation />
        <Toaster
          position="top-center"
          toastOptions={{
            className: "bg-shade text-primary",
            duration: 3000,
          }}
        />
        {children}
      </body>
    </html>
  );
}
