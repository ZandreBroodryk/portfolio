import { ReactNode, SVGProps } from "react";

type ShuttleProps = SVGProps<SVGSVGElement>;
export default function ShuttleLogo({
  viewBox = "0 0 30 30",
  xmlns = "http://www.w3.org/2000/svg",
  className = "size-6",
  fill = "currentColor",
  fillRule = "evenodd",
  ...rest
}: ShuttleProps): ReactNode {
  return (
    <svg
      xmlns={xmlns}
      viewBox={viewBox}
      className={className}
      fill={fill}
      fillRule={fillRule}
      {...rest}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21.5276 0.927734L14.3516 7.9646L7.17585 7.9646L0 15.0013H7.17585L7.17585 22.0375H0V29.0743H7.17585L7.17585 22.0383H14.3516V29.0751L21.5276 22.0383V15.0013L28.7034 7.9646V0.927734H21.5276Z"
      ></path>
    </svg>
  );
}
