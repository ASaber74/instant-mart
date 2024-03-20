import { useState } from 'react';
import { useLogin } from './useLogin';
import { BiHide, BiShow } from 'react-icons/bi';

function LoginForm() {
  const [isToggle, setIsToggle] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login, isPending } = useLogin();

  function handleToggle() {
    setIsToggle((toggle) => !toggle);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!email || !password) return;

    login(
      { email, password },
      {
        onSettled: () => {
          setEmail('');
          setPassword('');
        },
      },
    );
  }
  return (
    <form className="mb-4 mt-10" onSubmit={handleSubmit}>
      <div className="mb-5 flex flex-col gap-2 ">
        <label className=" font-medium text-grey-6" label="email">
          Your Email
        </label>
        <input
          className="input grow"
          type="email"
          id="email"
          placeholder="email@site.com"
          onChange={(e) => setEmail(e.target.value)}
          disabled={isPending}
        />
      </div>

      <div className="relative mb-5 flex flex-col gap-2">
        <label className=" font-medium text-grey-6" label="password">
          Password
        </label>
        <input
          className="input  grow"
          type={isToggle ? 'password' : 'text'}
          id="password"
          placeholder="8+ characters required"
          onChange={(e) => setPassword(e.target.value)}
          disabled={isPending}
        />
        <div
          className="absolute right-2 top-12 cursor-pointer max-md:top-11"
          onClick={handleToggle}
        >
          {isToggle && <BiHide color="var(--color-grey-600)" />}
          {!isToggle && <BiShow color="var(--color-grey-600)" />}
        </div>
      </div>

      <button
        disabled={isPending}
        type="submit"
        className="flex w-full items-center justify-center gap-2 rounded-full border border-brand-6 bg-brand-6 px-7 py-4 text-lg leading-none text-brand-0.5 hover:bg-brand-7"
      >
        {isPending ? 'Submitting...' : 'Login'}
      </button>
    </form>
  );
}

export default LoginForm;
