import { Aubrey, Poppins } from "next/font/google";

export const aubrey = Aubrey({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-aubrey",
  display: "swap",
});

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-poppins",
  display: "swap",
});
