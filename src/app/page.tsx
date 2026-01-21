"use client";
import Link from "next/link";
import { useRef, useState, useEffect } from "react";

import { Button } from "@/components/ui/button";
import { Footer } from "@/components/footer";
import { MobileSinglePhoneCarousel } from "@/components/hero/mobile-single-phone-carousel";
import { IntegrationsSection } from "@/components/integrations/integrations-section";
import { PainPointsSection } from "@/components/pain-points/pain-points-section";
import { FeaturesSection } from "@/components/features/features-section";
import { ProposalSection } from "@/components/proposal/proposal-section";
import { TestimonialsSection } from "@/components/testimonials/testimonials-section";
import { FaqSection } from "@/components/faq/faq-section";
import { Phones } from "@/components/hero/phones";
import { ArrowRight, Cookie } from "lucide-react";
import { Header } from "@/components/header";
import { motion, AnimatePresence } from "motion/react";
import { WhatsAppIcon } from "@/components/icons/whatsapp";
// Logos
import { heroFadeIn, scrollFadeIn } from "@/lib/utils";
import { VideoSection } from "@/components/video/video-section";
import { WhatsAppSectionCTA } from "@/components/whatsapp-section-cta/whatsapp-section-cta";

export default function Home() {
	const [activePhone, setActivePhone] = useState(0);
	const [showCookies, setShowCookies] = useState(false);
	const [isVideoMuted, setIsVideoMuted] = useState(false);
	const videoRef = useRef<HTMLVideoElement>(null);

	useEffect(() => {
		const interval = setInterval(() => {
			setActivePhone((prev) => (prev + 1) % 3);
		}, 3000);
		return () => clearInterval(interval);
	}, []);

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
		<div className="min-h-screen bg-background">
			<Header />

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
										Utilizamos cookies para mejorar tu experiencia de navegación
										y analizar el uso del sitio. Al continuar navegando, aceptás
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

			{/* Hero Section */}
			<section className="container mx-auto px-4 pt-16 pb-0 md:py-24">
				<div className="max-w-6xl mx-auto space-y-12">
					<div className="text-center space-y-6">
						<div className="space-y-3">
							<motion.h2
								initial="hidden"
								animate="visible"
								variants={heroFadeIn}
								className="text-3xl md:text-5xl font-bold tracking-tight text-balance"
							>
								<span className="relative inline-block">
									Vendé
									<motion.span
										className="absolute bottom-0.5 left-0 h-0.5 bg-primary rounded-full"
										initial={{ width: 0 }}
										animate={{ width: "100%" }}
										transition={{ delay: 0.8, duration: 0.5, ease: "easeOut" }}
									/>
								</span>
								,{" "}
								<span className="relative inline-block">
									facturá
									<motion.span
										className="absolute bottom-0.5 left-0 h-0.5 bg-primary rounded-full"
										initial={{ width: 0 }}
										animate={{ width: "100%" }}
										transition={{ delay: 1.0, duration: 0.5, ease: "easeOut" }}
									/>
								</span>{" "}
								y{" "}
								<span className="relative inline-block">
									controlá stock
									<motion.span
										className="absolute bottom-0.5 left-0 h-0.5 bg-primary rounded-full"
										initial={{ width: 0 }}
										animate={{ width: "100%" }}
										transition={{ delay: 1.2, duration: 0.5, ease: "easeOut" }}
									/>
								</span>{" "}
								sin perder de vista tu margen.
							</motion.h2>

							<motion.p
								initial="hidden"
								animate="visible"
								variants={{
									...heroFadeIn,
									visible: {
										...heroFadeIn.visible,
										transition: {
											...heroFadeIn.visible.transition,
											delay: 0.15,
										},
									},
								}}
								className="text-base md:text-lg text-muted-foreground text-balance max-w-xl mx-auto"
							>
								Conectá TiendaNube, Mercado Libre y tu local. Mylos factura por
								AFIP automático y te muestra tu ganancia real. No lo que creés
								que ganás.
							</motion.p>
						</div>

						<motion.div
							initial="hidden"
							animate="visible"
							variants={{
								...heroFadeIn,
								visible: {
									...heroFadeIn.visible,
									transition: { ...heroFadeIn.visible.transition, delay: 0.25 },
								},
							}}
							className="flex flex-col sm:flex-row gap-3 justify-center items-center pt-2"
						>
							<Button asChild size="lg" className="text-sm gap-2 min-w-[180px]">
								<a href="#beta">
									Prueba gratuita
									<ArrowRight className="w-4 h-4" />
								</a>
							</Button>
							<Button
								asChild
								size="lg"
								variant="outline"
								className="text-sm min-w-[180px] bg-transparent"
							>
								<a
									href="https://wa.me/5491149796361"
									target="_blank"
									rel="noopener noreferrer"
								>
									Contactanos
								</a>
							</Button>
						</motion.div>
					</div>
					{/* Mobile: Single phone carousel */}
					<MobileSinglePhoneCarousel
						activePhone={activePhone}
						setActivePhone={setActivePhone}
					/>

					<Phones activePhone={activePhone} setActivePhone={setActivePhone} />
					{/* HERE */}
				</div>
			</section>

			<IntegrationsSection />
			{/* Pain Points Section */}
			<PainPointsSection />

			<FeaturesSection />

			<VideoSection />

			{/* Timeline Section - Acceso Anticipado */}
			<ProposalSection />

			{/* Testimonials Section */}
			<TestimonialsSection />

			{/* FAQ Section */}
			<FaqSection />

			<WhatsAppSectionCTA />

			<Footer />
		</div>
	);
}
