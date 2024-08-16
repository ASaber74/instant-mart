import { Link } from 'react-router-dom';
import { useSignup } from '../authentication/useSignup';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { BiHide, BiShow } from 'react-icons/bi';
import LoadingSpinner from '../../ui/LoadingSpinner';

function SignupForm() {
  const [isToggleOne, setIsToggleOne] = useState(true);
  const [isToggleTwo, setIsToggleTwo] = useState(true);
  const { signup, isPending } = useSignup();
  const {
    register,
    formState: { errors, touchedFields, isValid },
    getValues,
    handleSubmit,
  } = useForm({
    mode: 'onTouched', // Enables validation on change
  });

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
      <div className="mb-5 flex flex-col gap-2">
        <label className="font-medium text-grey-6" htmlFor="name">
          Full Name
        </label>
        <input
          className={`input grow ${
            errors.name && touchedFields.name ? 'border-red-500' : ''
          }`}
          type="text"
          id="name"
          placeholder="Your name"
          disabled={isPending}
          {...register('name', { required: 'This field is required' })}
        />
        {errors.name && touchedFields.name && (
          <p className="text-red-500">{errors.name.message}</p>
        )}
      </div>

      <div className="mb-5 flex flex-col gap-2">
        <label className="font-medium text-grey-6" htmlFor="email">
          Email
        </label>
        <input
          className={`input grow ${
            errors.email && touchedFields.email ? 'border-red-500' : ''
          }`}
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
        {errors.email && touchedFields.email && (
          <p className="text-red-500">{errors.email.message}</p>
        )}
      </div>

      <div className="relative mb-5 flex flex-col gap-2">
        <label className="font-medium text-grey-6" htmlFor="password">
          Password
        </label>
        <input
          className={`input grow ${
            errors.password && touchedFields.password ? 'border-red-500' : ''
          }`}
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
        {errors.password && touchedFields.password && (
          <p className="text-red-500">{errors.password.message}</p>
        )}
        <div
          className="absolute right-2 top-12 cursor-pointer max-md:top-11"
          onClick={handleToggleOne}
        >
          {isToggleOne ? (
            <BiHide color="var(--color-grey-600)" />
          ) : (
            <BiShow color="var(--color-grey-600)" />
          )}
        </div>
      </div>

      <div className="relative mb-5 flex flex-col gap-2">
        <label className="font-medium text-grey-6" htmlFor="confirmPassword">
          Confirm Password
        </label>
        <input
          className={`input grow ${
            errors.confirmPassword && touchedFields.confirmPassword
              ? 'border-red-500'
              : ''
          }`}
          type={isToggleTwo ? 'password' : 'text'}
          id="confirmPassword"
          disabled={isPending}
          placeholder="Confirm your password"
          {...register('confirmPassword', {
            validate: (value) =>
              value === getValues().password || 'Passwords need to match',
          })}
        />
        {errors.confirmPassword && touchedFields.confirmPassword && (
          <p className="text-red-500">{errors.confirmPassword.message}</p>
        )}
        <div
          className="absolute right-2 top-12 cursor-pointer max-md:top-11"
          onClick={handleToggleTwo}
        >
          {isToggleTwo ? (
            <BiHide color="var(--color-grey-600)" />
          ) : (
            <BiShow color="var(--color-grey-600)" />
          )}
        </div>
      </div>

      <div className="mb-5 flex items-start">
        <div className="flex h-5 items-center">
          <input
            id="terms"
            aria-describedby="terms"
            type="checkbox"
            className="focus:ring-3 dark:focus:ring-primary-600 h-4 w-4 rounded border border-grey-3 bg-grey-1 focus:ring-indigo-1 cursor-pointer"
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
        disabled={isPending || !isValid} // Disable the button if the form is not valid
        className={`flex w-full items-center justify-center gap-2 rounded-full border border-brand-6 px-7 py-4 text-lg leading-none ${
          isPending || !isValid
            ? 'bg-brand-4 text-brand-0.5 cursor-not-allowed' // Disabled button styling
            : 'bg-brand-6 text-brand-0.5 hover:bg-brand-7'
        }`}
      >
        {isPending ? <LoadingSpinner /> : 'Create Account'}
      </button>
    </form>
  );
}

export default SignupForm;
