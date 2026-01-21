import { scrollFadeIn } from "@/lib/utils";
import { motion } from "motion/react";
import { WhatsAppIcon } from "../icons/whatsapp";

export const WhatsAppSectionCTA = () => {
	return (
		<motion.div
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true }}
			variants={scrollFadeIn}
			className="mt-12 text-center rounded-xl"
		>
			<section className="bg-[#22BF5B] py-12 px-6">
				<div className="max-w-2xl mx-auto text-center">
					<h3 className="text-xl font-semibold text-white mb-2">
						¿Tenés más dudas?
					</h3>
					<p className="text-sm text-white/80 mb-6">
						Hablá con nosotros directamente y te ayudamos a resolver cualquier
						pregunta
					</p>
					<motion.a
						href="https://wa.me/5491149796361"
						target="_blank"
						rel="noopener noreferrer"
						className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#22BF5B] hover:bg-white/90 rounded-lg font-semibold transition-colors shadow-md"
						whileHover={{ scale: 1.02 }}
						whileTap={{ scale: 0.98 }}
					>
						Contactanos por WhatsApp
						<WhatsAppIcon className="w-5 h-5" />
					</motion.a>
				</div>
			</section>
		</motion.div>
	);
};
