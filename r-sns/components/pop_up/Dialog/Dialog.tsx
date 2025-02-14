import React from "react";
import * as dialog from "@/components/ui/dialog";
import type PopUpProps from "../types/pop_up_props";

type DialogProps = PopUpProps;

export function Dialog({
  title,
  discrition,
  children,
  open,
  onOpenChange,
}: DialogProps) {
  return (
    <dialog.Dialog open={open} onOpenChange={onOpenChange}>
      <dialog.DialogContent className="sm:max-w-md">
        <dialog.DialogHeader>
          <dialog.DialogTitle>{title}</dialog.DialogTitle>
          {discrition && (
            <dialog.DialogDescription>{discrition}</dialog.DialogDescription>
          )}
        </dialog.DialogHeader>
        {children}
      </dialog.DialogContent>
    </dialog.Dialog>
  );
}

export default Dialog;
