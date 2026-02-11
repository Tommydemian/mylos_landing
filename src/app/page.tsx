// "use client";
// import { useState, useEffect } from "react";

// import { Button } from "@/components/ui/button";
// import { Footer } from "@/components/footer";
// import { MobileSinglePhoneCarousel } from "@/components/hero/mobile-single-phone-carousel";
// import { IntegrationsSection } from "@/components/integrations/integrations-section";
// import { PainPointsSection } from "@/components/pain-points/pain-points-section";
// import { FeaturesSection } from "@/components/features/features-section";
// import { ProposalSection } from "@/components/proposal/proposal-section";
// import { TestimonialsSection } from "@/components/testimonials/testimonials-section";
// import { FaqSection } from "@/components/faq/faq-section";
// import { Phones } from "@/components/hero/phones";
// import { ArrowRight } from "lucide-react";
// import { Header } from "@/components/header";
// import { motion } from "motion/react";
// // Logos
// import { heroFadeIn } from "@/lib/utils";
// import { VideoSection } from "@/components/video/video-section";
// import { WhatsAppSectionCTA } from "@/components/whatsapp-section-cta/whatsapp-section-cta";
// import { Cookies } from "@/components/cookies";

// export default function Home() {
// 	const [activePhone, setActivePhone] = useState(0);

// 	useEffect(() => {
// 		const interval = setInterval(() => {
// 			setActivePhone((prev) => (prev + 1) % 3);
// 		}, 3000);
// 		return () => clearInterval(interval);
// 	}, []);

// 	return (
// 		<div className="min-h-screen bg-background">
// 			<Header />

// 			{/* <Cookies /> */}

// 			{/* Hero Section */}
// 			<section className="container mx-auto px-4 pt-16 pb-0 md:py-24">
// 				<div className="max-w-6xl mx-auto space-y-12">
// 					<div className="text-center space-y-6">
// 						<div className="space-y-3">
// 							<motion.h2
// 								initial="hidden"
// 								animate="visible"
// 								variants={heroFadeIn}
// 								className="text-3xl md:text-5xl font-bold tracking-tight text-balance"
// 							>
// 								<span className="relative inline-block">
// 									Vendé
// 									<motion.span
// 										className="absolute bottom-0.5 left-0 h-0.5 bg-primary rounded-full"
// 										initial={{ width: 0 }}
// 										animate={{ width: "100%" }}
// 										transition={{ delay: 0.8, duration: 0.5, ease: "easeOut" }}
// 									/>
// 								</span>
// 								,{" "}
// 								<span className="relative inline-block">
// 									facturá
// 									<motion.span
// 										className="absolute bottom-0.5 left-0 h-0.5 bg-primary rounded-full"
// 										initial={{ width: 0 }}
// 										animate={{ width: "100%" }}
// 										transition={{ delay: 1.0, duration: 0.5, ease: "easeOut" }}
// 									/>
// 								</span>{" "}
// 								y{" "}
// 								<span className="relative inline-block">
// 									controlá stock
// 									<motion.span
// 										className="absolute bottom-0.5 left-0 h-0.5 bg-primary rounded-full"
// 										initial={{ width: 0 }}
// 										animate={{ width: "100%" }}
// 										transition={{ delay: 1.2, duration: 0.5, ease: "easeOut" }}
// 									/>
// 								</span>{" "}
// 								sin perder de vista tu margen.
// 							</motion.h2>

// 							<motion.p
// 								initial="hidden"
// 								animate="visible"
// 								variants={{
// 									...heroFadeIn,
// 									visible: {
// 										...heroFadeIn.visible,
// 										transition: {
// 											...heroFadeIn.visible.transition,
// 											delay: 0.15,
// 										},
// 									},
// 								}}
// 								className="text-base md:text-lg text-muted-foreground text-balance max-w-xl mx-auto"
// 							>
// 								Conectá TiendaNube, Mercado Libre y tu local. Mylos factura por
// 								AFIP automático y te muestra tu ganancia real. No lo que creés
// 								que ganás.
// 							</motion.p>
// 						</div>

// 						<motion.div
// 							initial="hidden"
// 							animate="visible"
// 							variants={{
// 								...heroFadeIn,
// 								visible: {
// 									...heroFadeIn.visible,
// 									transition: { ...heroFadeIn.visible.transition, delay: 0.25 },
// 								},
// 							}}
// 							className="flex flex-col sm:flex-row gap-3 justify-center items-center pt-2"
// 						>
// 							<Button asChild size="lg" className="text-sm gap-2 min-w-[180px]">
// 								<a href="#beta">
// 									Prueba gratuita
// 									<ArrowRight className="w-4 h-4" />
// 								</a>
// 							</Button>
// 							<Button
// 								asChild
// 								size="lg"
// 								variant="outline"
// 								className="text-sm min-w-[180px] bg-transparent"
// 							>
// 								<a
// 									href="https://wa.me/5491149796361"
// 									target="_blank"
// 									rel="noopener noreferrer"
// 								>
// 									Contactanos
// 								</a>
// 							</Button>
// 						</motion.div>
// 					</div>
// 					{/* Mobile: Single phone carousel */}
// 					<MobileSinglePhoneCarousel
// 						activePhone={activePhone}
// 						setActivePhone={setActivePhone}
// 					/>

// 					<Phones activePhone={activePhone} setActivePhone={setActivePhone} />
// 					{/* HERE */}
// 				</div>
// 			</section>

// 			<IntegrationsSection />
// 			{/* Pain Points Section */}
// 			<PainPointsSection />

// 			<FeaturesSection />

// 			<VideoSection />

// 			<ProposalSection />

// 			<TestimonialsSection />

// 			<FaqSection />

// 			<WhatsAppSectionCTA />

// 			<Footer />
// 		</div>
// 	);
// }

"use client";

import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Smartphone, Link } from "lucide-react";
import { heroFadeIn } from "@/lib/utils";
import { Header } from "@/components/header";
import { ProposalSection } from "@/components/proposal/proposal-section";
import { BulletsSection } from "@/components/bullets/bullets-section";
import Footer from "@/components/footer";
import { WhatsAppSectionCTA } from "@/components/whatsapp-section-cta/whatsapp-section-cta";
import { HeroSection } from "@/components/hero/hero-section";
import { WhatsAppWidget } from "@/components/whatsapp-widget";
// const heroFadeIn = {
// 	hidden: { opacity: 0, y: 12 },
// 	visible: {
// 		opacity: 1,
// 		y: 0,
// 		transition: { duration: 0.5, ease: "easeOut" },
// 	},
// };

const bullets = [
	{
		icon: Zap,
		text: "5 minutos de setup, después funciona solo",
	},
	{
		icon: Smartphone,
		text: "100% desde el celular",
	},
	{
		icon: Link,
		text: "Se conecta a TiendaNube en un click",
	},
];

export default function Home() {
	return (
		<div>
			<div>
				<Header />
				<HeroSection />
				<BulletsSection />
				<ProposalSection />
				{/* <WhatsAppSectionCTA /> */}
				<Footer />
			</div>
			<WhatsAppWidget />
		</div>
	);
}
