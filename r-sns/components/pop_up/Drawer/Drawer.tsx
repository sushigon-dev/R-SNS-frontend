import React from "react";
import * as drawer from "@/components/ui/drawer";
import type PopUpProps from "../pop_up_props";

type DrawerProps = PopUpProps;

function Drawer({
  title,
  description,
  children,
  open,
  onOpenChange,
}: DrawerProps) {
  return (
    <drawer.Drawer open={open} onOpenChange={onOpenChange}>
      <drawer.DrawerContent>
        <drawer.DrawerHeader className="text-left">
          <drawer.DrawerTitle>{title}</drawer.DrawerTitle>
          {description && (
            <drawer.DrawerDescription>{description}</drawer.DrawerDescription>
          )}
        </drawer.DrawerHeader>
        {children}
      </drawer.DrawerContent>
    </drawer.Drawer>
  );
}

export default Drawer;
