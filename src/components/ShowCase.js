import React from 'react';
import ShowCaseItem from './ShowCaseItem';

const ShowCase = () => {
  const newProducts = [
    {
      imageUrl: 'img/product-2-1.jpg',
      imageHoverUrl: 'img/product-2-2.jpg',
      category: 'Shoes',
      title: 'Stylish Running Shoes',
      rating: 4,
      newPrice: '$150.0',
      oldPrice: '$200.0',
      badge: 'Sale',
      badgeColor: 'light-green',
    },
    {
      imageUrl: 'img/product-3-1.jpg',
      imageHoverUrl: 'img/product-3-2.jpg',
      category: 'Accessories',
      title: 'Leather Handbags',
      rating: 4.5,
      newPrice: '$120.0',
      oldPrice: '$130.0',
      badge: 'New',
      badgeColor: 'light-blue',
    },
    {
        imageUrl: 'img/product-3-1.jpg',
        imageHoverUrl: 'img/product-3-2.jpg',
        category: 'Accessories',
        title: 'Leather Handbags',
        rating: 4.5,
        newPrice: '$120.0',
        oldPrice: '$130.0',
        badge: 'New',
        badgeColor: 'light-blue',
      },
    // Add more newly added products here
  ];

  return (
    <section className="showcase section">
      <div className="showcase__container container grid">
        {/* Hot Releases */}
        <div className="showcase__wrapper">
          <h3 className="section__title">Hot Releases</h3>
          {newProducts.map((product, index) => (
            <ShowCaseItem
              key={index}
              imageUrl={product.imageUrl}
              title={product.title}
              newPrice={product.newPrice}
              oldPrice={product.oldPrice}
              detailsLink="details" // Customize this as needed
            />
          ))}
        </div>

        {/* Deals & Outlet */}
        <div className="showcase__wrapper">
          <h3 className="section__title">Deals & Outlet</h3>
          {newProducts.map((product, index) => (
            <ShowCaseItem
              key={`deal-${index}`}
              imageUrl={product.imageUrl}
              title={product.title}
              newPrice={product.newPrice}
              oldPrice={product.oldPrice}
              detailsLink="details"
            />
          ))}
        </div>

        {/* Top Selling */}
        <div className="showcase__wrapper">
          <h3 className="section__title">Top Selling</h3>
          {newProducts.map((product, index) => (
            <ShowCaseItem
              key={`top-${index}`}
              imageUrl={product.imageUrl}
              title={product.title}
              newPrice={product.newPrice}
              oldPrice={product.oldPrice}
              detailsLink="details"
            />
          ))}
        </div>

        {/* Trendy */}
        <div className="showcase__wrapper">
          <h3 className="section__title">Trendy</h3>
          {newProducts.map((product, index) => (
            <ShowCaseItem
              key={`deal-${index}`}
              imageUrl={product.imageUrl}
              title={product.title}
              newPrice={product.newPrice}
              oldPrice={product.oldPrice}
              detailsLink="details"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShowCase;