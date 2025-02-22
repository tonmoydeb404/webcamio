import {
  CloseButton,
  Popover,
  PopoverButton,
  PopoverPanel,
} from "@headlessui/react";
import { FaCheck } from "react-icons/fa6";
import { LuSettings } from "react-icons/lu";
import { twMerge } from "tailwind-merge";
import { qualities } from "../constants/quality";
import IconBtn from "./icon-btn";

type Props = { value: number; setValue: (v: number) => void };

const SelectQuality = (props: Props) => {
  const { value, setValue } = props;

  return (
    <Popover>
      <PopoverButton as={IconBtn}>
        <LuSettings size={22} />
      </PopoverButton>
      <PopoverPanel
        transition
        anchor="top"
        className="divide-y divide-white/5 rounded-xl bg-white text-sm/6 transition duration-200 ease-in-out [--anchor-gap:var(--spacing-5)] data-[closed]:-translate-y-1 data-[closed]:opacity-0 border border-black/10"
      >
        <div className="p-2 flex flex-col">
          {qualities.map((item) => (
            <CloseButton
              className="flex items-center gap-2 rounded-lg py-2 px-3 transition hover:bg-purple-100 hover:text-purple-600 cursor-pointer"
              onClick={() => setValue(item.value)}
            >
              <FaCheck
                className={twMerge(
                  item.value === value ? "text-purple-600" : "invisible"
                )}
              />
              <span>{item.label}</span>
              <b className="text-xs">{item.value}p</b>
            </CloseButton>
          ))}
        </div>
      </PopoverPanel>
    </Popover>
  );
};

export default SelectQuality;
