import { useState } from 'react';
import { useLogin } from './useLogin';
import { useForm } from 'react-hook-form';
import { BiHide, BiShow } from 'react-icons/bi';
import LoadingSpinner from '../../ui/LoadingSpinner';

function LoginForm() {
  const [isToggle, setIsToggle] = useState(true);
  const { login, isPending } = useLogin();
  const {
    register,
    formState: { errors, isValid, touchedFields },
    handleSubmit,
  } = useForm({
    mode: 'onTouched', // Validate on change
  });

  function handleToggle() {
    setIsToggle((toggle) => !toggle);
  }

  function onSubmit({ email, password }) {
    login(
      { email, password },
      {
        onSettled: () => {
          // Reset input fields after successful login
        },
      }
    );
  }

  return (
    <form className="mb-4 mt-10" onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-5 flex flex-col gap-2 ">
        <label className="font-medium text-grey-6" htmlFor="email">
          Your Email
        </label>
        <input
          className={`input grow ${
            errors.email && touchedFields.email ? 'border-red-500' : ''
          }`}
          type="email"
          id="email"
          placeholder="email@site.com"
          disabled={isPending}
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
          type={isToggle ? 'password' : 'text'}
          id="password"
          placeholder="8+ characters required"
          disabled={isPending}
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
          onClick={handleToggle}
        >
          {isToggle ? (
            <BiHide color="var(--color-grey-600)" />
          ) : (
            <BiShow color="var(--color-grey-600)" />
          )}
        </div>
      </div>

      <button
        disabled={isPending || !isValid} // Disable button if form is not valid or submission is pending
        type="submit"
        className={`flex w-full items-center justify-center gap-2 rounded-full border border-brand-6 px-7 py-4 text-lg leading-none ${
          isPending || !isValid
            ? 'bg-brand-4 text-brand-0.5 cursor-not-allowed' // Disabled button styling
            : 'bg-brand-6 text-brand-0.5 hover:bg-brand-7'
        }`}
      >
        {isPending ? <LoadingSpinner /> : 'Login'}
      </button>
    </form>
  );
}

export default LoginForm;
