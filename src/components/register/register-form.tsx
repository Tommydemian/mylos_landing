"use client";

import { useActionState, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Eye, EyeOff, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
	registerAction,
	type RegisterState,
} from "@/app/actions/register.actions";

const initialState: RegisterState = { success: false };

export function RegisterForm() {
	const [state, action, pending] = useActionState(registerAction, initialState);
	const [showPassword, setShowPassword] = useState(false);
	const [showConfirm, setShowConfirm] = useState(false);
	const router = useRouter();

	useEffect(() => {
		if (state.success) {
			toast.success("¡Cuenta creada!", {
				description: "Ya podés iniciar sesión.",
			});
			router.push("/https://mylos-tau.vercel.app/login");
		}
	}, [state.success, router]);

	return (
		<div className="w-full max-w-sm space-y-8 -mt-16">
			{/* Header */}
			<div className="text-center space-y-2">
				<h1 className="text-2xl font-semibold tracking-tight">Crear cuenta</h1>
				<p className="text-sm text-muted-foreground">
					Empezá a gestionar tu negocio con Mylos
				</p>
			</div>

			{/* Form */}
			<form action={action} className="space-y-4">
				{state.errors?.server && (
					<div className="rounded-lg bg-destructive/10 px-4 py-3 text-sm text-destructive">
						{state.errors.server}
					</div>
				)}

				<div className="space-y-2">
					<Label htmlFor="email">Email</Label>
					<Input
						id="email"
						name="email"
						type="email"
						placeholder="tu@email.com"
						autoComplete="email"
						required
					/>
					{state.errors?.email && (
						<p className="text-sm text-destructive">{state.errors.email}</p>
					)}
				</div>

				<div className="space-y-2">
					<Label htmlFor="password">Contraseña</Label>
					<div className="relative">
						<Input
							id="password"
							name="password"
							type={showPassword ? "text" : "password"}
							autoComplete="new-password"
							required
						/>
						<Button
							type="button"
							variant="ghost"
							size="icon"
							className="absolute right-0 top-0 h-full px-3 hover:bg-transparent"
							onClick={() => setShowPassword(!showPassword)}
							tabIndex={-1}
						>
							{showPassword ? (
								<EyeOff className="h-4 w-4 text-muted-foreground" />
							) : (
								<Eye className="h-4 w-4 text-muted-foreground" />
							)}
						</Button>
					</div>
					{state.errors?.password && (
						<p className="text-sm text-destructive">{state.errors.password}</p>
					)}
				</div>

				<div className="space-y-2">
					<Label htmlFor="confirmPassword">Confirmar contraseña</Label>
					<div className="relative">
						<Input
							id="confirmPassword"
							name="confirmPassword"
							type={showConfirm ? "text" : "password"}
							autoComplete="new-password"
							required
						/>
						<Button
							type="button"
							variant="ghost"
							size="icon"
							className="absolute right-0 top-0 h-full px-3 hover:bg-transparent"
							onClick={() => setShowConfirm(!showConfirm)}
							tabIndex={-1}
						>
							{showConfirm ? (
								<EyeOff className="h-4 w-4 text-muted-foreground" />
							) : (
								<Eye className="h-4 w-4 text-muted-foreground" />
							)}
						</Button>
					</div>
					{state.errors?.confirmPassword && (
						<p className="text-sm text-destructive">
							{state.errors.confirmPassword}
						</p>
					)}
				</div>

				<Button type="submit" className="w-full" disabled={pending}>
					{pending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
					Crear cuenta
				</Button>
			</form>
		</div>
	);
}
