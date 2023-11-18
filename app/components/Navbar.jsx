import Link from "next/link";
import Image from "next/image";
import logo from "./Soc-logo.jpg";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between  px-12 p-2 border-b-2 border-b-gray-100 ">
      <Image src={logo} alt="Dojo" width={100}></Image>
      <div className="flex items-center gap-8">
        <Link className="hover:underline" href="/">
          Home
        </Link>
        <Link className="hover:underline" href="/tickets">
          Tickets
        </Link>
        <Link className="hover:underline" href="/addTicket">
          <button className="bg-green-600 py-3 px-8 text-white">
            Add Ticket
          </button>
        </Link>
      </div>
      {/* allows the link to be ready waiting to anothr page, the will be a tag in the inspect page*/}
    </nav>
  );
}
