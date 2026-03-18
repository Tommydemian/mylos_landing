"use client";

import { motion } from "motion/react";
import Image, { type StaticImageData } from "next/image";
import type { FC } from "react";

import luminalogo from "./lumina_logo.webp";
import hopelogo from "./hope_accesorios_logo.webp";
import taquarilogo from "./taquari_logo.webp";
import poupeelogo from "./poupee_logo.png";
import electrocanitaslogo from "./electrocanitas_logo.png";

// ─── Types ───────────────────────────────────────────────────────────────────

type Logo = {
	src: StaticImageData;
	alt: string;
	width: number;
	height: number;
};

// ─── Data ────────────────────────────────────────────────────────────────────

const logos: Logo[] = [
	{ src: luminalogo, alt: "Lumina logo", width: 200, height: 200 },
	{ src: hopelogo, alt: "Hope logo", width: 200, height: 200 },
	{ src: taquarilogo, alt: "Taquari logo", width: 200, height: 200 },
	{ src: poupeelogo, alt: "Poupée logo", width: 200, height: 200 },
	{
		src: electrocanitaslogo,
		alt: "Electrocañitas logo",
		width: 400,
		height: 400,
	},
];

// ─── Component ───────────────────────────────────────────────────────────────

type CarouselProps = {};

const Carousel: FC<CarouselProps> = ({}) => {
	// Duplicate logos for seamless infinite loop
	const duplicated = [...logos, ...logos];

	return (
		<section className="space-y-6">
			<h2 className="text-center text-lg font-medium text-muted-foreground">
				Nos eligen
			</h2>

			<div className="relative overflow-hidden">
				{/* Fade edges */}
				<div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-background to-transparent" />
				<div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-background to-transparent" />

				<motion.div
					className="flex items-center gap-12"
					animate={{ x: ["0%", "-50%"] }}
					transition={{
						x: {
							duration: 20,
							repeat: Number.POSITIVE_INFINITY,
							ease: "linear",
						},
					}}
				>
					{duplicated.map((logo, i) => (
						<div
							key={`${logo.alt}-${i}`}
							className="flex shrink-0 items-center justify-center"
						>
							<Image
								src={logo.src}
								alt={logo.alt}
								width={logo.width}
								height={logo.height}
								className="object-contain opacity-70 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0"
							/>
						</div>
					))}
				</motion.div>
			</div>
		</section>
	);
};

export { Carousel };
