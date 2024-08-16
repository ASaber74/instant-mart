import { CiSearch } from 'react-icons/ci';

function SearchProduct() {
  return (
    <form className="relative max-sm:mx-10 max-sm:flex-grow">
      <input
        type="text"
        placeholder="What are you looking for?"
        className="w-full rounded-full border border-grey-3 bg-grey-1  px-4 py-2 text-sm transition-all duration-200 placeholder:text-grey-5 focus:border-indigo-1  focus:outline-none focus:ring  focus:ring-opacity-50 max-md:text-[10px] sm:w-64 sm:focus:w-72 lg:w-96 lg:focus:w-[420px] "
      ></input>
      <div className="right- text-text-100 absolute right-[10px] top-[11px]">
        <CiSearch />
      </div>
    </form>
  );
}

export default SearchProduct;
