import Image from "next/image";
import Link from "next/link";
import mylosLogo from "@/public/images/mylos-logo.svg";
import { Instagram, Linkedin, Youtube, Mail, Facebook } from "lucide-react";

const socialLinks = [
	{
		href: "https://www.instagram.com/mylos.app/",
		icon: Instagram,
		label: "Instagram",
	},
	// { href: "https://linkedin.com", icon: Linkedin, label: "LinkedIn" },
	{
		href: "https://www.youtube.com/@MylosApp",
		icon: Youtube,
		label: "YouTube",
	},
	{ href: "mailto:tomasgilamoedo@gmail.com", icon: Mail, label: "Email" },
	// { href: "https://facebook.com", icon: Facebook, label: "Facebook" },
];

const legalLinks = [
	{ href: "/terminos-de-uso", label: "Términos de uso" },
	{ href: "/politicas-de-calidad", label: "Políticas de calidad" },
	{ href: "/politicas-de-privacidad", label: "Políticas de privacidad" },
	{ href: "/seguridad", label: "Seguridad" },
];

export function Footer() {
	return (
		<footer className="bg-muted border-t border-border py-8 px-6">
			<div className="max-w-4xl mx-auto">
				<div className="flex flex-col items-center gap-6">
					<Image
						src={mylosLogo}
						alt="Mylos Logo"
						width={28}
						height={28}
						className="h-7 w-auto"
					/>

					<div className="flex items-center gap-3">
						{socialLinks.map((social) => (
							<a
								key={social.label}
								href={social.href}
								target={social.href.startsWith("mailto") ? undefined : "_blank"}
								rel={
									social.href.startsWith("mailto")
										? undefined
										: "noopener noreferrer"
								}
								className="text-muted-foreground hover:text-primary transition-colors"
								aria-label={social.label}
							>
								<social.icon className="h-4 w-4" />
							</a>
						))}
					</div>

					<div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs text-muted-foreground">
						{legalLinks.map((link, i) => (
							<Link
								key={link.href}
								href={link.href}
								className="hover:text-primary transition-colors"
							>
								{link.label}
							</Link>
						))}
					</div>

					<p className="text-xs text-muted-foreground/70">
						© 2026 Mylos. Todos los derechos reservados.
					</p>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
