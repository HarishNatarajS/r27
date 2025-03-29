import React from 'react';

const ShowcaseItem = ({ imageUrl, title, newPrice, oldPrice, detailsLink }) => {
  return (
    <div className="showcase__item">
      <a href={detailsLink} className="showcase__img-box">
        <img src={imageUrl} alt={title} className="showcase__img" />
      </a>
      <div className="showcase__content">
        <a href={detailsLink}>
          <h4 className="showcase__title">{title}</h4>
        </a>
        <div className="showcase__price flex">
          <span className="new__price">${newPrice}</span>
          <span className="old__price">${oldPrice}</span>
        </div>
      </div>
    </div>
  );
};

export default ShowcaseItem;
