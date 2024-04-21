"use server";

import Ticket from "@/models/Ticket";
import connectDB from "@/utils/db";

const getTicketById = async (id: string) => {
  await connectDB();
  const ticket = await Ticket.findById(id);
  return JSON.stringify(ticket);
};

export default getTicketById;
