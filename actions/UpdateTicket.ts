"use server";

import Ticket from "@/models/Ticket";
import connectDB from "@/utils/db";
import { revalidatePath } from "next/cache";

const updateTicket = async (id: string, data: Ticket) => {
  await connectDB();
  await Ticket.findByIdAndUpdate(id, data);
  revalidatePath("/");
};

export default updateTicket;
