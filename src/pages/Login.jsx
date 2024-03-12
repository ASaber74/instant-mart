import { Link } from 'react-router-dom';
import Logo from '../ui/Logo';
import LoginForm from '../features/authentication/LoginForm';

function Login() {
  return (
    <section className="mt-10 flex items-center justify-center mx-3">
      <div className="mb-12 flex flex-col rounded-2xl bg-grey-0 p-8 ">
        <div className="flex flex-col items-center justify-center gap-2">
          <Logo />
          <h3 className="mt-8 text-2xl font-bold text-grey-6">Welcome back</h3>
          <p className=" text-grey-4">Login to manage your account.</p>
        </div>

        <LoginForm />

        <div className="mb-2 flex justify-center gap-2">
          <p className="font-light text-grey-6">Don't have an account yet?</p>
          <Link
            className="font-bold  text-brand-6 hover:underline"
            to="/signup"
          >
            Create New Account
          </Link>
        </div>
        <div className="flex justify-center gap-2">
          <p className="font-light text-grey-6">Having trouble?</p>
          <Link
            className="font-bold  text-brand-6 hover:underline"
            to="/contact"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Login;
