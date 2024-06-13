/** @format */

import React from "react";
import "./style.css";
import Image from "next/image";

const login = () => {
  return (
    <div className="login">
      <div className="content_login w-fit flex flex-col gap-[1rem] items-center">
        <div className="logo">
          <Image
            src="/assets/images/logo.svg"
            width={100}
            height={100}
            alt="logo"
          />
        </div>
        <h1>Sign in to Pioneer</h1>
        <form>
          <span className="email">
            <label htmlFor="email">Username or email address</label>
            <input type="email" name="email" id="email" />
          </span>
          <span className="password">
            <div>
              <label htmlFor="email">Password</label>
              <label htmlFor="email">Forgot password</label>
            </div>
            <input type="email" name="email" id="email" />
          </span>
          <span>
            <button>Sign in</button>
          </span>
        </form>
        <div className="bottom_login">
          <p>Sign in with a passkey</p>
          <p>New to Pioneer ? Create an account</p>
        </div>
      </div>
    </div>
  );
};

export default login;
