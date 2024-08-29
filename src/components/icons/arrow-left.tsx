import { ReactNode, SVGProps } from "react";

type ArrowLeftProps = SVGProps<SVGSVGElement>;
export default function ArrowLeft({
  xmlns = "http://www.w3.org/2000/svg",
  fill = "none",
  viewBox = "0 0 24 24",
  strokeWidth = 1.5,
  stroke = "currentColor",
  className = "size-6",
  ...rest
}: ArrowLeftProps): ReactNode {
  return (
    <svg
      xmlns={xmlns}
      fill={fill}
      viewBox={viewBox}
      strokeWidth={strokeWidth}
      stroke={stroke}
      className={className}
      {...rest}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
      />
    </svg>
  );
}
