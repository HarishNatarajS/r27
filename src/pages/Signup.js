import React from "react";
import Header from "../components/Header";
import LoginRegister from "../components/LoginRegister";
import '../App.css';

export default function Signup({ hiddenLayout = "login" }) {
  return (
    <>
      <Header currentTab="login" />
      <section className="breadcrumb">
        <ul className="breadcrumb__list container flex container">
          <li><a href="index" className="breadcrumb__link">Home</a></li>
          <li><span className="breadcrumb__link">&gt;</span></li>
          <li><span className="breadcrumb__link">SignUp</span></li>
        </ul>
      </section>
      <LoginRegister hiddenLayout={hiddenLayout} />
    </>
  );
}