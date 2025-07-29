import { ToastContainer } from "react-toastify";
import SignInForm from "./components/SignInForm";
import SignInFormik from "./components/SignInFormik";

const SignInView = () => {
  return (
    <div className="w-full h-screen">
      <div className="w-full h-full flex items-center justify-center">
        <div className="w-full max-w-[300px]">
          <h1 className="text-4xl font-bold text-center mb-8 tracking-[0.5px]">
            Sign In
          </h1>

          <SignInFormik>
            <SignInForm />
          </SignInFormik>
        </div>
      </div>

      <ToastContainer />
    </div>
  );
};

export default SignInView;
