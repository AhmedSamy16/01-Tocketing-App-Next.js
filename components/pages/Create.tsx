"use client";

import { SubmitHandler } from "react-hook-form";
import TicketForm from "../TicketForm";
import createTicket from "@/actions/createTicket";

const Create = () => {
  const onSubmit: SubmitHandler<Ticket> = async (data) => {
    await createTicket(data);
  };

  return <TicketForm title="Create a New Ticket" onSubmit={onSubmit} />;
};

export default Create;
