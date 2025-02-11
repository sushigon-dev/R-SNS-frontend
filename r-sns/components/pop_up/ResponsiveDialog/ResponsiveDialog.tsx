import * as React from "react";
import { useMediaQuery } from "react-responsive";

import * as dialog from "@/components/ui/dialog";
import * as drawer from "@/components/ui/drawer";

interface ResponsiveDialogProps {
  trigger: React.ReactNode;
  title: string;
  child: React.ReactNode;
}

export function ResponsiveDialog({
  trigger,
  title,
  child,
}: ResponsiveDialogProps) {
  const [open, setOpen] = React.useState(false);
  // const isDesktop = useMediaQuery("(min-width: 768px)");
  const isDesktop = useMediaQuery({
    query: "(min-width: 768px)",
  });

  if (isDesktop) {
    return (
      <dialog.Dialog open={open} onOpenChange={setOpen}>
        <dialog.DialogTrigger asChild>{trigger}</dialog.DialogTrigger>
        <dialog.DialogContent className="sm:max-w-[425px]">
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
  } else {
    return (
      <drawer.Drawer open={open} onOpenChange={setOpen}>
        <drawer.DrawerTrigger asChild>{trigger}</drawer.DrawerTrigger>
        <drawer.DrawerContent>
          <drawer.DrawerHeader className="text-left">
            <drawer.DrawerTitle>{title}</drawer.DrawerTitle>
            {/* <drawer.DrawerDescription>
              ここに説明文を入れることができるよ
            </drawer.DrawerDescription> */}
          </drawer.DrawerHeader>
          {child}
        </drawer.DrawerContent>
      </drawer.Drawer>
    );
  }
}

export default ResponsiveDialog;
