import formatDate from "@/utils/formatDate";
import DeleteBlock from "./DeleteBlock";
import PriorityDisplay from "./PriorityDisplay";
import ProgressBar from "./ProgressBar";
import StatusDisplay from "./StatusDisplay";
import Link from "next/link";

type Props = {
  ticket: FullTicketData;
};

const TicketCrad = ({ ticket }: Props) => {
  return (
    <div className="flex flex-col bg-card hover:bg-card-hover rounded-md shadow-lg p-3 m-2">
      <div className="flex mb-3 justify-between">
        <PriorityDisplay priority={ticket.priority} />
        <DeleteBlock id={ticket._id} />
      </div>
      <Link href={`/ticket/edit/${ticket._id}`}>
        <h4>{ticket.title}</h4>
        <hr className="h-px border-0 bg-page mb-2" />
        <p className="whitespace-pre-wrap">{ticket.description}</p>
        <div className="flex justify-between gap-8 mt-2 items-center">
          <div className="flex flex-grow flex-col">
            <p className="text-xs mb-2">{formatDate(ticket.createdAt)}</p>
            <ProgressBar progress={ticket.progress} />
          </div>
          <StatusDisplay status={ticket.status} />
        </div>
      </Link>
    </div>
  );
};

export default TicketCrad;
