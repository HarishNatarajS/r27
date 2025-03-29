import React, { useState } from 'react';

const DetailBody = () => {
  const [activeTab, setActiveTab] = useState('info');

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  const reviews = [
    {
      id: 1,
      avatar: '/img/avatar-1.jpg',
      name: 'Jacky Chan',
      rating: 5,
      comment: 'Thank you very fast shipping from Poland only 3 days.',
      date: 'December 4, 2024 at 3:12 pm',
    },
    {
      id: 2,
      avatar: '/img/avatar-2.jpg',
      name: 'John Doe',
      rating: 4,
      comment: 'Good quality product.',
      date: 'December 2, 2024 at 10:30 am',
    },
    {
      id: 3,
      avatar: '/img/avatar-3.jpg',
      name: 'Jane Smith',
      rating: 3,
      comment: 'Comfortable fit.',
      date: 'November 28, 2024 at 5:00 pm',
    },
  ];

  const Review = ({ review }) => (
    <div className="review__single">
      <div>
        <img src={review.avatar} alt="" className="review__img" />
        <h4 className="review__title">{review.name}</h4>
      </div>
      <div className="review__data">
        <div className="review__rating">
          {[...Array(review.rating)].map((_, i) => (
            <i key={i} className="fi fi-rs-star"></i>
          ))}
        </div>
        <p className="review__description">{review.comment}</p>
        <span className="review__date">{review.date}</span>
      </div>
    </div>
  );

  return (
    <section className="details section--lg">
      <div className="details__container container grid">
        <div className="details__group">
          <img src="img/product-8-1.jpg" alt="" className="details__img" />
          <div className="details__small-images grid">
            <img src="img/product-8-1.jpg" alt="" className="details__small-img" />
            <img src="img/product-8-2.jpg" alt="" className="details__small-img" />
            <img src="img/product-8-1.jpg" alt="" className="details__small-img" />
          </div>
        </div>

        <div className="details__group">
          <h3 className="details__title">Henley Shirt</h3>
          <p className="details__brand">Brand: <span>adidas</span></p>

          <div className="details__price flex">
            <span className="new__price">$116</span>
            <span className="old__price">$118</span>
            <span className="save__price">$2</span>
          </div>
          <p className="short__description">
            This is a shirt and this shirt is very good. It is made 
            up of cotton 
          </p>

          <ul className="product__list">
            <li className="list__item flex">
              <i className="fi-rs-crown fi-color"></i> 1 year cloth warranty
            </li>
            <li className="list__item flex">
              <i className="fi-rs-refresh fi-color"></i>Return policy
            </li>
            <li className="list__item flex">
              <i className="fi-rs-credit-card fi-color"></i> Cash on delivery
            </li>
          </ul>

          {/* ... other product details */} 
        </div>
      </div>

      <section className="details__tab container">
        <div className="detail__tabs">
          <div
            className={`detail__tab ${activeTab === 'info' ? 'active-tab' : ''}`}
            onClick={() => handleTabClick('info')}
          >
            Additional info
          </div>
          <div
            className={`detail__tab ${activeTab === 'reviews' ? 'active-tab' : ''}`}
            onClick={() => handleTabClick('reviews')}
          >
            Reviews ({reviews.length})
          </div>
        </div>

        <div className="details__tab-content" id="content-container">
          <div
            id="info-content"
            className={`tab-content ${activeTab === 'info' ? 'active' : ''}`}
          >
            <table class="info__table">
              <tr><th>Stand Up</th><td>Neatly folded, presented upright in package</td></tr>
              <tr><th>Material</th><td>100% Premium Cotton</td></tr>
              <tr><th>Fit</th><td>Regular Fit (Slim Fit option available)</td></tr>
              <tr><th>Color Options</th><td>White, Light Blue, Charcoal Gray</td></tr>
              <tr><th>Sizes Available</th><td>S, M, L, XL, XXL</td></tr>
              <tr><th>Collar Style</th><td>Button-down collar</td></tr>
              <tr><th>Care Instructions</th><td>Machine washable; tumble dry low; iron on low if needed</td></tr>
              <tr><th>Price</th><td>$116</td></tr>
            </table>
          </div>

          <div 
            id="reviews-content" 
            className={`tab-content ${activeTab === 'reviews' ? 'active' : ''}`}
          >
            <div className="review__container grid">
              {reviews.map((review) => (
                <Review key={review.id} review={review} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default DetailBody;