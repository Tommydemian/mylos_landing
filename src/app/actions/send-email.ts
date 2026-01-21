"use server";

type ActionState = { ok: true; message: string } | { ok: false; error: string };

function requiredString(v: unknown, field: string) {
	if (typeof v !== "string" || v.trim().length === 0) {
		throw new Error(`${field} is required`);
	}
	return v.trim();
}

function optionalString(v: unknown) {
	return typeof v === "string" ? v.trim() : "";
}

export async function sendEmailAction(
	_prevState: ActionState,
	formData: FormData,
): Promise<ActionState> {
	try {
		const name = requiredString(formData.get("name"), "name");
		const business = requiredString(formData.get("business"), "business");
		const email = requiredString(formData.get("email"), "email");
		const channels = requiredString(formData.get("channels"), "channels");
		const whatsapp = optionalString(formData.get("whatsapp"));

		const to = process.env.CONTACT_TO_EMAIL;
		if (!to) throw new Error("CONTACT_TO_EMAIL is not set");

		const subject = `Nuevo lead: ${business} — ${name}`;
		const text =
			`Nuevo formulario de propuesta\n\n` +
			`Nombre: ${name}\n` +
			`Negocio: ${business}\n` +
			`Email: ${email}\n` +
			`Canales: ${channels}\n` +
			(whatsapp ? `WhatsApp: ${whatsapp}\n` : "");

		await sendEmailSMTP({ to, subject, text });

		return { ok: true, message: "Listo. Te escribimos pronto." };
	} catch (err) {
		const msg = err instanceof Error ? err.message : "Unknown error";
		return { ok: false, error: msg };
	}
}

/** Node-only SMTP sender (Nodemailer) */
async function sendEmailSMTP(opts: {
	to: string;
	subject: string;
	text: string;
}) {
	const nodemailer = await import("nodemailer");

	const host = process.env.SMTP_HOST;
	const port = Number(process.env.SMTP_PORT || "587");
	const user = process.env.SMTP_USER;
	const pass = process.env.SMTP_PASS;
	const from = process.env.SMTP_FROM; // e.g. "TALOS <no-reply@talos.com>"

	if (!host || !user || !pass || !from) {
		throw new Error("SMTP env vars are not fully configured");
	}

	// Port 465 => secure true, otherwise false (STARTTLS)
	const secure = port === 465;

	const transporter = nodemailer.createTransport({
		host,
		port,
		secure,
		auth: { user, pass },
	});

	await transporter.sendMail({
		from,
		to: opts.to,
		subject: opts.subject,
		text: opts.text,
	});
}
