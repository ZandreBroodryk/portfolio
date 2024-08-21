import { SVGProps, ReactNode } from "react";
type ReactLogoProps = SVGProps<SVGSVGElement>;
export default function ReactLogo({
  viewBox = "-11.5 -10.23174 23 20.46348",
  xmlns = "http://www.w3.org/2000/svg",
  className = "size-6",
  fill = "currentColor",
  stroke = "currentColor",
  fillRule = "evenodd",
  ...rest
}: ReactLogoProps): ReactNode {
  return (
    <svg
      xmlns={xmlns}
      viewBox={viewBox}
      className={className}
      fill={fill}
      fillRule={fillRule}
      clipRule="evenodd"
      {...rest}
    >
      <title>React Logo</title>
      <circle cx="0" cy="0" r="2.05" />
      <g stroke={stroke} stroke-width="1" fill="none">
        <ellipse rx="11" ry="4.2" />
        <ellipse rx="11" ry="4.2" transform="rotate(60)" />
        <ellipse rx="11" ry="4.2" transform="rotate(120)" />
      </g>
    </svg>
  );
}
