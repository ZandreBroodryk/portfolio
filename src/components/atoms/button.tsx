"use-client";
import {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  MouseEvent,
  useState,
} from "react";
import Loader from "./loader";

type ButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export default function Button({
  onClick,
  children,
  disabled,
  ...props
}: ButtonProps): JSX.Element {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const onClickLoading = async (
    event: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>,
  ) => {
    if (onClick) {
      try {
        setIsLoading(true);
        await onClick(event);
      } catch (error) {
        setIsLoading(false);
        throw error;
      }
      setIsLoading(false);
    }
  };
  return (
    <button
      onClick={onClickLoading}
      disabled={isLoading || disabled}
      {...props}
    >
      {isLoading ? <Loader /> : children}
    </button>
  );
}
