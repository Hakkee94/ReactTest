import "./ProductPage.scss";
import CardDetails from "../../components/CardDetails/CardDetails";
import { useEffect, useState } from "react";
import { Item } from "../../types/types";
import { useLocation } from "react-router-dom";
import { getImage } from "../../services/image";

function ProductPage() {
    const [data, setData] = useState<Item | null>(null);
    const { pathname } = useLocation();
    const id = pathname.substring(1);

    useEffect(() => {
        getImage(id).then((res) => setData(res));
    }, [id]);

    return (
        <div className="product-page">{data && <CardDetails {...data} />}</div>
    );
}

export default ProductPage;
