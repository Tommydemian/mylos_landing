"use client";
import type React from "react";
import { motion } from "motion/react";
import Image from "next/image";
// Logos
import productosPhone from "@/public/images/productos.jpeg";
import salesPhone from "@/public/images/venta.jpeg";
import dashboardPhone from "@/public/images/dashboard.jpeg";
import { phoneVariants } from "@/lib/utils";

const phones = [
	{ src: salesPhone, alt: "Mylos Venta Screen", label: "Ventas" },
	{
		src: dashboardPhone,
		alt: "Mylos Dashboard Screen",
		label: "Dashboard",
		priority: true,
	},
	{ src: productosPhone, alt: "Mylos Productos Screen", label: "Productos" },
];

type PhonesProps = {
	activePhone: number;
	setActivePhone: React.Dispatch<React.SetStateAction<number>>;
};

export const Phones: React.FC<PhonesProps> = ({
	activePhone,
	setActivePhone,
}) => {
	return (
		<div className="relative justify-center items-center gap-3 md:gap-5 py-6 hidden md:flex">
			{phones.map((phone, i) => {
				const isCenter = i === 1;
				const isActive = activePhone === i;

				return (
					<motion.div
						key={phone.label}
						custom={i}
						initial="hidden"
						animate="visible"
						variants={phoneVariants}
						className={`relative transition-all duration-500 ${
							isCenter
								? "w-[150px] sm:w-[200px] md:w-[260px] -my-3"
								: "w-[130px] sm:w-[180px] md:w-[240px]"
						} ${isActive ? "scale-105 z-10" : "scale-95 opacity-50"}`}
					>
						<div
							className={`relative bg-black rounded-[2.5rem] md:rounded-[3rem] p-2 transition-all duration-500 ${
								isActive
									? "ring-2 ring-primary ring-offset-2 shadow-2xl"
									: "shadow-lg"
							}`}
						>
							<div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 md:w-28 h-5 md:h-6 bg-black rounded-b-xl z-10" />
							<div className="relative bg-muted rounded-[2rem] md:rounded-[2.5rem] overflow-hidden aspect-[9/19.5]">
								<Image
									src={phone.src}
									alt={phone.alt}
									fill
									className="object-contain"
									priority={phone.priority}
								/>
							</div>
						</div>
						<p
							className={`text-center text-xs mt-2 font-medium transition-all duration-300 ${
								isActive ? "text-primary" : "text-muted-foreground"
							}`}
						>
							{phone.label}
						</p>
					</motion.div>
				);
			})}

			<div className="absolute -bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5">
				{phones.map((phone, i) => (
					<button
						type="button"
						key={phone.label}
						onClick={() => setActivePhone(i)}
						className={`h-1.5 rounded-full transition-all duration-300 ${
							activePhone === i ? "bg-primary w-4" : "bg-border w-1.5"
						}`}
					/>
				))}
			</div>
		</div>
	);
};
