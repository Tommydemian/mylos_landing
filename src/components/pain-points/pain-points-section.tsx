"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Table, HelpCircle, Shuffle } from "lucide-react";
import { motion } from "motion/react";
import { cardVariants, scrollFadeIn } from "@/lib/utils";

export const PainPointsSection = () => {
	return (
		<section className="bg-muted pt-10 md:pt-12 pb-16 md:pb-20 px-6">
			<div className="max-w-[1100px] mx-auto">
				<motion.h3
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, margin: "-100px" }}
					variants={scrollFadeIn}
					className="text-3xl md:text-4xl font-bold text-center mb-12"
				>
					¿Te suena familiar?
				</motion.h3>

				<div className="grid gap-6 md:grid-cols-3">
					<motion.div
						custom={0}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, margin: "-50px" }}
						variants={cardVariants}
						className="bg-card border border-border rounded-xl p-8 shadow-sm"
					>
						<div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center mb-4">
							<Table className="w-5 h-5 text-primary" />
						</div>
						<h4 className="text-lg font-semibold mb-2">Excel infinito</h4>
						<p className="text-sm text-muted-foreground leading-relaxed">
							Sabés lo que facturaste, pero no tu ganancia real después de
							costos, comisiones y envíos.
						</p>
					</motion.div>

					<motion.div
						custom={1}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, margin: "-50px" }}
						variants={cardVariants}
						className="bg-card border border-border rounded-xl p-8 shadow-sm"
					>
						<div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center mb-4">
							<HelpCircle className="w-5 h-5 text-primary" />
						</div>
						<h4 className="text-lg font-semibold mb-2">
							¿Cuánto gané este mes?
						</h4>
						<p className="text-sm text-muted-foreground leading-relaxed">
							Facturás $500.000. ¿Ganaste $150.000 o $50.000? No tenés idea.
						</p>
					</motion.div>

					<motion.div
						custom={2}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, margin: "-50px" }}
						variants={cardVariants}
						className="bg-card border border-border rounded-xl p-8 shadow-sm"
					>
						<div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center mb-4">
							<Shuffle className="w-5 h-5 text-primary" />
						</div>
						<h4 className="text-lg font-semibold mb-2">5 canales, 0 control</h4>
						<p className="text-sm text-muted-foreground leading-relaxed">
							TiendaNube, Mercado Libre, Shopify, WhatsApp e Instagram. Cada
							venta en un lugar distinto, imposible tener el panorama completo.
						</p>
					</motion.div>
				</div>

				<span className="block text-center text-muted-foreground mt-10 max-w-2xl mx-auto">
					Si manejar tu negocio se siente como un segundo trabajo no pago, no es
					tu culpa. Es que estás usando herramientas que no fueron hechas para
					vos.
				</span>

				<motion.div
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
					variants={scrollFadeIn}
					className="flex justify-center mt-8"
				>
					<motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
						<Button asChild size="lg" className="text-base gap-2">
							<a href="#beta">
								Empezar prueba gratis
								<ArrowRight className="w-4 h-4" />
							</a>
						</Button>
					</motion.div>
				</motion.div>
			</div>
		</section>
	);
};
