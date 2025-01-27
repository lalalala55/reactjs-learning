
import { useLoaderData } from 'react-router-dom';
import EventsList from '../components/EventsList';

function EventsPage() {
    const data = useLoaderData();
    if(data.isError) {
      return <p>{data.message}</p>
    }
    const events = data.events;

    console.log(events);
    return <EventsList events={events}/>
}

export default EventsPage;

export const loader = async () => {
    const response = await fetch('http://localhost:8080/eventsasdfas');

    if (!response.ok) {
      // ....
      return {isError: true, message: 'Failed to fetch events'}
    } else {
      // const resData = await response.json();
      // return resData.events;
      // return new Response(resData.events, {status: 201});
      return response;
    }
}