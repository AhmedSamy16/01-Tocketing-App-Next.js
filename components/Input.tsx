import { UseFormRegisterReturn } from "react-hook-form";
import ErrorMessage from "./ErrorMessage";

type Props = {
  isTextArea?: boolean;
  info: UseFormRegisterReturn;
  error?: string;
};

const Input = ({ info, isTextArea = false, error }: Props) => {
  return (
    <div className="flex flex-col">
      <label htmlFor={info.name}>
        {info.name[0].toUpperCase() + info.name.slice(1).toLowerCase()}:
      </label>
      {isTextArea ? (
        <textarea
          id={info.name}
          {...info}
          className="px-2 py-1 resize-none h-36"
        ></textarea>
      ) : (
        <input type="text" id={info.name} {...info} className="px-2 py-1" />
      )}
      <ErrorMessage message={error} />
    </div>
  );
};

export default Input;
