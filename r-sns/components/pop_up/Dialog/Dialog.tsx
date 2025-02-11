import React from "react";
import * as dialog from "@/components/ui/dialog";

// import {
//   Dialog,
//   DialogClose,
//   DialogContent,
//   DialogDescription,
//   DialogFooter,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from "@/components/ui/dialog";

interface DialogProps {
  trigger: React.ReactNode;
  title: string;
  child: React.ReactNode;
}

export function Dialog({ trigger, title, child }: DialogProps) {
  return (
    <dialog.Dialog>
      <dialog.DialogTrigger asChild>{trigger}</dialog.DialogTrigger>
      <dialog.DialogContent className="sm:max-w-md">
        <dialog.DialogHeader>
          <dialog.DialogTitle>{title}</dialog.DialogTitle>
          {/* <dialog.DialogDescription>
            ここに説明文を入れることができるよ
          </dialog.DialogDescription> */}
        </dialog.DialogHeader>
        {child}
      </dialog.DialogContent>
    </dialog.Dialog>
  );
}

export default Dialog;
