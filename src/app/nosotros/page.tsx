"use client";

import type React from "react";
import { useEffect } from "react";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Button } from "@/components/ui/button";
import {
	ArrowLeft,
	Target,
	Users,
	Rocket,
	Heart,
	Lightbulb,
	TrendingUp,
	Zap,
} from "lucide-react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { motion } from "motion/react";

export default function NosotrosPage() {
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

	const timelineSteps = [
		{
			year: "2025",
			title: "La idea",
			description:
				"Identificamos el problema: gestionar un negocio era muy complejo",
		},
		{
			year: "2025",
			title: "Desarrollo",
			description: "Construimos el MVP escuchando a emprendedores reales",
		},
		{
			year: "2026",
			title: "Beta",
			description: "Lanzamos la beta con usuarios seleccionados",
		},
		{
			year: "Pronto",
			title: "Lanzamiento",
			description: "Disponible para todos los emprendedores argentinos",
		},
	];

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
			<main className="mx-auto max-w-[1000px] px-6 py-16 md:py-24">
				{/* Back button */}
				<a
					href="/"
					onClick={handleGoHome}
					className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8 cursor-pointer"
				>
					<ArrowLeft className="h-4 w-4" />
					Volver al inicio
				</a>

				{/* Hero header */}
				<motion.div
					className="mb-20 text-center"
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
					variants={scrollFadeIn}
				>
					<h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
						Sobre Mylos
					</h1>
					<p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
						Simplificamos la gestión para que puedas enfocarte en lo que
						importa:{" "}
						<span className="text-primary font-semibold">
							hacer crecer tu negocio
						</span>
						.
					</p>
				</motion.div>

				{/* Stats cards */}
				<motion.div
					className="grid grid-cols-3 gap-2 sm:gap-4 mb-20"
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
					variants={scrollFadeIn}
				>
					<div className="bg-[oklch(0.975_0_0)] rounded-xl p-3 sm:p-6 text-center">
						<p className="text-2xl sm:text-3xl font-bold text-primary mb-1">
							100%
						</p>
						<p className="text-[10px] sm:text-xs text-muted-foreground leading-tight">
							Argentinos
						</p>
					</div>
					<div className="bg-[oklch(0.975_0_0)] rounded-xl p-3 sm:p-6 text-center">
						<p className="text-2xl sm:text-3xl font-bold text-primary mb-1">
							2026
						</p>
						<p className="text-[10px] sm:text-xs text-muted-foreground leading-tight">
							Beta
						</p>
					</div>
					<div className="bg-[oklch(0.975_0_0)] rounded-xl p-3 sm:p-6 text-center">
						<p className="text-2xl sm:text-3xl font-bold text-primary mb-1">
							5+
						</p>
						<p className="text-[10px] sm:text-xs text-muted-foreground leading-tight">
							Integraciones
						</p>
					</div>
				</motion.div>

				{/* Timeline */}
				<motion.section
					className="mb-20"
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, margin: "-100px" }}
					variants={scrollFadeIn}
				>
					<h2 className="text-2xl font-semibold text-foreground mb-10 text-center">
						Nuestra historia
					</h2>
					<div className="relative">
						{/* Timeline line */}
						<div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2" />

						<div className="space-y-8 md:space-y-0">
							{timelineSteps.map((step, index) => (
								<div
									key={step.year + index}
									className={`md:flex items-center ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
								>
									<div
										className={`md:w-1/2 ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}
									>
										<div className="bg-white border border-border rounded-xl p-6 shadow-sm">
											<span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-3">
												{step.year}
											</span>
											<h3 className="text-lg font-semibold text-foreground mb-2">
												{step.title}
											</h3>
											<p className="text-sm text-muted-foreground">
												{step.description}
											</p>
										</div>
									</div>
									{/* Center dot */}
									<div
										className="hidden md:flex w-4 h-4 bg-primary rounded-full absolute left-1/2 -translate-x-1/2"
										style={{ top: `${index * 25 + 5}%` }}
									/>
									<div className="md:w-1/2" />
								</div>
							))}
						</div>
					</div>
				</motion.section>

				{/* Valores - Visual cards */}
				<motion.div
					className="mb-20"
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, margin: "-100px" }}
					variants={scrollFadeIn}
				>
					<h2 className="text-2xl font-semibold text-foreground mb-10 text-center">
						Qué nos mueve
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
						<div className="group bg-white border border-border rounded-xl p-6 transition-all duration-300 hover:border-primary/30 hover:shadow-md">
							<div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
								<Target className="h-6 w-6 text-primary" />
							</div>
							<h3 className="text-lg font-semibold text-foreground mb-2">
								Simplicidad
							</h3>
							<p className="text-sm text-muted-foreground">
								Tecnología que simplifica, no complica.
							</p>
						</div>
						<div className="group bg-white border border-border rounded-xl p-6 transition-all duration-300 hover:border-primary/30 hover:shadow-md">
							<div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
								<Users className="h-6 w-6 text-primary" />
							</div>
							<h3 className="text-lg font-semibold text-foreground mb-2">
								Cercanía
							</h3>
							<p className="text-sm text-muted-foreground">
								Hablamos tu idioma, entendemos tus problemas.
							</p>
						</div>
						<div className="group bg-white border border-border rounded-xl p-6 transition-all duration-300 hover:border-primary/30 hover:shadow-md">
							<div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
								<Rocket className="h-6 w-6 text-primary" />
							</div>
							<h3 className="text-lg font-semibold text-foreground mb-2">
								Evolución
							</h3>
							<p className="text-sm text-muted-foreground">
								Tu feedback moldea el producto semana a semana.
							</p>
						</div>
						<div className="group bg-white border border-border rounded-xl p-6 transition-all duration-300 hover:border-primary/30 hover:shadow-md">
							<div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
								<Heart className="h-6 w-6 text-primary" />
							</div>
							<h3 className="text-lg font-semibold text-foreground mb-2">
								Compromiso
							</h3>
							<p className="text-sm text-muted-foreground leading-relaxed">
								Tu éxito es nuestro éxito.
							</p>
						</div>
					</div>
				</motion.div>

				{/* Founders */}
				<motion.div
					className="mb-20"
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, margin: "-100px" }}
					variants={scrollFadeIn}
				>
					<h2 className="text-2xl font-semibold text-foreground mb-4">
						Los fundadores
					</h2>
					<p className="text-muted-foreground mb-12 max-w-2xl">
						Detrás de Mylos hay personas que también emprenden. Combinamos
						tecnología y negocio para crear una herramienta que entienda de
						verdad los desafíos del emprendedor argentino.
					</p>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-10">
						{/* Tomas */}
						<div className="group">
							<div className="relative aspect-square max-w-[320px] overflow-hidden rounded-2xl mb-6">
								<Image
									src="/images/1749044917779.jpeg"
									alt="Tomas Gil Amoedo - Co-founder de Mylos"
									fill
									sizes="(max-width: 768px) 100vw, 320px"
									priority
									className="object-cover transition-transform duration-500 group-hover:scale-105"
								/>
							</div>
							<h3 className="text-xl font-semibold text-foreground mb-1">
								Tomas Gil Amoedo
							</h3>
							<p className="text-sm text-primary font-medium mb-3">
								Co-founder & CTO
							</p>
							<p className="text-sm text-muted-foreground leading-relaxed">
								Desarrollador principal de Mylos. Tomas transforma la idea en
								producto, cuidando cada detalle técnico y priorizando siempre la
								simplicidad. Su visión y obsesión por hacer las cosas bien son
								la base sobre la que se construye Mylos.
							</p>
						</div>

						{/* Boris */}
						<div className="group">
							<div className="relative aspect-square max-w-[320px] overflow-hidden rounded-2xl mb-6">
								<Image
									src="/images/1634910459213.jpeg"
									alt="Boris Becco - Co-founder de Mylos"
									fill
									sizes="(max-width: 768px) 100vw, 320px"
									priority
									className="object-cover transition-transform duration-500 group-hover:scale-105"
								/>
							</div>
							<h3 className="text-xl font-semibold text-foreground mb-1">
								Boris Becco
							</h3>
							<p className="text-sm text-primary font-medium mb-3">
								Co-founder & CEO
							</p>
							<p className="text-sm text-muted-foreground leading-relaxed">
								Responsable del negocio y la dirección del proyecto. Boris
								impulsa la visión de Mylos, conecta el producto con las
								necesidades reales de los usuarios y trabaja para que la
								plataforma crezca de forma sustentable y cercana a su comunidad.
							</p>
						</div>
					</div>
				</motion.div>

				{/* Vision cards */}
				<motion.div
					className="mb-20"
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, margin: "-100px" }}
					variants={scrollFadeIn}
				>
					<h2 className="text-2xl font-semibold text-foreground mb-10 text-center">
						Hacia dónde vamos
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
						<div className="text-center p-6">
							<div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
								<Lightbulb className="h-8 w-8 text-primary" />
							</div>
							<h3 className="font-semibold text-foreground mb-2">
								Nuevas integraciones
							</h3>
							<p className="text-sm text-muted-foreground">
								Más canales, más automatizaciones
							</p>
						</div>
						<div className="text-center p-6">
							<div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
								<TrendingUp className="h-8 w-8 text-primary" />
							</div>
							<h3 className="font-semibold text-foreground mb-2">
								Escalar en LATAM
							</h3>
							<p className="text-sm text-muted-foreground">
								Argentina primero, luego la región
							</p>
						</div>
						<div className="text-center p-6">
							<div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
								<Zap className="h-8 w-8 text-primary" />
							</div>
							<h3 className="font-semibold text-foreground mb-2">
								IA integrada
							</h3>
							<p className="text-sm text-muted-foreground">
								Insights automáticos para tu negocio
							</p>
						</div>
					</div>
				</motion.div>

				{/* CTA */}
				<motion.div
					className="bg-primary rounded-2xl p-8 md:p-12 text-center"
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
					variants={scrollFadeIn}
				>
					<h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
						Unite a la comunidad Mylos
					</h3>
					<p className="text-white/80 mb-8 max-w-md mx-auto">
						Sé parte de los primeros en probar Mylos y obtené beneficios
						exclusivos de por vida.
					</p>
					<Button
						size="lg"
						className="rounded-[10px] bg-white text-primary hover:bg-white/90"
						onClick={handleGoHome}
					>
						Solicitar acceso anticipado
					</Button>
				</motion.div>

				{/* CTA to go back */}
				<div className="mt-16 pt-8 border-t border-border">
					<Button size="lg" className="rounded-[10px]" onClick={handleGoHome}>
						Volver al inicio
					</Button>
				</div>
			</main>
			<Footer /> {/* Use Footer component */}
		</div>
	);
}
