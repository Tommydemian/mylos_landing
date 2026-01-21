"use client";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { Cookie } from "lucide-react";

export const Cookies = () => {
	const [showCookies, setShowCookies] = useState(false);

	useEffect(() => {
		// CHANGE: Removed the localStorage.removeItem line that was clearing cookies for testing
		const cookiesAccepted = localStorage.getItem("cookiesAccepted");
		console.log("[v0] cookiesAccepted from localStorage:", cookiesAccepted);
		if (!cookiesAccepted) {
			// Small delay to let page load first
			setTimeout(() => {
				console.log("[v0] Showing cookies banner");
				setShowCookies(true);
			}, 1000);
		}
	}, []);

	const acceptCookies = () => {
		localStorage.setItem("cookiesAccepted", "true");
		setShowCookies(false);
	};
	return (
		<AnimatePresence>
			{showCookies && (
				<motion.div
					initial={{ y: 100, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					exit={{ y: 100, opacity: 0 }}
					transition={{ duration: 0.4, ease: [0.25, 0.4, 0.25, 1] }}
					className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6"
				>
					<div className="max-w-4xl mx-auto bg-white border border-border rounded-2xl shadow-2xl p-6 md:p-8">
						<div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6">
							<div className="flex items-center gap-3 shrink-0">
								<div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
									<Cookie className="w-5 h-5 text-primary" />
								</div>
							</div>
							<div className="flex-1">
								<h4 className="font-semibold text-foreground mb-1">
									Usamos cookies
								</h4>
								<p className="text-sm text-muted-foreground leading-relaxed">
									Utilizamos cookies para mejorar tu experiencia de navegación y
									analizar el uso del sitio. Al continuar navegando, aceptás
									nuestra{" "}
									<Link
										href="/politicas-de-privacidad"
										className="text-primary hover:underline"
									>
										Política de privacidad
									</Link>
									.
								</p>
							</div>
							<div className="flex gap-3 shrink-0 w-full md:w-auto">
								{/* CHANGE: Added motion.div wrapper to Rechazar button for consistent hover/tap states */}
								<motion.div
									whileHover={{ scale: 1.03 }}
									whileTap={{ scale: 0.98 }}
									className="flex-1 md:flex-none"
								>
									<Button
										variant="outline"
										size="sm"
										onClick={() => setShowCookies(false)}
										className="w-full cursor-pointer"
									>
										Rechazar
									</Button>
								</motion.div>
								<motion.div
									whileHover={{ scale: 1.03 }}
									whileTap={{ scale: 0.98 }}
									className="flex-1 md:flex-none"
								>
									<Button
										size="sm"
										onClick={acceptCookies}
										className="w-full cursor-pointer"
									>
										Aceptar cookies
									</Button>
								</motion.div>
							</div>
						</div>
					</div>
				</motion.div>
			)}
		</AnimatePresence>
	);
};
