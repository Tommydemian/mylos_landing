"use client";

import type React from "react";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import mylosLogo from "@/public/images/mylos-logo.svg";

export function Header() {
	const [isScrolled, setIsScrolled] = useState(false);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const router = useRouter();
	const pathname = usePathname();

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 10);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const handleNavClick = (
		e: React.MouseEvent<HTMLAnchorElement>,
		sectionId: string,
	) => {
		e.preventDefault();
		setIsMobileMenuOpen(false);

		if (pathname === "/") {
			// Si estamos en la página principal, hacer scroll directamente
			const element = document.getElementById(sectionId);
			if (element) {
				element.scrollIntoView({ behavior: "smooth" });
			}
		} else {
			// Si estamos en otra página, navegar a la principal y luego al hash
			router.push(`/#${sectionId}`);
		}
	};

	return (
		<>
			<motion.header
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.3, ease: "easeOut" }}
				className={`sticky top-0 z-50 transition-all duration-150 ease-out ${
					isScrolled
						? "bg-background/80 backdrop-blur-xl border-b border-border"
						: "bg-transparent"
				}`}
			>
				<div className="mx-auto max-w-[1280px] px-6 md:px-6">
					<nav className="flex h-16 items-center justify-between">
						<div className="flex items-center">
							<Image src={mylosLogo} alt="Mylos" width={60} height={60} />
							<h1 className="m-0 font-bold text-base">MYLOS</h1>
						</div>

						{/* Desktop Links */}
						<div className="hidden items-center gap-8 md:flex">
							<Link
								href="/#funcionalidades"
								onClick={(e) => handleNavClick(e, "funcionalidades")}
								className="text-sm font-medium text-muted-foreground transition-colors duration-150 hover:text-primary cursor-pointer"
							>
								Funcionalidades
							</Link>
							<Link
								href="/#testimonios"
								onClick={(e) => handleNavClick(e, "testimonios")}
								className="text-sm font-medium text-muted-foreground transition-colors duration-150 hover:text-primary cursor-pointer"
							>
								Testimonios
							</Link>
							<Link
								href="/#faq"
								onClick={(e) => handleNavClick(e, "faq")}
								className="text-sm font-medium text-muted-foreground transition-colors duration-150 hover:text-primary cursor-pointer"
							>
								FAQ
							</Link>
							<Link
								href="/nosotros"
								className="text-sm font-medium text-muted-foreground transition-colors duration-150 hover:text-primary cursor-pointer"
							>
								Nosotros
							</Link>
						</div>

						{/* Desktop CTA */}
						<div className="hidden md:block">
							<motion.div
								whileHover={{ scale: 1.03 }}
								whileTap={{ scale: 0.98 }}
							>
								<Button
									variant="outline"
									size="sm"
									className="rounded-[10px] text-sm font-medium bg-transparent"
									asChild
								>
									<a
										href="https://talos-frontend-tau.vercel.app/login"
										target="_blank"
										rel="noopener noreferrer"
									>
										Acceder
									</a>
								</Button>
							</motion.div>
						</div>

						{/* Mobile Hamburger */}
						<button
							type="button"
							className="md:hidden text-muted-foreground"
							onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
							aria-label="Toggle menu"
						>
							{isMobileMenuOpen ? (
								<X className="h-6 w-6" />
							) : (
								<Menu className="h-6 w-6" />
							)}
						</button>
					</nav>
				</div>
			</motion.header>

			{/* Mobile Menu */}
			{isMobileMenuOpen && (
				<div className="fixed inset-0 z-40 bg-background md:hidden">
					<div className="flex h-full flex-col p-6 pt-20">
						<div className="flex flex-col space-y-0">
							<Link
								href="/#funcionalidades"
								className="border-b border-border py-3 text-base font-medium text-foreground cursor-pointer"
								onClick={(e) => handleNavClick(e, "funcionalidades")}
							>
								Funcionalidades
							</Link>
							<Link
								href="/#testimonios"
								className="border-b border-border py-3 text-base font-medium text-foreground cursor-pointer"
								onClick={(e) => handleNavClick(e, "testimonios")}
							>
								Testimonios
							</Link>
							<Link
								href="/#faq"
								className="border-b border-border py-3 text-base font-medium text-foreground cursor-pointer"
								onClick={(e) => handleNavClick(e, "faq")}
							>
								FAQ
							</Link>
							<Link
								href="/nosotros"
								className="border-b border-border py-3 text-base font-medium text-foreground cursor-pointer"
								onClick={() => setIsMobileMenuOpen(false)}
							>
								Nosotros
							</Link>
						</div>

						<div className="mt-auto pb-6">
							<Button
								className="w-full rounded-[10px] text-sm font-medium"
								asChild
							>
								<a
									href="https://talos-frontend-tau.vercel.app/login"
									target="_blank"
									rel="noopener noreferrer"
									onClick={() => setIsMobileMenuOpen(false)}
								>
									Acceder
								</a>
							</Button>
						</div>
					</div>
				</div>
			)}
		</>
	);
}
