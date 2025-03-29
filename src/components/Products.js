import React, { useState } from 'react';
import ProductItem from './ProductItem';

const Products = () => {
  const [activeTab, setActiveTab] = useState('#featured');

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  const featuredProducts = [
    {
      imageUrl: 'img/product-1-1.jpg',
      imageHoverUrl: 'img/product-1-2.jpg',
      category: 'Clothing',
      title: 'Colourful Pattern Shirts',
      rating: 5,
      newPrice: '$238.8',
      oldPrice: '$245.8',
      badge: 'Hot',
      badgeColor: 'light-pink',
    },
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
      imageUrl: 'img/product-1-1.jpg',
      imageHoverUrl: 'img/product-1-2.jpg',
      category: 'Clothing',
      title: 'Colourful Pattern Shirts',
      rating: 5,
      newPrice: '$238.8',
      oldPrice: '$245.8',
      badge: 'Hot',
      badgeColor: 'light-pink',
    },
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
      imageUrl: 'img/product-1-1.jpg',
      imageHoverUrl: 'img/product-1-2.jpg',
      category: 'Clothing',
      title: 'Colourful Pattern Shirts',
      rating: 5,
      newPrice: '$238.8',
      oldPrice: '$245.8',
      badge: 'Hot',
      badgeColor: 'light-pink',
    },
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
      imageUrl: 'img/product-1-1.jpg',
      imageHoverUrl: 'img/product-1-2.jpg',
      category: 'Clothing',
      title: 'Colourful Pattern Shirts',
      rating: 5,
      newPrice: '$238.8',
      oldPrice: '$245.8',
      badge: 'Hot',
      badgeColor: 'light-pink',
    },
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
  ];
  
  const popularProducts = [
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
        imageUrl: 'img/product-1-1.jpg',
        imageHoverUrl: 'img/product-1-2.jpg',
        category: 'Clothing',
        title: 'Colourful Pattern Shirts',
        rating: 5,
        newPrice: '$238.8',
        oldPrice: '$245.8',
        badge: 'Hot',
        badgeColor: 'light-pink',
      },
    {
        imageUrl: 'img/product-1-1.jpg',
        imageHoverUrl: 'img/product-1-2.jpg',
        category: 'Clothing',
        title: 'Colourful Pattern Shirts',
        rating: 5,
        newPrice: '$238.8',
        oldPrice: '$245.8',
        badge: 'Hot',
        badgeColor: 'light-pink',
    },
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
          imageUrl: 'img/product-1-1.jpg',
          imageHoverUrl: 'img/product-1-2.jpg',
          category: 'Clothing',
          title: 'Colourful Pattern Shirts',
          rating: 5,
          newPrice: '$238.8',
          oldPrice: '$245.8',
          badge: 'Hot',
          badgeColor: 'light-pink',
        },
      {
          imageUrl: 'img/product-1-1.jpg',
          imageHoverUrl: 'img/product-1-2.jpg',
          category: 'Clothing',
          title: 'Colourful Pattern Shirts',
          rating: 5,
          newPrice: '$238.8',
          oldPrice: '$245.8',
          badge: 'Hot',
          badgeColor: 'light-pink',
      },
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
          imageUrl: 'img/product-1-1.jpg',
          imageHoverUrl: 'img/product-1-2.jpg',
          category: 'Clothing',
          title: 'Colourful Pattern Shirts',
          rating: 5,
          newPrice: '$238.8',
          oldPrice: '$245.8',
          badge: 'Hot',
          badgeColor: 'light-pink',
        },
      {
          imageUrl: 'img/product-1-1.jpg',
          imageHoverUrl: 'img/product-1-2.jpg',
          category: 'Clothing',
          title: 'Colourful Pattern Shirts',
          rating: 5,
          newPrice: '$238.8',
          oldPrice: '$245.8',
          badge: 'Hot',
          badgeColor: 'light-pink',
      },
    // Add more popular products here
  ];

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
        imageUrl: 'img/product-2-1.jpg',
        imageHoverUrl: 'img/product-2-2.jpg',
        category: 'Shoes',
        title: 'Stylish Running Shoes',
        rating: 4,
        newPrice: '$150.0',
        oldPrice: '$200.0',
        badge: 'Sale',
        badgeColor: 'light-green',
      }
    // Add more newly added products here
  ];

  const getProductsByTab = () => {
    switch (activeTab) {
      case '#featured':
        return featuredProducts;
      case '#popular':
        return popularProducts;
      case '#new-added':
        return newProducts;
      default:
        return [];
    }
  };

  return (
    <section className="section container">
      <div className="tab__btns">
        <span
          className={`tab__btn ${activeTab === '#featured' ? 'active-tab' : ''}`}
          onClick={() => handleTabClick('#featured')}
        >
          Featured
        </span>
        <span
          className={`tab__btn ${activeTab === '#popular' ? 'active-tab' : ''}`}
          onClick={() => handleTabClick('#popular')}
        >
          Popular
        </span>
        <span
          className={`tab__btn ${activeTab === '#new-added' ? 'active-tab' : ''}`}
          onClick={() => handleTabClick('#new-added')}
        >
          Newly Added
        </span>
      </div>

      <div className="tab__items">
        <div className="tab__item active-tab">
          <div className="product__container grid">
            {getProductsByTab().map((product, index) => (
              <ProductItem key={index} product={product} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;