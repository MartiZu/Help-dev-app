const url = "https://help-dev-data.onrender.com/";
import Link from "next/link";

async function getTickets(id) {
  try {
    const response = await fetch(`${url}tickets/${id}`, {
      headers: {
        "Content-Type": "application/json",
        // Add any other headers as needed
      },
    });

    console.log(response);

    if (response.status === 404) {
      console.error("Ticket not found");
      return null;
    } else if (!response.ok) {
      console.error(`HTTP error! Status: ${response.status}`);
      console.error(await response.text()); // Log the response body for further inspection
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const tickets = await response.json();
    console.log(tickets);

    return tickets;
  } catch (error) {
    console.error("Fetch error:", error);
    throw error;
  }
}

export default async function Ticket({ params }) {
  const id = params.id;
  const ticket = await getTickets(id);

  return (
    <main className="h-screen">
      <div className="flex flex-col items-center justify-center">
      <Link className="my-4 hover:underline" href="/tickets">
        Back to Tickets
      </Link>
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
