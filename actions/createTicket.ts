"use server";

import Ticket from "@/models/Ticket";
import connectDB from "@/utils/db";
import { revalidatePath } from "next/cache";

const createTicket = async (ticket: Ticket) => {
  try {
    await connectDB();

    const result = await Ticket.create(ticket);

    revalidatePath("/");

    return {
      success: true,
      message: "Ticket Created Successfully",
      data: result,
    };
  } catch (error) {
    return {
      success: false,
      message: "An Error Occured",
      error,
    };
  }
};

export default createTicket;
