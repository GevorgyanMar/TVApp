import React from "react";
import user from "../../assets/images/user.png";
import "./auth.scss";

const Auth = () => {
  return (
    <div className="auth-block">
      <img src={user} alt="" />
      <h3>Daniel</h3>
    </div>
  );
};

export default Auth;
