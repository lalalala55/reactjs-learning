import { Outlet, useNavigation } from "react-router-dom";
import EventsNavigation from "./EventsNavigation";

function EventsLayout() {
  const navigation = useNavigation();

  return (
    <>
      {navigation.state === "loading" && <h1>Loading....</h1>}
      <EventsNavigation />
      <Outlet />
    </>
  );
}

export default EventsLayout;
