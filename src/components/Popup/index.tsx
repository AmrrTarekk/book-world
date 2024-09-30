import { useEffect, useState } from "react";
import { Fade, Modal } from "@mui/material";
import Backdrop from "@mui/material/Backdrop";
import { Box } from "@mui/system";

type PopupType = {
  isOpen: boolean;
  onCloseModel: () => void;
  width?: {
    [key: string]: string;
  };
  children: any;
  style?: object;
  checkBeforeClose?: boolean;
  [x: string]: any;
};

const initWidth = {
  xs: "90%",
  sm: "75%",
  md: "50%",
  lg: "25%",
};

export default function Popup({
  children = <></>,
  isOpen = false,
  width = initWidth,
  onCloseModel = () => {},
  checkBeforeClose = true,
  style = {},
  ...props
}: PopupType) {
  const [isOpenState, setIsOpen] = useState<boolean>(false);

  const defaultStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    bgcolor: "transparent",
    border: "none",
    outline: "none",
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
    borderRadius: 1,
    overflowY: "auto",
    width: {
      xs: width.xs,
      sm: width.sm,
      md: width.md,
      lg: width.lg,
      xl: width.xl,
    },
    maxHeight: "95%",
  };
  const handleClose = () => {
    if (checkBeforeClose) {
      if (window.confirm("Are you sure you want to close this window?")) {
        setIsOpen(false);
        onCloseModel();
      }
    } else {
      setIsOpen(false);
      onCloseModel();
    }
  };

  useEffect(() => {
    setIsOpen(isOpen);
  }, [isOpen]);

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={isOpenState}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      {...props}
    >
      <Fade in={isOpenState}>
        <Box sx={{ ...defaultStyle, ...style }}>{children}</Box>
      </Fade>
    </Modal>
  );
}
