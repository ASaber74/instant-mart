function Navbar({ children }) {
  return (
    <nav className="max-container  z-90 sticky top-0 flex items-center justify-between text-grey-6">
      {children}
    </nav>
  );
}

export default Navbar;
