"use client";

import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { scrollFadeIn } from "@/lib/utils";
import { Zap, Smartphone, Link2, ChevronDown } from "lucide-react";

const bullets = [
	{
		icon: Zap,
		title: "5 minutos de setup. Después no tenés que pensar más.",
		description:
			"Solo necesitás cargar tus gastos fijos una vez. MYLOS los descuenta automáticamente de cada venta y te avisa antes de cada vencimiento. Configurás una vez, funciona para siempre.",
	},
	{
		icon: Smartphone,
		title: "Sin curva de aprendizaje. Funciona desde el celular.",
		description:
			"Diseñado mobile-first para que operes desde donde estés. Abrís la app y ya sabés qué hacer. Sin tutoriales, sin capacitaciones.",
	},
	{
		icon: Link2,
		title: "Se adapta a cómo ya vendés — TiendaNube, WhatsApp o local.",
		description:
			"Integración nativa con TiendaNube: stock y ventas sincronizados en tiempo real. ¿Vendés por WhatsApp o en local? Cargás la venta en segundos y facturás con un tap.",
	},
];

const BulletItem = ({
	icon: Icon,
	title,
	description,
}: (typeof bullets)[number]) => {
	const [open, setOpen] = useState(false);

	return (
		<button
			type="button"
			onClick={() => setOpen(!open)}
			className="w-full text-left px-5 py-4 bg-card border border-border rounded-xl hover:border-primary/20 transition-colors cursor-pointer"
		>
			<div className="flex items-center gap-4">
				<div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
					<Icon className="w-[18px] h-[18px] text-primary" />
				</div>
				<span className="flex-1 text-sm md:text-base font-medium text-foreground leading-snug">
					{title}
				</span>
				<ChevronDown
					className={`w-4 h-4 text-muted-foreground shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
				/>
			</div>
			<AnimatePresence initial={false}>
				{open && (
					<motion.div
						initial={{ height: 0, opacity: 0 }}
						animate={{ height: "auto", opacity: 1 }}
						exit={{ height: 0, opacity: 0 }}
						transition={{ duration: 0.2, ease: "easeInOut" }}
						className="overflow-hidden"
					>
						<p className="text-sm text-muted-foreground leading-relaxed pt-3 pl-[52px]">
							{description}
						</p>
					</motion.div>
				)}
			</AnimatePresence>
		</button>
	);
};

export const BulletsSection = () => {
	return (
		<section className="bg-muted py-10 md:py-14 px-6">
			<div className="max-w-3xl mx-auto">
				<motion.div
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
					variants={scrollFadeIn}
					className="space-y-3"
				>
					{bullets.map((bullet) => (
						<BulletItem key={bullet.title} {...bullet} />
					))}
				</motion.div>
			</div>
		</section>
	);
};
