"use client";

import type React from "react";
import Link from "next/link";
import { useRef, useState, useEffect } from "react"; // Added useRef import

import { Button } from "@/components/ui/button";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { Footer } from "@/components/footer";
import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/te";
import { Label } from "@/components/ui/label";
import {
	ArrowRight,
	Table,
	HelpCircle,
	Shuffle,
	ShoppingCart,
	FileText,
	Package,
	TrendingUp,
	Instagram,
	Linkedin,
	Youtube,
	Mail,
	Facebook,
	Send,
	UserCheck,
	TestTube,
	MessageSquare,
	Check,
	ArrowLeft,
	Cookie,
	VolumeX,
	Volume2,
} from "lucide-react";
import { Header } from "@/components/header";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
// Logos
import shopifyLogo from "@/public/images/shopify-logo.svg";
import tiendanubeLogo from "@/public/images/tiendanube-logo.svg";
import afipLogo from "@/public/images/afip-logo.png";
import mercadoLibreLogo from "@/public/images/mercado-libre-logo.png";
import productosPhone from "@/public/images/productos.jpeg";

const heroFadeIn = {
	hidden: { opacity: 0, y: 30 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.6, ease: [0.25, 0.4, 0.25, 1] },
	},
};

const phoneVariants = {
	hidden: { opacity: 0, y: 40, scale: 0.95 },
	visible: (i: number) => ({
		opacity: 1,
		y: 0,
		scale: 1,
		transition: {
			duration: 0.7,
			delay: 0.5 + i * 0.15,
			ease: [0.25, 0.4, 0.25, 1],
		},
	}),
};

const scrollFadeIn = {
	hidden: { opacity: 0, y: 30 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.6, ease: [0.25, 0.4, 0.25, 1] },
	},
};

const cardVariants = {
	hidden: { opacity: 0, y: 40 },
	visible: (i: number) => ({
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.5,
			delay: i * 0.1,
			ease: [0.25, 0.4, 0.25, 1],
		},
	}),
};

const timelineSteps = [
	{
		icon: Send,
		title: "Aplicás",
		description: "Completás el formulario de acceso anticipado",
	},
	{
		icon: UserCheck,
		title: "Te seleccionamos",
		description: "Revisamos tu perfil y te contactamos",
	},
	{
		icon: TestTube,
		title: "Probás",
		description: "Accedés a Mylos con soporte personalizado",
	},
	{
		icon: MessageSquare,
		title: "Feedback",
		description: "Nos ayudás a mejorar con tu experiencia",
	},
];

const highlightWords = ["Vendé", "facturá", "controlá"];

export default function Home() {
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [submitMessage, setSubmitMessage] = useState("");
	const [activePhone, setActivePhone] = useState(0);
	const [formStep, setFormStep] = useState(1);
	const [formSubmitted, setFormSubmitted] = useState(false);
	const [showCookies, setShowCookies] = useState(false);
	const [isVideoMuted, setIsVideoMuted] = useState(true);
	const videoRef = useRef<HTMLVideoElement>(null);
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		business: "",
		website: "",
		reason: "",
	});

	const phoneScreens = [
		{ src: productosPhone, alt: "Mylos Venta Screen" },
		{ src: "/images/dashboard-new.png", alt: "Mylos Dashboard Screen" },
		{ src: "/images/productos.jpeg", alt: "Mylos Productos Screen" },
	];

	useEffect(() => {
		const interval = setInterval(() => {
			setActivePhone((prev) => (prev + 1) % 3);
		}, 3000);
		return () => clearInterval(interval);
	}, []);

	useEffect(() => {
		// CHANGE: Removed the localStorage.removeItem line that was clearing cookies for testing
		const cookiesAccepted = localStorage.getItem("cookiesAccepted");
		console.log("[v0] cookiesAccepted from localStorage:", cookiesAccepted);
		if (!cookiesAccepted) {
			// Small delay to let page load first
			setTimeout(() => {
				console.log("[v0] Showing cookies banner");
				setShowCookies(true);
			}, 1000);
		}
	}, []);

	// REMOVED: Autoplay IntersectionObserver
	// useEffect(() => {
	//   const observer = new IntersectionObserver(
	//     (entries) => {
	//       entries.forEach((entry) => {
	//         if (entry.isIntersecting && videoRef.current && !isVideoPlaying) {
	//           videoRef.current.play()
	//           setIsVideoPlaying(true)
	//         }
	//       })
	//     },
	//     { threshold: 0.5 },
	//   )

	//   if (videoSectionRef.current) {
	//     observer.observe(videoSectionRef.current)
	//   }

	//   return () => observer.disconnect()
	// }, [isVideoPlaying])

	const acceptCookies = () => {
		localStorage.setItem("cookiesAccepted", "true");
		setShowCookies(false);
	};

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setIsSubmitting(true);

		const subject = encodeURIComponent(
			"Nueva solicitud de acceso anticipado - Mylos",
		);
		const body = encodeURIComponent(`
Nombre: ${formData.name}
Email: ${formData.email}
Empresa: ${formData.business}
Web: ${formData.website || "No proporcionada"}
Motivo: ${formData.reason}
    `);

		window.location.href = `mailto:tomasgilamoedo@gmail.com?subject=${subject}&body=${body}`;

		setTimeout(() => {
			setIsSubmitting(false);
			setFormSubmitted(true);
		}, 500);
	};

	const handleInputChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
	) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	const canProceedStep1 = formData.name && formData.email && formData.business;
	const canProceedStep2 = formData.reason;

	return (
		<div className="min-h-screen bg-background">
			<Header />

			<AnimatePresence>
				{showCookies && (
					<motion.div
						initial={{ y: 100, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						exit={{ y: 100, opacity: 0 }}
						transition={{ duration: 0.4, ease: [0.25, 0.4, 0.25, 1] }}
						className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6"
					>
						<div className="max-w-4xl mx-auto bg-white border border-border rounded-2xl shadow-2xl p-6 md:p-8">
							<div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6">
								<div className="flex items-center gap-3 shrink-0">
									<div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
										<Cookie className="w-5 h-5 text-primary" />
									</div>
								</div>
								<div className="flex-1">
									<h4 className="font-semibold text-foreground mb-1">
										Usamos cookies
									</h4>
									<p className="text-sm text-muted-foreground leading-relaxed">
										Utilizamos cookies para mejorar tu experiencia de navegación
										y analizar el uso del sitio. Al continuar navegando, aceptás
										nuestra{" "}
										<Link
											href="/politicas-de-privacidad"
											className="text-primary hover:underline"
										>
											Política de privacidad
										</Link>
										.
									</p>
								</div>
								<div className="flex gap-3 shrink-0 w-full md:w-auto">
									{/* CHANGE: Added motion.div wrapper to Rechazar button for consistent hover/tap states */}
									<motion.div
										whileHover={{ scale: 1.03 }}
										whileTap={{ scale: 0.98 }}
										className="flex-1 md:flex-none"
									>
										<Button
											variant="outline"
											size="sm"
											onClick={() => setShowCookies(false)}
											className="w-full cursor-pointer"
										>
											Rechazar
										</Button>
									</motion.div>
									<motion.div
										whileHover={{ scale: 1.03 }}
										whileTap={{ scale: 0.98 }}
										className="flex-1 md:flex-none"
									>
										<Button
											size="sm"
											onClick={acceptCookies}
											className="w-full cursor-pointer"
										>
											Aceptar cookies
										</Button>
									</motion.div>
								</div>
							</div>
						</div>
					</motion.div>
				)}
			</AnimatePresence>

			{/* Hero Section */}
			<section className="container mx-auto px-4 py-16 md:py-24">
				<div className="max-w-6xl mx-auto space-y-12">
					<div className="text-center space-y-8">
						<div className="space-y-4">
							<motion.h2
								initial="hidden"
								animate="visible"
								variants={heroFadeIn}
								className="text-4xl md:text-6xl font-bold tracking-tight text-balance"
							>
								<span className="relative inline-block">
									Vendé
									<motion.span
										className="absolute bottom-1 left-0 h-[3px] bg-primary rounded-full"
										initial={{ width: 0 }}
										animate={{ width: "100%" }}
										transition={{ delay: 0.8, duration: 0.5, ease: "easeOut" }}
									/>
								</span>
								,{" "}
								<span className="relative inline-block">
									facturá
									<motion.span
										className="absolute bottom-1 left-0 h-[3px] bg-primary rounded-full"
										initial={{ width: 0 }}
										animate={{ width: "100%" }}
										transition={{ delay: 1.0, duration: 0.5, ease: "easeOut" }}
									/>
								</span>{" "}
								y{" "}
								<span className="relative inline-block">
									controlá stock
									<motion.span
										className="absolute bottom-1 left-0 h-[3px] bg-primary rounded-full"
										initial={{ width: 0 }}
										animate={{ width: "100%" }}
										transition={{ delay: 1.2, duration: 0.5, ease: "easeOut" }}
									/>
								</span>{" "}
								sin perder de vista tu margen.
							</motion.h2>

							<motion.p
								initial="hidden"
								animate="visible"
								variants={{
									...heroFadeIn,
									visible: {
										...heroFadeIn.visible,
										transition: {
											...heroFadeIn.visible.transition,
											delay: 0.15,
										},
									},
								}}
								className="text-lg md:text-xl text-muted-foreground text-balance max-w-2xl mx-auto"
							>
								Centralizá tu negocio en un solo lugar. Conectá Mercado Libre,
								Shopify y TiendaNube. Facturá por AFIP y controlá tu stock real
								y presencial sin vueltas.
							</motion.p>
						</div>

						<motion.div
							initial="hidden"
							animate="visible"
							variants={{
								...heroFadeIn,
								visible: {
									...heroFadeIn.visible,
									transition: { ...heroFadeIn.visible.transition, delay: 0.25 },
								},
							}}
							className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4"
						>
							<motion.div
								whileHover={{ scale: 1.03 }}
								whileTap={{ scale: 0.98 }}
							>
								<Button
									asChild
									size="lg"
									className="text-base gap-2 min-w-[200px]"
								>
									<a href="#beta">
										Prueba gratuita
										<ArrowRight className="w-4 h-4" />
									</a>
								</Button>
							</motion.div>
							<motion.div
								whileHover={{ scale: 1.03 }}
								whileTap={{ scale: 0.98 }}
							>
								<Button
									asChild
									size="lg"
									variant="outline"
									className="text-base min-w-[200px] bg-transparent"
								>
									<a
										href="https://wa.me/5491149796361"
										target="_blank"
										rel="noopener noreferrer"
									>
										Contactanos
									</a>
								</Button>
							</motion.div>
						</motion.div>
					</div>

					<div className="relative flex justify-center items-center gap-4 md:gap-6 py-8">
						{/* iPhone 1 - Ventas */}
						<motion.div
							custom={0}
							initial="hidden"
							animate="visible"
							variants={phoneVariants}
							className={`relative w-[140px] sm:w-[200px] md:w-[260px] transition-all duration-500 ${activePhone === 0 ? "scale-105 z-10" : "scale-95 opacity-50"}`}
						>
							<div
								className={`relative bg-black rounded-[2.5rem] md:rounded-[3rem] p-2 md:p-3 transition-all duration-500 ${activePhone === 0 ? "ring-4 ring-primary ring-offset-4 shadow-[0_25px_60px_-12px_rgba(0,0,0,0.5)]" : "shadow-xl"}`}
							>
								{/* Notch */}
								<div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 md:w-32 h-6 md:h-7 bg-black rounded-b-2xl z-10" />
								{/* Screen */}
								<div className="relative bg-gray-100 rounded-[2rem] md:rounded-[2.5rem] overflow-hidden aspect-[9/19.5]">
									<Image
										src="/images/venta.jpeg"
										alt="Mylos Venta Screen"
										fill
										className="object-contain"
									/>
								</div>
							</div>
							<motion.p
								className={`text-center text-xs md:text-sm mt-3 font-medium transition-all duration-300 ${activePhone === 0 ? "text-primary scale-110" : "text-muted-foreground"}`}
							>
								Ventas
							</motion.p>
						</motion.div>

						{/* iPhone 2 - Dashboard (Center, slightly larger) */}
						<motion.div
							custom={1}
							initial="hidden"
							animate="visible"
							variants={phoneVariants}
							className={`relative w-[160px] sm:w-[220px] md:w-[280px] -my-4 transition-all duration-500 ${activePhone === 1 ? "scale-105 z-10" : "scale-95 opacity-50"}`}
						>
							<div
								className={`relative bg-black rounded-[2.5rem] md:rounded-[3rem] p-2 md:p-3 transition-all duration-500 ${activePhone === 1 ? "ring-4 ring-primary ring-offset-4 shadow-[0_30px_70px_-12px_rgba(0,0,0,0.5)]" : "shadow-xl"}`}
							>
								{/* Notch */}
								<div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 md:w-32 h-6 md:h-7 bg-black rounded-b-2xl z-10" />
								{/* Screen */}
								<div className="relative bg-gray-100 rounded-[2rem] md:rounded-[2.5rem] overflow-hidden aspect-[9/19.5]">
									<Image
										src="/images/dashboard-new.png"
										alt="Mylos Dashboard Screen"
										fill
										className="object-contain"
										priority
									/>
								</div>
							</div>
							<motion.p
								className={`text-center text-xs md:text-sm mt-3 font-medium transition-all duration-300 ${activePhone === 1 ? "text-primary scale-110" : "text-muted-foreground"}`}
							>
								Dashboard
							</motion.p>
						</motion.div>

						{/* iPhone 3 - Productos */}
						<motion.div
							custom={2}
							initial="hidden"
							animate="visible"
							variants={phoneVariants}
							className={`relative w-[140px] sm:w-[200px] md:w-[260px] transition-all duration-500 ${activePhone === 2 ? "scale-105 z-10" : "scale-95 opacity-50"}`}
						>
							<div
								className={`relative bg-black rounded-[2.5rem] md:rounded-[3rem] p-2 md:p-3 transition-all duration-500 ${activePhone === 2 ? "ring-4 ring-primary ring-offset-4 shadow-[0_25px_60px_-12px_rgba(0,0,0,0.5)]" : "shadow-xl"}`}
							>
								{/* Notch */}
								<div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 md:w-32 h-6 md:h-7 bg-black rounded-b-2xl z-10" />
								{/* Screen */}
								<div className="relative bg-gray-100 rounded-[2rem] md:rounded-[2.5rem] overflow-hidden aspect-[9/19.5]">
									<Image
										src={productosPhone}
										alt="Mylos Productos Screen"
										fill
										className="object-contain"
									/>
								</div>
							</div>
							<motion.p
								className={`text-center text-xs md:text-sm mt-3 font-medium transition-all duration-300 ${activePhone === 2 ? "text-primary scale-110" : "text-muted-foreground"}`}
							>
								Productos
							</motion.p>
						</motion.div>

						<div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
							{[0, 1, 2].map((i) => (
								<button
									type="button"
									key={i}
									onClick={() => setActivePhone(i)}
									className={`w-2 h-2 rounded-full transition-all duration-300 ${activePhone === i ? "bg-primary w-6" : "bg-muted-foreground/30"}`}
								/>
							))}
						</div>
					</div>
				</div>
			</section>

			{/* Integrations Section */}
			<section className="bg-white border-b border-border py-16 md:py-20">
				<div className="max-w-6xl mx-auto px-6">
					<p className="text-sm font-medium text-muted-foreground text-center mb-12">
						Integrado con
					</p>

					<div className="flex flex-col md:flex-row flex-wrap justify-center items-center gap-10 md:gap-16 lg:gap-24">
						<div className="opacity-90 hover:opacity-100 hover:scale-105 transition-all duration-200">
							<Image
								src={tiendanubeLogo}
								alt="TiendaNube Logo"
								width={120}
								height={64}
								className="h-12 md:h-16 w-auto"
							/>
						</div>

						<div className="opacity-90 hover:opacity-100 hover:scale-105 transition-all duration-200">
							<Image
								src={afipLogo}
								alt="AFIP Logo"
								width={160}
								height={80}
								className="h-14 md:h-20 w-auto"
							/>
						</div>

						<div className="opacity-90 hover:opacity-100 hover:scale-105 transition-all duration-200">
							<Image
								src={mercadoLibreLogo}
								alt="MercadoLibre Logo"
								width={160}
								height={64}
								className="h-12 md:h-16 w-auto"
							/>
						</div>

						<div className="opacity-90 hover:opacity-100 hover:scale-105 transition-all duration-200">
							<Image
								src={shopifyLogo}
								alt="Shopify Logo"
								width={140}
								height={56}
								className="h-10 md:h-14 w-auto"
							/>
						</div>
					</div>
				</div>
			</section>

			{/* Pain Points Section */}
			<section className="bg-[oklch(0.975_0_0_)] py-20 px-6">
				<div className="max-w-[1100px] mx-auto">
					<motion.h3
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, margin: "-100px" }}
						variants={scrollFadeIn}
						className="text-3xl md:text-4xl font-bold text-center mb-12"
					>
						¿Te suena familiar?
					</motion.h3>

					<div className="grid gap-6 md:grid-cols-3">
						<motion.div
							custom={0}
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true, margin: "-50px" }}
							variants={cardVariants}
							className="bg-white border border-[oklch(0.90_0_0)] rounded-xl p-8 shadow-sm"
						>
							<div className="w-10 h-10 rounded-full bg-[oklch(0.93_0_0)] flex items-center justify-center mb-4">
								<Table className="w-5 h-5 text-primary" />
							</div>
							<h4 className="text-lg font-semibold mb-2">Excel infinito</h4>
							<p className="text-sm text-muted-foreground leading-relaxed">
								Planillas que nadie entiende, datos duplicados, fórmulas rotas.
								Horas perdidas actualizando a mano.
							</p>
						</motion.div>

						<motion.div
							custom={1}
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true, margin: "-50px" }}
							variants={cardVariants}
							className="bg-white border border-[oklch(0.90_0_0)] rounded-xl p-8 shadow-sm"
						>
							<div className="w-10 h-10 rounded-full bg-[oklch(0.93_0_0)] flex items-center justify-center mb-4">
								<HelpCircle className="w-5 h-5 text-primary" />
							</div>
							<h4 className="text-lg font-semibold mb-2">
								¿Cuánto gané este mes?
							</h4>
							<p className="text-sm text-muted-foreground leading-relaxed">
								Sabés lo que facturaste, pero no tu ganancia real después de
								costos, comisiones y envíos.
							</p>
						</motion.div>

						<motion.div
							custom={2}
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true, margin: "-50px" }}
							variants={cardVariants}
							className="bg-white border border-[oklch(0.90_0_0)] rounded-xl p-8 shadow-sm"
						>
							<div className="w-10 h-10 rounded-full bg-[oklch(0.93_0_0)] flex items-center justify-center mb-4">
								<Shuffle className="w-5 h-5 text-primary" />
							</div>
							<h4 className="text-lg font-semibold mb-2">
								Canales por todos lados
							</h4>
							<p className="text-sm text-muted-foreground leading-relaxed">
								TiendaNube, Mercado Libre, Shopify, WhatsApp e Instagram. Cada
								venta en un lugar distinto, imposible tener el panorama
								completo.
							</p>
						</motion.div>
					</div>

					<motion.div
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
						variants={scrollFadeIn}
						className="flex justify-center mt-10"
					>
						<motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
							<Button asChild size="lg" className="text-base gap-2">
								<a href="#beta">
									Quiero ordenar mi negocio
									<ArrowRight className="w-4 h-4" />
								</a>
							</Button>
						</motion.div>
					</motion.div>
				</div>
			</section>

			{/* Funcionalidades Section */}
			<section id="funcionalidades" className="bg-white py-24 px-6">
				<div className="max-w-[900px] mx-auto">
					<motion.div
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, margin: "-100px" }}
						variants={scrollFadeIn}
						className="text-center mb-16"
					>
						<h2
							className="text-3xl md:text-4xl font-bold mb-8 text-balance"
							style={{ letterSpacing: "-0.02em" }}
						>
							El ERP cloud pensado para emprendedores, monotributistas y
							pequeños comercios que quieren ahorrar tiempo y trabajar mejor.
						</h2>
						<p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-balance max-w-[720px] mx-auto mb-4">
							Facturá en segundos, organizá tareas, gestioná documentos y
							automatizá procesos desde una sola plataforma.
						</p>
						<p className="text-lg md:text-xl leading-relaxed text-balance max-w-[720px] mx-auto font-semibold text-foreground">
							Menos esfuerzo operativo, más foco en hacer crecer tu negocio.
						</p>
					</motion.div>

					<div className="grid md:grid-cols-2 gap-x-16 gap-y-14 md:text-left text-center">
						<motion.div
							custom={0}
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true, margin: "-50px" }}
							variants={cardVariants}
							className="space-y-3"
						>
							<div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center mb-4 md:mx-0 mx-auto">
								<ShoppingCart className="w-6 h-6 text-white" />
							</div>
							<h4 className="text-lg font-semibold">Ventas unificadas</h4>
							<p className="text-muted-foreground leading-relaxed">
								WhatsApp, TiendaNube, Mercado Libre, Shopify, Instagram,
								mostrador. Todo en una sola vista, sin importar dónde vendas.
							</p>
						</motion.div>

						<motion.div
							custom={1}
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true, margin: "-50px" }}
							variants={cardVariants}
							className="space-y-3"
						>
							<div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center mb-4 md:mx-0 mx-auto">
								<TrendingUp className="w-6 h-6 text-white" />
							</div>
							<h4 className="text-lg font-semibold">
								Margen real, no facturación
							</h4>
							<p className="text-muted-foreground leading-relaxed">
								Costos de producto, comisiones, envíos. Sabé exactamente cuánto
								te queda en el bolsillo.
							</p>
						</motion.div>

						<motion.div
							custom={2}
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true, margin: "-50px" }}
							variants={cardVariants}
							className="space-y-3"
						>
							<div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center mb-4 md:mx-0 mx-auto">
								<FileText className="w-6 h-6 text-white" />
							</div>
							<h4 className="text-lg font-semibold">
								Facturación AFIP integrada
							</h4>
							<p className="text-muted-foreground leading-relaxed">
								Factura A, B y C con un click. Conectado directo con AFIP, sin
								sistemas externos.
							</p>
						</motion.div>

						<motion.div
							custom={3}
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true, margin: "-50px" }}
							variants={cardVariants}
							className="space-y-3"
						>
							<div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center mb-4 md:mx-0 mx-auto">
								<Package className="w-6 h-6 text-white" />
							</div>
							<h4 className="text-lg font-semibold">Stock sincronizado</h4>
							<p className="text-muted-foreground leading-relaxed">
								¿Vendiste en TiendaNube? ¿En MercadoLibre? ¿En Shopify? Se
								actualiza automáticamente. Sin planillas, sin errores.
							</p>
						</motion.div>
					</div>
				</div>
			</section>

			{/* Desktop Mockup Section */}
			<section className="bg-[oklch(0.975_0_0)] py-20 px-6">
				<div className="max-w-5xl mx-auto">
					<h3 className="text-2xl md:text-3xl font-bold text-center mb-10">
						Así de simple
					</h3>
					<div className="relative mx-auto">
						{/* Laptop frame */}
						<div className="relative">
							{/* Screen bezel */}
							<div
								className="relative bg-[#1a1a1a] rounded-t-2xl p-2 md:p-3"
								style={{
									boxShadow: "0 25px 60px -12px rgba(0,0,0,0.25)",
								}}
							>
								<div
									className="relative bg-black rounded-lg overflow-hidden"
									style={{ aspectRatio: "16/9" }}
								>
									{/* CHANGE: Removed autoPlay, added controls attribute for native video controls */}
									<video
										ref={videoRef}
										src="/images/video-mockup-desktop.mp4"
										className="w-full h-full"
										muted={isVideoMuted}
										loop
										playsInline
										preload="auto"
										controls
									/>
								</div>
							</div>
							{/* Laptop base */}
							<div className="relative h-2 md:h-3 bg-gradient-to-b from-[#2a2a2a] to-[#1a1a1a] rounded-b-xl">
								<div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-b from-[#3a3a3a] to-transparent" />
							</div>
							{/* Laptop bottom part */}
							<div
								className="h-1 md:h-2 bg-[#1a1a1a] mx-auto rounded-b-lg"
								style={{
									width: "calc(100% - 100px)",
									boxShadow: "0 5px 15px -3px rgba(0,0,0,0.3)",
								}}
							/>
						</div>
					</div>
				</div>
			</section>

			{/* Timeline Section - Acceso Anticipado */}
			<section className="bg-white py-24 px-6 border-t border-border">
				<div className="max-w-[900px] mx-auto">
					<motion.div
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, margin: "-100px" }}
						variants={scrollFadeIn}
						className="text-center mb-16"
					>
						<h3 className="text-2xl md:text-3xl font-bold mb-4">
							¿Cómo funciona el acceso anticipado?
						</h3>
						<p className="text-muted-foreground">
							Un proceso simple para que empieces a usar Mylos
						</p>
					</motion.div>

					<div className="relative">
						{/* Timeline line */}
						<div className="hidden md:block absolute top-8 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

						<div className="grid md:grid-cols-4 gap-8 md:gap-4">
							{timelineSteps.map((step, i) => (
								<motion.div
									key={step.title}
									custom={i}
									initial="hidden"
									whileInView="visible"
									viewport={{ once: true, margin: "-50px" }}
									variants={{
										hidden: { opacity: 0, y: 30 },
										visible: {
											opacity: 1,
											y: 0,
											transition: {
												duration: 0.5,
												delay: i * 0.15,
												ease: [0.25, 0.4, 0.25, 1],
											},
										},
									}}
									className="flex flex-col items-center text-center"
								>
									<div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 relative z-10">
										<step.icon className="w-7 h-7 text-primary" />
									</div>
									<span className="text-xs font-bold text-primary mb-1">
										Paso {i + 1}
									</span>
									<h4 className="font-semibold mb-2">{step.title}</h4>
									<p className="text-sm text-muted-foreground max-w-[180px]">
										{step.description}
									</p>
								</motion.div>
							))}
						</div>
					</div>
				</div>
			</section>

			{/* Testimonials Section */}
			<section id="testimonios" className="bg-[oklch(0.975_0_0)] py-24 px-6">
				<div className="max-w-[1100px] mx-auto">
					<motion.div
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, margin: "-100px" }}
						variants={scrollFadeIn}
						className="text-center mb-16"
					>
						<h3 className="text-3xl md:text-4xl font-bold mb-4">
							Lo que dicen nuestros usuarios
						</h3>
						<p className="text-lg text-muted-foreground max-w-[600px] mx-auto">
							Comercios reales que transformaron su gestión con Mylos
						</p>
					</motion.div>

					<div className="grid md:grid-cols-3 gap-6">
						<motion.div
							custom={0}
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true, margin: "-50px" }}
							variants={cardVariants}
							className="bg-white border border-[oklch(0.90_0_0)] rounded-xl p-8"
						>
							<p className="text-base text-foreground leading-relaxed mb-6">
								"Antes perdía horas actualizando planillas. Ahora tengo
								visibilidad total de mi negocio en tiempo real. No vuelvo
								atrás."
							</p>
							<div className="flex items-center gap-3">
								<div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
									<span className="text-sm font-semibold text-primary">D</span>
								</div>
								<div>
									<p className="text-sm font-semibold">Debora</p>
									<p className="text-xs text-muted-foreground">
										Poupee, Buenos Aires
									</p>
								</div>
							</div>
						</motion.div>

						<motion.div
							custom={1}
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true, margin: "-50px" }}
							variants={cardVariants}
							className="bg-white border border-[oklch(0.90_0_0)] rounded-xl p-8"
						>
							<p className="text-base text-foreground leading-relaxed mb-6">
								"La integración con TiendaNube y AFIP fue inmediata. En una
								semana ya tenía todo funcionando. Cambió completamente cómo
								opero."
							</p>
							<div className="flex items-center gap-3">
								<div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
									<span className="text-sm font-semibold text-primary">E</span>
								</div>
								<div>
									<p className="text-sm font-semibold">Eliana</p>
									<p className="text-xs text-muted-foreground">
										Lumina, Buenos Aires
									</p>
								</div>
							</div>
						</motion.div>

						<motion.div
							custom={2}
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true, margin: "-50px" }}
							variants={cardVariants}
							className="bg-white border border-[oklch(0.90_0_0)] rounded-xl p-8"
						>
							<p className="text-base text-foreground leading-relaxed mb-6">
								"Hoy sé exactamente cuánto gano. Tener el margen real por
								producto me dio control total sobre mi negocio."
							</p>
							<div className="flex items-center gap-3">
								<div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
									<span className="text-sm font-semibold text-primary">V</span>
								</div>
								<div>
									<p className="text-sm font-semibold">Viviana</p>
									<p className="text-xs text-muted-foreground">
										Joyeria, Buenos Aires
									</p>
								</div>
							</div>
						</motion.div>
					</div>
				</div>
			</section>

			{/* FAQ Section */}
			<section id="faq" className="bg-white py-24 px-6">
				<div className="max-w-[700px] mx-auto">
					<motion.h2
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, margin: "-100px" }}
						variants={scrollFadeIn}
						className="text-3xl font-semibold text-center mb-12"
						style={{ letterSpacing: "-0.02em" }}
					>
						Preguntas frecuentes
					</motion.h2>

					<Accordion
						type="single"
						collapsible
						className="border border-border rounded-xl overflow-hidden"
					>
						<AccordionItem
							value="item-1"
							className="border-b border-border last:border-b-0"
						>
							<AccordionTrigger className="px-6 py-5 hover:bg-primary/5 transition-colors duration-150 text-base font-medium text-left">
								¿Puedo probarlo gratis?
							</AccordionTrigger>
							<AccordionContent className="px-6 pb-5 pt-0 text-base text-muted-foreground leading-relaxed">
								Sí, la prueba estará disponible hasta que cerremos la etapa
								Beta. Acompañanos en la creación del producto y sé parte del
								programa de early access, con beneficios exclusivos de por vida.
							</AccordionContent>
						</AccordionItem>

						<AccordionItem
							value="item-2"
							className="border-b border-border last:border-b-0"
						>
							<AccordionTrigger className="px-6 py-5 hover:bg-primary/5 transition-colors duration-150 text-base font-medium text-left">
								¿Con qué plataformas se integra?
							</AccordionTrigger>
							<AccordionContent className="px-6 pb-5 pt-0 text-base text-muted-foreground leading-relaxed">
								Sí, Mylos se integra automáticamente con TiendaNube, Mercado
								Libre y Shopify, además de permitir ventas presenciales en
								mostrador.
							</AccordionContent>
						</AccordionItem>

						<AccordionItem
							value="item-3"
							className="border-b border-border last:border-b-0"
						>
							<AccordionTrigger className="px-6 py-5 hover:bg-primary/5 transition-colors duration-150 text-base font-medium text-left">
								¿Cómo funciona la facturación con AFIP?
							</AccordionTrigger>
							<AccordionContent className="px-6 pb-5 pt-0 text-base text-muted-foreground leading-relaxed">
								Mylos se conecta directamente con AFIP para que puedas emitir
								facturas A, B y C con un solo clic, sin necesidad de entrar a la
								web de AFIP ni usar sistemas externos.
							</AccordionContent>
						</AccordionItem>

						<AccordionItem
							value="item-4"
							className="border-b border-border last:border-b-0"
						>
							<AccordionTrigger className="px-6 py-5 hover:bg-primary/5 transition-colors duration-150 text-base font-medium text-left">
								¿Es difícil de configurar?
							</AccordionTrigger>
							<AccordionContent className="px-6 pb-5 pt-0 text-base text-muted-foreground leading-relaxed">
								Para nada. Creamos Mylos para que puedas empezar en minutos. No
								necesitas conocimientos contables ni técnicos previos.
							</AccordionContent>
						</AccordionItem>

						<AccordionItem
							value="item-5"
							className="border-b border-border last:border-b-0"
						>
							<AccordionTrigger className="px-6 py-5 hover:bg-primary/5 transition-colors duration-150 text-base font-medium text-left">
								¿Qué pasa con mis datos si cancelo?
							</AccordionTrigger>
							<AccordionContent className="px-6 pb-5 pt-0 text-base text-muted-foreground leading-relaxed">
								Podés exportar todos tus datos en cualquier momento. No hay
								retención ni complicaciones.
							</AccordionContent>
						</AccordionItem>

						<AccordionItem
							value="item-6"
							className="border-b border-border last:border-b-0"
						>
							<AccordionTrigger className="px-6 py-5 hover:bg-primary/5 transition-colors duration-150 text-base font-medium text-left">
								¿Funciona en múltiples sucursales?
							</AccordionTrigger>
							<AccordionContent className="px-6 pb-5 pt-0 text-base text-muted-foreground leading-relaxed">
								Sí, podés gestionar inventario y ventas en múltiples ubicaciones
								desde un solo panel.
							</AccordionContent>
						</AccordionItem>

						<AccordionItem
							value="item-7"
							className="border-b border-border last:border-b-0"
						>
							<AccordionTrigger className="px-6 py-5 hover:bg-primary/5 transition-colors duration-150 text-base font-medium text-left">
								¿Necesito experiencia contable?
							</AccordionTrigger>
							<AccordionContent className="px-6 pb-5 pt-0 text-base text-muted-foreground leading-relaxed">
								No. Mylos está diseñado para emprendedores, no para contadores.
								Todo es visual e intuitivo.
							</AccordionContent>
						</AccordionItem>
					</Accordion>

					<motion.div
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
						variants={scrollFadeIn}
						className="mt-12 text-center p-8 bg-[oklch(0.975_0_0)] rounded-xl border border-border"
					>
						<h3 className="text-xl font-semibold mb-3">¿Tenés más dudas?</h3>
						<p className="text-muted-foreground mb-6">
							Hablá con nosotros directamente y te ayudamos a resolver cualquier
							pregunta
						</p>
						<motion.a
							href="https://wa.me/5491149796361"
							target="_blank"
							rel="noopener noreferrer"
							className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-[10px] font-semibold hover:bg-primary/90 transition-colors cursor-pointer"
							whileHover={{ scale: 1.02 }}
							whileTap={{ scale: 0.98 }}
						>
							Contactanos por WhatsApp
						</motion.a>
					</motion.div>
				</div>
			</section>

			{/* Beta Tester Form Section */}
			<section id="beta" className="bg-[oklch(0.975_0_0)] py-24 px-6">
				<div className="max-w-[600px] mx-auto">
					<motion.div
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
						variants={scrollFadeIn}
						className="text-center mb-12"
					>
						<h2
							className="text-3xl font-semibold tracking-tight mb-4"
							style={{ letterSpacing: "-0.02em" }}
						>
							Sé parte del lanzamiento
						</h2>
						<p className="text-lg text-muted-foreground">
							Sé parte de los elegidos: Sumate al acceso anticipado de Mylos y
							obtené beneficios de por vida por ser de los primeros.
						</p>
					</motion.div>

					<div className="bg-white border border-border rounded-xl p-8 md:p-10 shadow-[0_4px_24px_rgba(0,0,0,0.06)]">
						{!formSubmitted && (
							<div className="mb-8">
								<div className="flex items-center justify-between mb-2">
									<span className="text-xs font-medium text-muted-foreground">
										Paso {formStep} de 2
									</span>
									<span className="text-[10px] sm:text-xs font-medium text-primary">
										Early access
									</span>
								</div>
								<div className="h-2 bg-muted rounded-full overflow-hidden">
									<motion.div
										className="h-full bg-primary rounded-full"
										initial={{ width: "0%" }}
										animate={{ width: formStep === 1 ? "50%" : "100%" }}
										transition={{ duration: 0.3, ease: "easeOut" }}
									/>
								</div>
							</div>
						)}

						<AnimatePresence mode="wait">
							{formSubmitted ? (
								<motion.div
									key="success"
									initial={{ opacity: 0, scale: 0.9 }}
									animate={{ opacity: 1, scale: 1 }}
									exit={{ opacity: 0, scale: 0.9 }}
									className="text-center py-12"
								>
									<motion.div
										initial={{ scale: 0 }}
										animate={{ scale: 1 }}
										transition={{
											delay: 0.2,
											type: "spring",
											stiffness: 200,
											damping: 15,
										}}
										className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
									>
										<motion.div
											initial={{ pathLength: 0 }}
											animate={{ pathLength: 1 }}
											transition={{ delay: 0.5, duration: 0.5 }}
										>
											<Check
												className="w-10 h-10 text-green-600"
												strokeWidth={3}
											/>
										</motion.div>
									</motion.div>
									<motion.h3
										initial={{ opacity: 0, y: 10 }}
										animate={{ opacity: 1, y: 0 }}
										transition={{ delay: 0.6 }}
										className="text-2xl font-semibold mb-2"
									>
										¡Solicitud enviada!
									</motion.h3>
									<motion.p
										initial={{ opacity: 0, y: 10 }}
										animate={{ opacity: 1, y: 0 }}
										transition={{ delay: 0.7 }}
										className="text-muted-foreground mb-6"
									>
										Gracias por tu interés en Mylos. Te contactaremos pronto.
									</motion.p>
									<motion.div
										initial={{ opacity: 0 }}
										animate={{ opacity: 1 }}
										transition={{ delay: 0.8 }}
									>
										<Button
											variant="outline"
											onClick={() => {
												setFormSubmitted(false);
												setFormStep(1);
												setFormData({
													name: "",
													email: "",
													business: "",
													website: "",
													reason: "",
												});
											}}
											className="cursor-pointer"
										>
											Enviar otra solicitud
										</Button>
									</motion.div>
								</motion.div>
							) : (
								<form onSubmit={handleSubmit}>
									<AnimatePresence mode="wait">
										{formStep === 1 ? (
											<motion.div
												key="step1"
												initial={{ opacity: 0, x: -20 }}
												animate={{ opacity: 1, x: 0 }}
												exit={{ opacity: 0, x: -20 }}
												transition={{ duration: 0.3 }}
												className="space-y-6"
											>
												<div className="space-y-2">
													<Label htmlFor="name" className="text-sm font-medium">
														Nombre
													</Label>
													<Input
														id="name"
														name="name"
														type="text"
														placeholder="Tu nombre completo"
														className="h-11"
														value={formData.name}
														onChange={handleInputChange}
														required
													/>
												</div>

												<div className="space-y-2">
													<Label
														htmlFor="email"
														className="text-sm font-medium"
													>
														Correo
													</Label>
													<Input
														id="email"
														name="email"
														type="email"
														placeholder="tu@email.com"
														className="h-11"
														value={formData.email}
														onChange={handleInputChange}
														required
													/>
												</div>

												<div className="space-y-2">
													<Label
														htmlFor="business"
														className="text-sm font-medium"
													>
														Empresa / Emprendimiento
													</Label>
													<Input
														id="business"
														name="business"
														type="text"
														placeholder="Nombre de tu negocio"
														className="h-11"
														value={formData.business}
														onChange={handleInputChange}
														required
													/>
												</div>

												<div className="space-y-2">
													<Label
														htmlFor="website"
														className="text-sm font-medium"
													>
														Página web{" "}
														<span className="text-muted-foreground">
															(opcional)
														</span>
													</Label>
													<Input
														id="website"
														name="website"
														type="url"
														placeholder="https://tunegocio.com"
														className="h-11"
														value={formData.website}
														onChange={handleInputChange}
													/>
												</div>

												<motion.div
													whileHover={{ scale: 1.02 }}
													whileTap={{ scale: 0.98 }}
												>
													<Button
														type="button"
														size="lg"
														disabled={!canProceedStep1}
														onClick={() => setFormStep(2)}
														className="w-full py-6 text-base font-semibold bg-primary hover:bg-primary/90 text-white rounded-[10px] cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
													>
														Continuar
														<ArrowRight className="ml-2 h-5 w-5" />
													</Button>
												</motion.div>
											</motion.div>
										) : (
											<motion.div
												key="step2"
												initial={{ opacity: 0, x: 20 }}
												animate={{ opacity: 1, x: 0 }}
												exit={{ opacity: 0, x: 20 }}
												transition={{ duration: 0.3 }}
												className="space-y-6"
											>
												<button
													type="button"
													onClick={() => setFormStep(1)}
													className="flex items-center text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer"
												>
													<ArrowLeft className="mr-1 h-4 w-4" />
													Volver
												</button>

												{/* <div className="space-y-2">
													<Label
														htmlFor="reason"
														className="text-sm font-medium"
													>
														¿Por qué querés probar Mylos?
													</Label>
													<Textarea
														id="reason"
														name="reason"
														placeholder="Contanos brevemente qué problema querés resolver con Mylos..."
														className="min-h-[150px] resize-none"
														value={formData.reason}
														onChange={handleInputChange}
														required
													/>
												</div> */}

												<div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
													<p className="text-sm text-muted-foreground">
														<span className="font-medium text-foreground">
															Resumen de tu solicitud:
														</span>
														<br />
														{formData.name} · {formData.email}
														<br />
														{formData.business}
													</p>
												</div>

												<motion.div
													whileHover={{ scale: 1.02 }}
													whileTap={{ scale: 0.98 }}
												>
													<Button
														type="submit"
														size="lg"
														disabled={!canProceedStep2 || isSubmitting}
														className="w-full py-6 text-base font-semibold bg-primary hover:bg-primary/90 text-white rounded-[10px] cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
													>
														{isSubmitting ? "Enviando..." : "Solicitar acceso"}
													</Button>
												</motion.div>
											</motion.div>
										)}
									</AnimatePresence>
								</form>
							)}
						</AnimatePresence>
					</div>
				</div>
			</section>

			<Footer />
		</div>
	);
}
