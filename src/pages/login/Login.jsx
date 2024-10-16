import React from "react";
import { LEFTLOGIN, LOGO } from "../../assets/images";
import { InputBox } from "../../components";
import CustomButton from "../../components/CustomButton";

const Login = () => {
  return (
    // <div className="flex h-screen">
    //     <div className="w-1/2 flex flex-col justify-center p-8 h-screen">
    //         <h2 className="text-3xl font-bold mb-8">Login</h2>
    //         <form>
    //             <div className="mb-4">
    //                 <label htmlFor="email" className="block text-sm font-medium text-gray-700">
    //                     Email:
    //                 </label>
    //                 <input
    //                     type="email"
    //                     id="email"
    //                     name="email"
    //                     className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
    //                 />
    //             </div>
    //             <div className="mb-6">
    //                 <label htmlFor="password" className="block text-sm font-medium text-gray-700">
    //                     Password:
    //                 </label>
    //                 <input
    //                     type="password"
    //                     id="password"
    //                     name="password"
    //                     className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
    //                 />
    //             </div>
    //             <button
    //                 type="submit"
    //                 className="w-full px-4 py-2 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
    //             >
    //                 Login
    //             </button>
    //         </form>
    //     </div>
    //     <div className="w-1/2 h-screen flex justify-center items-center">
    //         <img
    //             src={LEFTLOGIN}
    //             alt="Login Illustration"
    //             className="max-w-full h-auto"
    //         />
    //     </div>
    // </div>
    <>
      <div className="flex max-h-screen">
        <div className="w-1/2 flex flex-col items-center justify-center px-30 gap-6">
          <img src={LOGO} alt="" className="h-12" loading="lazy" />
          <h1 className="text-4xl font-bold text-black">Welcome back!</h1>
          <p>
            Please input your information in the fields below to enter your
            Journey platform.{" "}
          </p>
          <InputBox
            label="Email"
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email"
            required
          />
          <InputBox
            label="Password"
            type="password"
            name="password"
            id="password"
            placeholder="Enter your password"
            required
          />
          <div className="flex justify-between w-full">
            <div>
              <input type="checkbox" name="" id="" />
            </div>
            <div>
              <h5 className="text-primary font-semibold">Forgot Password</h5>
            </div>
          </div>

          <CustomButton className="bg-primary text-white w-full">
            Login
          </CustomButton>
        </div>
        <div className="w-1/2">
          <img
            loading="lazy"
            src={LEFTLOGIN}
            className="max-h-screen w-screen object-cover"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default Login;
