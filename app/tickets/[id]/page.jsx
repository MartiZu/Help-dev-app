const url = "https://help-dev-data.onrender.com/"

async function getTickets(id) {
  const response = await fetch(`${url}${id}`, {
    next: {
      revalidate: 0,
    },
  });

  const tickets = await response.json();

  return tickets;
}

export default async function Ticket({ params }) {
  const id = params.id;
  const ticket = await getTickets(id);

  return (
    <main className="h-screen">
      <div className="flex justify-center">
        <div
          className="mx-32 my-8 p-8 w-full max-w-4xl bg-gray-100 leading-loose rounded-lg"
          key={ticket.id}
        >
          <h2 className="font-bold text-3xl pb-4">{ticket.title}</h2>
          <p className="text-xl pb-4">
            {ticket.author} - Room {ticket.room}
          </p>

          <p className="text-xl pb-4">{ticket.description}</p>
          <button
            className={`${
              ticket.status === "open"
                ? "bg-green-500"
                : ticket.status === "under review"
                ? "bg-yellow-600"
                : "bg-red-500"
            } py-2 px-4 text-center uppercase rounded-md`}
          >
            {ticket.status}
          </button>
        </div>
      </div>
    </main>
  );
}
