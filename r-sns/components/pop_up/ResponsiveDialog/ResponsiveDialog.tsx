import { useMediaQuery } from "react-responsive";

import Dialog from "../Dialog/Dialog";
import Drawer from "../Drawer/Drawer";
import type PopUpProps from "../types/pop_up_props";

type ResponsiveDialogProps = PopUpProps;

export function ResponsiveDialog(props: ResponsiveDialogProps) {
  const isDesktop = useMediaQuery({
    query: "(min-width: 768px)",
  });

  return isDesktop ? <Dialog {...props} /> : <Drawer {...props} />;
}

export default ResponsiveDialog;
