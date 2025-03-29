import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import the useNavigate hook
import Header from "../components/Header";
import LoginRegister from "../components/LoginRegister";
import "../App.css";

export default function Login() {
  const [hiddenLayout, setHiddenLayout] = useState("register"); // State to manage the form type
  const navigate = useNavigate(); // Hook to navigate programmatically

  const toggleFormType = (type) => {
    setHiddenLayout(type); // Update the form type (login/register)
    navigate(type === "login" ? "/login" : "/signup"); // Change the URL based on form type
  };

  return (
    <>
      {/* Pass the current tab dynamically based on the layout */}
      <Header currentTab={hiddenLayout === "login" ? "Login" : "Register"} />
      <section className="breadcrumb">
        <ul className="breadcrumb__list container flex container">
          <li>
            <a href="index" className="breadcrumb__link">
              Home
            </a>
          </li>
          <li>
            <span className="breadcrumb__link">&gt;</span>
          </li>
          <li>
            <span className="breadcrumb__link">
              {hiddenLayout === "login" ? "Login" : "Register"}
            </span>
          </li>
        </ul>
      </section>
      {/* Pass down the state and toggle function */}
      <LoginRegister hiddenLayout={hiddenLayout} setHiddenLayout={toggleFormType} />
    </>
  );
}
