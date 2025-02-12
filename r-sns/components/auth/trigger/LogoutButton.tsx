import { Button } from "@/components/ui/button";
import { AlertDialog } from "@/components/pop_up";

interface LogoutButtonProps {
  children?: string;
  className?: string;
}

function LogoutButton({ children, className }: LogoutButtonProps) {
  return (
    <AlertDialog
      trigger={
        <Button className={className}>{children ?? "ログアウト"}</Button>
      }
      title="ログアウト"
      descritpion="ログアウトしますか？"
      action={() => {
        console.log("ログアウト");
      }}
    />
  );
}

export default LogoutButton;
