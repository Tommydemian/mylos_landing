import Image from "next/image";
import Link from "next/link";
import { Instagram, Linkedin, Youtube, Mail, Facebook } from "lucide-react";

export function Footer() {
	return (
		<footer className="bg-[oklch(0.975_0_0)] border-t border-border py-12 px-6">
			<div className="max-w-[1200px] mx-auto">
				<div className="flex flex-col md:flex-row justify-between items-center gap-6">
					<div className="flex items-center">
						<Image
							src="/mylos-logo.svg"
							alt="Mylos"
							width={32}
							height={32}
							className="h-8 w-auto"
						/>
					</div>

					<div className="flex items-center gap-4">
						<a
							href="https://instagram.com"
							target="_blank"
							rel="noopener noreferrer"
							className="text-muted-foreground hover:text-primary transition-colors"
							aria-label="Instagram"
						>
							<Instagram className="h-5 w-5" />
						</a>
						<a
							href="https://linkedin.com"
							target="_blank"
							rel="noopener noreferrer"
							className="text-muted-foreground hover:text-primary transition-colors"
							aria-label="LinkedIn"
						>
							<Linkedin className="h-5 w-5" />
						</a>
						<a
							href="https://youtube.com"
							target="_blank"
							rel="noopener noreferrer"
							className="text-muted-foreground hover:text-primary transition-colors"
							aria-label="YouTube"
						>
							<Youtube className="h-5 w-5" />
						</a>
						<a
							href="mailto:tomasgilamoedo@gmail.com"
							className="text-muted-foreground hover:text-primary transition-colors"
							aria-label="Email"
						>
							<Mail className="h-5 w-5" />
						</a>
						<a
							href="https://facebook.com"
							target="_blank"
							rel="noopener noreferrer"
							className="text-muted-foreground hover:text-primary transition-colors"
							aria-label="Facebook"
						>
							<Facebook className="h-5 w-5" />
						</a>
					</div>

					<div className="flex flex-wrap items-center justify-center gap-2 text-sm text-muted-foreground">
						<Link
							href="/terminos-de-uso"
							className="hover:text-primary transition-colors"
						>
							Términos de uso
						</Link>
						<span className="text-muted-foreground/40">•</span>
						<Link
							href="/politicas-de-calidad"
							className="hover:text-primary transition-colors"
						>
							Políticas de calidad
						</Link>
						<span className="text-muted-foreground/40">•</span>
						<Link
							href="/politicas-de-privacidad"
							className="hover:text-primary transition-colors"
						>
							Políticas de privacidad
						</Link>
						<span className="text-muted-foreground/40">•</span>
						<Link
							href="/seguridad"
							className="hover:text-primary transition-colors"
						>
							Seguridad
						</Link>
					</div>
				</div>

				<div className="text-center mt-8 text-sm text-muted-foreground">
					© 2026 Mylos. Todos los derechos reservados.
				</div>
			</div>
		</footer>
	);
}

export default Footer;
