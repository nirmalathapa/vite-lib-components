import { ComponentProps } from "react";

type ButtonProps = ComponentProps<"button"> & {
  dangerous?: boolean;
};

export const Button = ({ ...props }: ButtonProps) => {
  return <button style={{ background: "red" }} {...props} />;
};

export default Button;
