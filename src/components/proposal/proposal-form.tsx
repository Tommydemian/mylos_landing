"use client";

import { motion } from "motion/react";
import { Button } from "../ui/button";
import { scrollFadeIn } from "@/lib/utils";

import { useActionState, useEffect, useRef } from "react";
import { sendEmailAction } from "@/app/actions/send-email";
import { toast } from "sonner";

type ActionState = { ok: true; message: string } | { ok: false; error: string };

const initialState: ActionState = { ok: false, error: "" };

export const ProposalForm = () => {
	const [state, formAction, isPending] = useActionState(
		sendEmailAction,
		initialState,
	);

	const formRef = useRef<HTMLFormElement>(null);

	const didToast = useRef(false);

	useEffect(() => {
		if (state.ok && !didToast.current) {
			didToast.current = true;
			formRef.current?.reset();
			toast.success("Recibido! Te escribimos pronto por WhatsApp.");
		}
	}, [state.ok]);

	return (
		<motion.div
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true }}
			variants={scrollFadeIn}
			className="bg-card border border-border rounded-xl p-6 md:p-8"
		>
			<form ref={formRef} action={formAction} className="space-y-4">
				<div className="grid md:grid-cols-2 gap-4">
					<div className="space-y-1.5">
						<label
							htmlFor="name"
							className="text-sm font-medium text-foreground"
						>
							Nombre
						</label>
						<input
							type="text"
							id="name"
							name="name"
							placeholder="Juan"
							className="w-full h-10 px-3 text-sm bg-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring"
							required
						/>
					</div>
					<div className="space-y-1.5">
						<label
							htmlFor="business"
							className="text-sm font-medium text-foreground"
						>
							Nombre del negocio
						</label>
						<input
							type="text"
							id="business"
							name="business"
							placeholder="Negocio ABC"
							className="w-full h-10 px-3 text-sm bg-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring"
							required
						/>
					</div>
				</div>
				<div className="space-y-1.5">
					<label
						htmlFor="email"
						className="text-sm font-medium text-foreground"
					>
						Email
					</label>
					<input
						type="email"
						id="email"
						name="email"
						placeholder="tu@email.com"
						className="w-full h-10 px-3 text-sm bg-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring"
						required
					/>
				</div>
				<div className="space-y-1.5">
					<label
						htmlFor="channels"
						className="text-sm font-medium text-foreground"
					>
						¿Dónde vendés hoy?
					</label>
					<input
						type="text"
						id="channels"
						name="channels"
						placeholder="TiendaNube, WhatsApp, Instagram..."
						className="w-full h-10 px-3 text-sm bg-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring"
						required
					/>
				</div>
				<div className="space-y-1.5">
					<label
						htmlFor="whatsapp"
						className="text-sm font-medium text-foreground"
					>
						WhatsApp
					</label>
					<input
						type="text"
						id="whatsapp"
						name="whatsapp"
						placeholder="11 3456-7890"
						className="w-full h-10 px-3 text-sm bg-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring"
						required
					/>
				</div>
				<Button
					type="submit"
					size="lg"
					className="w-full mt-2"
					disabled={isPending || state.ok}
				>
					{isPending
						? "Enviando…"
						: state.ok
							? "Enviado ✓"
							: "Quiero acceso anticipado"}
				</Button>
				{!state.ok && <p className="text-sm">{state.error}</p>}
			</form>
			{/* <p className="text-xs text-muted-foreground text-center mt-4">
				Sin compromiso. Te contactamos en 24-48hs.
			</p> */}
		</motion.div>
	);
};
