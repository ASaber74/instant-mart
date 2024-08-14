import useBooks from '../features/products/useBooks';
import UnderConstruction from '../ui/UnderConstruction';

function Products() {
  const { isLoading, books } = useBooks();

  console.log(isLoading, books);
  return <UnderConstruction />;
}

export default Products;

// import React from 'react';
// import useBooks from '../features/products/useBooks';

// function Products() {
//   const { isLoading, books } = useBooks();

//   if (isLoading) {
//     return <div>Loading...</div>;
//   }

//   if (!books || books.length === 0) {
//     return <div>No books available</div>;
//   }

//   return (
//     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
//       {books.map((book) => (
//         <div key={book._id} className="bg-white shadow-md rounded-lg overflow-hidden p-4 text-center">
//           <img src={book.imageCover} alt={book.name} className="w-full h-48 object-cover rounded-md mb-4" />
//           <h3 className="text-lg font-semibold mb-2">{book.name}</h3>
//           <p className="text-gray-600 mb-2">{book.author}</p>
//           <p className="text-blue-500 font-bold">${book.price}</p>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default Products;
