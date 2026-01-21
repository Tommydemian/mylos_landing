import { ShoppingCart, FileText, Package, TrendingUp } from "lucide-react";
import { motion } from "motion/react";
import { cardVariants, scrollFadeIn } from "@/lib/utils";

const features = [
	{
		icon: ShoppingCart,
		title: "Vendé donde quieras, controlá desde un lugar",
		description:
			"WhatsApp, TiendaNube, Mercado Libre, Shopify, Instagram, mostrador. Todo en una sola vista, sin importar dónde vendas.",
	},
	{
		icon: TrendingUp,
		title: "Sabé cuánto ganás, no cuánto facturás",
		description:
			"Costos de producto, comisiones, envíos. Sabé exactamente cuánto te queda en el bolsillo.",
	},
	{
		icon: FileText,
		title: "Comprobante en un click. AFIP resuelto.",
		description: "Conectá directo con AFIP, sin sistemas externos.",
	},
	{
		icon: Package,
		title: "Vendiste algo, el stock se actualiza solo",
		description:
			"¿Vendiste en TiendaNube? ¿En MercadoLibre? ¿En Shopify? Se actualiza automáticamente. Sin planillas, sin errores.",
	},
];

export const FeaturesSection = () => {
	return (
		<section
			id="funcionalidades"
			className="bg-card pt-10 md:pt-12 pb-16 md:pb-20 px-6"
		>
			<div className="max-w-3xl mx-auto">
				<motion.div
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, margin: "-100px" }}
					variants={scrollFadeIn}
					className="text-center mb-12"
				>
					<h2
						className="text-3xl md:text-4xl font-bold mb-4 text-balance"
						style={{ letterSpacing: "-0.02em" }}
					>
						Todo tu negocio en un solo lugar. Sin Excel. Sin AFIP manual. Sin
						caos.
					</h2>
					<p className="text-lg text-muted-foreground leading-relaxed text-balance max-w-2xl mx-auto">
						Mylos conecta donde vendés, factura automático, y te dice cuánto
						ganás de verdad.
					</p>
				</motion.div>

				<div className="grid md:grid-cols-2 gap-x-12 gap-y-10 md:text-left text-center">
					{features.map((feature, i) => (
						<motion.div
							key={feature.title}
							custom={i}
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true, margin: "-50px" }}
							variants={cardVariants}
							className="space-y-2"
						>
							<div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center mb-3 md:mx-0 mx-auto">
								<feature.icon className="w-5 h-5 text-white" />
							</div>
							<h4 className="text-base font-semibold">{feature.title}</h4>
							<p className="text-sm text-muted-foreground leading-relaxed">
								{feature.description}
							</p>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
};
