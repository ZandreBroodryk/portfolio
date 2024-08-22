import { ReactNode, SVGProps } from "react";

type TailwindCssProps = SVGProps<SVGSVGElement>;
export default function TailwindCss({
  viewBox = "0 0 50 31",
  xmlns = "http://www.w3.org/2000/svg",
  className = "size-6",
  fill = "currentColor",
  fillRule = "evenodd",
  clipRule = "evenodd",
  ...rest
}: TailwindCssProps): ReactNode {
  return (
    <svg
      xmlns={xmlns}
      viewBox={viewBox}
      className={className}
      fill={fill}
      fillRule={fillRule}
      clipRule={clipRule}
      {...rest}
    >
      <path d="M25.517 0C18.712 0 14.46 3.382 12.758 10.146c2.552-3.382 5.529-4.65 8.931-3.805 1.941.482 3.329 1.882 4.864 3.432 2.502 2.524 5.398 5.445 11.722 5.445 6.804 0 11.057-3.382 12.758-10.145-2.551 3.382-5.528 4.65-8.93 3.804-1.942-.482-3.33-1.882-4.865-3.431C34.736 2.92 31.841 0 25.517 0zM12.758 15.218C5.954 15.218 1.701 18.6 0 25.364c2.552-3.382 5.529-4.65 8.93-3.805 1.942.482 3.33 1.882 4.865 3.432 2.502 2.524 5.397 5.445 11.722 5.445 6.804 0 11.057-3.381 12.758-10.145-2.552 3.382-5.529 4.65-8.931 3.805-1.941-.483-3.329-1.883-4.864-3.432-2.502-2.524-5.398-5.446-11.722-5.446z" />
    </svg>
  );
}
