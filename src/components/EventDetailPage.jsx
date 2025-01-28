import { useParams, useRouteLoaderData } from "react-router-dom";
import EventItem from "./EventItem";

function EventDetailPage() {
  const data = useRouteLoaderData("event-detail");

  return <EventItem event={data.event} />;
}

export default EventDetailPage;

export async function loader({ request, params }) {
  const id = params.id;
  const response = await fetch("http://localhost:8080/events/" + id);

  if (!response.ok) {
    return new Response(
      JSON.stringify({ message: "Could not fetch details of selected event" }),
      { status: 500 }
    );
  } else {
    return response;
  }
}
