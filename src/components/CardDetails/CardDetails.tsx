import './CardDetails.scss'
import {useEffect, useState} from "react";
import {getImage} from "../../services/image";
import { useSearchParams } from 'react-router-dom';

function CardDetails() {
    const [searchParams] = useSearchParams();
    console.log(searchParams);
    const [data, setData] = useState<any>(null);
    useEffect(() => {
        getImage(id).then(res => setData(res));
    }, []);
    return (
        <div className='card-details'>
            <div className='card-details-img'>
            </div>
            <div className='card-details-content'>
                <div className='card-details-name'>Shloimys Sprinkles Cookies</div>
                <div className='card-details-info'>
                    <div className='card-details-price'>$ 8.99</div>
                    <button className='card-details-heart'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="98" height="98" viewBox="0 0 98 98" fill="none">
                        <rect x="8.16669" y="8.16663" width="81.6667" height="81.6667" rx="7" fill="#414141"/>
                        <path d="M18.375 6.125C15.1261 6.125 12.0103 7.41562 9.71294 9.71294C7.41562 12.0103 6.125 15.1261 6.125 18.375V79.625C6.125 82.8739 7.41562 85.9897 9.71294 88.2871C12.0103 90.5844 15.1261 91.875 18.375 91.875H79.625C82.8739 91.875 85.9897 90.5844 88.2871 88.2871C90.5844 85.9897 91.875 82.8739 91.875 79.625V18.375C91.875 15.1261 90.5844 12.0103 88.2871 9.71294C85.9897 7.41562 82.8739 6.125 79.625 6.125H18.375ZM49 35.3412C49 35.3412 53.3181 28.6956 58.9225 27.7156C72.8262 25.2963 78.5531 37.4544 76.2256 46.4888C72.0912 62.6281 49 76.7156 49 76.7156C49 76.7156 25.9088 62.6281 21.7744 46.5194C19.4775 37.485 25.2044 25.2963 39.0775 27.7463C44.6819 28.7263 49 35.3412 49 35.3412Z" fill="#FFCC26"/>
                    </svg>
                    </button>
                </div>
            </div>
        </div>
    )
}


export default CardDetails