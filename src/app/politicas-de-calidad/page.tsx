"use client";

import Link from "next/link";
import { Footer } from "@/components/footer"; // Import Footer component

import type React from "react";
import { Header } from "@/components/header";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { motion } from "motion/react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function PoliticasDeCalidadPage() {
	const router = useRouter();

	useEffect(() => {
		window.scrollTo({ top: 0, behavior: "instant" });
	}, []);

	const handleGoHome = (e: React.MouseEvent) => {
		e.preventDefault();
		router.push("/");
		setTimeout(() => {
			window.scrollTo({ top: 0, behavior: "instant" });
		}, 100);
	};

	const scrollFadeIn = {
		hidden: { opacity: 0, y: 30 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.6, ease: [0.25, 0.4, 0.25, 1] },
		},
	};

	return (
		<div className="min-h-screen bg-background">
			<Header />
			<main className="mx-auto max-w-[900px] px-6 py-16 md:py-24">
				{/* Back button */}
				<Link
					href="/"
					onClick={handleGoHome}
					className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8 cursor-pointer"
				>
					<ArrowLeft className="h-4 w-4" />
					Volver al inicio
				</Link>

				{/* Page header */}
				<motion.div
					className="mb-12"
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
					variants={scrollFadeIn}
				>
					<h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
						Políticas de calidad
					</h1>
					<p className="text-lg text-muted-foreground">
						Última actualización: Enero 2026
					</p>
				</motion.div>

				{/* Content sections */}
				<motion.div
					className="prose prose-neutral max-w-none"
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, margin: "-100px" }}
					variants={scrollFadeIn}
				>
					<section className="mb-12">
						<h2 className="text-2xl font-semibold text-foreground mb-4">
							1. Compromiso con la calidad
						</h2>
						<p className="text-base text-muted-foreground leading-relaxed mb-4">
							En Mylos, la calidad es el pilar fundamental de todo lo que
							hacemos. Nos comprometemos a proporcionar un sistema de gestión
							empresarial que supere las expectativas de nuestros usuarios,
							ofreciendo una experiencia confiable, intuitiva y eficiente.
						</p>
					</section>

					<section className="mb-12">
						<h2 className="text-2xl font-semibold text-foreground mb-4">
							2. Estándares de desarrollo
						</h2>
						<p className="text-base text-muted-foreground leading-relaxed mb-4">
							Nuestro equipo de desarrollo sigue rigurosos estándares de calidad
							en cada etapa del proceso:
						</p>
						<ul className="list-disc list-inside text-base text-muted-foreground leading-relaxed mb-4 space-y-2 ml-4">
							<li>Revisión de código por pares antes de cada implementación</li>
							<li>
								Pruebas automatizadas para garantizar la estabilidad del sistema
							</li>
							<li>Monitoreo continuo del rendimiento y disponibilidad</li>
							<li>
								Actualizaciones regulares para mejorar funcionalidades y
								seguridad
							</li>
						</ul>
					</section>

					<section className="mb-12">
						<h2 className="text-2xl font-semibold text-foreground mb-4">
							3. Disponibilidad del servicio
						</h2>
						<p className="text-base text-muted-foreground leading-relaxed mb-4">
							Nos esforzamos por mantener una disponibilidad del servicio
							superior al 99.5%. Contamos con infraestructura redundante y
							sistemas de respaldo para minimizar cualquier interrupción en tu
							operación diaria.
						</p>
					</section>

					<section className="mb-12">
						<h2 className="text-2xl font-semibold text-foreground mb-4">
							4. Soporte al usuario
						</h2>
						<p className="text-base text-muted-foreground leading-relaxed mb-4">
							Ofrecemos soporte técnico de calidad para resolver cualquier
							consulta o inconveniente:
						</p>
						<ul className="list-disc list-inside text-base text-muted-foreground leading-relaxed mb-4 space-y-2 ml-4">
							<li>Atención personalizada por WhatsApp</li>
							<li>Tiempos de respuesta menores a 24 horas hábiles</li>
							<li>Documentación y guías actualizadas</li>
							<li>Capacitación para nuevos usuarios</li>
						</ul>
					</section>

					<section className="mb-12">
						<h2 className="text-2xl font-semibold text-foreground mb-4">
							5. Mejora continua
						</h2>
						<p className="text-base text-muted-foreground leading-relaxed mb-4">
							Implementamos un proceso de mejora continua basado en el feedback
							de nuestros usuarios. Escuchamos activamente las sugerencias y
							necesidades para evolucionar constantemente nuestra plataforma.
						</p>
					</section>

					<section className="mb-12">
						<h2 className="text-2xl font-semibold text-foreground mb-4">
							6. Integraciones de calidad
						</h2>
						<p className="text-base text-muted-foreground leading-relaxed mb-4">
							Todas nuestras integraciones con terceros (TiendaNube, Mercado
							Libre, Shopify, AFIP) son probadas exhaustivamente para garantizar
							sincronización precisa y confiable de datos.
						</p>
					</section>

					<section className="mb-12">
						<h2 className="text-2xl font-semibold text-foreground mb-4">
							7. Contacto
						</h2>
						<p className="text-base text-muted-foreground leading-relaxed mb-4">
							Si tenés sugerencias para mejorar la calidad de nuestro servicio,
							podés contactarnos en:
						</p>
						<p className="text-base text-muted-foreground leading-relaxed">
							Email:{" "}
							<a
								href="mailto:tomasgilamoedo@gmail.com"
								className="text-primary hover:underline"
							>
								tomasgilamoedo@gmail.com
							</a>
						</p>
					</section>
				</motion.div>

				{/* CTA to go back */}
				<div className="mt-16 pt-8 border-t border-border">
					<motion.div
						whileHover={{ scale: 1.03 }}
						whileTap={{ scale: 0.98 }}
						className="inline-block"
					>
						<Button size="lg" className="rounded-[10px]" onClick={handleGoHome}>
							Volver al inicio
						</Button>
					</motion.div>
				</div>
			</main>
			<Footer /> {/* Footer component usage */}
		</div>
	);
}
