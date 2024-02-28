

function Navbar({ children }) {
  return (
    <nav className="bg-grey-0 text-grey-6 border-grey-1 sticky top-0 flex w-full items-center justify-between border-b p-4  ">
      {children}
    </nav>
  );
}

export default Navbar;
