import React from 'react';

const ProductItem = ({ product }) => {
  // Generate rating stars dynamically based on the rating
  const renderRating = () => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <i key={i} className={`fi fi-rs-star ${i >= product.rating ? 'empty' : ''}`}></i>
      );
    }
    return stars;
  };

  return (
    <div className="product__item">
      <div className="product__banner">
        <a href="details" className="product__images">
          <img src={product.imageUrl} alt="" className="product__img default" />
          <img src={product.imageHoverUrl} alt="" className="product__img hover" />
        </a>
        <div className="product__actions">
          <a href="#" className="action__btn" aria-label="Quick View">
            <i className="fi fi-rs-eye"></i>
          </a>
          <a href="#" className="action__btn" aria-label="Add to Wishlist">
            <i className="fi fi-rs-heart"></i>
          </a>
          <a href="#" className="action__btn" aria-label="Compare">
            <i className="fi fi-rs-shuffle"></i>
          </a>
        </div>
        <div className={`product__badge ${product.badgeColor}`}>{product.badge}</div>
      </div>
      <div className="product__content">
        <span className="product__category">{product.category}</span>
        <a href="details">
          <h3 className="product__title">{product.title}</h3>
        </a>
        <div className="product__rating">{renderRating()}</div>
        <div className="product__price flex">
          <span className="new__price">{product.newPrice}</span>
          <span className="old__price">{product.oldPrice}</span>
        </div>
        <a href="#" className="action__btn cart__btn" aria-label="Add To Cart">
          <i className="fi fi-rs-shopping-bag-add"></i>
        </a>
      </div>
    </div>
  );
};

export default ProductItem;
