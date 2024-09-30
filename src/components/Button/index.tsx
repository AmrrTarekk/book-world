import { MouseEvent, ReactNode } from "react";
import styles from "./styles.module.scss";
import { Typography } from "@mui/material";

type ButtonPropsType = {
  text: string;
  variant:
    | "outline"
    | "fill-primary-dark"
    | "fill-blue"
    | "fill-primary-light"
    | "none";
  fontWeight: "300" | "400" | "500" | "600" | "700";
  fontSize: string;
  onSubmit?: (e: MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  className?: string;
  hover?: boolean;
  rightIcon?: boolean;
  leftIcon?: boolean;
  icon?: ReactNode;
  [key: string]: any;
};

function Button({
  text = "",
  variant = "none",
  onSubmit = () => {},
  className = "",
  disabled = false,
  hover,
  rightIcon = false,
  leftIcon = false,
  icon = null,
  fontWeight = "400",
  fontSize = "14px",
  ...props
}: ButtonPropsType) {
  return (
    <>
      <button
        className={`${styles.button} ${className}`}
        onClick={onSubmit}
        disabled={disabled}
        data-variant={variant}
        {...props}
      >
        {leftIcon && <>{icon}</>}

        <Typography
          width="100%"
          variant="caption"
          fontWeight={fontWeight}
          fontSize={fontSize}
        >
          <> {text} </>
        </Typography>
        {rightIcon && <>{icon}</>}
      </button>
    </>
  );
}

export default Button;
