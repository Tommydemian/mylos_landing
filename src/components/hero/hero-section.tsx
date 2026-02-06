"use client";

import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { heroFadeIn } from "@/lib/utils";

export const HeroSection = () => {
	return (
		<section className="bg-background pt-12 pb-8 md:pt-20 md:pb-12 px-6">
			<div className="max-w-3xl mx-auto space-y-10 md:space-y-12">
				{/* Copy block */}
				<div className="text-center space-y-5">
					<motion.h1
						initial="hidden"
						animate="visible"
						variants={heroFadeIn}
						className="text-3xl md:text-5xl font-bold tracking-tight text-balance"
						style={{ letterSpacing: "-0.02em" }}
					>
						¿Qué tan seguro estás de cuánto ganaste este mes?
					</motion.h1>

					<motion.p
						initial="hidden"
						animate="visible"
						variants={{
							...heroFadeIn,
							visible: {
								...heroFadeIn.visible,
								transition: { ...heroFadeIn.visible.transition, delay: 0.1 },
							},
						}}
						className="text-base md:text-lg text-muted-foreground text-balance max-w-xl mx-auto"
					>
						MYLOS te muestra tu ganancia real en todo momento. Facturá, controlá
						stock, operá desde el celular.
					</motion.p>

					<motion.p
						initial="hidden"
						animate="visible"
						variants={{
							...heroFadeIn,
							visible: {
								...heroFadeIn.visible,
								transition: { ...heroFadeIn.visible.transition, delay: 0.15 },
							},
						}}
						className="text-sm text-muted-foreground/70 italic"
					>
						Sin configuraciones eternas. Sin módulos que no vas a usar.
					</motion.p>
				</div>

				{/* Video */}
				<motion.div
					initial="hidden"
					animate="visible"
					variants={{
						...heroFadeIn,
						visible: {
							...heroFadeIn.visible,
							transition: { ...heroFadeIn.visible.transition, delay: 0.2 },
						},
					}}
					className="flex justify-center"
				>
					<div className="bg-foreground rounded-xl p-2.5 shadow-lg">
						<iframe
							title="Mylos Demo"
							src="https://www.youtube.com/embed/waiDCqs2_BE"
							className="w-60 md:w-72 aspect-[9/16] rounded-lg"
							allow="autoplay; encrypted-media"
							allowFullScreen
						/>
					</div>
				</motion.div>

				{/* CTA — prominent */}
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
					className="flex flex-col items-center gap-3"
				>
					<Button
						asChild
						size="lg"
						className="w-full max-w-sm h-12 text-base font-semibold gap-2"
					>
						<a href="#beta">
							Quiero acceso anticipado
							<ArrowRight className="w-4 h-4" />
						</a>
					</Button>
					<p className="text-xs text-muted-foreground">
						Acceso en menos de 24hs · Sin tarjeta de crédito
					</p>
				</motion.div>
			</div>
		</section>
	);
};
