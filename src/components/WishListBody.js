import React from 'react';

const WishListBody = () => {
  const wishlistItems = [
    {
      id: 1,
      image: 'img/product-1-2.jpg',
      name: 'J.Crew Mercantile Shirt',
      description: 'The table description about the shirt',
      price: 110,
      stock: 100,
    },
    {
      id: 2,
      image: 'img/product-1-2.jpg',
      name: 'J.Crew Mercantile Shirt',
      description: 'The table description about the shirt',
      price: 110,
      stock: 100,
    },
    {
      id: 3,
      image: 'img/product-1-2.jpg',
      name: 'J.Crew Mercantile Shirt',
      description: 'The table description about the shirt',
      price: 110,
      stock: 100,
    },
    // Add more items here
  ];

  return (
    <section className="wishlist section--lg container">
      <div className="table__container">
        <table class="table">
          <thead>
            <tr>
              <th>Images</th>
              <th>Name</th>
              <th>Price</th>
              <th>Stock Status</th>
              <th>Action</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {wishlistItems.map((item) => (
              <tr key={item.id}>
                <td>
                  <img src={item.image} alt="" className="table__img" />
                </td>
                <td>
                  <h3 className="table__title span">{item.name}</h3>
                  <p className="table__description">{item.description}</p>
                </td>
                <td><span className="table__price">${item.price}</span></td>
                <td><div className="table__stock">{item.stock}</div></td>
                <td><a href="" className="btn btn btn--sm">Add to cart</a></td>
                <td><i className="fi fi-rs-trash table__trash"></i></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default WishListBody;