interface Ticket {
  title: string;
  description: string;
  category: string;
  priority: 1 | 2 | 3 | 4 | 5;
  progress: number;
  status: Status;
}

type Status = "pending" | "done" | "not-started";

type FullTicketData = Ticket & {
  _id: string;
  createdAt: Date;
  updateAt: Date;
};

type AllTicketsData = {
  _id: string;
  data: FullTicketData[];
};
