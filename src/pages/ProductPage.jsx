import { useParams } from "react-router-dom";

function ProductPage() {
    const params = useParams();
    return <h1>ProductPage - {params.id}</h1>
}

export default ProductPage;