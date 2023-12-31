import { useDispatch } from "react-redux";
import { setFavorites } from "../../store/slices/favoritesSlice";
import { Link } from "react-router-dom";
import "./CardItem.scss";
import { Item } from "../../types/types";

function CardItem(item: Item) {
    const dispatch = useDispatch();
    const baseUrl = "https://testbackend.nc-one.com";

    function handleClick(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        e.preventDefault();
        dispatch(setFavorites(item));
    }

    return (
        <Link key={item.id} to={item.id.toString()}>
            <div className="card-item">
                <div className="card-item-img">
                    <img src={baseUrl + item.src} alt={item.name} />
                </div>
                <div className="card-item-name">{item.name}</div>
                <div className="card-item-info">
                    <div className="card-item-price">$ {item.price}</div>
                    <button onClick={(e) => handleClick(e)}>
                        <svg
                            className="svg-heart"
                            xmlns="http://www.w3.org/2000/svg"
                            width="36"
                            height="36"
                            viewBox="0 0 36 36"
                            fill="none"
                        >
                            <path
                                d="M6.75 2.25C5.55653 2.25 4.41193 2.72411 3.56802 3.56802C2.72411 4.41193 2.25 5.55653 2.25 6.75V29.25C2.25 30.4435 2.72411 31.5881 3.56802 32.432C4.41193 33.2759 5.55653 33.75 6.75 33.75H29.25C30.4435 33.75 31.5881 33.2759 32.432 32.432C33.2759 31.5881 33.75 30.4435 33.75 29.25V6.75C33.75 5.55653 33.2759 4.41193 32.432 3.56802C31.5881 2.72411 30.4435 2.25 29.25 2.25H6.75ZM18 12.9825C18 12.9825 19.5863 10.5413 21.645 10.1813C26.7525 9.2925 28.8562 13.7587 28.0012 17.0775C26.4825 23.0063 18 28.1812 18 28.1812C18 28.1812 9.5175 23.0063 7.99875 17.0887C7.155 13.77 9.25875 9.2925 14.355 10.1925C16.4138 10.5525 18 12.9825 18 12.9825Z"
                                fill="#FFCC26"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </Link>
    );
}

export default CardItem;
