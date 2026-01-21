import { motion } from "motion/react";
import { scrollFadeIn } from "@/lib/utils";
import { ProposalForm } from "./proposal-form";

export const ProposalSection = () => {
	return (
		<section id="beta" className="bg-card py-16 md:py-20 px-6">
			<div className="max-w-2xl mx-auto">
				<motion.div
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
					variants={scrollFadeIn}
					className="text-center mb-10"
				>
					<h2
						className="text-2xl md:text-3xl font-semibold tracking-tight mb-3"
						style={{ letterSpacing: "-0.02em" }}
					>
						El sistema ya funciona. Ahora lo expandimos con vos.
					</h2>
					<p className="text-base text-muted-foreground max-w-xl mx-auto">
						Facturación, stock, ventas unificadas — eso ya está resuelto. Pero
						Mylos no termina ahí. Estamos sumando integraciones, reportes y
						funcionalidades que los usuarios reales nos piden. Por eso buscamos
						negocios que quieran entrar temprano.
					</p>
				</motion.div>

				<motion.div
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
					variants={scrollFadeIn}
					className="mb-10"
				>
					<div className="flex items-center justify-between mb-3">
						<div className="flex flex-col items-center flex-1">
							<div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-semibold text-xs mb-2">
								1
							</div>
							<span className="text-xs font-medium text-primary">Aplicás</span>
						</div>
						<div className="flex-1 h-0.5 bg-primary mx-2" />
						<div className="flex flex-col items-center flex-1">
							<div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-semibold text-xs mb-2">
								2
							</div>
							<span className="text-xs font-medium text-primary">Hablamos</span>
						</div>
						<div className="flex-1 h-0.5 bg-primary mx-2" />
						<div className="flex flex-col items-center flex-1">
							<div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-semibold text-xs mb-2">
								3
							</div>
							<span className="text-xs font-medium text-primary">
								Usás + opinás
							</span>
						</div>
					</div>
					<div className="grid grid-cols-3 gap-3 text-center mt-4">
						<p className="text-xs text-muted-foreground">
							Nos contás sobre tu negocio (2 min)
						</p>
						<p className="text-xs text-muted-foreground">
							Vemos si hay fit y te damos acceso
						</p>
						<p className="text-xs text-muted-foreground">
							Acceso completo y línea directa con el equipo
						</p>
					</div>
				</motion.div>

				<ProposalForm />
			</div>
		</section>
	);
};
