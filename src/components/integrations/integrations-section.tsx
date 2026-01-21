import Image from "next/image";
import shopifyLogo from "@/public/images/shopify-logo.svg";
import tiendanubeLogo from "@/public/images/tiendanube-logo.svg";
import afipLogo from "@/public/images/afip-logo.png";
import mercadoLibreLogo from "@/public/images/mercado-libre-logo.png";

const integrations = [
	{ src: tiendanubeLogo, alt: "TiendaNube", height: "h-10 md:h-12" },
	{ src: afipLogo, alt: "AFIP", height: "h-12 md:h-14" },
	{ src: mercadoLibreLogo, alt: "MercadoLibre", height: "h-10 md:h-12" },
	{ src: shopifyLogo, alt: "Shopify", height: "h-8 md:h-10" },
];

export const IntegrationsSection = () => {
	return (
		<section className="bg-card border-b border-border py-10 md:py-12">
			<div className="max-w-4xl mx-auto px-6">
				<p className="text-sm font-medium text-muted-foreground text-center mb-6">
					Integrado con
				</p>

				<div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-16">
					{integrations.map((integration) => (
						<div
							key={integration.alt}
							className="flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity duration-200"
						>
							<Image
								src={integration.src}
								alt={`${integration.alt} Logo`}
								width={120}
								height={60}
								className={`${integration.height} w-auto`}
							/>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};
