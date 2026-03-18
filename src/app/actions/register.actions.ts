"use server";

import { registerSchema } from "@/squemas/register.squema";

export type RegisterState = {
	success: boolean;
	errors?: Partial<
		Record<"email" | "password" | "confirmPassword" | "server", string>
	>;
};

export async function registerAction(
	_prev: RegisterState,
	formData: FormData,
): Promise<RegisterState> {
	const raw = {
		email: formData.get("email") as string,
		password: formData.get("password") as string,
		confirmPassword: formData.get("confirmPassword") as string,
	};

	const result = registerSchema.safeParse(raw);

	if (!result.success) {
		const errors: RegisterState["errors"] = {};
		for (const issue of result.error.issues) {
			const field = issue.path[0] as keyof typeof errors;
			if (!errors[field]) {
				errors[field] = issue.message;
			}
		}
		return { success: false, errors };
	}

	const res = await fetch(`${process.env.API_URL}/auth/register-simple`, {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({
			email: result.data.email,
			password: result.data.password,
		}),
	});

	if (res.status === 409) {
		return {
			success: false,
			errors: { email: "Este email ya está registrado" },
		};
	}

	if (!res.ok) {
		return {
			success: false,
			errors: { server: "Error al crear la cuenta. Intentá de nuevo." },
		};
	}

	return { success: true };
}
