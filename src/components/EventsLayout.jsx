import { Outlet, useNavigation } from "react-router-dom";
import MainNavigation from "./MainNavigation";

function EventsLayout() {
  const navigation = useNavigation();

  return (
    <>
      {navigation.state === "loading" && <h1>Loading....</h1>}
      <Outlet />
    </>
  );
}

export default EventsLayout;
