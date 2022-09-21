import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Rating from "./Rating";
import Price from "./Price";

function Book({ book }) {
  //   console.log(new Array(4).fill(0).map(() => <FontAwesomeIcon icon="star" />));

  const [img, setImg] = useState();

  const mountedRef = useRef(true);

  useEffect(() => {
    const image = new Image();
    image.src = book.url;
    image.onload = () => {
      if (mountedRef.current) {
        setImg(image);
      }
    };
    return () => {
      mountedRef.current = false;
    };
  });
  return (
    <div className="book">
      {img ? (
        <>
          <Link to={`/books/${book.id}`}>
            <figure className="book__img--wrapper">
              <img src={img.src} alt="" className="book__img" />
            </figure>
          </Link>
          <div className="book__title">
            <Link to={`/books/${book.id}`} className="book__title--link">
              {book.title}
            </Link>
          </div>
          <div className="book__ratings">
            <Rating rating={book.rating} />
          </div>
          <Price
            originalPrice={book.originalPrice}
            salePrice={book.salePrice}
          />
        </>
      ) : (
        <>
          <div className="book__img--skeleton">
            <div className="skeleton book__title--skeleton"></div>
            <div className="skeleton book__rating--skeleton"></div>
            <div className="skeleton book__price--skeleton"></div>
          </div>
        </>
      )}
    </div>
  );
}

export default Book;
