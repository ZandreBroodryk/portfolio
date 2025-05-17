import { SVGProps } from "react";

type SaFlagProps = SVGProps<SVGSVGElement> & {
  round?: boolean;
};
export default function SaFlag({
  xmlns = "http://www.w3.org/2000/svg",
  viewBox = "0 0 90 60",
  className = "size-6",
  round,
  ...rest
}: SaFlagProps) {
  if (round && viewBox == "0 0 90 60") {
    viewBox = "0 0 60 60";
  }
  return (
    <svg xmlns={xmlns} viewBox={viewBox} className={className} {...rest}>
      <title>Flag of South Africa</title>
      <defs>
        <clipPath id="t">
          <path d="m0 0 45 30L0 60z" />
        </clipPath>
        <clipPath id="f">
          <path d="m0 0h90v60H0z" />
        </clipPath>
        {round && (
          <clipPath id="circleClip">
            <circle cx="30" cy="30" r="30" />
          </clipPath>
        )}
      </defs>
      <g clipPath="url(#circleClip)">
        <path fill="#e03c31" d="m0 0h90v30H45z" />
        <path fill="#001489" d="m0 60h90V30H45z" />
        <g clipPath="url(#f)" fill="none">
          <path stroke="#fff" strokeWidth="20" d="m90 30H45L0 0v60l45-30" />
          <path
            fill="#000"
            stroke="#ffb81c"
            strokeWidth="20"
            clipPath="url(#t)"
            d="m0 0 45 30L0 60"
          />
          <path
            stroke="#007749"
            strokeWidth="12"
            d="m0 0 45 30h45M0 60l45-30"
          />
        </g>
      </g>
    </svg>
  );
}
