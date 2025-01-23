import { Outlet } from "react-router-dom";

import MainNavigation from "./MainNavigation";

function RootLaylout() {
    return <>
        <MainNavigation />
        <Outlet />
    </>
}

export default RootLaylout;