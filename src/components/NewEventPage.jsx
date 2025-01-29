import EventForm from "./EventForm";

function NewEventPage() {
  return <EventForm />;
}

export default NewEventPage;

export async function action({ request, loader }) {
  const data = await request.formData();
  const eventData = {
    title: data.get("title"),
    image: data.get("image"),
    date: data.get("date"),
    description: data.get("description"),
  };
  const response = await fetch("http://localhost:8080/events", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(eventData),
  });

  if (!response.ok) {
    throw new Response(JSON.stringify({ message: "Could not save event" }), {
      status: 500,
    });
  }

  return redirect("/events");
}
