"use client";

import { SubmitHandler } from "react-hook-form";
import TicketForm from "../TicketForm";
import { useEffect, useState, useTransition } from "react";
import getTicketById from "@/actions/getTicketById";
import updateTicket from "@/actions/UpdateTicket";

const Edit = ({ id }: { id: string }) => {
  const [isPending, startTransition] = useTransition();
  const [ticket, setTicket] = useState<Ticket>();

  const onSubmit: SubmitHandler<Ticket> = async (data) => {
    await updateTicket(id, data);
  };

  useEffect(() => {
    startTransition(async () => {
      const t = await getTicketById(id);
      setTicket(JSON.parse(t));
    });
  }, [id]);

  return (
    <>
      {!isPending && (
        <TicketForm
          title="Update Your Ticket"
          onSubmit={onSubmit}
          defaultTicket={ticket}
        />
      )}
    </>
  );
};

export default Edit;
