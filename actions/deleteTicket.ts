"use server";

import Ticket from "@/models/Ticket";
import connectDB from "@/utils/db";
import { revalidatePath } from "next/cache";

const deleteTicket = async (id: string) => {
  await connectDB();
  await Ticket.findByIdAndDelete(id);
  revalidatePath("/");
};

export default deleteTicket;
