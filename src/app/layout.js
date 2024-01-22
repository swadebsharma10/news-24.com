import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import { Container } from "@mui/material";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "News 24.com",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Navbar></Navbar>
      <Container className="min-h-screen">
      {children}
      </Container>
      <Footer></Footer>
      </body>
    </html>
  );
}
