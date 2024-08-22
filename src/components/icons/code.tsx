import { ReactNode, SVGProps } from "react";

type CodeProps = SVGProps<SVGSVGElement>;
export default function Code({
  xmlns = "http://www.w3.org/2000/svg",
  fill = "none",
  viewBox = "0 0 24 24",
  strokeWidth = 1.5,
  stroke = "currentColor",
  className = "size-6",
  ...rest
}: CodeProps): ReactNode {
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
        d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"
      />
    </svg>
  );
}
