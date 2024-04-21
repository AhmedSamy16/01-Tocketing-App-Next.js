"use server";

import Ticket from "@/models/Ticket";
import connectDB from "@/utils/db";

const getAllTickets = async () => {
  await connectDB();
  return await Ticket.aggregate([
    {
      $sort: { priority: -1 },
    },
    {
      $group: {
        _id: "$category",
        data: { $push: "$$ROOT" },
      },
    },
  ]);
};

export default getAllTickets;
