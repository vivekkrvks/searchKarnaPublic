import React from 'react';
import './SearchResult.css';
// import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { MdSearch, MdDoneAll, MdClearAll, MdPanorama, MdLock, MdPublic, MdDeleteForever } from "react-icons/md";

// import StarIcon from "@mui/icons-material/Star";

function SearchResult({
    img,
    location,
    title,
    description,
    star,
    price,
    total,
}) {
    return (
        <div className='searchResult'>
            <img src={img} alt="" />
            <MdDoneAll className="searchResult__heart" />

            <div className='searchResult__info'>
                <div className="searchResult__infoTop">
                    <p>{location}</p>
                    <h3>{title}</h3>
                    <p>____</p>
                    <p>{description}</p>
                </div>

                <div className="searchResult__infoBottom">
                    <div className="searchResult__stars">
                        <MdLock className="searchResult__star" />
                        <p>
                            <strong>{star}</strong>
                        </p>
                    </div>
                    <div className='searchResults__price'>
                        <h2>{price}</h2>
                        <p>{total}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchResult
