import { ReactNode } from "react";

interface IButtonProps {
  children: ReactNode;
}

const Button: React.FunctionComponent<IButtonProps> = ({ children }) => {
  return <button>{children}</button>;
};

export default Button;
