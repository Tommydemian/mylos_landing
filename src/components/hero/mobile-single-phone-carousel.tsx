"use client";

import type React from "react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";

import productosPhone from "@/public/images/productos.jpeg";
import salesPhone from "@/public/images/venta.jpeg";
import dashboardPhone from "@/public/images/dashboard.jpeg";

type MobileSinglePhoneCarouselProps = {
	activePhone: number;
	setActivePhone: React.Dispatch<React.SetStateAction<number>>;
};

export const MobileSinglePhoneCarousel: React.FC<
	MobileSinglePhoneCarouselProps
> = ({ activePhone, setActivePhone }) => {
	return (
		<div className="relative md:hidden flex flex-col items-center py-8 m-0">
			<div className="relative w-[220px] overflow-visible">
				<AnimatePresence mode="wait">
					<motion.div
						key={activePhone}
						initial={{ opacity: 0, x: 50 }}
						animate={{ opacity: 1, x: 0 }}
						exit={{ opacity: 0, x: -50 }}
						transition={{ duration: 0.3 }}
						className="relative"
					>
						<div className="relative bg-black rounded-[2.5rem] p-2 ring-4 ring-primary ring-offset-4 shadow-[0_25px_60px_-12px_rgba(0,0,0,0.5)]">
							<div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-b-2xl z-10" />
							<div className="relative bg-gray-100 rounded-[2rem] overflow-hidden aspect-[9/19.5]">
								<Image
									src={
										[salesPhone, dashboardPhone, productosPhone][activePhone] ||
										"/placeholder.svg"
									}
									alt={
										[
											"Mylos Venta Screen",
											"Mylos Dashboard Screen",
											"Mylos Productos Screen",
										][activePhone]
									}
									fill
									className="object-contain"
								/>
							</div>
						</div>
						<p className="text-center text-sm mt-4 font-medium text-primary">
							{["Ventas", "Dashboard", "Productos"][activePhone]}
						</p>
					</motion.div>
				</AnimatePresence>
			</div>

			<div className="flex gap-2 mt-6">
				{[0, 1, 2].map((i) => (
					<button
						type="button"
						key={i}
						onClick={() => setActivePhone(i)}
						className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${activePhone === i ? "bg-primary w-6" : "bg-muted-foreground/30 w-2"}`}
					/>
				))}
			</div>
		</div>
	);
};
