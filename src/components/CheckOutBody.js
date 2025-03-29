import React, { useState } from 'react';

const CheckoutBody = () => {
  const [orderItems] = useState([
    {
      image: 'img/product-1-1.jpg',
      name: 'Henley shirt',
      quantity: 2,
      price: 90,
    },
    {
      image: 'img/product-2-1.jpg',
      name: 'Henley shirt',
      quantity: 1,
      price: 45,
    },
    {
      image: 'img/product-6-1.jpg',
      name: 'Henley shirt',
      quantity: 3,
      price: 150,
    },
  ]);

  const calculateSubtotal = () => {
    return orderItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const subtotal = calculateSubtotal();

  return (
    <section className="checkout section--lg">
      <div className="checkout__container container grid">
        <div className="checkout__group">
          <h3 className="section__title">Billing Details</h3>
          <form action="" className="form grid">
            <input type="text" placeholder="Name" className="form__input" />
            <input type="text" placeholder="Address" className="form__input" />
            <input type="text" placeholder="City" className="form__input" />
            <input type="text" placeholder="Country" className="form__input" />
            <input type="text" placeholder="Postcode" className="form__input" />
            <input type="text" placeholder="Phone" className="form__input" />
            <input type="email" placeholder="Email" className="form__input" />

            <h3 className="checkout__title">Additional Information</h3>
            <textarea
              name=""
              placeholder="Order Note"
              id=""
              cols="30"
              rows="10"
              className="form__input textarea"
            ></textarea>
          </form>
        </div>

        <div className="checkout__group">
          <h3 className="section__title">Cart Total</h3>
          <table class="order__table">
            <tr>
              <th colSpan="2">Products</th>
              <th>Total</th>
            </tr>
            {orderItems.map((item) => (
              <tr key={item.name}>
                <td><img src={item.image} alt="" className="order__img" /></td>
                <td>
                  <h3 className="table__title">{item.name}</h3>
                  <p className="table__quantity">x {item.quantity}</p>
                </td>
                <td><div className="table__price">${item.price * item.quantity}.00</div></td>
              </tr>
            ))}
            <tr>
              <td><div className="order__subtitle">SubTotal</div></td>
              <td colSpan="2">
                <span className="table__price">${subtotal}.00</span>
              </td>
            </tr>
            <tr>
              <td><div className="order__subtitle">Shipping</div></td>
              <td colSpan="2">
                <span className="table__price">Free shipping</span>
              </td>
            </tr>
            <tr>
              <td><span className="order__subtitle">Total</span></td>
              <td colSpan="2">
                <span className="order__grad-total">${subtotal}.00</span>
              </td>
            </tr>
          </table>

          <div className="payment__methods">
            <h3 className="checkout__title payment__title">Payment</h3>

            <div className="payment__option flex">
              <input
                type="radio"
                checked
                className="payment__input"
                name="payment-method"
                id="online-transfer"
              />
              <label htmlFor="online-transfer" className="payment__label">
                Online Transfer
              </label>
            </div>

            <div className="payment__option flex">
              <input
                type="radio"
                className="payment__input"
                name="payment-method"
                id="cash-on-delivery"
              />
              <label htmlFor="cash-on-delivery" className="payment__label">
                Cash On Delivery
              </label>
            </div>
          </div>
          <a href="#" className="btn flex btn--md">
            <i className="fi fi-rs-box-alt"></i>Click To Pay
          </a>
        </div>
      </div>
    </section>
  );
};

export default CheckoutBody;