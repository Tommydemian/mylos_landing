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
import { scrollFadeIn } from "@/lib/utils";

export default function TerminosDeUsoPage() {
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
						Términos de uso
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
							1. Aceptación de los términos
						</h2>
						<p className="text-base text-muted-foreground leading-relaxed mb-4">
							Al acceder y utilizar Mylos, aceptás cumplir con estos términos de
							uso y todas las leyes y regulaciones aplicables. Si no estás de
							acuerdo con alguno de estos términos, no deberías utilizar nuestro
							servicio.
						</p>
					</section>

					<section className="mb-12">
						<h2 className="text-2xl font-semibold text-foreground mb-4">
							2. Uso del servicio
						</h2>
						<p className="text-base text-muted-foreground leading-relaxed mb-4">
							Mylos es un sistema de gestión empresarial (ERP) diseñado para
							emprendedores, monotributistas y pequeños comercios. Te
							comprometés a utilizar el servicio únicamente para fines legales y
							de acuerdo con estos términos.
						</p>
						<p className="text-base text-muted-foreground leading-relaxed mb-4">
							No está permitido:
						</p>
						<ul className="list-disc list-inside text-base text-muted-foreground leading-relaxed mb-4 space-y-2 ml-4">
							<li>
								Usar el servicio de manera que pueda dañar, deshabilitar o
								sobrecargar nuestros servidores
							</li>
							<li>
								Intentar acceder de manera no autorizada a cualquier parte del
								servicio
							</li>
							<li>
								Usar el servicio para transmitir virus, malware o código
								malicioso
							</li>
							<li>
								Violar los derechos de propiedad intelectual de Mylos o terceros
							</li>
						</ul>
					</section>

					<section className="mb-12">
						<h2 className="text-2xl font-semibold text-foreground mb-4">
							3. Cuenta de usuario
						</h2>
						<p className="text-base text-muted-foreground leading-relaxed mb-4">
							Sos responsable de mantener la confidencialidad de tu cuenta y
							contraseña. Aceptás notificarnos inmediatamente sobre cualquier
							uso no autorizado de tu cuenta.
						</p>
					</section>

					<section className="mb-12">
						<h2 className="text-2xl font-semibold text-foreground mb-4">
							4. Datos y privacidad
						</h2>
						<p className="text-base text-muted-foreground leading-relaxed mb-4">
							Mylos toma muy en serio la seguridad de tus datos. Toda la
							información que ingresás en nuestra plataforma está protegida y
							encriptada. Para más detalles, consultá nuestras{" "}
							<Link
								href="/politicas-de-privacidad"
								className="text-primary hover:underline"
							>
								Políticas de privacidad
							</Link>
							.
						</p>
					</section>

					<section className="mb-12">
						<h2 className="text-2xl font-semibold text-foreground mb-4">
							5. Modificaciones del servicio
						</h2>
						<p className="text-base text-muted-foreground leading-relaxed mb-4">
							Nos reservamos el derecho de modificar o discontinuar, temporal o
							permanentemente, el servicio (o cualquier parte del mismo) con o
							sin previo aviso. No seremos responsables ante vos ni ante
							terceros por cualquier modificación, suspensión o discontinuación
							del servicio.
						</p>
					</section>

					<section className="mb-12">
						<h2 className="text-2xl font-semibold text-foreground mb-4">
							6. Limitación de responsabilidad
						</h2>
						<p className="text-base text-muted-foreground leading-relaxed mb-4">
							Mylos se proporciona &quot;tal cual&quot; sin garantías de ningún
							tipo. No garantizamos que el servicio será ininterrumpido, seguro
							o libre de errores. En ningún caso seremos responsables por daños
							indirectos, incidentales, especiales o consecuentes.
						</p>
					</section>

					<section className="mb-12">
						<h2 className="text-2xl font-semibold text-foreground mb-4">
							7. Modificaciones de los términos
						</h2>
						<p className="text-base text-muted-foreground leading-relaxed mb-4">
							Nos reservamos el derecho de actualizar estos términos en
							cualquier momento. Te notificaremos sobre cambios materiales
							publicando los nuevos términos en esta página. Tu uso continuado
							del servicio después de dichos cambios constituye tu aceptación de
							los nuevos términos.
						</p>
					</section>

					<section className="mb-12">
						<h2 className="text-2xl font-semibold text-foreground mb-4">
							8. Contacto
						</h2>
						<p className="text-base text-muted-foreground leading-relaxed mb-4">
							Si tenés preguntas sobre estos términos de uso, podés contactarnos
							en:
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
