import React from "react";
import * as alertDialog from "@/components/ui/alert-dialog";

// import {
//   AlertDialog,
//   AlertDialogPortal,
//   AlertDialogOverlay,
//   AlertDialogTrigger,
//   AlertDialogContent,
//   AlertDialogHeader,
//   AlertDialogFooter,
//   AlertDialogTitle,
//   AlertDialogDescription,
//   AlertDialogAction,
//   AlertDialogCancel,
// } from "@/components/ui/alert-dialog";

interface AlertDialogProps {
  trigger: React.ReactNode;
  title: string;
  descritpion: string;
  action: React.MouseEventHandler<HTMLButtonElement>;
}

function AlertDialog({
  trigger,
  title,
  descritpion,
  action,
}: AlertDialogProps) {
  return (
    <alertDialog.AlertDialog>
      <alertDialog.AlertDialogTrigger asChild>
        {trigger}
      </alertDialog.AlertDialogTrigger>
      <alertDialog.AlertDialogContent>
        <alertDialog.AlertDialogHeader>
          <alertDialog.AlertDialogTitle>{title}</alertDialog.AlertDialogTitle>
          <alertDialog.AlertDialogDescription>
            {descritpion}
          </alertDialog.AlertDialogDescription>
        </alertDialog.AlertDialogHeader>
        <alertDialog.AlertDialogFooter>
          <alertDialog.AlertDialogCancel>
            キャンセル
          </alertDialog.AlertDialogCancel>
          <alertDialog.AlertDialogAction onClick={action}>
            続ける
          </alertDialog.AlertDialogAction>
        </alertDialog.AlertDialogFooter>
      </alertDialog.AlertDialogContent>
    </alertDialog.AlertDialog>
  );
}

export default AlertDialog;
