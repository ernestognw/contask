import React from "react";
import './auth-layout.css';
import { Link } from 'react-router-dom';

function AuthLayout(props) {
  return (
    <main>
      <div className="text-center auth-container">
        <Link to="/" className="mb-3 text-center mr-lg-5">
          <img src="/images/isotype.svg" alt="isotype" height="50" />
          <img src="/images/logotype-white.svg" alt="logotype-white" height="50"
          />
        </Link>
        {props.children}        
      </div>
    </main>
  );
}

export default AuthLayout;
