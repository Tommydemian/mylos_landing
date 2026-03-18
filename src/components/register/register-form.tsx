"use client";

import { useActionState, useState } from "react";
import { Eye, EyeOff, Loader2 } from "lucide-react";
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

	if (state.success) {
		return (
			<div className="text-center space-y-2">
				<p className="text-lg font-medium">¡Cuenta creada!</p>
				<p className="text-sm text-muted-foreground">
					Ya podés iniciar sesión en la app.
				</p>
			</div>
		);
	}

	return (
		<form action={action} className="space-y-4">
			{state.errors?.server && (
				<p className="text-sm text-destructive text-center">
					{state.errors.server}
				</p>
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
	);
}
