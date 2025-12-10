import { RegistrationForm } from "@/app/authentication/registration-form";

export const metadata = {
  title: "Sign up | AskSorSU",
  description: "Create a new account",
};

export default function SignupPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-4 py-12">
      <RegistrationForm />
    </main>
  );
}
