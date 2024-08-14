import { Link } from 'react-router-dom';
import { useSignup } from '../authentication/useSignup';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { BiHide, BiShow } from 'react-icons/bi';
import LoadingSpinner from '../../ui/LoadingSpinner';

function SignupForm() {
  const [isToggleOne, setIsToggleOne] = useState(true);
  const [isToggleTwo, setIsToggleTwo] = useState(true);
  // eslint-disable-next-line no-unused-vars
  const { signup, isPending } = useSignup();
  const { register, formState, getValues, handleSubmit } = useForm();
  const { errors } = formState;

  function handleToggleOne() {
    setIsToggleOne((toggle) => !toggle);
  }
  function handleToggleTwo() {
    setIsToggleTwo((toggle) => !toggle);
  }

  function onSubmit({ name, email, password, confirmPassword }) {
    signup({
      name,
      email,
      password,
      confirmPassword,
    });
  }
  return (
    <form className="mb-4 mt-10" onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-5 flex flex-col gap-2 ">
        {errors?.fullName?.message}
        <label className=" font-medium text-grey-6" htmlFor="name">
          Full Name
        </label>
        <input
          className="input grow"
          type="text"
          id="name"
          placeholder="Your name"
          disabled={isPending}
          {...register('name', { required: 'This field is required' })}
        />
      </div>

      <div className="mb-5 flex flex-col gap-2 ">
        {errors?.email?.message}
        <label className=" font-medium text-grey-6" htmlFor="email">
          Email
        </label>
        <input
          className="input grow"
          type="email"
          id="email"
          disabled={isPending}
          placeholder="Your Email"
          {...register('email', {
            required: 'This field is required',
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: 'Please provide a valid email address',
            },
          })}
        />
      </div>

      <div className="relative mb-5 flex flex-col gap-2 ">
        {errors?.password?.message}
        <label className=" font-medium text-grey-6" label="password">
          Password
        </label>
        <input
          className="input grow"
          type={isToggleOne ? 'password' : 'text'}
          id="password"
          disabled={isPending}
          placeholder="8+ Characters Required"
          {...register('password', {
            required: 'This field is required',
            minLength: {
              value: 8,
              message: 'Password needs a minimum of 8 characters',
            },
          })}
        />
        <div
          className="absolute right-2 top-12 cursor-pointer max-md:top-11"
          onClick={handleToggleOne}
        >
          {isToggleOne && <BiHide color="var(--color-grey-600)" />}
          {!isToggleOne && <BiShow color="var(--color-grey-600)" />}
        </div>
      </div>

      <div className="relative mb-5 flex flex-col gap-2">
        {errors?.passwordConfirm?.message}
        <label className=" font-medium text-grey-6" label="confirmPassword">
          Confirm Password
        </label>
        <input
          className="input grow"
          type={isToggleTwo ? 'password' : 'text'}
          id="confirmPassword"
          disabled={isPending}
          placeholder="Confirm your password"
          {...register('confirmPassword', {
            validate: (value) =>
              value === getValues().password || 'Password need to match',
          })}
        />
        <div
          className="absolute right-2 top-12 cursor-pointer max-md:top-11"
          onClick={handleToggleTwo}
        >
          {isToggleTwo && <BiHide color="var(--color-grey-600)" />}
          {!isToggleTwo && <BiShow color="var(--color-grey-600)" />}
        </div>
      </div>

      <div className="mb-5 flex items-start">
        <div className="flex h-5 items-center">
          <input
            id="terms"
            aria-describedby="terms"
            type="checkbox"
            className="focus:ring-3 dark:focus:ring-primary-600 h-4 w-4 rounded border border-grey-3 bg-grey-1 focus:ring-indigo-1"
            required=""
          />
        </div>
        <div className="ml-3 text-sm">
          <label htmlFor="terms" className="font-light text-grey-6 ">
            I accept the{' '}
            <Link className="font-medium  text-brand-6 hover:underline" to="/">
              Terms and Conditions
            </Link>
          </label>
        </div>
      </div>

      <button
        type="submit"
        disabled={isPending}
        className="flex w-full items-center justify-center gap-2 rounded-full border border-brand-6 bg-brand-6 px-7 py-4 text-lg leading-none text-brand-0.5 hover:bg-brand-7"
      >
        {isPending ? (
          <LoadingSpinner />
        ) : (
          'Create Account'
        )}
      </button>
    </form>
  );
}

export default SignupForm;
