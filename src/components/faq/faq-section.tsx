"use client";

import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "motion/react";
import { scrollFadeIn } from "@/lib/utils";

const faqs = [
	{
		question: "¿Puedo probarlo gratis?",
		answer:
			"Sí, la prueba estará disponible hasta que cerremos la etapa Beta. Acompañanos en la creación del producto y sé parte del programa de early access, con beneficios exclusivos de por vida.",
	},
	{
		question: "¿Con qué plataformas se integra?",
		answer:
			"Sí, Mylos se integra automáticamente con TiendaNube, Mercado Libre y Shopify, además de permitir ventas presenciales en mostrador.",
	},
	{
		question: "¿Cómo funciona la facturación con AFIP?",
		answer:
			"Mylos se conecta directamente con AFIP para que puedas emitir facturas A, B y C con un solo clic, sin necesidad de entrar a la web de AFIP ni usar sistemas externos.",
	},
	{
		question: "¿Es difícil de configurar?",
		answer:
			"Para nada. Creamos Mylos para que puedas empezar en minutos. No necesitas conocimientos contables ni técnicos previos.",
	},
	{
		question: "¿Qué pasa con mis datos si cancelo?",
		answer:
			"Podés exportar todos tus datos en cualquier momento. No hay retención ni complicaciones.",
	},
	{
		question: "¿Funciona en múltiples sucursales?",
		answer:
			"Sí, podés gestionar inventario y ventas en múltiples ubicaciones desde un solo panel.",
	},
	{
		question: "¿Necesito experiencia contable?",
		answer:
			"No. Mylos está diseñado para emprendedores, no para contadores. Todo es visual e intuitivo.",
	},
];

export const FaqSection = () => {
	return (
		<section id="faq" className="bg-card pt-10 md:pt-12 pb-8 md:pb-10 px-6">
			<div className="max-w-2xl mx-auto">
				<motion.h2
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, margin: "-100px" }}
					variants={scrollFadeIn}
					className="text-2xl md:text-3xl font-semibold text-center mb-8"
					style={{ letterSpacing: "-0.02em" }}
				>
					Preguntas frecuentes
				</motion.h2>

				<Accordion
					type="single"
					collapsible
					className="border border-border rounded-xl overflow-hidden"
				>
					{faqs.map((faq, i) => (
						<AccordionItem
							key={i}
							value={`item-${i}`}
							className="border-b border-border last:border-b-0"
						>
							<AccordionTrigger className="px-5 py-4 hover:bg-primary/5 transition-colors duration-150 text-sm font-medium text-left">
								{faq.question}
							</AccordionTrigger>
							<AccordionContent className="px-5 pb-4 pt-0 text-sm text-muted-foreground leading-relaxed">
								{faq.answer}
							</AccordionContent>
						</AccordionItem>
					))}
				</Accordion>
			</div>
		</section>
	);
};
