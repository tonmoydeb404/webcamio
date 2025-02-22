import { JSX } from "react";
import { twMerge } from "tailwind-merge";

type Props = JSX.IntrinsicElements["button"];

const Button = (props: Props) => {
  const { className, ...others } = props;
  return (
    <button
      className={twMerge(
        "inline-flex items-center gap-1.5 px-3.5 py-1.5 cursor-pointer text-[15px] font-medium rounded-lg [&_svg]:size-3 border border-transparent duration-200",
        className
      )}
      {...others}
    />
  );
};

export default Button;
