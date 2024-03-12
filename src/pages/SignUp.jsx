import { Link } from 'react-router-dom';
import SignupForm from '../features/authentication/SignupForm';
import Logo from '../ui/Logo';

function SignUp() {
  return (
    <section className="mt-10  flex items-center justify-center mx-3">
      <div className="mb-12 flex flex-col rounded-2xl bg-grey-0 p-8">
        <div className="flex flex-col items-center justify-center gap-2">
          <Logo />
          <h3 className="mt-8 text-2xl font-bold text-grey-6">
            Create your InstantMart Account
          </h3>
          <p className=" text-grey-4">Fill out the form to get started</p>
        </div>

        <SignupForm />

        <div className="mb-2 flex justify-center gap-2">
          <p className="font-light text-grey-6">Already have an account?</p>
          <Link class="font-bold  text-brand-6 hover:underline" to="/login">
            Log in Here
          </Link>
        </div>

        <div className="flex justify-center gap-2">
          <p className="font-light text-grey-6">Having trouble?</p>
          <Link class="font-bold  text-brand-6 hover:underline" to="/contact">
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}

export default SignUp;
