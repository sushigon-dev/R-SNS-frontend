import React from "react";
import { Button } from "@/components/ui/button";
import { ResponsiveDialog } from "@/components/pop_up";
import RegisterForm from "../form/RegisterForm";

interface RegisterButtonProps {
  children?: string;
  className?: string;
}

function RegisterButton({ children, className }: RegisterButtonProps) {
  return (
    <ResponsiveDialog
      trigger={<Button className={className}>{children ?? "新規作成"}</Button>}
      title="アカウントを作成する"
      child={<RegisterForm />}
    />
  );
}

export default RegisterButton;
