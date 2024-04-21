"use client";

import deleteTicket from "@/actions/deleteTicket";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useCallback, useTransition } from "react";

type Props = {
  id: string;
};

const DeleteBlock = ({ id }: Props) => {
  const [isPending, startTransition] = useTransition();

  const onClick = useCallback(() => {
    startTransition(async () => {
      await deleteTicket(id);
    });
  }, [id]);

  return (
    <>
      {isPending ? (
        <small className="text-xs">loading...</small>
      ) : (
        <FontAwesomeIcon
          icon={faX}
          className="text-red-400 cursor-pointer hover:text-red-200"
          onClick={onClick}
        />
      )}
    </>
  );
};

export default DeleteBlock;
