import React from "react";
import { Button } from "@/components/ui/button";
import { ResponsiveDialog } from "@/components/pop_up";
import LoginForm from "../form/LoginForm";

interface LoginButtonProps {
  children?: string;
  className?: string;
}

function LoginButton({ children, className }: LoginButtonProps) {
  return (
    <ResponsiveDialog
      trigger={<Button className={className}>{children ?? "ログイン"}</Button>}
      title="ログイン"
      child={<LoginForm />}
    />
  );
}

export default LoginButton;
