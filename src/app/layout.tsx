import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";
import WhatsAppWidget from "@/components/whatsapp-widget";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Mylos - Soluciones empresariales inteligentes",
	description: "Simplificá la gestión de tu negocio con Mylos",
	icons: {
		icon: [
			{
				url: "/icon-light-32x32.png",
				media: "(prefers-color-scheme: light)",
			},
			{
				url: "/icon-dark-32x32.png",
				media: "(prefers-color-scheme: dark)",
			},
			{
				url: "/icon.svg",
				type: "image/svg+xml",
			},
		],
		apple: "/apple-icon.png",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className="scroll-smooth">
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				<main>{children}</main>
				{/* biome-ignore lint/style/noNonNullAssertion: <explanation> */}
				<GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID!} />
				<Analytics />
				<Toaster />
			</body>
		</html>
	);
}
