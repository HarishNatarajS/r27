import React, { useState } from 'react';

function Accountbody() {
  // State to manage active tab
  const [activeTab, setActiveTab] = useState("#dashboard");

  // Handle tab click function
  const handleTabClick = (event) => {
    setActiveTab(event.currentTarget.getAttribute("data-target"));
  };

  return (
    <div>
      {/* Breadcrumb Section */}
      <section className="breadcrumb">
        <ul className="breadcrumb__list container flex container">
          <li><a href="index" className="breadcrumb__link">Home</a></li>
          <li><span className="braedcrumb__link">&gt;</span></li>
          <li><span className="braedcrumb__link">Account</span></li>
        </ul>
      </section>

      {/* Account Section */}
      <section className="accounts section--lg">
        <div className="accounts__container container grid">
          <div className="account__tabs">
            <p 
              className={`account__tab ${activeTab === "#dashboard" ? "active-tab" : ""}`} 
              data-target="#dashboard" 
              onClick={handleTabClick}
            >
              <i className="fi fi-rs-settings-sliders"></i>Dashboard
            </p>

            <p 
              className={`account__tab ${activeTab === "#orders" ? "active-tab" : ""}`} 
              data-target="#orders" 
              onClick={handleTabClick}
            >
              <i className="fi fi-rs-shopping-bag"></i>Orders
            </p>

            <p 
              className={`account__tab ${activeTab === "#update-profile" ? "active-tab" : ""}`} 
              data-target="#update-profile" 
              onClick={handleTabClick}
            >
              <i className="fi fi-rs-user"></i>Update Profile
            </p>

            <p 
              className={`account__tab ${activeTab === "#address" ? "active-tab" : ""}`} 
              data-target="#address" 
              onClick={handleTabClick}
            >
              <i className="fi fi-rs-marker"></i>My address
            </p>

            <p 
              className={`account__tab ${activeTab === "#change-password" ? "active-tab" : ""}`} 
              data-target="#change-password" 
              onClick={handleTabClick}
            >
              <i className="fi fi-rs-user"></i>Change Password
            </p>

            <p className="account__tab">
              <i className="fi fi-rs-exit"></i>Logout
            </p>
          </div>

          <div className="tabs__content">
            <div className={`tab__content ${activeTab === "#dashboard" ? "active-tab" : ""}`} id="dashboard">
              <h3 className="tab__header">Hello Harish!</h3>
              <div className="tab__body">
                <p className="tab__description">
                  Paragraph that will be describing about the user
                </p>
              </div>
            </div>

            <div className={`tab__content ${activeTab === "#orders" ? "active-tab" : ""}`} id="orders">
              <h3 className="tab__header">Your Orders</h3>
              <div className="tab__body">
              <table className="placed__order-table">
                <thead>
                  <tr>
                    <th>Orders</th>
                    <th>Dates</th>
                    <th>Status</th>
                    <th>Total</th>
                    <th>Action</th>
                    <th>Image</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>order id 1</td>
                    <td>24-12-2024</td>
                    <td>Not Delivered</td>
                    <td>$125.00</td>
                    <td><a href="payment.html" className="view__order">View</a></td>
                    <td>
                      <img src="img\product-1-1.jpg" alt="Order 1" className="order__image" style={{ width: '80px', height: 'auto' }}/> {/* Add image */}
                    </td>
                  </tr>
                  <tr>
                    <td>order id 2</td>
                    <td>27-12-2024</td>
                    <td>Delivered</td>
                    <td>$100.00</td>
                    <td><a href="payment.html" className="view__order">View</a></td>
                    <td>
                      <img src="img\product-1-1.jpg" alt="Order 2" className="order__image" style={{ width: '80px', height: 'auto' }}/> {/* Add image */}
                    </td>
                  </tr>
                  <tr>
                    <td>order id 3</td>
                    <td>24-12-2004</td>
                    <td>Cancelled</td>
                    <td>$120.00</td>
                    <td><a href="payment.html" className="view__order">View</a></td>
                    <td>
                      <img src="img\product-1-1.jpg" alt="Order 3" className="order__image" style={{ width: '80px', height: 'auto' }}/> {/* Add image */}
                    </td>
                  </tr>
                  <tr>
                    <td>order id 4</td>
                    <td>22-05-2024</td>
                    <td>Not Delivered</td>
                    <td>$150.00</td>
                    <td><a href="payment.html" className="view__order">View</a></td>
                    <td>
                      <img src="img\product-1-1.jpg" alt="Order 4" className="order__image" style={{ width: '80px', height: 'auto' }}/> {/* Add image */}
                    </td>
                  </tr>
                  <tr>
                    <td>order id 5</td>
                    <td>01-10-2024</td>
                    <td>Delivered</td>
                    <td>$125.00</td>
                    <td><a href="payment.html" className="view__order">View</a></td>
                    <td>
                      <img src="img\product-1-1.jpg" alt="Order 5" className="order__image" style={{ width: '80px', height: 'auto' }}/> {/* Add image */}
                    </td>
                  </tr>
                </tbody>
              </table>

              </div>
            </div>

            <div className={`tab__content ${activeTab === "#update-profile" ? "active-tab" : ""}`} id="update-profile">
              <h3 className="tab__header">Update Profile</h3>
              <div className="tab__body">
                <form action="" className="form grid">
                  <input type="text" placeholder="Username" className="form__input" />
                  <input type="email" placeholder="Email" className="form__input" />
                  <input type="number" placeholder="Phone number" className="form__input" />
                  <div className="form__btn">
                    <button className="btn btn--md">Save</button>
                  </div>
                </form>
              </div>
            </div>

            <div className={`tab__content ${activeTab === "#address" ? "active-tab" : ""}`} id="address">
              <h3 className="tab__header">Shipping Address</h3>
              <div className="tab__body">
                <address className="address">
                  15/1 <br /> Street name <br /> City name <br /> Country <br /> Pin code / ZIP
                </address>
                <a href="" className="edit">Edit</a>
              </div>
            </div>

            <div className={`tab__content ${activeTab === "#change-password" ? "active-tab" : ""}`} id="change-password">
              <h3 className="tab__header">Update Profile</h3>
              <div className="tab__body">
                <form action="" className="form grid">
                  <input type="text" placeholder="Current Password" className="form__input" />
                  <input type="text" placeholder="New Password" className="form__input" />
                  <input type="text" placeholder="Confirm Password" className="form__input" />
                  <div className="form__btn">
                    <button className="btn btn--md">Save</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Accountbody;
