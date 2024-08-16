const QuantitySelector = ({ value, onChange }) => {
  const handleDecrease = () => {
    if (value > 1) {
      onChange(value - 1);
    }
  };

  const handleIncrease = () => {
    onChange(value + 1);
  };

  return (
    <div className="max-w-24 border border-grey-5 rounded-md">
      <div className="flex items-center justify-center">
        <button
          onClick={handleDecrease}
          className="px-3 py-2 text-grey-5 focus:outline-none"
        >
          -
        </button>
        <span className="w-10 px-2 py-2 text-center text-grey-5">{value}</span>
        <button
          onClick={handleIncrease}
          className="px-3 py-2 text-grey-5 focus:outline-none"
        >
          +
        </button>
      </div>
    </div>
  );
};

export default QuantitySelector;
