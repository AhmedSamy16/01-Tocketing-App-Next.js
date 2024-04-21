import { useMemo } from "react";

type Props = {
  status: Status;
};

const StatusDisplay = ({ status }: Props) => {
  const color = useMemo(() => {
    switch (status) {
      case "done":
        return "bg-green-200";
      case "not-started":
        return "bg-red-200";
      case "pending":
        return "bg-yellow-200";
    }
  }, [status]);
  return (
    <span
      className={`${color} inline-block rounded-full px-2 py-1 text-xs font-semibold text-gray-700`}
    >
      {status}
    </span>
  );
};

export default StatusDisplay;
