/** @format */

import "./globals.css";
import type { Metadata } from "next";
import { Montserrat, Poppins } from "next/font/google";

const poppins = Poppins({
	subsets: ["latin"],
	weight: ["400", "500", "700"],
	style: ["italic", "normal"],
	variable: "--font-poppins",
});

const montserrat = Montserrat({
	subsets: ["latin"],
	weight: ["400", "500", "700"],
	style: ["italic", "normal"],
	variable: "--font-montserrat",
});

export const metadata: Metadata = {
	title: "Gamer Club",
	description:
		"Discover the ultimate online game sale store for unbeatable deals on your favorite titles. Explore a vast collection of gaming adventures and seize the opportunity to level up your gaming experience. Shop now and save big at our virtual gaming emporium!",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='en'>
			<body className={`${poppins.variable} ${montserrat.variable}`}>
				<header>Header</header>
				{children}
				<footer>Footer</footer>
			</body>
		</html>
	);
}
