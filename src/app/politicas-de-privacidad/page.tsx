"use client";

import type React from "react";
import { Header } from "@/components/header";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { motion } from "motion/react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Footer } from "@/components/footer";
import { scrollFadeIn } from "@/lib/utils";

export default function PoliticasDePrivacidadPage() {
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

	return (
		<div className="min-h-screen bg-background">
			<Header />

			<main className="mx-auto max-w-[900px] px-6 py-10 md:py-16">
				{/* Back button */}
				<Link
					href="/"
					onClick={handleGoHome}
					className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-6 cursor-pointer"
				>
					<ArrowLeft className="h-4 w-4" />
					Volver al inicio
				</Link>

				{/* Page header */}
				<motion.div
					className="mb-8"
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
					variants={scrollFadeIn}
				>
					<h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
						Políticas de privacidad
					</h1>
					<p className="text-sm text-muted-foreground">
						Última actualización: Enero 2026
					</p>
				</motion.div>

				{/* Content sections */}
				<motion.div
					className="max-w-none"
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, margin: "-100px" }}
					variants={scrollFadeIn}
				>
					<section className="mb-8">
						<h2 className="text-xl font-semibold text-foreground mb-3">
							1. Información que recopilamos
						</h2>
						<p className="text-sm text-muted-foreground leading-relaxed mb-3">
							En Mylos recopilamos información necesaria para brindarte nuestros
							servicios:
						</p>
						<ul className="list-disc list-inside text-sm text-muted-foreground leading-relaxed space-y-1 ml-4">
							<li>Datos de registro: nombre, correo electrónico, empresa</li>
							<li>
								Datos de tu negocio: productos, ventas, clientes, facturación
							</li>
							<li>Datos de uso: cómo interactuás con nuestra plataforma</li>
							<li>
								Datos de integraciones: información sincronizada de TiendaNube y
								AFIP
							</li>
						</ul>
					</section>

					<section className="mb-8">
						<h2 className="text-xl font-semibold text-foreground mb-3">
							2. Uso de la información
						</h2>
						<p className="text-sm text-muted-foreground leading-relaxed mb-3">
							Utilizamos tu información para:
						</p>
						<ul className="list-disc list-inside text-sm text-muted-foreground leading-relaxed space-y-1 ml-4">
							<li>Proporcionar y mantener nuestros servicios</li>
							<li>Procesar tus transacciones y facturación</li>
							<li>Enviarte notificaciones importantes sobre tu cuenta</li>
							<li>Mejorar y personalizar tu experiencia en la plataforma</li>
							<li>Cumplir con obligaciones legales y fiscales</li>
						</ul>
					</section>

					<section className="mb-8">
						<h2 className="text-xl font-semibold text-foreground mb-3">
							3. Protección de datos
						</h2>
						<p className="text-sm text-muted-foreground leading-relaxed">
							Implementamos medidas de seguridad técnicas y organizativas para
							proteger tu información personal contra acceso no autorizado,
							pérdida o alteración. Esto incluye encriptación de datos en
							tránsito y en reposo, y acceso restringido a información sensible.
							Para más detalles, consultá nuestra página de{" "}
							<Link href="/seguridad" className="text-primary hover:underline">
								Seguridad
							</Link>
							.
						</p>
					</section>

					<section className="mb-8">
						<h2 className="text-xl font-semibold text-foreground mb-3">
							4. Compartir información
						</h2>
						<p className="text-sm text-muted-foreground leading-relaxed mb-3">
							No vendemos ni alquilamos tu información personal a terceros. Solo
							compartimos datos cuando:
						</p>
						<ul className="list-disc list-inside text-sm text-muted-foreground leading-relaxed space-y-1 ml-4">
							<li>
								Es necesario para las integraciones que autorizaste (TiendaNube,
								AFIP, etc.)
							</li>
							<li>Es requerido por ley o autoridades competentes</li>
							<li>Es necesario para proteger nuestros derechos legales</li>
						</ul>
					</section>

					<section className="mb-8">
						<h2 className="text-xl font-semibold text-foreground mb-3">
							5. Tus derechos
						</h2>
						<p className="text-sm text-muted-foreground leading-relaxed mb-3">
							Tenés derecho a:
						</p>
						<ul className="list-disc list-inside text-sm text-muted-foreground leading-relaxed space-y-1 ml-4">
							<li>Acceder a tus datos personales</li>
							<li>Rectificar información incorrecta</li>
							<li>Solicitar la eliminación de tus datos</li>
							<li>Exportar tus datos en formato portable</li>
							<li>Oponerte al procesamiento de tus datos</li>
						</ul>
					</section>

					<section className="mb-8">
						<h2 className="text-xl font-semibold text-foreground mb-3">
							6. Retención de datos
						</h2>
						<p className="text-sm text-muted-foreground leading-relaxed">
							Conservamos tu información mientras tu cuenta esté activa o según
							sea necesario para cumplir con obligaciones legales, resolver
							disputas y hacer cumplir nuestros acuerdos.
						</p>
					</section>

					<section className="mb-8">
						<h2 className="text-xl font-semibold text-foreground mb-3">
							7. Cookies
						</h2>
						<p className="text-sm text-muted-foreground leading-relaxed">
							Utilizamos cookies esenciales para el funcionamiento de la
							plataforma. Estas cookies nos permiten mantener tu sesión activa y
							recordar tus preferencias.
						</p>
					</section>

					<section className="mb-8">
						<h2 className="text-xl font-semibold text-foreground mb-3">
							8. Contacto
						</h2>
						<p className="text-sm text-muted-foreground leading-relaxed mb-2">
							Para ejercer tus derechos o consultas sobre privacidad,
							contactanos en:
						</p>
						<p className="text-sm text-muted-foreground leading-relaxed">
							Email:
							<a
								href="mailto:mylos.labs@gmail.com"
								className="text-primary hover:underline"
							>
								mylos.labs@gmail.com
							</a>
						</p>
					</section>
				</motion.div>

				{/* CTA to go back */}
				<div className="mt-10 pt-6 border-t border-border">
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

			<Footer />
		</div>
	);
}
