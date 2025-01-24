import { Outlet } from "react-router-dom";
import MainNavigation from "./MainNavigation";

function EventsLayout() {
    return <>
        <MainNavigation />
        <Outlet />
    </>
}

export default EventsLayout;