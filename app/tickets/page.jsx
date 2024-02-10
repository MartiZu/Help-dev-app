import Loading from "../components/loading";
import { Suspense } from "react";
import TicketList from "./TicketList";
export default function Tickets() {
  return (
    <main>
      <Suspense fallback={<Loading />}>
        <TicketList />
      </Suspense>
    </main>
  );
}
