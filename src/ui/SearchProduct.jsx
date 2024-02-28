import { CiSearch } from 'react-icons/ci';

function SearchProduct() {
  return (
    <form className="relative">
      <input
        type="text"
        placeholder="Search..."
        className="border-grey-7 bg-grey-1 placeholder:text-grey-7 focus:border-indigo-1 w-full  rounded-full border  px-4 py-2 text-sm transition-all  duration-200 focus:outline-none  focus:ring focus:ring-opacity-50 sm:w-64 sm:focus:w-72 lg:w-96 lg:focus:w-[420px] "
      ></input>
      <div className="right- absolute right-[10px] top-[11px] text-text-100">
        <CiSearch />
      </div>
    </form>
  );
}

export default SearchProduct;
