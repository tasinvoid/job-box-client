import React, { useContext, useState } from "react";
import Lottie from "lottie-react";
import registerLottie from "./../../assets/Animation - 1749200088254.json";
import { AuthContext } from "../../Context/Auth/AuthContext";

const Register = () => {
  const [message, setMessage] = useState("");
  const { createUser } = useContext(AuthContext);
  function handleRegister(e) {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    createUser(email, password)
      .then((userCredential) => {
        setMessage("Successfully Registered");
        console.log(userCredential);
      })
      .catch((error) => {
        setMessage("Something Went Wrong");
        console.log(error);
      });
  }
  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse gap-40">
          <div className="text-center lg:text-left">
            <Lottie
              className="w-60"
              animationData={registerLottie}
              loop={true}
            ></Lottie>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              <form onSubmit={handleRegister}>
                <h1 className="text-5xl font-bold">Register now!</h1>
                <label className="label">Email</label>
                <input
                  type="email"
                  className="input"
                  placeholder="Email"
                  name="email"
                />
                <label className="label">Password</label>
                <input
                  type="password"
                  className="input"
                  placeholder="Password"
                  name="password"
                />
                <div>
                  <a className="link link-hover">Forgot password?</a>
                </div>
                <p
                  className={
                    message == "Successfully Registered"
                      ? "text-green-400 pt-3"
                      : "text-red-500 pt-3"
                  }
                >
                  {message}
                </p>
                <button className="btn btn-neutral mt-4">Register</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
