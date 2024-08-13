import { useState } from 'react';

const QuantitySelector = ({ onChange }) => {
  const [quantity, setQuantity] = useState(1);

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
      onChange(quantity - 1);
    }
  };

  const handleIncrease = () => {
    setQuantity((prev) => prev + 1);
    onChange(quantity + 1);
  };

  return (
    <>
      <div className="flex flex-col gap-1 max-w-24 ">
        <div className="flex items-center rounded-md border border-gray-300">
          <button onClick={handleDecrease} className="px-3 py-2 text-gray-700">
            -
          </button>
          <span className="px-3 py-2 text-center">{quantity}</span>
          <button onClick={handleIncrease} className="px-3 py-2 text-gray-700">
            +
          </button>
        </div>
      </div>
    </>
  );
};

export default QuantitySelector;
