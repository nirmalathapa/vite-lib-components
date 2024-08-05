import { ComponentProps } from "react";

type ButtonProps = ComponentProps<"button"> & {
  dangerous?: boolean;
};

export const Button = ({ ...props }: ButtonProps) => {
  return <button style={{ background: "blue" }} {...props} />;
};

export default Button;
