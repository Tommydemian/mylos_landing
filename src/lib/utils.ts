import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export const heroFadeIn = {
	hidden: { opacity: 0, y: 30 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.6, ease: [0.25, 0.4, 0.25, 1] as const },
	},
};

export const phoneVariants = {
	hidden: { opacity: 0, y: 40, scale: 0.95 },
	visible: (i: number) => ({
		opacity: 1,
		y: 0,
		scale: 1,
		transition: {
			duration: 0.7,
			delay: 0.5 + i * 0.15,
			ease: [0.25, 0.4, 0.25, 1] as const,
		},
	}),
};

export const scrollFadeIn = {
	hidden: { opacity: 0, y: 30 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.6, ease: [0.25, 0.4, 0.25, 1] as const },
	},
};

export const cardVariants = {
	hidden: { opacity: 0, y: 40 },
	visible: (i: number) => ({
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.5,
			delay: i * 0.1,
			ease: [0.25, 0.4, 0.25, 1] as const,
		},
	}),
};
