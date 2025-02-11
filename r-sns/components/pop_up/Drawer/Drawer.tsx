import React from "react";

import * as drawer from "@/components/ui/drawer";

// import {
//   Drawer,
//   DrawerClose,
//   DrawerContent,
//   DrawerDescription,
//   DrawerFooter,
//   DrawerHeader,
//   DrawerTitle,
//   DrawerTrigger,
// } from "@/components/ui/drawer";

interface DrawerProps {
  trigger: React.ReactNode;
  title: string;
  child: React.ReactNode;
}

function Drawer({ trigger, title, child }: DrawerProps) {
  return (
    <drawer.Drawer>
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

export default Drawer;
