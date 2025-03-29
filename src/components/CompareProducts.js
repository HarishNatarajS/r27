import React, { useState } from 'react';

const CompareProducts = ({ products }) => {
  const [displayedProducts, setDisplayedProducts] = useState(products.slice(0, 3));

  const handleShowMore = () => {
    setDisplayedProducts(products);
  };

  return (
    <section className="compare container section--lg">
      <table className="compare__table">
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Price</th>
            <th>Description</th>
            <th>Colors</th>
            <th>Stock</th>
            <th>Buy</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {displayedProducts.map((product) => (
            <tr key={product.id}> 
              <td><img src={product.image} alt="" className="compare__img" style={{ width: '80px', height: 'auto' }}/></td>
              <td><h3 className="table__title">{product.name}</h3></td>
              <td><div className="table__price">${product.price}</div></td>
              <td><p className="table__description">{product.description}</p></td>
              <td>
                <ul className="color__list compare__colors">
                  {product.colors.map((color) => (
                    <li key={color}>
                      <a href="#" className="color__link" style={{ backgroundColor: color }} />
                    </li>
                  ))}
                </ul>
              </td>
              <td><div className="table__stock">{product.stock}</div></td>
              <td><a href="" className="btn btn--sm">Add to cart</a></td>
              <td><i className="fi fi-rs-trash table__trash"></i></td>
            </tr>
          ))}
        </tbody>
      </table>
      {displayedProducts.length < products.length && (
        <button onClick={handleShowMore} className="btn btn--sm">Show All</button>
      )}
    </section>
  );
};

// Sample product data (replace with your actual data)
const sampleProducts = [
  {
    id: 1,
    image: '/img/product-2-1.jpg',
    name: 'Title 1',
    price: 35,
    description: 'Decription 1',
    colors: ['blueviolet', 'hsl(353, 100%, 67%)', 'hsl(126, 61%, 52%)'],
    stock: 105,
  },
  {
    id: 2,
    image: '/img/product-1-1.jpg',
    name: 'Title 2',
    price: 67,
    description: 'Decription 1',
    colors: ['blueviolet', 'hsl(353, 100%, 67%)', 'hsl(126, 61%, 52%)'],
    stock: 70,
  },
  {
    id: 3,
    image: '/img/product-6-1.jpg',
    name: 'Title 3',
    price: 54,
    description: 'Decription 1',
    colors: ['blueviolet', 'hsl(353, 100%, 67%)', 'hsl(126, 61%, 52%)'],
    stock: 84,
  },
];

export default () => <CompareProducts products={sampleProducts} />;