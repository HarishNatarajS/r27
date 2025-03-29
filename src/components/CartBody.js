import React, { useState } from 'react';

const CartBody = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      image: '/img/product-1-2.jpg',
      name: 'J.Crew Mercantile Shirt',
      description: 'The table description about the shirt',
      price: 110,
      quantity: 3,
    },
    {
        id: 2,
        image: '/img/product-1-2.jpg',
        name: 'J.Crew Mercantile Shirt',
        description: 'The table description about the shirt',
        price: 110,
        quantity: 3,
    },
    {
        id: 3,
        image: '/img/product-1-2.jpg',
        name: 'J.Crew Mercantile Shirt',
        description: 'The table description about the shirt',
        price: 110,
        quantity: 3,
    },
      
    // Add more cart items here
  ]);

  const handleQuantityChange = (index, newQuantity) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems[index].quantity = newQuantity;
    setCartItems(updatedCartItems);
  };

  const calculateSubtotal = (item) => {
    return item.price * item.quantity;
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <section className="cart section--lg container">
      <div className="table__container">
        <table class="table">
          <thead>
            <tr>
              <th>Images</th>
              <th>Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Subtotal</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item, index) => (
              <tr key={item.id}>
                <td>
                  <img src={item.image} alt="" className="table__img" />
                </td>
                <td>
                  <h3 className="table__title span">{item.name}</h3>
                  <p className="table__description">{item.description}</p>
                </td>
                <td><span className="table__price">${item.price}</span></td>
                <td>
                  <input
                    type="number"
                    value={item.quantity}
                    onChange={(e) => handleQuantityChange(index, parseInt(e.target.value))}
                    className="quantity"
                  />
                </td>
                <td><span className="table__subtotal">${calculateSubtotal(item)}</span></td>
                <td><i className="fi fi-rs-trash table__trash"></i></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="cart__actions">
        <a href="" className="btn flex btn--md">
          <i className="fi-rs-shuffle"></i>Update Cart
        </a>
        <a href="" className="btn flex btn--md">
          <i className="fi-rs-shopping-bag"></i>Continue Shopping
        </a>
      </div>

      <div className="divider">
        <i className="fi fi-rs-fingerprint"></i>
      </div>

      <div className="cart__group grid">
        <div>
          <div className="cart__shipping">
            <h3 className="section__title">Calculate Shipping</h3>

            <form action="" className="form grid">
              <input type="text" placeholder="State / Country" className="form__input" />

              <div className="cart__group grid">
                <input type="text" placeholder="City" className="form__input" />
                <input type="text" placeholder="PostCode / ZIP" className="form__input" />
              </div>

              <a href="" className="btn flex btn--md">
                <i className="fi-rs-shuffle"></i>Update
              </a>
            </form>
          </div>

          <div className="cart__coupon">
            <h3 className="section__title">Appy Coupon</h3>

            <form action="" className="coupon__form flex">
              <div className="form__group">
                <input
                  type="text"
                  className="form__input"
                  placeholder="Enter your coupon"
                />
              </div>
              <a href="" className="btn flex btn--md">
                <i className="fi-rs-label"></i>Apply Coupon
              </a>
            </form>
          </div>
        </div>

        <div className="cart__total">
          <h3 className="section__title">Cart Total</h3>

          <table class="cart__total-table">
            <tr>
              <td><div className="cart__total-price">Cart Subtotal</div></td>
              <td><span className="cart__total-price">${calculateTotal()}</span></td>
            </tr>

            <tr>
              <td><div className="cart__total-price">Shipping</div></td>
              <td><span className="cart__total-price">$100.00</span></td>
            </tr>

            <tr>
              <td><div className="cart__total-price">Total</div></td>
              <td>
                <span className="cart__total-price">
                  ${calculateTotal() + 100} 
                </span>
              </td>
            </tr>
          </table>

          <a href="checkout" className="btn flex btn--md">
            <i className="fi-rs-box-alt"></i>Proceed to Checkout
          </a>
        </div>
      </div>
    </section>
  );
};

export default CartBody;