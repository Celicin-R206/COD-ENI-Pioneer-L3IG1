/** @format */
"use client";

import React, { useState } from "react";
import "./style.css";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { useLogin } from "@/lib/swr/auth";

const Register = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting, errors },
  } = useForm();

  const { login } = useLogin();
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (data) => {
    try {
      setIsLoading(true);
      const response = await login(data.code, data.password);
      console.log(response);
    } catch (error) {
      console.error("Failed to register:", error);
    } finally {
      setIsLoading(false);
      reset();
    }
  };

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
        <h1>S'inscrire à citizens connect</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <span className="email">
            <label htmlFor="code">CIN ou code Copie</label>
            <input
              type="code"
              name="code"
              id="code"
              {...register("code", { required: "Code is required" })}
            />
            {errors.code && <p className="error">{errors.code.message}</p>}
          </span>
          <span className="password">
            <div>
              <label htmlFor="password">Password</label>
            </div>
            <input
              type="password"
              name="password"
              id="password"
              {...register("password", { required: "Password is required" })}
            />
            {errors.password && (
              <p className="error">{errors.password.message}</p>
            )}
          </span>
          <span>
            <button type="submit" disabled={isSubmitting}>
              S'identifier
            </button>
          </span>
        </form>
        <div className="bottom_login">
          <p>Sign in with a passkey</p>
          <p>New to Pioneer? Create an account</p>
        </div>
      </div>
      {isLoading && (
        <div className="absolute left-0 top-0 w-full flex items-center h-[100vh] bg-[#00000052] justify-center">
          {" "}
          <svg
            viewBox="0 0 24 24"
            className="fill-[#f8ae06] w-[45px]"
            xmlns="http://www.w3.org/2000/svg">
            <style jsx>{`
              .spinner {
                transform-origin: center;
                animation: spinner 1s infinite linear;
              }
              @keyframes spinner {
                100% {
                  transform: rotate(360deg);
                }
              }
              .circleAnimation {
                animation: circleAnimation 2s cubic-bezier(0.36, 0.6, 0.31, 1)
                  infinite;
              }
              .circleAnimation1 {
                animation-delay: -0.5s;
              }
              .circleAnimation2 {
                animation-delay: -1s;
              }
              .circleAnimation3 {
                animation-delay: -1.5s;
              }
              @keyframes circleAnimation {
                0% {
                  r: 0;
                }
                25% {
                  r: 3px;
                  cx: 4px;
                }
                50% {
                  r: 3px;
                  cx: 12px;
                }
                75% {
                  r: 3px;
                  cx: 20px;
                }
                100% {
                  r: 0;
                  cx: 20px;
                }
              }
            `}</style>
            <circle className="circleAnimation" cx="4" cy="12" r="3" />
            <circle
              className="circleAnimation circleAnimation1"
              cx="4"
              cy="12"
              r="3"
            />
            <circle
              className="circleAnimation circleAnimation2"
              cx="4"
              cy="12"
              r="3"
            />
            <circle
              className="circleAnimation circleAnimation3"
              cx="4"
              cy="12"
              r="3"
            />
          </svg>
        </div>
      )}
    </div>
  );
};

export default Register;
