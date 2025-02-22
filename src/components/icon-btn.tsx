import { JSX } from "react";
import { twMerge } from "tailwind-merge";

type Props = JSX.IntrinsicElements["button"];

const IconBtn = (props: Props) => {
  const { className, ...others } = props;
  return (
    <button
      className={twMerge(
        "p-3 bg-gray-100 rounded-full cursor-pointer duration-200 hover:bg-purple-100 hover:text-purple-600",
        className
      )}
      {...others}
    />
  );
};

export default IconBtn;
