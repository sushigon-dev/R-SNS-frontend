import React from "react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { twMerge } from "tailwind-merge";

import LoginForm from "../form/LoginForm";
import RegisterForm from "../form/RegisterForm";

interface AuthFieldProps {
  className?: string;
  loninButtonLabel?: string;
  loginButtonClassName?: string;
  registerButtonLabel?: string;
  registerButtonClassName?: string;
}

function AuthField({
  className,
  loninButtonLabel = "ログイン",
  loginButtonClassName,
  registerButtonLabel = "新規作成",
  registerButtonClassName,
}: AuthFieldProps) {
  const [form, setForm] = useState<"login" | "register" | null>(null);

  return (
    <div className={twMerge("flex items-center gap-4", className)}>
      <Button
        variant="secondary"
        className={loginButtonClassName}
        onClick={() => setForm("login")}
      >
        {loninButtonLabel}
      </Button>
      <Button
        variant="default"
        className={registerButtonClassName}
        onClick={() => setForm("register")}
      >
        {registerButtonLabel}
      </Button>
      <LoginForm open={form === "login"} onOpenChange={() => setForm(null)} />
      <RegisterForm
        open={form === "register"}
        onOpenChange={() => setForm(null)}
      />
    </div>
  );
}

export default AuthField;
export type { AuthFieldProps };
