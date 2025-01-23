import { Link } from 'react-router-dom';

const DUMMY_EVENTS = [
    {id: 1, title: 'event 1'},
    {id: 2, title: 'event 2'}
]

function EventsPage() {
    return <>
        {
            DUMMY_EVENTS.map(event => <Link key={event.id} to={`/events/${event.id}`}>{event.title}</Link>)
        }
    </>
}

export default EventsPage;