import { LoginForm } from "@/app/authentication/login-form";

export const metadata = {
  title: "Sign In | AskSorSU",
  description: "Create a new account",
};

export default function SignupPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-4 py-12">
      <LoginForm />
    </main>
  );
}
