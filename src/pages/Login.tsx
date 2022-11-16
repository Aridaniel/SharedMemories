import { FC } from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import { trpc } from "../utils/trpc";
import Navbar from "../components/Navbar";


interface LoginProps {}

const Login: FC<LoginProps> = ({}) => {
  
  return (
    <>
      <div className= " justify-center p-100;">
        <div className="mb-35 flex items-center justify-center ">
          <input
            type="text"
            className=" block rounded border border-solid border-gray-300 bg-white bg-clip-padding px-4 py-2 text-xl font-normal text-gray-700 transition ease-in-out focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:outline-none"
            placeholder="Email address"
          />
        </div>
        {/*           <!-- Password input -->
         */}{" "}
        <div className=" flex items-center justify-center">
          <input
            type="password"
            className="form-control ; m-46 block rounded border border-solid border-gray-300 bg-white bg-clip-padding px-4 py-2 text-xl font-normal text-gray-700 transition ease-in-out focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:outline-none"
            placeholder="Password"
          />
        </div>
        <div className=" flex items-center justify-between">
          <div className="form-group form-check">
            <input
              type="checkbox"
              className="form-check-input float-left mt-1 mr-2 h-4 w-4 cursor-pointer appearance-none rounded-sm border border-gray-300 bg-white bg-contain bg-center bg-no-repeat align-top transition duration-200 checked:border-blue-600 checked:bg-blue-600 focus:outline-none"
              id="exampleCheck3"
              checked
            />
            <label className="form-check-label inline-block text-gray-800">
              Remember me
            </label>
          </div>
          <a
            href="#!"
            className="text-blue-600 transition duration-200 ease-in-out hover:text-blue-700 focus:text-blue-700 active:text-blue-800"
          >
            Forgot password?
          </a>
        </div>
        {/*           <!-- Submit button -->
         */}{" "}
        <button
          type="submit"
          className="  rounded bg-blue-600 px-7 py-3 text-sm font-medium uppercase leading-snug text-white shadow-md transition duration-150 ease-in-out hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg"
          data-mdb-ripple="true"
          data-mdb-ripple-color="light"
        >
          Sign in
        </button>
        
      </div>
    </>
    
  );
};

export default Login;

