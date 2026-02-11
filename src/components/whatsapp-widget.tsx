"use client";

import { useState, useEffect } from "react";
import { WhatsAppIcon } from "./icons/whatsapp";

const WHATSAPP_NUMBER = "54911149796361";
const DEFAULT_MESSAGE = "Hola! Me interesa saber más sobre Mylos 👋";

export const WhatsAppWidget = () => {
	const [showTooltip, setShowTooltip] = useState(false);
	const [dismissed, setDismissed] = useState(false);

	// Auto-show tooltip after 3s, auto-hide after 11s
	useEffect(() => {
		const show = setTimeout(() => setShowTooltip(true), 3000);
		const hide = setTimeout(() => setShowTooltip(false), 11000);
		return () => {
			clearTimeout(show);
			clearTimeout(hide);
		};
	}, []);

	const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(DEFAULT_MESSAGE)}`;

	return (
		<div className="wspp-widget z-[999] flex flex-col items-end gap-2">
			{/* Tooltip bubble */}
			{showTooltip && !dismissed && (
				<div className="wspp-tooltip relative bg-white rounded-xl shadow-lg border border-neutral-200/80 px-4 py-3 max-w-[220px] animate-in fade-in slide-in-from-bottom-2 duration-200">
					<button
						type="button"
						onClick={(e) => {
							e.stopPropagation();
							setDismissed(true);
						}}
						className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-neutral-100 border border-neutral-200 flex items-center justify-center text-neutral-400 hover:text-neutral-600 text-xs leading-none transition-colors"
						aria-label="Cerrar"
					>
						×
					</button>
					<p className="text-[13px] text-neutral-700 leading-snug">
						¿Dudas? Escribinos por WhatsApp 👋
					</p>
					{/* Triangle pointer */}
					<div className="absolute -bottom-[6px] right-5 w-3 h-3 bg-white border-b border-r border-neutral-200/80 rotate-45" />
				</div>
			)}

			{/* FAB button */}
			<a
				href={url}
				target="_blank"
				rel="noopener noreferrer"
				aria-label="Contactar por WhatsApp"
				onMouseEnter={() => {
					if (!dismissed) setShowTooltip(true);
				}}
				onMouseLeave={() => {
					if (!dismissed) setShowTooltip(false);
				}}
				className="group relative w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#1ead54] shadow-lg hover:shadow-xl flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95"
			>
				{/* Pulse ring */}
				<span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-15 pointer-events-none" />
				<WhatsAppIcon className="w-7 h-7 [&_path]:fill-white relative z-10" />
			</a>
		</div>
	);
};
