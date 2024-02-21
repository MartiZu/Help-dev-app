import Link from "next/link";

export default function Sidebar({ close }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
      {/* Your side menu content goes here */}
      <div className="pt-6 flex flex-col items-center gap-6 absolute top-0 right-0 h-full bg-white w-60 p-4">
        <Link className="hover:underline" onClick={close} href="/">
          Home
        </Link>
        <Link className="hover:underline" onClick={close} href="/tickets">
          Tickets
        </Link>
        <Link className="hover:underline" onClick={close} href="/addTicket">
          <button className="bg-green-700 py-3 px-8 text-white">
            Add Ticket
          </button>
        </Link>
      </div>
    </div>
  );
}
