import { useParams, useNavigate, Navigate } from "react-router-dom";

function ProductPage() {
    const params = useParams();
    const navigate = useNavigate();

    return <>
        <h1>ProductPage - {params.id}</h1>
        <button onClick={() => navigate('/products')}>Back</button>
    </>
}

export default ProductPage;