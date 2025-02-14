interface PopUpProps {
  title: string;
  discrition?: string;
  children: React.ReactNode;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default PopUpProps;
