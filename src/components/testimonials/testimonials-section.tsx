import { motion } from "motion/react";
import { scrollFadeIn, cardVariants } from "@/lib/utils";

const testimonials = [
	{
		quote:
			"Antes perdía horas actualizando planillas. Ahora tengo visibilidad total de mi negocio en tiempo real. No vuelvo atrás.",
		name: "Debora",
		business: "Poupee, Buenos Aires",
	},
	{
		quote:
			"La integración con TiendaNube y AFIP fue inmediata. En una semana ya tenía todo funcionando. Cambió completamente cómo opero.",
		name: "Eliana",
		business: "Lumina, Buenos Aires",
	},
	{
		quote:
			"Hoy sé exactamente cuánto gano. Tener el margen real por producto me dio control total sobre mi negocio.",
		name: "Viviana",
		business: "Joyeria, Buenos Aires",
	},
];

export const TestimonialsSection = () => {
	return (
		<section
			id="testimonios"
			className="bg-muted pt-10 md:pt-12 pb-16 md:pb-20 px-6"
		>
			<div className="max-w-4xl mx-auto">
				<motion.div
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, margin: "-100px" }}
					variants={scrollFadeIn}
					className="text-center mb-10"
				>
					<h3 className="text-2xl md:text-3xl font-bold">Ya lo están usando</h3>
				</motion.div>

				<div className="grid md:grid-cols-3 gap-4">
					{testimonials.map((testimonial, i) => (
						<motion.div
							key={testimonial.name}
							custom={i}
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true, margin: "-50px" }}
							variants={cardVariants}
							className="bg-card border border-border rounded-xl p-6"
						>
							<p className="text-sm text-foreground leading-relaxed mb-5">
								{testimonial.quote}
							</p>
							<div className="flex items-center gap-3">
								<div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
									<span className="text-xs font-semibold text-primary">
										{testimonial.name[0]}
									</span>
								</div>
								<div>
									<p className="text-sm font-medium">{testimonial.name}</p>
									<p className="text-xs text-muted-foreground">
										{testimonial.business}
									</p>
								</div>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
};
