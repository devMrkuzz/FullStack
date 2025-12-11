"use client";

import { RegistrationForm } from "@/app/authentication/registration-form";

export default function SignupPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-4 py-12">
      <RegistrationForm />
    </main>
  );
}
