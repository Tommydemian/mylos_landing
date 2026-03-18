import { RegisterForm } from "@/components/register/register-form";

export async function Register() {
	return (
		<section className="min-h-svh flex items-center justify-center px-4">
			<RegisterForm />
		</section>
	);
}

export default Register;
