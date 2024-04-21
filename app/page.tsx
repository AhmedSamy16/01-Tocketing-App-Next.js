import getAllTickets from "@/actions/getAllTickets";
import TicketCrad from "@/components/TicketCrad";

export default async function Home() {
  const tickets: AllTicketsData[] = await getAllTickets();

  return (
    <main className="p-5">
      <div>
        {tickets.map((t) => (
          <>
            <h2>{t._id}</h2>
            <div className="md:grid grid-cols-2 lg:grid-cols-4">
              {t.data.map((fullTicket) => (
                <TicketCrad key={fullTicket._id} ticket={fullTicket} />
              ))}
            </div>
          </>
        ))}
      </div>
    </main>
  );
}
