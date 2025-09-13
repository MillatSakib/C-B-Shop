function Button({ itemStatus }) {
  if (itemStatus === "1") {
    return (
      <button className="w-full mt-2 bg-red-800 py-1 text-gray-100 rounded flex items-center justify-center">
        Remove from Cart
      </button>
    );
  } else if (itemStatus === "0") {
    return (
      <button className="disabled:bg-gray-700 disabled:text-gray-400 disabled:cursor-not-allowed w-full mt-2 bg-gray-800 py-1 text-gray-100 rounded flex items-center justify-center active:translate-y-1 transition-all active:bg-gray-900">
        Add to Cart
      </button>
    );
  } else if (itemStatus === "-1") {
    return (
      <button
        disabled
        className="disabled:bg-gray-700 disabled:text-gray-400 disabled:cursor-not-allowed disabled:bg-gray-700 disabled:text-gray-400 disabled:cursor-not-allowed w-full mt-2 bg-gray-800 py-1 text-gray-100 rounded flex items-center justify-center active:translate-y-1 transition-all active:bg-gray-900 active:translate-y-1 transition-all active:bg-gray-900"
      >
        Add to Cart
      </button>
    );
  } else {
    return (
      <button className="disabled:bg-gray-700 disabled:text-gray-400 disabled:cursor-not-allowed w-full mt-2 bg-gray-800 py-1 text-gray-100 rounded flex items-center justify-center active:translate-y-1 transition-all active:bg-gray-900">
        Add to Cart
      </button>
    );
  }
}

export default Button;
