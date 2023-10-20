import "./ListPage.scss";
import CardItem from "../../components/CardItem/CardItem";
import { useEffect } from "react";
import { getImages } from "../../services/image";
import { useState } from "react";
import { Item } from "../../types/types";

function ListPage() {
    const [data, setData] = useState<Item[] | null>(null);

    useEffect(() => {
        getImages().then((res) => setData(res));
    }, []);

    return (
        <div className="list-page">
            {data && data.map((item) => <CardItem key={item.id} {...item} />)}
        </div>
    );
}

export default ListPage;
