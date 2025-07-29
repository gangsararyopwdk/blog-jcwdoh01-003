import { ToastContainer } from "react-toastify";
import SignUpForm from "./components/SignUpForm";
import SignUpFormik from "./components/SignUpFormik";

const SignUpView = () => {
  return (
    <div className="w-full h-screen">
      <div className="w-full h-full flex items-center justify-center">
        <div className="w-full max-w-[300px]">
          <h1 className="text-4xl font-bold text-center mb-8 tracking-[0.5px]">
            Sign Up
          </h1>

          <SignUpFormik>
            <SignUpForm />
          </SignUpFormik>
        </div>
      </div>

      <ToastContainer />
    </div>
  );
};

export default SignUpView;
