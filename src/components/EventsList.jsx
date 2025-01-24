import { useLoaderData } from 'react-router-dom'

import classes from './EventsList.module.css';

function EventsList() {
  // since EventList component is a child of EventPage so we get to see the loader data here also.
  const events = useLoaderData(); // returns closest loader till the parent

  return (
    <div className={classes.events}>
      <h1>All Events</h1>
      <ul className={classes.list}>
        {events.map((event) => (
          <li key={event.id} className={classes.item}>
            <a href="...">
              <img src={event.image} alt={event.title} />
              <div className={classes.content}>
                <h2>{event.title}</h2>
                <time>{event.date}</time>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EventsList;
