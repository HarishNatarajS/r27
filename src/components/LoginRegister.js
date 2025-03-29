import React from "react";
import { useNavigate } from "react-router-dom";

const LoginRegister = ({ hiddenLayout = "register", setHiddenLayout }) => {
  const isLoginFormVisible = hiddenLayout === "login";
  const navigate = useNavigate(); // Hook to programmatically navigate

  const handleFormSwitch = (type) => {
    setHiddenLayout(type); // Update the layout state
    navigate(type === "login" ? "/login" : "/register"); // Change the URL
  };

  return (
    <section className="login-register section--lg">
      <div className="login-register__container container">
        {isLoginFormVisible ? (
          <div className="login">
            <h3 className="section__title">Login</h3>
            <form action="" className="form grid">
              <input type="email" placeholder="Your Email" className="form__input" />
              <input type="password" placeholder="Your Password" className="form__input" />
              <div className="form__btn grid">
                <button type="button" className="btn">Login</button>
                <button
                  type="button"
                  className="btn"
                  onClick={() => handleFormSwitch("register")}
                >
                  New User
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="register">
            <h3 className="section__title">Create An Account</h3>
            <form action="" className="form grid">
              <input type="text" placeholder="Username" className="form__input" />
              <input type="email" placeholder="Your Email" className="form__input" />
              <input type="password" placeholder="Your Password" className="form__input" />
              <input type="password" placeholder="Confirm Password" className="form__input" />
              <div className="form__btn grid">
                <button type="button" className="btn">Submit & Register</button>
                <button
                  type="button"
                  className="btn"
                  onClick={() => handleFormSwitch("login")}
                >
                  Existing User
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </section>
  );
};

export default LoginRegister;
