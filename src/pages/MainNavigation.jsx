import { Link } from "react-router-dom";

function MainNavigation() {
    return <nav>
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
    </nav>
}

export default MainNavigation;