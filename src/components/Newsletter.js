import React from 'react';

const Newsletter = () => {
  return (
    <div className="newsletter section home__newsletter">
      <div className="newsletter__container container grid">
        <h3 className="newsletter__title flex">
          <img 
            src="img/icon-email.svg" 
            alt="Email Icon" 
            className="newsletter__icon" 
          />
          Sign up to Newsletter
        </h3>
        <p className="newsletter__description">
          ...and receive $25 coupon for first shopping
        </p>

        <form action="" className="newsletter__form">
          <input 
            type="text" 
            placeholder="Enter your email" 
            className="newsletter__input" 
          />
          <button 
            type="submit" 
            className="newsletter__btn"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default Newsletter;
