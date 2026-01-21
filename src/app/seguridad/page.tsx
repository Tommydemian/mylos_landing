"use client";

import Link from "next/link";
import Footer from "@/components/footer"; // Declare the Footer variable

import type React from "react";
import { Header } from "@/components/header";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Shield, Lock, Server, Eye } from "lucide-react";
import { motion } from "motion/react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { scrollFadeIn } from "@/lib/utils";

export default function SeguridadPage() {
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
						Seguridad
					</h1>
					<p className="text-lg text-muted-foreground">
						Última actualización: Enero 2026
					</p>
				</motion.div>

				{/* Security highlights */}
				<motion.div
					className="grid md:grid-cols-2 gap-6 mb-12"
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
					variants={scrollFadeIn}
				>
					<div className="bg-[oklch(0.975_0_0)] rounded-xl p-6">
						<div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
							<Lock className="h-6 w-6 text-primary" />
						</div>
						<h3 className="font-semibold text-foreground mb-2">
							Encriptación de datos
						</h3>
						<p className="text-sm text-muted-foreground">
							Toda tu información está protegida con encriptación AES-256
						</p>
					</div>
					<div className="bg-[oklch(0.975_0_0)] rounded-xl p-6">
						<div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
							<Server className="h-6 w-6 text-primary" />
						</div>
						<h3 className="font-semibold text-foreground mb-2">
							Infraestructura segura
						</h3>
						<p className="text-sm text-muted-foreground">
							Servidores con certificación de seguridad y backups automáticos
						</p>
					</div>
					<div className="bg-[oklch(0.975_0_0)] rounded-xl p-6">
						<div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
							<Shield className="h-6 w-6 text-primary" />
						</div>
						<h3 className="font-semibold text-foreground mb-2">
							Protección continua
						</h3>
						<p className="text-sm text-muted-foreground">
							Monitoreo 24/7 y actualizaciones de seguridad constantes
						</p>
					</div>
					<div className="bg-[oklch(0.975_0_0)] rounded-xl p-6">
						<div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
							<Eye className="h-6 w-6 text-primary" />
						</div>
						<h3 className="font-semibold text-foreground mb-2">
							Control de acceso
						</h3>
						<p className="text-sm text-muted-foreground">
							Autenticación segura y gestión de permisos por usuario
						</p>
					</div>
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
							1. Encriptación
						</h2>
						<p className="text-base text-muted-foreground leading-relaxed mb-4">
							Toda la información que viaja entre tu navegador y nuestros
							servidores está protegida mediante encriptación TLS 1.3. Los datos
							almacenados en nuestra base de datos están encriptados con
							AES-256, el estándar de la industria utilizado por bancos e
							instituciones financieras.
						</p>
					</section>

					<section className="mb-12">
						<h2 className="text-2xl font-semibold text-foreground mb-4">
							2. Infraestructura
						</h2>
						<p className="text-base text-muted-foreground leading-relaxed mb-4">
							Mylos opera en infraestructura de nube de primer nivel con:
						</p>
						<ul className="list-disc list-inside text-base text-muted-foreground leading-relaxed mb-4 space-y-2 ml-4">
							<li>Centros de datos con certificación SOC 2 e ISO 27001</li>
							<li>Redundancia geográfica para alta disponibilidad</li>
							<li>Backups automáticos diarios con retención de 30 días</li>
							<li>Firewalls y sistemas de detección de intrusiones</li>
						</ul>
					</section>

					<section className="mb-12">
						<h2 className="text-2xl font-semibold text-foreground mb-4">
							3. Autenticación
						</h2>
						<p className="text-base text-muted-foreground leading-relaxed mb-4">
							Implementamos múltiples capas de seguridad en el acceso:
						</p>
						<ul className="list-disc list-inside text-base text-muted-foreground leading-relaxed mb-4 space-y-2 ml-4">
							<li>Contraseñas hasheadas con algoritmos seguros (bcrypt)</li>
							<li>Sesiones con tokens de corta duración</li>
							<li>Bloqueo automático después de intentos fallidos</li>
							<li>Cierre de sesión automático por inactividad</li>
						</ul>
					</section>

					<section className="mb-12">
						<h2 className="text-2xl font-semibold text-foreground mb-4">
							4. Integraciones seguras
						</h2>
						<p className="text-base text-muted-foreground leading-relaxed mb-4">
							Las conexiones con TiendaNube, Mercado Libre, Shopify y AFIP se
							realizan mediante APIs oficiales con autenticación OAuth 2.0.
							Nunca almacenamos contraseñas de servicios externos, solo tokens
							de acceso revocables.
						</p>
					</section>

					<section className="mb-12">
						<h2 className="text-2xl font-semibold text-foreground mb-4">
							5. Monitoreo y respuesta
						</h2>
						<p className="text-base text-muted-foreground leading-relaxed mb-4">
							Contamos con sistemas de monitoreo que detectan actividades
							sospechosas en tiempo real. Ante cualquier incidente de seguridad,
							tenemos protocolos establecidos para responder rápidamente y
							notificar a los usuarios afectados.
						</p>
					</section>

					<section className="mb-12">
						<h2 className="text-2xl font-semibold text-foreground mb-4">
							6. Buenas prácticas recomendadas
						</h2>
						<p className="text-base text-muted-foreground leading-relaxed mb-4">
							Te recomendamos seguir estas prácticas para mantener tu cuenta
							segura:
						</p>
						<ul className="list-disc list-inside text-base text-muted-foreground leading-relaxed mb-4 space-y-2 ml-4">
							<li>Usá una contraseña única y robusta para tu cuenta</li>
							<li>No compartas tus credenciales con terceros</li>
							<li>Cerrá sesión cuando uses dispositivos compartidos</li>
							<li>Mantené actualizado tu navegador web</li>
						</ul>
					</section>

					<section className="mb-12">
						<h2 className="text-2xl font-semibold text-foreground mb-4">
							7. Reportar vulnerabilidades
						</h2>
						<p className="text-base text-muted-foreground leading-relaxed mb-4">
							Si encontrás alguna vulnerabilidad de seguridad, te pedimos que
							nos la reportes de manera responsable:
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

			<Footer />
		</div>
	);
}
