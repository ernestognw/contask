import React from "react";
import './auth-layout.css';

function AuthLayout(props) {
  return (
    <main>
      <div className="text-center auth-container">
        <a className="mb-3 text-center mr-lg-5" href="/">
          <img src="/images/isotype.svg" alt="isotype" height="50" />
          <img src="/images/logotype-white.svg" alt="logotype-white" height="50"
          />
        </a>
        {props.children}        
      </div>
    </main>
  );
}

export default AuthLayout;
