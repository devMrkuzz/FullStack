"use client";

import type React from "react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { useState } from "react";

export function RegistrationForm() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      console.log("Passwords do not match");
      return;
    }

    setIsLoading(true);
    // TODO: Implement registration logic
    console.log("Registration attempt:", { fullName, email, password });
    setTimeout(() => setIsLoading(false), 1000);
  };

  const handleGoogleSignup = () => {
    // TODO: Implement Google OAuth signup
    console.log("Google", { backUrl: "/" });
  };

  return (
    <Card className="w-full max-w-md border border-border p-8">
      <div className="space-y-6">
        {/* Header */}
        <div className="space-y-2">
          <h1 className="text-2xl font-bold text-primary">Sign up</h1>
          <p className="text-sm text-muted-foreground">
            Create an account to get started
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Full Name Input */}
          <div className="space-y-2">
            <label
              htmlFor="fullName"
              className="text-sm font-medium text-foreground"
            >
              Full Name
            </label>
            <Input
              id="fullName"
              type="text"
              placeholder="John Doe"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
              className="w-full"
            />
          </div>

          {/* Email Input */}
          <div className="space-y-2">
            <label
              htmlFor="email"
              className="text-sm font-medium text-foreground"
            >
              Email
            </label>
            <Input
              id="email"
              type="email"
              placeholder="m@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full"
            />
          </div>

          {/* Password Input */}
          <div className="space-y-2">
            <label
              htmlFor="password"
              className="text-sm font-medium text-foreground"
            >
              Password
            </label>
            <Input
              id="password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full"
            />
          </div>

          {/* Confirm Password Input */}
          <div className="space-y-2">
            <label
              htmlFor="confirmPassword"
              className="text-sm font-medium text-foreground"
            >
              Confirm Password
            </label>
            <Input
              id="confirmPassword"
              type="password"
              placeholder="Confirm your password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              className="w-full"
            />
          </div>

          {/* Sign Up Button */}
          <Button
            type="submit"
            disabled={isLoading}
            className="w-full bg-primary text-background hover:bg-background hover:text-foreground border"
          >
            {isLoading ? "Creating account..." : "Sign up"}
          </Button>
        </form>

        {/* Divider */}
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-border" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-card px-2 text-muted-foreground">Or</span>
          </div>
        </div>

        {/* Google Signup Button */}
        <Button
          type="button"
          onClick={handleGoogleSignup}
          variant="outline"
          className="w-full bg-transparent"
        >
          Sign up with Google
        </Button>

        {/* Login Link */}
        <div className="text-center text-sm text-muted-foreground">
          Already have an account?{" "}
          <Link
            href="/authentication"
            className="font-medium text-primary hover:underline"
          >
            Login
          </Link>
        </div>
      </div>
    </Card>
  );
}
