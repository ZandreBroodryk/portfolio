import { ReactNode, SVGProps } from "react";

type CopyProps = SVGProps<SVGSVGElement>;
export default function Copy({
  xmlns = "http://www.w3.org/2000/svg",
  fill = "none",
  viewBox = "0 0 24 24",
  strokeWidth = 1.5,
  stroke = "currentColor",
  className = "size-6",
  ...rest
}: CopyProps): ReactNode {
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
        d="M16.5 8.25V6a2.25 2.25 0 0 0-2.25-2.25H6A2.25 2.25 0 0 0 3.75 6v8.25A2.25 2.25 0 0 0 6 16.5h2.25m8.25-8.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-7.5A2.25 2.25 0 0 1 8.25 18v-1.5m8.25-8.25h-6a2.25 2.25 0 0 0-2.25 2.25v6"
      />
    </svg>
  );
}
