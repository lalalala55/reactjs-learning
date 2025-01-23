import { useNavigate } from "react-router-dom";

function ErrorPage() {
    const navigate = useNavigate();
    
    return <>
        <h1>Something went wrong Error Page</h1>
        <button onClick={() => navigate('/')}>Home</button>
    </>
}

export default ErrorPage;