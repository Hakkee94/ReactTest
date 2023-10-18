import './ListPage.scss'
import CardItem from "../../components/CardItem/CardItem";
import {Link} from "react-router-dom";
import {useEffect} from "react";
import {getImages} from "../../services/image";
import {useState} from "react";


function ListPage() {
    const [data, setData] = useState<any>(null);
    useEffect(() => {
        getImages().then(res => setData(res));
    }, []);
    return (
        <div className="list-page">
            {data ? data.map((item) => <Link key={item.id} to={item.id}><CardItem {...item} /></Link>) : null}
        </div>
    )
}


export default ListPage