import React from "react";
import { UseFormRegisterReturn } from "react-hook-form";

type Props = {
  id: string;
  value: string;
  isChecked?: boolean;
  info: UseFormRegisterReturn;
};

const RadioInput = ({ id, value, isChecked = false, info }: Props) => {
  return (
    <div>
      <input type="radio" id={id} value={value} checked={isChecked} {...info} />
      <label htmlFor={id} className="ml-1">
        {value}
      </label>
    </div>
  );
};

export default RadioInput;
