import Link from "next/link";
const url = "https://help-dev-data.onrender.com/"

async function getTickets() {

  const response = await fetch(`${url}tickets`, {
    next: {
      revalidate: 0,
    },
  });

  const tickets = await response.json();

  return tickets;
}

export default async function TicketList() {
  const tickets = await getTickets();

  return (
    <main className="flex flex-col justify-center items-center shrink-0">
      {tickets.map((ticket) => (
        <div
          className="mx-32 my-8 p-8 w-full max-w-4xl bg-gray-100 leading-loose rounded-lg"
          key={ticket.id}
        >
          <Link href={`/tickets/${ticket.id}`}>
            <h2 className="font-bold text-xl">{ticket.title}</h2>
            <p>
              {ticket.author} - Room {ticket.room}
            </p>

            <p>{ticket.description}</p>
            <button
              className={`${
                ticket.status === "open"
                  ? "bg-green-500"
                  : ticket.status === "under review"
                  ? "bg-yellow-600"
                  : "bg-red-500"
              } py-1 px-4 text-center`}
            >
              {ticket.status}
            </button>
          </Link>
        </div>
      ))}
      {tickets.length === 0 && (
        <p className="text-center text-2xl">No tickets found.</p>
      )}
    </main>
  );
}
